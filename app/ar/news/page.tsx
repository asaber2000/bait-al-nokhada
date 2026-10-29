import { Sparkles, BookOpen, Send } from "lucide-react";
import Link from "next/link";
import { articlesArDatabase } from "@/app/data/articlesAr";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { client } from "@/app/lib/sanity";
import NewsClientViewAr from "@/components-ar/components/NewsClientViewAr";

export const revalidate = 60; // كاش وتحديث لحظي كل 60 ثانية

async function getArabicArticles() {
  try {
    const query = `*[_type == "article" && defined(titleAr)] | order(_createdAt desc){
      _id,
      _createdAt,
      titleAr,
      descAr,
      categoryAr,
      tags,
      isFeatured,
      "slug": slug.current,
      "imageUrl": coalesce(image.asset->url, "/images/placeholder.jpg")
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    const formattedSanityArticles = (sanityData || []).map((item: any) => ({
      slug: item.slug,
      ar: {
        title: item.titleAr,
        desc: item.descAr,
        category: item.categoryAr || "رؤى صناعية",
        date: new Date(item._createdAt || Date.now()).toLocaleDateString('ar-AE', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        readTime: "5 دقائق قراءة"
      },
      heroImage: item.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
      category: item.categoryAr || "رؤى صناعية",
      tags: item.tags || [],
      featured: Boolean(item.isFeatured)
    }));

    // دمج المقالات مع استبعاد التكرار مع المحلي
    const sanitySlugs = new Set(formattedSanityArticles.map((a: any) => a.slug));
    const remainingLocal = articlesArDatabase.filter((la: any) => !sanitySlugs.has(la.slug));

    return [...formattedSanityArticles, ...remainingLocal];
  } catch (error) {
    console.error("Error fetching Arabic catalog articles:", error);
    return articlesArDatabase;
  }
}

export default async function ArabicNewsCatalogPage() {
  const allArticles = await getArabicArticles();

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans" dir="rtl">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden text-right bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>رؤى معمارية وهندسية • بيت النوخذة</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
            الأخبار، المقالات <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              والدراسات الهندسية
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            دليلك الهندسي الشامل لتقنيات تصنيع وتأجير الخيام المسبقة الصنع، معايير العزل والتكييف، ودراسات المشاريع الكبرى في الإمارات والخليج.
          </p>
        </div>
      </section>

      {/* مكون الفلترة والبحث السريع */}
      <NewsClientViewAr initialArticles={allArticles} />

      {/* Newsletter / CTA */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-xs">
          <BookOpen className="w-8 h-8 text-[#df9d17] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading tracking-tight">
            ابقَ على اطلاع بأحدث التطورات الهندسية
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            تواصل مع خبرائنا لمناقشة مواصفات مشروعك القادم وتزويدك بأحدث الكتالوجات والمواصفات الفنية المعتمدة.
          </p>
          <div className="pt-3">
            <Link
              href="/ar/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md shadow-[#df9d17]/20"
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