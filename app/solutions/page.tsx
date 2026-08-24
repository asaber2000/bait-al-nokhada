import { Sparkles, ArrowUpRight, Search, CheckCircle2, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutionsDatabase } from "@/app/data/solutions.En";
import { client } from "@/app/lib/sanity";

export const dynamic = 'force-static';
export const revalidate = 3600;

async function getSanitySolutionsEn() {
  try {
    const query = `*[_type == "solutionEn" && defined(titleEn)] | order(_createdAt desc){
      titleEn,
      badgeEn,
      summaryEn,
      overviewDescEn1,
      "slug": slug.current,
      "coverImage": coverImage.asset->url
    }`;

    const sanityData = await client.fetch(query, {}, { cache: 'force-cache' });

    const formattedSanitySolutions = (sanityData || []).map((item: any) => ({
      slug: item.slug,
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      name: item.titleEn,
      badge: item.badgeEn || "Industrial Grade",
      tagline: item.summaryEn || "",
      overview: item.overviewDescEn1 || item.summaryAr || "",
      industryApplications: ["Rapid Deployment", "German Certified Standards"]
    }));

    return [...formattedSanitySolutions, ...solutionsDatabase];
  } catch (error) {
    console.error("Error fetching English solutions from Sanity:", error);
    return solutionsDatabase;
  }
}

export default async function SolutionsCatalogPage() {
  const allSolutions = await getSanitySolutionsEn();

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Header Hero */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Solutions • Specialized Sectors</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight font-heading">
            Innovative Tent Solutions in <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              UAE & Saudi Arabia
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            From high-performance logistics warehouses and aircraft hangars to bespoke royal wedding palaces and international exhibition arenas. Engineered for rapid site deployment and certified weather safety.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSolutions.map((solution: any, idx: number) => {
            const solData = solution.name ? solution : (solution.en || solution);

            return (
              <div
                key={solution.slug || idx}
                className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-black">
                    <Image
                      src={solution.heroImage || solution.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                      alt={solData.name || "Engineering Solution"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D1527] via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      {solData.badge || "Industrial Grade"}
                    </span>

                    <span className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/80 backdrop-blur-md text-white flex items-center gap-1 text-[10px] font-semibold">
                      <Video className="w-3 h-3 text-[#D4AF37]" />
                      <span>Video</span>
                    </span>
                  </div>

                  <div className="p-7 space-y-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {solData.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {solData.tagline || solData.overview}
                    </p>

                    {solData.industryApplications?.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-400">
                        {solData.industryApplications.slice(0, 2).map((app: string, aIdx: number) => (
                          <div key={aIdx} className="flex items-center gap-2 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{app}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-linear-to-r hover:from-[#D4AF37] hover:to-[#C5A880] text-white hover:text-[#070B14] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all shadow-md group/btn"
                  >
                    <span>View Solution & Video</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}