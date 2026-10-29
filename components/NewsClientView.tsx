"use client";

import { useState } from "react";
import { Search, Tag, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsCategories = [
  "All Articles",
  "Industry Insights",
  "Case Studies",
  "Engineering & Safety",
  "Event Solutions",
];

export default function NewsClientView({ initialArticles }: { initialArticles: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = initialArticles.find((a) => a.featured) || initialArticles[0];

  const filteredArticles = initialArticles.filter((art) => {
    const matchesCategory =
      activeCategory === "All Articles" || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.desc && art.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    const isDefaultView = searchQuery === "" && activeCategory === "All Articles";
    if (isDefaultView && featuredPost && art.slug === featuredPost.slug) {
      return false;
    }

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="pt-6 max-w-xl mx-auto px-6">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, structure, or keyword..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none transition-all shadow-xs placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 pt-6 px-6">
        {newsCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat
                ? "bg-[#df9d17] text-white shadow-md shadow-[#df9d17]/25 scale-105"
                : "bg-white text-slate-700 border border-slate-200/80 hover:border-[#df9d17]/50 hover:bg-slate-50 shadow-xs"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featuredPost && searchQuery === "" && activeCategory === "All Articles" && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-slate-100">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.title || "Article"}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs">
                Featured Story
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                    {featuredPost.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#df9d17]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] leading-tight font-heading">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {featuredPost.desc}
                </p>
              </div>

              <Link
                href={`/news/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
              >
                <span>Read Full Comprehensive Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 sm:pb-28 pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article: any) => (
            <article
              key={article.slug}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.heroImage}
                    alt={article.title || "Article"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    <span>{article.category}</span>
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#df9d17]" />
                      {article.date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors leading-snug font-heading">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {article.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200/80 hover:border-[#df9d17] transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}