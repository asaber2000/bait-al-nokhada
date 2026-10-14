"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Calendar,
  Clock,
  Search,
  Tag
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articlesDatabase } from "../data/articlesEn";
import { client } from "@/app/lib/sanity";

const newsCategories = [
  "All Articles",
  "Industry Insights",
  "Case Studies",
  "Engineering & Safety",
  "Event Solutions",
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [cmsArticles, setCmsArticles] = useState<any[]>([]);

  // جلب مقالات سانتي في الخلفية فوراً بدون إظهار رسالة تحميل مزعجة
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const query = `*[_type == "articleEnglish"]{
          _id,
          titleEn,
          "slug": slug.current,
          "heroImage": image.asset->url,
          descEn,
          "date": _createdAt,
          "readTime": "5 min read",
          "category": "Industry Insights"
        }`;

        const data = await client.fetch(query);

        const formattedData = (data || []).map((art: any) => ({
          slug: art.slug,
          title: art.titleEn,
          desc: art.descEn,
          heroImage: art.heroImage || "/images/placeholder.jpg",
          category: "Industry Insights",
          date: new Date(art._createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          readTime: "5 min read",
          featured: false
        }));

        setCmsArticles(formattedData);
      } catch (error) {
        console.error("Error fetching English Sanity articles:", error);
      }
    };
    fetchArticles();
  }, []);

  // دمج المقالات الثابتة مع مقالات سانتي الحقيقية فور توفرها
  const allArticles = [...articlesDatabase, ...cmsArticles];

  // تحديد المقالة المميزة الأولى
  const featuredPost = allArticles.find((a) => a.featured) || allArticles[0];

  // فلترة المقالات للـ Grid (مع استبعاد المقالة المميزة إذا كنا في القسم الافتراضي لعدم التكرار)
  const filteredArticles = allArticles.filter((art) => {
    const matchesCategory =
      activeCategory === "All Articles" || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.desc.toLowerCase().includes(searchQuery.toLowerCase());

    // إذا لم يكن هناك بحث وكنا في "All Articles"، نقوم باستبعاد المقالة المميزة لعدم تكرارها
    const isDefaultView = searchQuery === "" && activeCategory === "All Articles";
    if (isDefaultView && featuredPost && art.slug === featuredPost.slug) {
      return false;
    }

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Knowledge Hub & Technical Articles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            News, Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              Structural Innovations
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Stay informed with the latest trends in modular tent engineering, tensile fabric architecture, and event infrastructure across the GCC.
          </p>

          <div className="pt-6 max-w-xl mx-auto">
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

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
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
        </div>
      </section>

      {featuredPost && searchQuery === "" && activeCategory === "All Articles" && (
        <section className="py-16 px-6 max-w-7xl mx-auto">
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
                href={`/news/${(featuredPost as any).urlSlug || featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
              >
                <span>Read Full Comprehensive Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles - تم استبعاد المقالة المميزة منها تلقائياً لمنع التكرار */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
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
                  href={`/news/${article.urlSlug || article.slug}`}
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

      <section className="pb-24 pt-8 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-4 shadow-xs">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            Stay Connected
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
            Subscribe to Architectural Insights
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
            Receive quarterly technical whitepapers and event infrastructure case studies straight to your inbox.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}