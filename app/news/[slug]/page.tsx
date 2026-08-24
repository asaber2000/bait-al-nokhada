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
      <main className="min-h-screen bg-[#070B14] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-[#D4AF37] animate-pulse">Loading article...</p>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#070B14] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link href="/news" className="text-[#D4AF37] underline">Back to News</Link>
        </div>
      </main>
    );
  }

  const tocList = article.toc || [];
  const contentSections = article.contentSections || [];
  const faqsList = article.faqs || [];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.title || "Article"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights & News</span>
          </Link>

          <div className="space-y-4">
            {article.category && (
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                {article.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight font-heading">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
              {article.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {article.author}
                </span>
              )}
              {article.date && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {article.date}
                  </span>
                </>
              )}
              {article.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
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
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light border-l-2 border-[#D4AF37] pl-4 italic">
                {article.desc}
              </p>
            )}

            {/* Content Sections */}
            <div className="space-y-10">
              {contentSections.map((section: any, sIdx: number) => (
                <div key={section.id || sIdx} id={section.id} className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {section.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>

                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-2.5 pt-2">
                      {section.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* عرض زر الـ CTA الخاص بالقسم لو موجود */}
                  {section.sectionButton && section.sectionButton.btnText && (
                    <div className="pt-4">
                      <Link
                        href={section.sectionButton.btnUrl || "/contact"}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs transition-transform hover:scale-105 shadow-lg ${
                          section.sectionButton.btnStyle === 'outline'
                            ? 'bg-transparent text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10'
                            : 'bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14]'
                        }`}
                      >
                        <span>{section.sectionButton.btnText}</span>
                        <Send className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                  {section.sectionImageUrl && (
  <div className="pt-4">
    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
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
    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
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
              <div className="pt-8 border-t border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {faqsList.map((faq: any, fIdx: number) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div key={fIdx} className="rounded-2xl bg-[#0D1527] border border-white/10 overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs text-slate-300 font-light leading-relaxed border-t border-white/5 pt-2">
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
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {tocList.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Table of Contents</span>
                </h3>
                <div className="space-y-2 text-xs">
                  {tocList.map((item: any) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-slate-300 hover:text-[#D4AF37] transition-colors py-1 hover:underline"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-linear-to-r from-[#0D1527] to-[#070B14] border border-[#D4AF37]/30 space-y-4 text-center">
              <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto" />
              <h4 className="text-sm font-bold text-white">Need a Rapid Rental Quote?</h4>
              <p className="text-xs text-slate-300 font-light">Get turnkey rates with HVAC & setup across Dubai & UAE.</p>
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
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