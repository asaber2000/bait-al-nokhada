import type { Metadata } from "next";
import {
  ArrowLeft,
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articlesDatabase } from "@/app/data/articlesEn";
import { client } from "@/app/lib/sanity";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // سرعة فورية مع كاش ذكي يتجدد تلقائياً

// --- مكونات وتنسيقات النصوص والعناوين H2 / H3 / H4 ---
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref && !value?.url) return null;
      // توليد رابط الصورة من Sanity CDN أو من القيمة المباشرة
      const imageUrl = value.url || `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yaxh1z-placeholder'}/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`;

      return (
        <figure className="my-6 space-y-2">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
            <Image
              src={imageUrl}
              alt={value.alt || "Article illustration"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-center text-slate-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] font-heading mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-[#df9d17] mt-4 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#df9d17] pl-4 my-4 italic text-slate-700 bg-slate-50/60 p-3 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#df9d17] underline hover:text-black transition-colors"
      >
        {children}
      </a>
    ),
  },
};

async function getArticleData(slug: string) {
  try {
    const query = `*[_type == "articleEnglish" && slug.current == $slug][0]{
      titleEn,
      descEn,
      categoryEn,
      tags,
      "slug": slug.current,
      "heroImage": image.asset->url,
      "heroImageAlt": image.alt,
      tocEn,
      contentSectionsEn[]{
        id,
        heading,
        body[]{
          ...,
          _type == "image" => {
            "url": image.asset->url,
            alt,
            caption
          },
          _type == "customVideoBlock" => {
            "fileUrl": sectionVideoFile.asset->url,
            videoCaption
          },
          _type == "videoBlock" => {
            videoUrl,
            videoCaption
          },
          _type == "tableBlock" => {
            tableCaption,
            rows
          }
        },
        points,
        "sectionImageUrl": sectionImage.asset->url,
        "sectionImageAlt": sectionImage.alt,
        "sectionVideoUrl": sectionVideoFile.asset->url,
        sectionButton
      },
      faqsEn[]{question, answer},
      seo {
        metaTitle,
        metaDescription,
        breadcrumbTitle,
        canonicalUrl,
        robots {
          noIndex,
          noFollow
        }
      },
      _createdAt
    }`;

    const sanityData = await client.fetch(query, { slug }, { next: { revalidate: 60 } });

    if (sanityData) {
      return {
        title: sanityData.titleEn,
        desc: sanityData.descEn,
        heroImage: sanityData.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        heroImageAlt: sanityData.heroImageAlt || sanityData.titleEn,
        category: sanityData.categoryEn || "Industry Insights",
        tags: sanityData.tags || [],
        date: new Date(sanityData._createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "5 min read",
        author: "Bait Al Nokhada Editorial",
        contentSections: (sanityData.contentSectionsEn || []).map((sec: any, idx: number) => ({
          id: sec.id || `section-${idx}`,
          heading: sec.heading || "",
          rawBody: sec.body, // الكائن الغني بكل تفاصيله
          bodyText: Array.isArray(sec.body)
            ? sec.body
              .filter((b: any) => b._type === 'block')
              .map((b: any) => b.children?.map((c: any) => c.text).join('')).join('\n\n')
            : (sec.body || ""),
          inlineCtas: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'inlineCta') : [],
          inlineImages: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'image') : [],
          inlineTables: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'tableBlock') : [],
          inlineVideos: Array.isArray(sec.body) ? sec.body.filter((b: any) => b._type === 'videoBlock' || b._type === 'customVideoBlock') : [],
          points: sec.points || [],
          sectionImageUrl: sec.sectionImageUrl || null,
          sectionImageAlt: sec.sectionImageAlt || sec.heading,
          sectionVideoUrl: sec.sectionVideoUrl || null,
          sectionButton: sec.sectionButton || null
        })),
        faqs: (sanityData.faqsEn || []).map((f: any) => ({ q: f.question, a: f.answer })),
        toc: sanityData.tocEn && sanityData.tocEn.length > 0
          ? sanityData.tocEn.map((t: any) => ({ id: t.id || "overview", label: t.label || "Section" }))
          : [{ id: "overview", label: "Overview" }],
        seo: sanityData.seo || null
      };
    }
  } catch (error) {
    console.error("Error fetching English article from Sanity:", error);
  }

  // البحث في المحلي كـ Fallback
  const cleanSlug = slug.toLowerCase().trim();
  const staticMatch = articlesDatabase.find((a) => a.slug.toLowerCase().trim() === cleanSlug);

  if (staticMatch) {
    return {
      title: staticMatch.title,
      desc: staticMatch.desc,
      heroImage: staticMatch.heroImage,
      heroImageAlt: staticMatch.title,
      category: staticMatch.category || "Industry Insights",
      tags: [],
      date: staticMatch.date,
      readTime: staticMatch.readTime,
      author: staticMatch.author || "Bait Al Nokhada Editorial",
      contentSections: staticMatch.contentSections || [],
      faqs: staticMatch.faqs || [],
      toc: staticMatch.toc || [{ id: "overview", label: "Overview" }],
      seo: null
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleData(slug);

  if (!article) {
    return { title: "Article Not Found | Bait Al Nokhada" };
  }

  const metaTitle = article.seo?.metaTitle || `${article.title} | Bait Al Nokhada Insights`;
  const metaDescription = article.seo?.metaDescription || article.desc?.slice(0, 160) || "Read authoritative industry insights and engineering articles by Bait Al Nokhada.";
  const canonicalUrl = article.seo?.canonicalUrl || `https://baitalnokhada.com/news/${slug}`;

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

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleData(slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-44">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">Article Not Found</h1>
          <Link href="/news" className="text-[#df9d17] hover:underline font-bold">Back to All Articles</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentUrl = `https://baitalnokhada.com/news/${slug}`;

  // السكيما المزدوجة المتوافقة مع RankMath (Article + FAQ + Breadcrumb)
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
        "inLanguage": "en-US",
        "mainEntityOfPage": currentUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Bait Al Nokhada Tents & Fabric Structures",
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
            "name": "Home",
            "item": "https://baitalnokhada.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "News & Insights",
            "item": "https://baitalnokhada.com/news"
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

  // حقن سكيما الأسئلة الشائعة FAQ Schema تلقائياً لجوجل
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

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
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
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights & News</span>
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

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-200/80">
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

      {/* Main Content Layout */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            {article.desc && (
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal border-l-2 border-[#df9d17] pl-4 italic">
                {article.desc}
              </p>
            )}

            {/* Content Sections */}
            <div className="space-y-12">
              {article.contentSections.map((section: any, sIdx: number) => (
                <div key={section.id || sIdx} id={section.id} className="space-y-5 scroll-mt-28">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-black text-[#0B1220] font-heading">
                      {section.heading}
                    </h2>
                  )}

                  {/* محرر الفقرات المتقدم والعناوين H2/H3 الحقيقية */}
                  {section.rawBody ? (
                    <div className="space-y-1">
                      <PortableText value={section.rawBody} components={portableTextComponents} />
                    </div>
                  ) : section.bodyText ? (
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed whitespace-pre-line">
                      {section.bodyText}
                    </p>
                  ) : null}

                  {/* صور مدمجة داخل الفقرة */}
                  {section.inlineImages && section.inlineImages.filter((img: any) => img.url).map((img: any, iIdx: number) => (
                    <figure key={iIdx} className="my-6 space-y-2">
                      <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <Image
                          src={img.url}
                          alt={img.alt || "Article illustration"}
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

                  {/* أزرار CTA مدمجة بين الفقرات بنفس ديزاينك المعتمد */}
                  {section.inlineCtas && section.inlineCtas.map((cta: any, cIdx: number) => (
                    <div key={cIdx} className="py-3 flex justify-center">
                      <Link
                        href={cta.btnUrl || "/contact"}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#df9d17]/25 hover:scale-105 cursor-pointer"
                      >
                        <Send className="w-4 h-4 -rotate-45" />
                        <span>{cta.btnText || "GET A QUOTE"}</span>
                      </Link>
                    </div>
                  ))}

                  {/* عرض الجداول المدمجة لو موجودة في المقال */}
                  {section.inlineTables && section.inlineTables.map((tbl: any, tIdx: number) => (
                    <div key={tIdx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                      {tbl.tableCaption && (
                        <div className="bg-slate-50 px-4 py-2 font-bold text-xs text-slate-700 border-b border-slate-200">
                          {tbl.tableCaption}
                        </div>
                      )}
                      <table className="w-full text-left text-xs text-slate-600">
                        <tbody>
                          {tbl.rows?.map((row: any, rIdx: number) => (
                            <tr key={rIdx} className="border-b border-slate-100 last:border-none hover:bg-slate-50/50">
                              {row.cell1 && <td className="p-3.5 font-semibold text-slate-800">{row.cell1}</td>}
                              {row.cell2 && <td className="p-3.5">{row.cell2}</td>}
                              {row.cell3 && <td className="p-3.5">{row.cell3}</td>}
                              {row.cell4 && <td className="p-3.5">{row.cell4}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}

                  {/* عرض الفيديوهات المدمجة داخل النص (يوتيوب أو ملف مرفوع) */}
                  {section.inlineVideos && section.inlineVideos.map((vid: any, vIdx: number) => (
                    <div key={vIdx} className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-black aspect-video relative">
                      {vid.videoUrl ? (
                        <iframe
                          src={vid.videoUrl.includes('embed') ? vid.videoUrl : `https://www.youtube.com/embed/${vid.videoUrl.split('v=')[1]?.split('&')[0] || vid.videoUrl.split('/').pop()}`}
                          className="w-full h-full border-0"
                          allowFullScreen
                          title={vid.videoCaption || "Article Video"}
                        />
                      ) : vid.fileUrl ? (
                        <video controls className="w-full h-full object-cover">
                          <source src={vid.fileUrl} type="video/mp4" />
                        </video>
                      ) : null}
                    </div>
                  ))}

                  {/* النقاط البارزة */}
                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-2.5 pt-2">
                      {section.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0 mt-0.5" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* الصورة الكبيرة الرئيسية للسكشن */}
                  {section.sectionImageUrl && (
                    <div className="pt-2">
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <Image
                          src={section.sectionImageUrl}
                          alt={section.sectionImageAlt || section.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* فيديو السكشن */}
                  {section.sectionVideoUrl && (
                    <div className="pt-2">
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        >
                          <source src={section.sectionVideoUrl} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}

                  {/* زر نهاية السكشن */}
                  {section.sectionButton && section.sectionButton.btnText && (
                    <div className="pt-4 flex justify-center sm:justify-start">
                      <Link
                        href={section.sectionButton.btnUrl || "/contact"}
                        className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md ${section.sectionButton.btnStyle === 'outline'
                            ? 'bg-white text-slate-800 border border-slate-200/80 hover:border-[#df9d17]'
                            : 'bg-[#df9d17] hover:bg-black text-white shadow-[#df9d17]/20'
                          }`}
                      >
                        <Send className="w-3.5 h-3.5 -rotate-45" />
                        <span>{section.sectionButton.btnText}</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags Section */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-8 border-t border-slate-200/60 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#df9d17]" />
                  <span>Article Tags & Topics</span>
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

            {/* FAQs Accordion */}
            {article.faqs && article.faqs.length > 0 && (
              <ArticleFaqAccordion faqs={article.faqs} />
            )}
          </div>

          {/* Sidebar Table of Contents & Quick Contact */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 sticky top-28">
            {article.toc && article.toc.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Table of Contents</span>
                </p>
                <div className="space-y-2 text-xs">
                  {article.toc.map((item: any) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-[#df9d17] transition-colors py-1 font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4 text-center shadow-xs">
              <Sparkles className="w-6 h-6 text-[#df9d17] mx-auto" />
              <h4 className="text-sm font-bold text-[#0B1220]">Need a Rapid Rental Quote?</h4>
              <p className="text-xs text-slate-600 font-normal">Get turnkey rates with HVAC & setup across Dubai & UAE.</p>
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#df9d17]/20 transition-all hover:scale-105"
              >
                <span>Get A Quote</span>
                <Send className="w-3.5 h-3.5 -rotate-45" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}