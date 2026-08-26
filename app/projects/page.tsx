import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsDatabase } from "../data/projects.En";
import { client } from "@/app/lib/sanity";
import ProjectsGrid from "@/components/ProjectsGrid";

const filterTabs = [
  "ALL PROJECTS",
  "EXHIBITIONS & SUMMITS",
  "SPORTS & ARENAS",
  "VIP & ROYAL MAJLIS"
];

async function getSanityEnglishProjects() {
  try {
    const query = `*[_type == "projectEn" && defined(titleEn)] | order(_createdAt desc){
      titleEn,
      clientEn,
      locationEn,
      year,
      coveredArea,
      categoryEn,
      scopeOfWorkEn,
      "slug": slug.current,
      "coverImage": image.asset->url
    }`;

    const sanityData = await client.fetch(query, {}, { cache: 'no-store' });

    return (sanityData || []).map((item: any) => {
      const locationParts = (item.locationEn || "Dubai, UAE").split(",");
      const city = locationParts[0]?.trim() || "Dubai";
      const country = locationParts[1]?.trim() || "UAE";

      return {
        slug: item.slug,
        coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        year: item.year || "2026",
        category: item.categoryEn || "VIP & Royal Majlis",
        title: item.titleEn,
        summary: item.scopeOfWorkEn,
        city: city,
        country: country,
        client: item.clientEn
      };
    });
  } catch (error) {
    console.error("Error fetching English projects from Sanity:", error);
    return [];
  }
}

export default async function ProjectsCatalogPage() {
  const sanityProjects = await getSanityEnglishProjects();
  const allProjects = [...sanityProjects, ...projectsDatabase];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-187.5 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record • Over 6,000 Completed Mega Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Iconic Global Summits & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Turnkey Structural Venues
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explore our precision-built temporary pavilions, high-span exhibition halls, and luxury royal marquees across the UAE and GCC.
          </p>
        </div>
      </section>

      <ProjectsGrid initialProjects={allProjects} filterTabs={filterTabs} />

      <Footer />
    </main>
  );
}