import type { MetadataRoute } from "next";
import { client } from "@/app/lib/sanity";
import { solutionsDatabase } from "@/app/data/solutions.En";
import { articlesDatabase } from "@/app/data/articlesEn";
import { articlesArDatabase } from "@/app/data/articlesAr";

const BASE_URL = "https://baitalnokhada.com";

export const revalidate = 3600; // تحديث تلقائي للسايت ماب كل ساعة

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. الصفحات الثابتة الأساسية (إنجليزي وعربي) بمساراتها النهائية مع Trailing Slash
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/ar/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ar/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solutions/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ar/solutions/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ar/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/ar/projects/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/news/`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE_URL}/ar/news/`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE_URL}/contact-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ar/contact-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/ar/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/ar/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  // 2. مسارات المنتجات المعتمدة (إنجليزي وعربي)
  const productSlugs = [
    "arabic-majlis-tent",
    "arch-tent",
    "capsule-tent",
    "dome-tent",
    "double-decker-tent",
    "geodesic-tent",
    "panoramic-tent",
    "polygon-tent",
    "pyramid-dome-tent",
    "pyramid-tent",
    "revolution-tent",
    "wave-tent",
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.flatMap((slug) => [
    { url: `${BASE_URL}/products/${slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ar/products/${slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ]);

  // 3. مسارات المشاريع المعتمدة (إنجليزي وعربي)
  const projectSlugs = [
    "gitex-global-2025",
    "DRIFTx-Event-2026",
    "Amaal-sales-gallery",
    "gulfood-dubai-2026",
    "netflix-stranger-things-experience",
    "dubai-airshow-2025",
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.flatMap((slug) => [
    { url: `${BASE_URL}/projects/${slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ar/projects/${slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ]);

  // 4. سحب الحلول والمقالات ديناميكياً من Sanity مع دمج الداتا المحلية بدون تكرار
  let sanitySolutionsEn: { slug: string; _updatedAt?: string; catalogImage?: string; coverImage?: string }[] = [];
  let sanitySolutionsAr: { slug: string; _updatedAt?: string; catalogImage?: string; coverImage?: string }[] = [];
  let sanityArticlesEn: { slug: string; _updatedAt?: string; coverImage?: string }[] = [];
  let sanityArticlesAr: { slug: string; _updatedAt?: string; coverImage?: string }[] = [];

  try {
    const data = await client.fetch(
      `{
        "solutionsEn": *[_type == "solutionEn" && defined(slug.current)]{
          "slug": slug.current,
          _updatedAt,
          "catalogImage": catalogImage.asset->url,
          "coverImage": coverImage.asset->url
        },
        "solutionsAr": *[_type in ["solutionAr", "solution"] && defined(slug.current)]{
          "slug": slug.current,
          _updatedAt,
          "catalogImage": catalogImage.asset->url,
          "coverImage": coverImage.asset->url
        },
        "articlesEn": *[_type == "articleEnglish" && defined(slug.current) && seo.robots.noIndex != true]{
          "slug": slug.current,
          _updatedAt,
          "coverImage": mainImage.asset->url
        },
        "articlesAr": *[_type == "article" && defined(slug.current) && seo.robots.noIndex != true]{
          "slug": slug.current,
          _updatedAt,
          "coverImage": mainImage.asset->url
        }
      }`,
      {},
      { next: { revalidate: 3600 } }
    );

    sanitySolutionsEn = data?.solutionsEn || [];
    sanitySolutionsAr = data?.solutionsAr || [];
    sanityArticlesEn = data?.articlesEn || [];
    sanityArticlesAr = data?.articlesAr || [];
  } catch (error) {
    console.error("Sitemap Sanity fetch fallback:", error);
  }

  // توحيد Slugs الحلول بصيغة المفرد المعتمدة (-tent) مع الصور
  const normalizeSolSlug = (s: string) => s.trim().toLowerCase().replace(/-tents$/, "-tent");

  const enSolutionMap = new Map<string, { updated: Date; images: string[] }>();
  solutionsDatabase.forEach((s) => {
    const slug = normalizeSolSlug(s.slug);
    const imgs = [s.catalogImage, s.heroImage].filter((u): u is string => Boolean(u));
    enSolutionMap.set(slug, { updated: now, images: imgs });
  });
  sanitySolutionsEn.forEach((s) => {
    const slug = normalizeSolSlug(s.slug);
    const existing = enSolutionMap.get(slug);
    const sanityImgs = [s.catalogImage, s.coverImage].filter((u): u is string => Boolean(u));
    enSolutionMap.set(slug, {
      updated: s._updatedAt ? new Date(s._updatedAt) : now,
      images: sanityImgs.length > 0 ? sanityImgs : existing?.images || [],
    });
  });

  const arSolutionMap = new Map<string, { updated: Date; images: string[] }>();
  solutionsDatabase.forEach((s) => {
    const slug = normalizeSolSlug(s.slug);
    const imgs = [s.catalogImage, s.heroImage].filter((u): u is string => Boolean(u));
    arSolutionMap.set(slug, { updated: now, images: imgs });
  });
  sanitySolutionsAr.forEach((s) => {
    const slug = normalizeSolSlug(s.slug);
    const existing = arSolutionMap.get(slug);
    const sanityImgs = [s.catalogImage, s.coverImage].filter((u): u is string => Boolean(u));
    arSolutionMap.set(slug, {
      updated: s._updatedAt ? new Date(s._updatedAt) : now,
      images: sanityImgs.length > 0 ? sanityImgs : existing?.images || [],
    });
  });

  const solutionRoutes: MetadataRoute.Sitemap = [
    ...Array.from(enSolutionMap.entries()).map(([slug, info]) => ({
      url: `${BASE_URL}/solutions/${slug}/`,
      lastModified: info.updated,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      ...(info.images.length > 0 ? { images: info.images } : {}),
    })),
    ...Array.from(arSolutionMap.entries()).map(([slug, info]) => ({
      url: `${BASE_URL}/ar/solutions/${slug}/`,
      lastModified: info.updated,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      ...(info.images.length > 0 ? { images: info.images } : {}),
    })),
  ];

  // 5. دمج المقالات الإنجليزية (Sanity + المحلي) مع الصور بدون تكرار
  const enArticleMap = new Map<string, { updated: Date; images: string[] }>();
  articlesDatabase.forEach((a: any) => {
    const imgs = [a.image || a.coverImage].filter((u): u is string => Boolean(u));
    enArticleMap.set(a.slug.trim(), { updated: now, images: imgs });
  });
  sanityArticlesEn.forEach((a) => {
    const existing = enArticleMap.get(a.slug.trim());
    const imgs = a.coverImage ? [a.coverImage] : existing?.images || [];
    enArticleMap.set(a.slug.trim(), {
      updated: a._updatedAt ? new Date(a._updatedAt) : now,
      images: imgs,
    });
  });

  // 6. دمج المقالات العربية (Sanity + المحلي) مع الصور بدون تكرار
  const arArticleMap = new Map<string, { updated: Date; images: string[] }>();
  articlesArDatabase.forEach((a: any) => {
    const imgs = [a.image || a.coverImage].filter((u): u is string => Boolean(u));
    arArticleMap.set(a.slug.trim(), { updated: now, images: imgs });
  });
  sanityArticlesAr.forEach((a) => {
    const existing = arArticleMap.get(a.slug.trim());
    const imgs = a.coverImage ? [a.coverImage] : existing?.images || [];
    arArticleMap.set(a.slug.trim(), {
      updated: a._updatedAt ? new Date(a._updatedAt) : now,
      images: imgs,
    });
  });

  const articleRoutes: MetadataRoute.Sitemap = [
    ...Array.from(enArticleMap.entries()).map(([slug, info]) => ({
      url: `${BASE_URL}/news/${slug}/`,
      lastModified: info.updated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      ...(info.images.length > 0 ? { images: info.images } : {}),
    })),
    ...Array.from(arArticleMap.entries()).map(([slug, info]) => ({
      url: `${BASE_URL}/ar/news/${slug}/`,
      lastModified: info.updated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      ...(info.images.length > 0 ? { images: info.images } : {}),
    })),
  ];

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];
}