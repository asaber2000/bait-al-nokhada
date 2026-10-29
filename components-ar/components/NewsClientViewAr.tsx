"use client";

import { useState } from "react";
import { Search, Sparkles, Calendar, Clock, ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { en: "ALL", ar: "جميع المقالات" },
  { en: "Event Solutions", ar: "حلول الفعاليات" },
  { en: "Engineering & Safety", ar: "الهندسة والسلامة" },
  { en: "Case Studies", ar: "دراسات المشاريع" },
  { en: "Industry Insights", ar: "رؤى الصناعة" }
];

export default function NewsClientViewAr({ initialArticles }: { initialArticles: any[] }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // المقالة المميزة: إما المحددة بـ isFeatured أو الأولى
  const featuredArticle = initialArticles.find((a) => a.featured || a.ar?.featured) || initialArticles[0];

  const filteredArticles = initialArticles.filter((art: any) => {
    const title = art.ar?.title || art.title || "";
    const desc = art.ar?.desc || art.desc || "";
    const category = art.category || art.ar?.category || "";

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === "ALL") {
      const isDefaultView = searchQuery === "" && activeCategory === "ALL";
      if (isDefaultView && featuredArticle && art.slug === featuredArticle.slug) {
        return false;
      }
      return matchesSearch;
    }

    return matchesSearch && (category === activeCategory || category === categories.find(c => c.en === activeCategory)?.ar);
  });

  return (
    <>
      {/* صندوق البحث */}
      <div className="pt-4 max-w-xl mx-auto px-6">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في المقالات والمواضيع الهندسية..."
            className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none shadow-xs transition-all text-right placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* أزرار الفلترة */}
      <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 px-6">
        {categories.map((cat) => (
          <button
            key={cat.en}
            onClick={() => setActiveCategory(cat.en)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat.en
                ? "bg-[#df9d17] text-white shadow-md shadow-[#df9d17]/25 font-black scale-105"
                : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-slate-50 shadow-xs"
              }`}
          >
            {cat.ar}
          </button>
        ))}
      </div>

      {/* البانر المميز (Featured Story) */}
      {featuredArticle && activeCategory === "ALL" && !searchQuery && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md">

            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[340px] bg-slate-100">
              <Image
                src={featuredArticle.heroImage}
                alt={featuredArticle.ar?.title || "مقالة مميزة"}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>قصة مميزة • Featured Story</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500 justify-start">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                    {featuredArticle.ar?.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#df9d17]" />
                    {featuredArticle.ar?.readTime}
                  </span>
                </div>

                <Link href={`/ar/news/${featuredArticle.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] hover:text-[#df9d17] transition-colors leading-tight font-heading">
                    {featuredArticle.ar?.title}
                  </h2>
                </Link>

                <p className="text-sm text-slate-600 font-normal leading-relaxed line-clamp-4">
                  {featuredArticle.ar?.desc}
                </p>
              </div>

              <Link
                href={`/ar/news/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
              >
                <span>قراءة المقال بالكامل</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* شبكة المقالات */}
      <section className="pb-20 sm:pb-28 pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art: any) => {
            const arData = art.ar || art;

            return (
              <div
                key={art.slug}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <Link href={`/ar/news/${art.slug}`} className="relative h-60 w-full overflow-hidden block bg-slate-100">
                    <Image
                      src={art.heroImage}
                      alt={arData.title || "صورة المقال"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs">
                      {arData.category || art.category}
                    </span>
                  </Link>

                  <div className="p-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium justify-start">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                        {arData.date}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#df9d17]" />
                        {arData.readTime}
                      </span>
                    </div>

                    <Link href={`/ar/news/${art.slug}`} className="block">
                      <h2 className="text-xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors leading-snug font-heading">
                        {arData.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-3 leading-relaxed">
                      {arData.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/ar/news/${art.slug}`}
                    className="text-[#df9d17] hover:text-black font-bold tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>قراءة المقال بالكامل</span>
                    <ArrowUpLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}