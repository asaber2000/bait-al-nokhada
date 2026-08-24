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
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative my-6 h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={urlFor(value).url()}
            alt="صورة داخل النص"
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

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
      <main className="min-h-screen bg-[#070B14] text-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <p className="text-[#D4AF37] animate-pulse">جاري تحميل المقال...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#070B14] text-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center space-y-4 py-32">
          <h1 className="text-2xl font-bold">المقال غير موجود</h1>
          <Link href="/ar/news" className="text-[#D4AF37] underline">العودة للأخبار والمقالات</Link>
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
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={arData.title || "Article"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-right">
          <Link
            href="/ar/news"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لكافة الأخبار والمقالات</span>
          </Link>

          <div className="space-y-4">
            {arData.category && (
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                {arData.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight font-heading">
              {arData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10 justify-start">
              {arData.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {arData.author}
                </span>
              )}
              {arData.date && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {arData.date}
                  </span>
                </>
              )}
              {arData.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {arData.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
          
          <div className="lg:col-span-8 space-y-12">
            {arData.desc && (
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light border-r-2 border-[#D4AF37] pr-4 italic">
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                          {section.heading}
                        </h2>
                      )}

                      {section?.body && (
                        <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                          {typeof section.body === 'string' ? (
                            <p className="whitespace-pre-line">{section.body}</p>
                          ) : (
                            <PortableText value={section.body} components={ptComponents} />
                          )}
                        </div>
                      )}

                      {points.length > 0 && (
                        <ul className="space-y-3 pt-2">
                          {points.map((pt: string, pIdx: number) => (
                            <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 justify-start">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section?.sectionImageUrl && (
                        <div className="pt-4">
                          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all duration-300"
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
              <div className="pt-10 border-t border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 justify-start">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span>الأسئلة الشائعة حول الموضوع</span>
                </h3>
                <div className="space-y-3">
                  {faqsList.map((faq: any, fIdx: number) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div key={fIdx} className="rounded-2xl bg-[#0D1527] border border-white/10 overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="w-full p-4 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                        >
                          <span>{faq?.q}</span>
                          <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-3">
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

          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {tocList.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2 justify-start">
                  <BookOpen className="w-4 h-4" />
                  <span>فهرس ومحتويات المقال</span>
                </h3>
                <div className="space-y-2 text-xs">
                  {tocList.map((item: any, tIdx: number) => (
                    <a
                      key={item?.id || tIdx}
                      href={`#${item?.id}`}
                      className="block text-slate-300 hover:text-[#D4AF37] transition-colors py-1.5 hover:underline border-b border-white/5 last:border-none"
                    >
                      {item?.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0D1527] to-[#070B14] border border-[#D4AF37]/30 space-y-4 text-center">
              <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto" />
              <h4 className="text-sm font-bold text-white">هل تحتاج لعرض أسعار فوري للتأجير أو الشراء؟</h4>
              <p className="text-xs text-slate-300 font-light">احصل على دراسة فنية شاملة مع التكييف والتجهيزات في كافة أنحاء الإمارات.</p>
              <Link
                href="/ar/contact"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
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