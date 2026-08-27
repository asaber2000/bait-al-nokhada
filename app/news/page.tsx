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
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Knowledge Hub & Technical Articles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            News, Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Structural Innovations
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
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
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0D1527] border border-white/15 focus:border-[#D4AF37] text-white text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/20 scale-105"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-white/20"
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
          <div className="rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-all grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px]">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.title || "Article"}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover brightness-90"
              />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                Featured Story
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {featuredPost.desc}
                </p>
              </div>

              <Link
                href={`/news/${(featuredPost as any).urlSlug || featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
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
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/70 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-black">
                  <Image
                    src={article.heroImage}
                    alt={article.title || "Article"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    <span>{article.category}</span>
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {article.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/news/${article.urlSlug || article.slug}`}
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/10 hover:border-[#D4AF37] transition-all"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0D1527] via-[#070B14] to-[#0D1527] border border-white/15 text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Stay Connected
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Subscribe to Architectural Insights
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Receive quarterly technical whitepapers and event infrastructure case studies straight to your inbox.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}