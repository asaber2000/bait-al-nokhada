import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Maximize2,
  PhoneCall,
  Boxes,
  ShieldCheck,
  Award,
  Clock,
  Layers,
  FileText
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightboxAr from "@/components-ar/components/ProductGalleryLightbox";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const localSlugs = (productsDatabase || []).map((item) => ({ slug: item.slug }));
    const query = `*[_type in ["product", "productAr", "productsAr"] && defined(slug.current)]{ "slug": slug.current }`;
    const sanitySlugs = await client.fetch(query).catch(() => []);

    const combined = [
      ...localSlugs,
      ...(sanitySlugs || []).map((item: any) => ({ slug: item.slug }))
    ];

    const uniqueSlugs = Array.from(new Set(combined.map((item) => item.slug)))
      .filter(Boolean)
      .map((slug) => ({ slug }));

    return uniqueSlugs;
  } catch (error) {
    return (productsDatabase || []).map((item) => ({ slug: item.slug }));
  }
}

async function getSanityProductBySlug(slug: string) {
  try {
    const query = `*[_type in ["product", "productAr", "productsAr"] && slug.current == $slug][0]{
      titleAr,
      summaryAr,
      topBadges,
      "slug": slug.current,
      _createdAt,
      _updatedAt,
      seo{
        metaTitle,
        metaDescription,
        focusKeywords,
        canonicalUrl
      },
      "catalogImage": catalogImage.asset->url,
      "coverImage": coverImage.asset->url,
      overviewTitleAr,
      overviewDescAr,
      engineeredAdvantages,
      availableProfiles,
      engineeringDataSheet {
        mainFrame,
        steelComponents,
        windLoad,
        operatingTemp,
        fabricFire,
        roofCovering,
        wallOptions,
        standardSpans
      },
      "productGallery": productGallery[]{
        "url": asset->url
      }
    }`;
    return await client.fetch(query, { slug }, { cache: 'no-store' });
  } catch (error) {
    return null;
  }
}

const BASE_URL = "https://baitalnokhada.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sanityProduct = await getSanityProductBySlug(slug);
  const localMatch = productsDatabase.find((p) => p.slug === slug);
  const activeAr = (localMatch as any)?.ar || localMatch;

  const name =
    sanityProduct?.titleAr || activeAr?.name || "خيام وهياكل معمارية";
  const rawDesc =
    sanityProduct?.seo?.metaDescription ||
    (localMatch as any)?.seo?.metaDescription ||
    sanityProduct?.summaryAr ||
    activeAr?.tagline ||
    `تصنيع وتوريد وتأجير ${name} في الإمارات والسعودية ودول الخليج من مصنع بيت النوخذة للخيام.`;

  const metaTitle =
    sanityProduct?.seo?.metaTitle ||
    (localMatch as any)?.seo?.metaTitle ||
    `${name} | تصنيع وتوريد وتأجير في الإمارات والسعودية | بيت النوخذة`;
  const metaDescription =
    rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;

  const canonicalUrl = `${BASE_URL}/ar/products/${slug}/`;
  const enUrl = `${BASE_URL}/products/${slug}/`;
  const ogImage =
    sanityProduct?.coverImage ||
    sanityProduct?.catalogImage ||
    localMatch?.heroImage ||
    (localMatch as any)?.catalogImage ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp";

  const keywords: string[] = Array.isArray(sanityProduct?.seo?.focusKeywords)
    ? sanityProduct.seo.focusKeywords
    : Array.isArray((localMatch as any)?.seo?.focusKeywords)
      ? (localMatch as any).seo.focusKeywords
      : [
        name,
        `تصنيع ${name}`,
        `تأجير ${name}`,
        `${name} الإمارات`,
        `${name} دبي`,
        `${name} السعودية`,
        "بيت النوخذة للخيام",
      ];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-AE": enUrl,
        "ar-AE": canonicalUrl,
        "x-default": enUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_AE",
      alternateLocale: ["en_AE"],
      url: canonicalUrl,
      siteName: "مصنع بيت النوخذة للخيام",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} - بيت النوخذة للخيام`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

const generateProductGraphSchema = (
  product: any,
  arData: any,
  sanityProduct: any,
  localMatch: any,
  galleryImages: string[]
) => {
  const slug = product?.slug || "";
  const currentUrl = `${BASE_URL}/ar/products/${slug}/`;
  const primaryImage =
    product?.heroImage ||
    product?.catalogImage ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${BASE_URL}/#place`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: "24.93410630",
          longitude: "55.06500100",
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=24.93410630,55.06500100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Land No. TP 010102 - Technopark",
          addressLocality: "Mina Jebel Ali",
          addressRegion: "National Industries Park - Dubai",
          postalCode: "Dubai",
          addressCountry: "AE",
        },
      },
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BASE_URL}/#organization`,
        name: "بيت النوخذة للخيام",
        legalName: "Bait Al Nokhada Tents & Fabric Structures LLC",
        url: `${BASE_URL}/ar/`,
        email: "info@baitalnokhada.com",
        telephone: "+971558850631",
        foundingDate: "1997",
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/bait-alnokhada-final-g.svg`,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971558850631",
            contactType: "customer support",
            areaServed: ["AE", "SA", "GCC", "Worldwide"],
            availableLanguage: ["Arabic", "English"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+97143444091",
            contactType: "customer support",
            areaServed: ["AE", "SA", "GCC", "Worldwide"],
            availableLanguage: ["Arabic", "English"],
          },
        ],
        areaServed: [
          { "@type": "Country", name: "الإمارات العربية المتحدة" },
          { "@type": "Country", name: "المملكة العربية السعودية" },
          { "@type": "AdministrativeArea", name: "GCC" },
          { "@type": "Place", name: "Worldwide" },
        ],
        location: { "@id": `${BASE_URL}/#place` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/ar/#website`,
        url: `${BASE_URL}/ar/`,
        name: "مصنع بيت النوخذة للخيام",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "ar-AE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: `${BASE_URL}/ar/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المنتجات",
            item: `${BASE_URL}/ar/products/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: (localMatch as any)?.seo?.breadcrumbTitle || arData?.name,
            item: currentUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        url: currentUrl,
        name: `${arData?.name || "خيام بيت النوخذة"} | مصنع بيت النوخذة للخيام`,
        description: arData?.tagline || "",
        datePublished: sanityProduct?._createdAt || "2021-07-19T18:06:30+04:00",
        dateModified: sanityProduct?._updatedAt || "2026-11-16T09:43:00+04:00",
        breadcrumb: { "@id": `${currentUrl}#breadcrumb` },
        isPartOf: { "@id": `${BASE_URL}/ar/#website` },
        about: { "@id": `${currentUrl}#product` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: primaryImage,
        },
        inLanguage: "ar-AE",
      },
      {
        "@type": "Product",
        "@id": `${currentUrl}#product`,
        name: arData?.name || "خيام بيت النوخذة",
        description: arData?.description || arData?.tagline || "",
        image: [primaryImage, ...galleryImages].slice(0, 5),
        category: arData?.badge || "خيام وهياكل معمارية",
        brand: {
          "@type": "Brand",
          name: "بيت النوخذة",
        },
        manufacturer: { "@id": `${BASE_URL}/#organization` },
        additionalProperty: (arData?.specs || []).map(
          (spec: { label: string; value: string }) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })
        ),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/ar/contact-us/`,
          seller: { "@id": `${BASE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "الإمارات العربية المتحدة" },
            { "@type": "Country", name: "المملكة العربية السعودية" },
            { "@type": "AdministrativeArea", name: "GCC" },
            { "@type": "Place", name: "Worldwide" },
          ],
        },
        mainEntityOfPage: { "@id": `${currentUrl}#webpage` },
      },
    ],
  };
};

export default async function ArabicProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let sanityProduct = null;
  try {
    sanityProduct = await getSanityProductBySlug(slug);
  } catch (e) {
    sanityProduct = null;
  }

  const localMatch = productsDatabase.find((p) => p.slug === slug);
  const fallbackProduct = productsDatabase[0] || {};
  const activeProduct = localMatch || fallbackProduct;
  const activeAr = activeProduct?.ar || activeProduct;

  let product: any = null;
  let arData: any = null;

  if (sanityProduct) {
    product = {
      slug: sanityProduct.slug || slug,
      catalogImage: sanityProduct.catalogImage || activeProduct?.catalogImage || sanityProduct.coverImage || activeProduct?.heroImage,
      heroImage: sanityProduct.coverImage || activeProduct?.heroImage || sanityProduct.catalogImage || activeProduct?.catalogImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    };
    arData = {
      name: sanityProduct.titleAr || activeAr?.name || "منتج مخصص",
      badge: sanityProduct.topBadges?.[0] || activeAr?.badge || "DIN 4102 B1",
      tagline: sanityProduct.summaryAr || activeAr?.tagline || "حلول خيام معمارية مبتكرة.",
      overviewTitle: sanityProduct.overviewTitleAr || activeAr?.overviewTitle || "التصميم الإنشائي ومعايير جودة المواد",
      description: sanityProduct.overviewDescAr || sanityProduct.summaryAr || activeAr?.description || "",
      features: sanityProduct.engineeredAdvantages || activeAr?.features || ["معايير ألمانية معتمدة", "مقاومة عالية للرياح"],
      models: sanityProduct.availableProfiles?.length > 0
        ? sanityProduct.availableProfiles.map((prof: any) => ({
          name: prof.sizeName || "طراز قياسي",
          size: prof.dimensions || "مواصفات خاصة",
          capacity: prof.capacity || "حسب الطلب"
        }))
        : activeAr?.models || [{ name: "موديل أساسي", size: "مقاس قياسي", capacity: "متعدد الاستخدام" }],
      specs: [
        { label: "الهيكل الإنشائي الرئيسي", value: sanityProduct.engineeringDataSheet?.mainFrame || activeAr?.specs?.[0]?.value || "ألومنيوم فضاء معالج 6061/T6" },
        { label: "المكونات الفولاذية", value: sanityProduct.engineeringDataSheet?.steelComponents || activeAr?.specs?.[1]?.value || "صلب مجلفن على الساخن" },
        { label: "مقاومة الرياح القصوى", value: sanityProduct.engineeringDataSheet?.windLoad || activeAr?.specs?.[2]?.value || "120 كم/ساعة" },
        { label: "درجات الحرارة التشغيلية", value: sanityProduct.engineeringDataSheet?.operatingTemp || activeAr?.specs?.[3]?.value || "-30°C إلى +70°C" },
        { label: "معايير مقاومة الحريق", value: sanityProduct.engineeringDataSheet?.fabricFire || activeAr?.specs?.[4]?.value || "DIN 4102 B1, M2" },
        { label: "غطاء السقف والغشاء", value: sanityProduct.engineeringDataSheet?.roofCovering || activeAr?.specs?.[5]?.value || "بي في سي عالي الكثافة معتم/شبه شفاف" },
        { label: "خيارات الجدران الجانبية", value: sanityProduct.engineeringDataSheet?.wallOptions || activeAr?.specs?.[6]?.value || "زجاج مقسى، ساندويتش بانل، ABS" },
        { label: "البحور القياسية المتاحة", value: sanityProduct.engineeringDataSheet?.standardSpans || activeAr?.specs?.[7]?.value || "من 10م حتى 60م بحر مفتوح" }
      ]
    };
  } else {
    product = activeProduct;
    arData = activeAr;
  }

  if (!product || !arData) {
    product = productsDatabase[0] || {};
    arData = product?.ar || product || {};
  }

  const galleryImages: string[] = sanityProduct?.productGallery?.length > 0
    ? sanityProduct.productGallery.map((img: any) => img.url).filter(Boolean)
    : (activeProduct?.gallery && activeProduct.gallery.length > 0)
      ? activeProduct.gallery
      : [
        product?.catalogImage || "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      ];

  const schemaData = generateProductGraphSchema(
    product,
    arData,
    sanityProduct,
    localMatch,
    galleryImages
  );

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* Grand Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7] text-right">
        {/* خلفية الهيرو الباهتة */}
        <div className="absolute inset-0 z-0">
          <Image
            src={product?.heroImage || product?.catalogImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
            alt={arData?.name || "خيام بيت النوخذة"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="site-container max-w-7xl mx-auto w-full relative z-10">
          <Link
            href="/ar/products"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#df9d17] hover:text-black transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى كتالوج المنتجات بالكامل</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* جهة النصوص والأزرار */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{arData?.badge || "DIN 4102 B1"}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
                {arData?.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {arData?.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/ar/contact-us"
                  className="px-7 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
                >
                  <span>طلب عرض سعر</span>
                  <Send className="w-4 h-4 rotate-180" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>اتصال مباشر بالفريق</span>
                </a>
              </div>
            </div>

            {/* بطاقة صورة المنتج بالهيرو الداخلي */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={product?.heroImage || product?.catalogImage || activeProduct?.heroImage || activeProduct?.catalogImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                  alt={arData?.name || "خيام بيت النوخذة"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/95 font-sans tracking-wider text-[11px] bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-sm">
                    بيت النوخذة
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Features Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 font-sans text-right bg-[#FDFCF7]" dir="rtl">
        <div className="site-container max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                  جودة تصنيع وخبرة معتمدة
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-[1.2]">
                  {arData?.overviewTitle || "لماذا تتصدر منتجاتنا السوق الإقليمي"}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {arData?.description}
                </p>
              </div>

              {/* شبكة كروت المميزات الثنائية */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {arData?.features?.map((feat: any, idx: number) => {
                  const title = typeof feat === "string"
                    ? (feat.includes(" - ") ? feat.split(" - ")[0] : feat)
                    : (feat.title || feat);

                  const desc = typeof feat === "string"
                    ? (feat.includes(" - ") ? feat.split(" - ")[1] : "")
                    : (feat.desc || feat.description || "");

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#df9d17]/50 transition-all space-y-2 flex flex-col justify-start"
                    >
                      <h3 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0" />
                        <span className="leading-snug">{title}</span>
                      </h3>
                      {desc && (
                        <p className="text-xs text-slate-600 font-normal leading-relaxed pr-6">
                          {desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* كرت المقاسات المعتمدة والأبعاد */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold tracking-wider text-[#df9d17] flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 shrink-0" />
                  <span>المقاسات والأبعاد المعتمدة</span>
                </h3>
                <div className="space-y-2">
                  {arData?.models?.map((mod: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-2 bg-[#FDFCF7] border-slate-200/70 text-slate-600"
                    >
                      <div>
                        <strong className="block text-sm font-bold text-[#0B1220]">
                          {mod.name}
                        </strong>
                        {mod.size && (
                          <span className="text-xs text-[#df9d17] font-semibold">{mod.size}</span>
                        )}
                      </div>
                      {mod.capacity && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/80 shadow-xs shrink-0">
                          {mod.capacity}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* المواصفات الفنية الهندسية - شبكة متراصة ملمومة */}
          <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 space-y-5 shadow-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Boxes className="w-4 h-4 text-[#df9d17] shrink-0" />
              <span>المواصفات الفنية الهندسية</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {arData?.specs?.map((spec: any, idx: number) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 flex flex-col justify-between gap-1.5"
                >
                  <span className="text-[11px] font-semibold tracking-wider text-slate-500">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0B1220] leading-snug">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. المعرض التفاعلي مع نافذة التكبير الكبرى */}
      <ProductGalleryLightboxAr
        images={galleryImages || []}
        productName={arData?.name || "الخيام"}
      />

      {/* 4. Technical RFQ Call to Action */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-5 shadow-xs">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              استشارة هندسية وعرض سعر مباشر من المصنع
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
              هل تخطط لتنفيذ مشروع أو فعالية بمواصفات هندسية خاصة؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              تواصل مباشرة مع خبرائنا للحصول على دراسة للموقع، ومخططات تصميم مخصصة، وعروض أسعار تنافسية مباشرة من مصنعنا.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/ar/contact-us"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>طلب استشارة هندسية ودراسة سعر</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}