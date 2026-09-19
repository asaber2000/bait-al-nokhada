"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Clock, 
  ArrowUpLeft, 
  BookOpen, 
  Send 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { articlesArDatabase } from "@/app/data/articlesAr";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { client } from "@/app/lib/sanity";

const categories = [
  { en: "ALL", ar: "جميع المقالات" },
  { en: "Event Solutions", ar: "حلول الفعاليات" },
  { en: "Engineering & Safety", ar: "الهندسة والسلامة" },
  { en: "Case Studies", ar: "دراسات المشاريع" },
  { en: "Industry Insights", ar: "رؤى الصناعة" }
];

export default function ArabicNewsCatalogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [articlesList, setArticlesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const query = `*[_type == "article" && defined(titleAr)] | order(_createdAt desc){
          _id,
          _createdAt,
          titleAr,
          descAr,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }`;

        const data = await client.fetch(query, {}, { cache: 'no-store' });
        
        const formattedSanityArticles = (data || []).map((item: any) => ({
          slug: item.slug,
          ar: {
            title: item.titleAr,
            desc: item.descAr,
            category: "رؤى صناعية",
            date: new Date(item._createdAt || Date.now()).toLocaleDateString('ar-AE', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }),
            readTime: "5 دقائق قراءة"
          },
          heroImage: item.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
          category: "رؤى صناعية",
          featured: false
        }));

        setArticlesList([...formattedSanityArticles, ...articlesArDatabase]);
      } catch (error) {
        console.error("Error fetching catalog articles:", error);
        setArticlesList(articlesArDatabase);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // تحديد المقالة المميزة بنفس المنطق الدقيق للنسخة الإنجليزية
  const featuredArticle = articlesList.find((a) => a.featured || a.ar?.featured) || articlesList[0];

  const filteredArticles = articlesList.filter((art: any) => {
    const title = art.ar?.title || "";
    const desc = art.ar?.desc || "";
    const category = art.category || "";

    const matchesSearch = 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === "ALL") {
      // استبعاد المقالة المميزة من الشبكة لمنع التكرار في العرض الافتراضي
      const isDefaultView = searchQuery === "" && activeCategory === "ALL";
      if (isDefaultView && featuredArticle && art.slug === featuredArticle.slug) {
        return false;
      }
      return matchesSearch;
    }

    return matchesSearch && category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]" dir="rtl">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden text-right">
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>رؤى معمارية وهندسية • بيت النوخذة</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            الأخبار، المقالات <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              والدراسات الهندسية
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            دليلك الهندسي الشامل لتقنيات تصنيع وتأجير الخيام المسبقة الصنع، معايير العزل والتكييف، ودراسات المشاريع الكبرى في الإمارات والخليج.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في المقالات والمواضيع الهندسية..."
                className="w-full pr-11 pl-4 py-4 rounded-2xl bg-[#0D1527] border border-white/15 focus:border-[#D4AF37] text-white text-sm outline-none shadow-2xl transition-all text-right"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.en
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/25 font-black scale-105"
                    : "bg-[#0D1527] text-slate-300 border border-white/10 hover:bg-white/5"
                }`}
              >
                {cat.ar}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20 text-[#D4AF37] animate-pulse text-sm">
          جاري تحميل المقالات...
        </div>
      )}

      {/* Featured Article Highlight: تصميم سينمائي فخم مطابق للإنجليزي مع بادج القصة المميزة */}
      {!loading && featuredArticle && activeCategory === "ALL" && !searchQuery && (
        <section className="py-16 px-6 max-w-7xl mx-auto text-right">
          <div className="rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-all grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            
            {/* الصورة الرئيسية مع بادج التثبيت في الزاوية */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <Image
                src={featuredArticle.heroImage}
                alt={featuredArticle.ar?.title || "مقالة مميزة"}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover brightness-90"
              />
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>قصة مميزة • Featured Story</span>
              </div>
            </div>

            {/* تفاصيل المقالة على اليسار */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-400 justify-start">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredArticle.ar?.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredArticle.ar?.readTime}
                  </span>
                </div>

                <Link href={`/ar/news/${featuredArticle.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-black text-white hover:text-[#D4AF37] transition-colors leading-tight font-heading">
                    {featuredArticle.ar?.title}
                  </h2>
                </Link>

                <p className="text-sm text-slate-300 font-light leading-relaxed line-clamp-4">
                  {featuredArticle.ar?.desc}
                </p>
              </div>

              <Link
                href={`/ar/news/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>قراءة المقال بالكامل</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 pb-24 px-6 max-w-7xl mx-auto text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && filteredArticles.map((art: any) => {
            const arData = art.ar || {};

            return (
              <div
                key={art.slug}
                className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <Link href={`/ar/news/${art.slug}`} className="relative h-60 w-full overflow-hidden block bg-black">
                    <Image
                      src={art.heroImage}
                      alt={arData.title || "صورة المقال"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      {arData.category || art.category}
                    </span>
                  </Link>

                  <div className="p-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium justify-start">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {arData.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {arData.readTime}
                      </span>
                    </div>

                    <Link href={`/ar/news/${art.slug}`} className="block">
                      <h2 className="text-xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug font-heading">
                        {arData.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-3 leading-relaxed">
                      {arData.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                  <Link
                    href={`/ar/news/${art.slug}`}
                    className="text-[#D4AF37] font-bold tracking-wider flex items-center gap-1.5 hover:underline"
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

      {/* Newsletter / CTA */}
      <section className="pb-24 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4 shadow-xl">
          <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            ابقَ على اطلاع بأحدث التطورات الهندسية
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            تواصل مع خبرائنا لمناقشة مواصفات مشروعك القادم وتزويدك بأحدث الكتالوجات والمواصفات الفنية المعتمدة.
          </p>
          <div className="pt-2">
            <Link
              href="/ar/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
            >
              <span>تواصل مع الإدارة الهندسية</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}