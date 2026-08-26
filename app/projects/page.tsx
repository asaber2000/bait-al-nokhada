import { Sparkles, MapPin, Calendar, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projectsDatabase } from "../data/projects.En";
import { client } from "@/app/lib/sanity";

const filterTabs = [
  "ALL PROJECTS",
  "EXHIBITIONS & SUMMITS",
  "SPORTS & ARENAS",
  "VIP & ROYAL MAJLIS"
];

// جلب مشاريع سانتي مباشرة على السيرفر لتجنب أي تأخير أو ومضة على العميل
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
  // جلب داتا سانتي ودمجها مع الداتا المحلية مسبقاً على السيرفر
  const sanityProjects = await getSanityEnglishProjects();
  const allProjects = [...sanityProjects, ...projectsDatabase];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Header */}
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

          {/* Static Filter Display (أو الفلترة حسب رغبتك) */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5">
            {filterTabs.map((tab) => (
              <span
                key={tab}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D1527] text-slate-300 border border-white/10"
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects 2-Column Grid (تظهر كاملة دفعة واحدة من السيرفر) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <div
              key={project.slug || idx}
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              {/* Media Image Container with Video Play Overlay */}
              <Link href={`/projects/${project.slug}`} className="relative h-80 w-full overflow-hidden block bg-black">
                <Image
                  src={project.coverImage}
                  alt={project.title || "Engineering Project"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-black/20 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {project.category}
                </span>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </Link>

              {/* Information Body */}
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-[#D4AF37]">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.city}, {project.country}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`} className="block">
                  <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {project.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                {/* Action Link Bottom Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>WATCH VIDEO & CASE STUDY</span>
                  </Link>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-slate-400 hover:text-white font-medium flex items-center gap-1"
                  >
                    <span>Full Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}