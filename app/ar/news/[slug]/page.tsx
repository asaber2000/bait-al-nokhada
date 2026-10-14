"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronDown,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Send,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { articlesArDatabase } from "@/app/data/articlesAr";
import { client } from "@/app/lib/sanity";


export default function ArabicArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const cleanSlug = slug?.toLowerCase().trim();

        // 1. البحث أولاً في المقالات المحلية العربية (Static)
        const localMatch = articlesArDatabase.find(
          (a) => a.slug.toLowerCase().trim() === cleanSlug
        );

        if (localMatch) {
          setArticle({
            ar: {
              title: localMatch.ar.title,
              desc: localMatch.ar.desc,
              seoTitle: localMatch.ar.metaTitle,
              seoDesc: localMatch.ar.metaDescription,
              canonical: "",
              category: localMatch.ar.category,
              date: localMatch.ar.date,
              readTime: localMatch.ar.readTime,
              author: localMatch.ar.author,
              toc: localMatch.ar.toc || [],
              contentSections: localMatch.ar.contentSections || [],
              faqs: localMatch.ar.faqs || []
            },
            heroImage: localMatch.heroImage
          });
          document.title = localMatch.ar.metaTitle;
          setLoading(false);
          return;
        }

        // 2. لو لم تكن موجودة محلياً، نبحث عنها في سانتي
        const query = `*[
          _type == "article" &&
          slug.current == $slug
        ][0]{
          _id,
          _createdAt,
          titleAr,
          descAr,
          seoTitle,
          seoDesc,
          canonicalUrl,
          tocAr,
          contentSectionsAr[]{
            id,
            heading,
            body,
            points,
            "sectionImageUrl": sectionImage.asset->url,
            sectionButton
          },
          faqsAr,
          "imageUrl": image.asset->url
        }`;

        const sanityData = await client.fetch(
          query,
          { slug },
          { cache: 'no-store' }
        );

        if (sanityData) {
          setArticle({
            ar: {
              title: sanityData.titleAr,
              desc: sanityData.descAr,
              seoTitle: sanityData.seoTitle,
              seoDesc: sanityData.seoDesc,
              canonical: sanityData.canonicalUrl,
              category: "رؤى صناعية",
              date: new Date(
                sanityData._createdAt || Date.now()
              ).toLocaleDateString('ar-AE', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }),
              readTime: "5 دقائق قراءة",
              author: "فريق التحرير الهندسي - بيت النوخذة",
              toc: sanityData.tocAr || [],
              contentSections: sanityData.contentSectionsAr || [],
              faqs: (sanityData.faqsAr || []).map((f: any) => ({
                q: f.question,
                a: f.answer
              }))
            },
            heroImage:
              sanityData.imageUrl ||
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80"
          });
          if (sanityData.seoTitle) {
            document.title = sanityData.seoTitle;
          }

          if (sanityData.seoDesc) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
              metaDesc = document.createElement('meta');
              metaDesc.setAttribute('name', 'description');
              document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', sanityData.seoDesc);
          }

          if (sanityData.canonicalUrl) {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
              canonicalLink = document.createElement('link');
              canonicalLink.setAttribute('rel', 'canonical');
              document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute('href', sanityData.canonicalUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching Arabic article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticleData();
    }
  }, [slug]);

  if (loading) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between font-sans text-right">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <p className="text-[#df9d17] font-semibold animate-pulse">جاري تحميل المقال...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!article) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between font-sans text-right">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">المقال غير موجود</h1>
          <Link href="/ar/news" className="text-[#df9d17] hover:underline font-bold">العودة للأخبار والمقالات</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const arData = article.ar || {};
  const contentSections = Array.isArray(arData.contentSections) ? arData.contentSections : [];
  const tocList = Array.isArray(arData.toc) ? arData.toc : [];
  const faqsList = Array.isArray(arData.faqs) ? arData.faqs : [];

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={arData.title || "Article"}
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
            {arData.category && (
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                {arData.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
              {arData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-200/80 justify-start">
              {arData.author && (
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#df9d17]" />
                  {arData.author}
                </span>
              )}
              {arData.date && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                    {arData.date}
                  </span>
                </>
              )}
              {arData.readTime && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#df9d17]" />
                    {arData.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* فهرس مخصص للموبايل في بداية المقال */}
      {tocList.length > 0 && (
        <div className="block lg:hidden my-6 p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-xs text-right" dir="rtl">
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

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">

          <div className="lg:col-span-8 space-y-12">
            {arData.desc && (
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal border-r-2 border-[#df9d17] pr-4 italic">
                {arData.desc}
              </p>
            )}

            {contentSections.length > 0 && (
              <div className="space-y-14">
                {contentSections.map((section: any, sIdx: number) => {
                  const points = Array.isArray(section?.points) ? section.points : [];
                  return (
                    <div key={section?.id || sIdx} id={section?.id || `sec-${sIdx}`} className="space-y-6 scroll-mt-28">

                      {section?.heading && (
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading">
                          {section.heading}
                        </h2>
                      )}

                      {section?.body && (
                        <div className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed whitespace-pre-line">
                            {typeof section.body === 'string'
                              ? section.body
                              : Array.isArray(section.body)
                                ? section.body.map((block: any) => block.children?.map((c: any) => c.text).join('')).join('\n')
                                : ""
                            }
                          </p>
                        </div>
                      )}

                      {points.length > 0 && (
                        <ul className="space-y-3 pt-2">
                          {points.map((pt: string, pIdx: number) => (
                            <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 justify-start">
                              <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0 mt-1" />
                              <span className="font-medium">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section?.sectionImageUrl && (
                        <div className="pt-4">
                          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                            <Image
                              src={section.sectionImageUrl}
                              alt={section?.heading || "صورة القسم"}
                              fill
                              sizes="(max-width: 768px) 100vw, 80vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}

                      {section?.sectionButton?.btnText && (
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
                  );
                })}
              </div>
            )}

            {faqsList.length > 0 && (
              <div className="pt-10 border-t border-slate-200/60 space-y-6">
                <h3 className="text-xl font-bold text-[#0B1220] flex items-center gap-2 justify-start">
                  <HelpCircle className="w-5 h-5 text-[#df9d17]" />
                  <span>الأسئلة الشائعة حول الموضوع</span>
                </h3>
                <div className="space-y-3">
                  {faqsList.map((faq: any, fIdx: number) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div key={fIdx} className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="w-full p-4 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0B1220] hover:text-[#df9d17] transition-colors cursor-pointer"
                        >
                          <span>{faq?.q}</span>
                          <ChevronDown className={`w-4 h-4 text-[#df9d17] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-3">
                            {faq?.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

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