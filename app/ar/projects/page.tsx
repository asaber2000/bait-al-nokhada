import { Sparkles } from "lucide-react";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { projectsDatabase } from "../../data/projects.Ar";
import { client } from "@/app/lib/sanity";
import ProjectsGridAr from "@/components-ar/components/ProjectsGrid";

// نفس مصفوفة التصنيفات المسطحة لتتطابق حركة أزرار الفلترة بالملي
const filterTabs = [
  "جميع المشاريع",
  "المعارض والقمم الدولية",
  "المنشآت والملاعب الرياضية",
  "المجالس الملكية وVIP"
];

export const revalidate = 60; // تفعيل الكاش اللحظي فائق السرعة

async function getSanityArabicProjects() {
  try {
    const query = `*[_type in ["project", "projectAr", "projectsAr"] && defined(titleAr)] | order(_createdAt desc){
      titleAr,
      clientAr,
      locationAr,
      year,
      coveredArea,
      categoryAr,
      scopeOfWorkAr,
      "slug": slug.current,
      "coverImage": image.asset->url
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => {
      const locationParts = (item.locationAr || "دبي، الإمارات").split("،");
      const city = locationParts[0]?.trim() || "دبي";
      const country = locationParts[1]?.trim() || "الإمارات";

      return {
        slug: item.slug,
        coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        year: item.year || "2026",
        category: item.categoryAr || "المجالس الملكية وVIP",
        title: item.titleAr,
        summary: item.scopeOfWorkAr,
        city: city,
        country: country,
        client: item.clientAr
      };
    });
  } catch (error) {
    console.error("Error fetching Arabic projects from Sanity:", error);
    return [];
  }
}

export default async function ArabicProjectsCatalogPage() {
  const sanityProjects = await getSanityArabicProjects();
  
  // فلترة المحلي لمنع تكرار الكروت مع مشاريع سانتي
  const sanitySlugs = new Set(sanityProjects.map((p: any) => p.slug));
  const remainingLocal = projectsDatabase.filter((lp: any) => !sanitySlugs.has(lp.slug));
  const allProjects = [...sanityProjects, ...remainingLocal];

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white text-right font-sans">
      <Navbar />

      {/* Hero Banner المعماري الفاخر */}
      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سجل إنجازات هندسية موثقة • أكثر من 6,000 مشروع منجز</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            قمم عالمية ومشاريع كبرى <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              تم تنفيذها تسليم مفتاح
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            استكشف قاعات المعارض العملاقة، الصالات الرياضية المغطاة، وخيام الفعاليات والقصور الملكية المنجزة في الإمارات ودول الخليج.
          </p>
        </div>
      </section>

      {/* شبكة المشاريع العربية الموحدة */}
      <ProjectsGridAr initialProjects={allProjects} filterTabs={filterTabs} />

      <Footer />
    </main>
  );
}