import { Sparkles } from "lucide-react";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { projectsDatabase } from "../../data/projects.Ar";
import { client } from "@/app/lib/sanity";
import ProjectsGridAr from "@/components-ar/components/ProjectsGrid";

const filterTabs = [
  { en: "ALL PROJECTS", ar: "جميع المشاريع" },
  { en: "EXHIBITIONS & SUMMITS", ar: "المعارض والقمم الدولية" },
  { en: "SPORTS & ARENAS", ar: "المنشآت والملاعب الرياضية" },
  { en: "VIP & ROYAL MAJLIS", ar: "المجالس الملكية وVIP" }
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

    return (sanityData || []).map((item: any) => ({
      slug: item.slug,
      coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      year: item.year || "2026",
      category: "VIP & Royal Majlis",
      ar: {
        title: item.titleAr,
        summary: item.scopeOfWorkAr,
        city: item.locationAr || "دبي",
        country: "الإمارات",
        category: item.categoryAr || "المجالس الملكية وVIP",
        client: item.clientAr
      }
    }));
  } catch (error) {
    console.error("Error fetching Arabic projects from Sanity:", error);
    return [];
  }
}

export default async function ArabicProjectsCatalogPage() {
  const sanityProjects = await getSanityArabicProjects();
  const allProjects = [...sanityProjects, ...projectsDatabase];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-187.5 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سجل إنجازات هندسية موثقة • أكثر من 6,000 مشروع منجز</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            قمم عالمية ومشاريع كبرى <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              تم تنفيذها تسليم مفتاح
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            استكشف قاعات المعارض العملاقة، الصالات الرياضية المغطاة، وخيام الفعاليات والقصور الملكية المنجزة في الإمارات ودول الخليج.
          </p>
        </div>
      </section>

      <ProjectsGridAr initialProjects={allProjects} filterTabs={filterTabs} />

      <Footer />
    </main>
  );
}