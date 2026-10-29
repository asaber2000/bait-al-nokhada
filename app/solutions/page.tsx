import { Sparkles, ArrowUpRight, Search, CheckCircle2, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutionsDatabase } from "@/app/data/solutions.En";

import { client } from "@/app/lib/sanity";


export const revalidate = 60;

async function getSanitySolutionsEn() {
  try {
    const query = `*[_type == "solutionEn" && defined(titleEn)] | order(_createdAt desc){
      titleEn,
      targetSectorsEn,
      badgeEn,
      summaryEn,
      overviewDescEn1,
      "slug": slug.current,
      "coverImage": coverImage.asset->url
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    const formattedSanitySolutions = (sanityData || []).map((item: any) => ({
      slug: item.slug,
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      name: item.titleEn,
      badge: item.badgeEn || "Industrial Grade",
      tagline: item.summaryEn || "",
      overview: item.overviewDescEn1 || item.summaryAr || "",
      industryApplications: item.targetSectorsEn || ["Rapid Deployment", "German Certified Standards"]
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
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      {/* Header Hero */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Solutions • Specialized Sectors</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
            Innovative Tent Solutions in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              UAE & Saudi Arabia
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            From high-performance logistics warehouses and aircraft hangars to bespoke royal wedding palaces and international exhibition arenas. Engineered for rapid site deployment and certified weather safety.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFCF7]">
        <div className="site-container max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSolutions.map((solution: any, idx: number) => {
              const solData = solution.name ? solution : (solution.en || solution);

              return (
                <div
                  key={solution.slug || idx}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-500 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={solution.heroImage || solution.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                        alt={solData.name || "Engineering Solution"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs">
                          {solData.badge ? solData.badge.split("•")[0].trim() : "SOLUTION"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3.5">
                      <h2 className="text-xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors leading-snug font-heading">
                        {solData.name}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-2 leading-relaxed">
                        {solData.tagline || solData.overview}
                      </p>

                      {solData.industryApplications?.length > 0 && (
                        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                          {solData.industryApplications.slice(0, 2).map((app: string, aIdx: number) => (
                            <div key={aIdx} className="flex items-center gap-2 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                              <span className="truncate">{app}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-slate-200/80 hover:border-[#df9d17] transition-all shadow-xs hover:shadow-md group/btn"
                    >
                      <span>View Solution & Video</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}