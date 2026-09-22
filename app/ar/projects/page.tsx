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

async function getSanityArabicProjects() {
  try {
    const query = `*[_type == "project" && defined(titleAr)] | order(_createdAt desc){
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

    const sanityData = await client.fetch(query, {}, { cache: 'no-store' });

    // مطابقة هيكلة البيانات لتكون مسطحة ومباشرة تماماً مثل النسخة الإنجليزية
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
  const allProjects = [...sanityProjects, ...projectsDatabase];

  return (
    <main dir="rtl" className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14] text-right font-sans">
      <Navbar />

      {/* Hero Banner المعماري الفاخر */}
      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        {/* إضاءة محيطية مطابقة تماماً لمكان الإنجليزي */}
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سجل إنجازات هندسية موثقة • أكثر من 6,000 مشروع منجز</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            قمم عالمية ومشاريع كبرى <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              تم تنفيذها تسليم مفتاح
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
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