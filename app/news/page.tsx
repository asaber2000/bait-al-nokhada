import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articlesDatabase } from "@/app/data/articlesEn";
import { client } from "@/app/lib/sanity";
import NewsClientView from "@/components/NewsClientView";

export const revalidate = 60; // كاش لحظي وتحديث كل 60 ثانية

async function getEnglishArticles() {
  try {
    const query = `*[_type == "articleEnglish" && defined(titleEn)] | order(_createdAt desc){
      _id,
      titleEn,
      "slug": slug.current,
      "heroImage": coalesce(image.asset->url, "/images/placeholder.jpg"),
      descEn,
      categoryEn,
      tags,
      isFeatured,
      "date": _createdAt
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    const formattedSanity = (sanityData || []).map((art: any) => ({
      slug: art.slug,
      title: art.titleEn,
      desc: art.descEn,
      heroImage: art.heroImage,
      category: art.categoryEn || "Industry Insights",
      tags: art.tags || [],
      date: new Date(art.date || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: "5 min read",
      featured: Boolean(art.isFeatured)
    }));

    // دمج المقالات مع استبعاد المكرر حسب الـ slug
    const sanitySlugs = new Set(formattedSanity.map((a: any) => a.slug));
    const remainingLocal = articlesDatabase.filter((la: any) => !sanitySlugs.has(la.slug));

    return [...formattedSanity, ...remainingLocal];
  } catch (error) {
    console.error("Error fetching English articles from Sanity:", error);
    return articlesDatabase;
  }
}

export default async function NewsPage() {
  const allArticles = await getEnglishArticles();

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
        </div>
      </section>

      {/* مكون تفاعلي للبحث والفلترة بدون تأخير جلب بيانات */}
      <NewsClientView initialArticles={allArticles} />

      <Footer />
    </main>
  );
}