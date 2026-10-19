import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsDatabase } from "../data/projects.En";
import { client } from "@/app/lib/sanity";
import ProjectsGrid from "@/components/ProjectsGrid";

export const revalidate = 60; // Instant Cache & ISR

const filterTabs = [
  "ALL PROJECTS",
  "EXHIBITIONS & SUMMITS",
  "SPORTS & ARENAS",
  "VIP & ROYAL MAJLIS"
];

async function getSanityEnglishProjects() {
  try {
    const query = `*[_type in ["projectEn", "projectsEn"] && defined(titleEn)] | order(_createdAt desc){
      titleEn,
      clientEn,
      locationEn,
      year,
      coveredArea,
      categoryEn,
      scopeOfWorkEn,
      "slug": slug.current,
      "coverImage": coalesce(heroImageUrl, image.asset->url),
      videoUrl
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => {
      const locationParts = (item.locationEn || "Dubai, UAE").split(",");
      const city = locationParts[0]?.trim() || "Dubai";
      const country = locationParts[1]?.trim() || "UAE";

      return {
        slug: item.slug,
        coverImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        videoUrl: item.videoUrl || null,
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

  // Deduplicate against local dataset by slug
  const sanitySlugs = new Set(sanityProjects.map((p: any) => p.slug));
  const remainingLocal = projectsDatabase.filter((lp: any) => !sanitySlugs.has(lp.slug));
  const allProjects = [...sanityProjects, ...remainingLocal];

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record • Over 6,000 Completed Mega Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            Engineering Landmark Projects & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              Custom Event Structures
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Showcasing our completed large-scale venues, royal event halls, and commercial installations across the region.
          </p>
        </div>
      </section>

      <ProjectsGrid initialProjects={allProjects} filterTabs={filterTabs} />

      <Footer />
    </main>
  );
}