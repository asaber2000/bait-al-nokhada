"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
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
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { articlesDatabase } from "../../data/articlesEn";
import { client } from "@/app/lib/sanity";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        // 1. البحث أولاً في المقالات الثابتة القديمة
        const staticArticle = articlesDatabase.find((a) => a.slug === slug);
        if (staticArticle) {
          setArticle(staticArticle);
          setLoading(false);
          return;
        }

        // 2. البحث في سحابة Sanity للقسم الإنجليزي articleEnglish
        const query = `*[_type == "articleEnglish" && slug.current == $slug][0]{
          titleEn,
          descEn,
          "slug": slug.current,
          "heroImage": image.asset->url,
          seoTitle,
          seoDesc,
          canonicalUrl,
          tocEn,
          contentSectionsEn[]{
            id,
            heading,
            body,
            points,
            "sectionImageUrl": sectionImage.asset->url,
            "sectionVideoUrl": sectionVideoFile.asset->url,
            sectionButton
          },
          faqsEn[]{question, answer},
          _createdAt
        }`;

        const sanityData = await client.fetch(query, { slug });

        if (sanityData) {
          // تحويل البيانات ليتناسب مع هيكل العرض في الصفحة
          const formattedSections = (sanityData.contentSectionsEn || []).map((sec: any, idx: number) => ({
            id: sec.id || `section-${idx}`,
            heading: sec.heading || "",
            body: Array.isArray(sec.body)
              ? sec.body.map((block: any) => block.children?.map((c: any) => c.text).join('')).join('\n')
              : (sec.body || ""),
            points: sec.points || [],
            sectionImageUrl: sec.sectionImageUrl || null,
            sectionVideoUrl: sec.sectionVideoUrl || null,
            sectionButton: sec.sectionButton || null
          }));

          const formattedToc = (sanityData.tocEn || []).map((toc: any) => ({
            id: toc.id || "overview",
            label: toc.label || "Section"
          }));

          const formattedFaqs = (sanityData.faqsEn || []).map((faq: any) => ({
            q: faq.question,
            a: faq.answer
          }));

          setArticle({
            title: sanityData.titleEn,
            desc: sanityData.descEn,
            heroImage: sanityData.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
            category: "Industry Insights",
            date: new Date(sanityData._createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: "5 min read",
            author: "Bait Al Nokhada Editorial",
            contentSections: formattedSections.length > 0 ? formattedSections : [
              {
                id: "overview",
                heading: sanityData.titleEn,
                body: sanityData.descEn,
                points: []
              }
            ],
            faqs: formattedFaqs,
            toc: formattedToc.length > 0 ? formattedToc : [{ id: "overview", label: "Overview" }]
          });
        }
      } catch (error) {
        console.error("Error fetching English article details:", error);
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
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-[#df9d17] font-semibold animate-pulse">Loading article...</p>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">Article not found</h1>
          <Link href="/news" className="text-[#df9d17] hover:underline font-bold">Back to News</Link>
        </div>
      </main>
    );
  }

  const tocList = article.toc || [];
  const contentSections = article.contentSections || [];
  const faqsList = article.faqs || [];

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.title || "Article"}
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

      {/* Mobile Table of Contents */}
      {tocList.length > 0 && (
        <div className="block lg:hidden my-6 p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-xs">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Table of Contents</span>
          </p>
          <div className="space-y-2 text-xs">
            {tocList.map((item: any) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-slate-700 hover:text-[#df9d17] transition-colors py-1 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
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
            <div className="space-y-10">
              {contentSections.map((section: any, sIdx: number) => (
                <div key={section.id || sIdx} id={section.id} className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-black text-[#0B1220] font-heading">
                    {section.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>

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
                  {/* عرض زر الـ CTA الخاص بالقسم لو موجود */}
                  {section.sectionButton && section.sectionButton.btnText && (
                    <div className="pt-4">
                      <Link
                        href={section.sectionButton.btnUrl || "/contact"}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md ${section.sectionButton.btnStyle === 'outline'
                          ? 'bg-white text-slate-800 border border-slate-200/80 hover:border-[#df9d17]'
                          : 'bg-[#df9d17] hover:bg-black text-white shadow-[#df9d17]/20'
                          }`}
                      >
                        <span>{section.sectionButton.btnText}</span>
                        <Send className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                  {section.sectionImageUrl && (
                    <div className="pt-4">
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100">
                        <Image
                          src={section.sectionImageUrl}
                          alt={section.heading || "Section Image"}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* عرض الفيديو لو موجود */}
                  {section.sectionVideoUrl && (
                    <div className="pt-4">
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
                </div>
              ))}
            </div>

            {/* FAQs */}
            {faqsList.length > 0 && (
              <div className="pt-8 border-t border-slate-200/60 space-y-4">
                <h3 className="text-lg font-bold text-[#0B1220] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#df9d17]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {faqsList.map((faq: any, fIdx: number) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div key={fIdx} className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0B1220] hover:text-[#df9d17] transition-colors cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-[#df9d17] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-2">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Table of Contents */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 sticky top-28">
            {tocList.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Table of Contents</span>
                </p>
                <div className="space-y-2 text-xs">
                  {tocList.map((item: any) => (
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

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4 text-center shadow-xs">
              <Sparkles className="w-6 h-6 text-[#df9d17] mx-auto" />
              <h4 className="text-sm font-bold text-[#0B1220]">Need a Rapid Rental Quote?</h4>
              <p className="text-xs text-slate-600 font-normal">Get turnkey rates with HVAC & setup across Dubai & UAE.</p>
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#df9d17]/20 transition-all hover:scale-105"
              >
                <span>Get A Quote</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}