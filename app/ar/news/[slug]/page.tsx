import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  BookOpen,
  CheckCircle2,
  Send,
  Sparkles,
  Tag
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { articlesArDatabase } from "@/app/data/articlesAr";
import { client } from "@/app/lib/sanity";
import ArticleFaqAccordionAr from "@/components-ar/components/ArticleFaqAccordionAr";

export const revalidate = 60; // سرعة فورية مع كاش ذكي

async function getArabicArticleData(slug: string) {
  try {
    const query = `*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      titleAr,
      descAr,
      categoryAr,
      tags,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      tocAr,
      contentSectionsAr[]{
        id,
        heading,
        body[]{
          ...,
          _type == "inlineImage" => {
            "url": asset->url,
            alt,
            caption
          }
        },
        points,
        "sectionImageUrl": sectionImage.asset->url,
        "sectionImageAlt": sectionImage.alt,
        sectionButton
      },
      faqsAr[]{question, answer},
      seo {
        metaTitle,
        metaDescription,
        breadcrumbTitle,
        canonicalUrl,
        robots {
          noIndex,
          noFollow
        }
      }
    }`;

    const sanityData = await client.fetch(query, { slug }, { next: { revalidate: 60 } });

    if (sanityData) {
      return {
        title: sanityData.titleAr,
        desc: sanityData.descAr,
        heroImage: sanityData.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        heroImageAlt: sanityData.imageAlt || sanityData.titleAr,
        category: sanityData.categoryAr || "رؤى صناعية",
        tags: sanityData.tags || [],
        date: new Date(sanityData._createdAt || Date.now()).toLocaleDateString('ar-AE', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        readTime: "5 دقائق قراءة",
        author: "فريق التحرير الهندسي - بيت النوخذة",
        contentSections: (sanityData.contentSectionsAr || []).map((sec: any, idx: number) => ({
          id: sec.id || `section-${idx}`,
          heading: sec.heading || "",
          bodyText: Array.isArray(sec.body)
            ? sec.body
                .filter((b: any) => b._type === 'block')
                .map((b: any) => b.children?.map((c: any) => c.text).join('')).join('\n\n')
            : (sec.body || ""),
          inlineCtas: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'inlineCta') : [],
          inlineImages: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'inlineImage') : [],
          points: sec.points || [],
          sectionImageUrl: sec.sectionImageUrl || null,
          sectionImageAlt: sec.sectionImageAlt || sec.heading,
          sectionButton: sec.sectionButton || null
        })),
        faqs: (sanityData.faqsAr || []).map((f: any) => ({ q: f.question, a: f.answer })),
        toc: sanityData.tocAr && sanityData.tocAr.length > 0
          ? sanityData.tocAr.map((t: any) => ({ id: t.id || "overview", label: t.label || "قسم" }))
          : [{ id: "overview", label: "نظرة عامة" }],
        seo: sanityData.seo || null
      };
    }
  } catch (error) {
    console.error("Error fetching Arabic article from Sanity:", error);
  }

  // Fallback للمحلي
  const cleanSlug = slug.toLowerCase().trim();
  const localMatch = articlesArDatabase.find((a) => a.slug.toLowerCase().trim() === cleanSlug);

  if (localMatch) {
    return {
      title: localMatch.ar.title,
      desc: localMatch.ar.desc,
      heroImage: localMatch.heroImage,
      heroImageAlt: localMatch.ar.title,
      category: localMatch.ar.category || "رؤى صناعية",
      tags: [],
      date: localMatch.ar.date,
      readTime: localMatch.ar.readTime,
      author: localMatch.ar.author || "فريق التحرير الهندسي - بيت النوخذة",
      contentSections: localMatch.ar.contentSections || [],
      faqs: localMatch.ar.faqs || [],
      toc: localMatch.ar.toc || [{ id: "overview", label: "نظرة عامة" }],
      seo: null
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArabicArticleData(slug);

  if (!article) {
    return { title: "المقال غير موجود | بيت النوخذة" };
  }

  const metaTitle = article.seo?.metaTitle || `${article.title} | بيت النوخذة للخيام`;
  const metaDescription = article.seo?.metaDescription || article.desc?.slice(0, 160) || "مقالات ودراسات هندسية متخصصة في صناعة وتأجير الخيام من بيت النوخذة.";
  const canonicalUrl = article.seo?.canonicalUrl || `https://baitalnokhada.com/ar/news/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !article.seo?.robots?.noIndex,
      follow: !article.seo?.robots?.noFollow,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      images: [{ url: article.heroImage }],
    },
  };
}

export default async function ArabicArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArabicArticleData(slug);

  if (!article) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between font-sans text-right">
        <Navbar />
        <div className="text-center space-y-4 py-44">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">المقال غير موجود</h1>
          <Link href="/ar/news" className="text-[#df9d17] hover:underline font-bold">العودة لكافة الأخبار والمقالات</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentUrl = `https://baitalnokhada.com/ar/news/${slug}`;

  // حقن السكيما المزدوجة المتطابقة مع RankMath
  const articleSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${currentUrl}#article`,
        "headline": article.seo?.metaTitle || article.title,
        "description": article.seo?.metaDescription || article.desc,
        "image": [article.heroImage],
        "datePublished": article.date,
        "inLanguage": "ar",
        "mainEntityOfPage": currentUrl,
        "publisher": {
          "@type": "Organization",
          "name": "مصنع بيت النوخذة للخيام والمظلات",
          "url": "https://baitalnokhada.com",
          "logo": "https://baitalnokhada.com/icons/bait-al-nokhada-final-arabic-logo.svg"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://baitalnokhada.com/ar"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "الأخبار والمقالات",
            "item": "https://baitalnokhada.com/ar/news"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.seo?.breadcrumbTitle || article.title,
            "item": currentUrl
          }
        ]
      }
    ]
  };

  if (article.faqs && article.faqs.length > 0) {
    articleSchema["@graph"].push({
      "@type": "FAQPage",
      "@id": `${currentUrl}#faq`,
      "mainEntity": article.faqs.map((f: any) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    });
  }

  const contentSections = article.contentSections || [];
  const tocList = article.toc || [];

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt || article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-right">
          <Link
            href="/ar/news"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لكافة الأخبار والمقالات</span>
          </Link>

          <div className="space-y-4">
            {article.category && (
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                {article.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-200/80 justify-start">
              {article.author && (
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#df9d17]" />
                  {article.author}
                </span>
              )}
              {article.date && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                    {article.date}
                  </span>
                </>
              )}
              {article.readTime && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#df9d17]" />
                    {article.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">

          <div className="lg:col-span-8 space-y-12">
            {article.desc && (
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal border-r-2 border-[#df9d17] pr-4 italic">
                {article.desc}
              </p>
            )}

            <div className="space-y-14">
              {contentSections.map((section: any, sIdx: number) => (
                <div key={section.id || sIdx} id={section.id} className="space-y-6 scroll-mt-28">
                  {section.heading && (
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading">
                      {section.heading}
                    </h2>
                  )}

                  {section.bodyText && (
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed whitespace-pre-line">
                      {section.bodyText}
                    </p>
                  )}

                  {/* صور داخل النص */}
                  {section.inlineImages && section.inlineImages.map((img: any, iIdx: number) => (
                    <figure key={iIdx} className="my-6 space-y-2">
                      <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <Image
                          src={img.url}
                          alt={img.alt || "صورة توضيحية"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="text-xs text-center text-slate-500 italic">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}

                  {/* أزرار CTA بين الفقرات */}
                  {section.inlineCtas && section.inlineCtas.map((cta: any, cIdx: number) => (
                    <div key={cIdx} className="py-3 flex justify-center">
                      <Link
                        href={cta.btnUrl || "/ar/contact"}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#df9d17]/25 hover:scale-105 cursor-pointer"
                      >
                        <Send className="w-4 h-4 rotate-180" />
                        <span>{cta.btnText || "احصل على عرض سعر"}</span>
                      </Link>
                    </div>
                  ))}

                  {/* النقاط المميزة */}
                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {section.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 justify-start">
                          <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0 mt-1" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* صورة القسم الكبيرة */}
                  {section.sectionImageUrl && (
                    <div className="pt-4">
                      <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <Image
                          src={section.sectionImageUrl}
                          alt={section.sectionImageAlt || section.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 80vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* الزر أسفل القسم */}
                  {section.sectionButton && section.sectionButton.btnText && (
                    <div className="pt-3 text-center">
                      <Link
                        href={section.sectionButton.btnUrl || "/ar/contact"}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#df9d17]/20 hover:scale-105 transition-all duration-300"
                      >
                        <span>{section.sectionButton.btnText}</span>
                        <Send className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* الوسوم */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-8 border-t border-slate-200/60 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span>الوسوم والكلمات الدلالية</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200/80 shadow-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* الأسئلة الشائعة */}
            {article.faqs && article.faqs.length > 0 && (
              <ArticleFaqAccordionAr faqs={article.faqs} />
            )}
          </div>

          {/* الشريط الجانبي */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 sticky top-28">
            {tocList.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2 justify-start">
                  <BookOpen className="w-4 h-4" />
                  <span>فهرس ومحتويات المقال</span>
                </p>
                <div className="space-y-2 text-xs">
                  {tocList.map((item: any, tIdx: number) => (
                    <a
                      key={item?.id || tIdx}
                      href={`#${item?.id}`}
                      className="block text-slate-700 hover:text-[#df9d17] transition-colors py-1.5 border-b border-slate-100 last:border-none font-medium"
                    >
                      {item?.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4 text-center shadow-xs">
              <Sparkles className="w-6 h-6 text-[#df9d17] mx-auto" />
              <h4 className="text-sm font-bold text-[#0B1220]">هل تحتاج لعرض أسعار فوري للتأجير أو الشراء؟</h4>
              <p className="text-xs text-slate-600 font-normal">احصل على دراسة فنية شاملة مع التكييف والتجهيزات في كافة أنحاء الإمارات.</p>
              <Link
                href="/ar/contact"
                className="w-full py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#df9d17]/20 transition-all hover:scale-105"
              >
                <span>طلب عرض سعر فوري</span>
                <Send className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}