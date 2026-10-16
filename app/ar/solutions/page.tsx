import { Sparkles, CheckCircle2, Video, ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";
import { client } from "@/app/lib/sanity";

export const revalidate = 60; // كاش مدته دقيقة واحدة فقط

async function getSanitySolutions() {
  try {
    const query = `*[_type == "solution" && defined(titleAr)] | order(_createdAt desc){
      titleAr,
      targetSectors,
      badgeAr,
      summaryAr,
      overviewDescAr1,
      "slug": slug.current,
      "coverImage": coverImage.asset->url
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    const formattedSanitySolutions = (sanityData || []).map((item: any) => ({
      slug: item.slug,
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      name: item.titleAr,
      badge: item.badgeAr || "هياكل معمارية معتمدة",
      tagline: item.summaryAr || "",
      overview: item.overviewDescAr1 || item.summaryAr || "",
      industryApplications: item.targetSectors || []
    }));

    const localFiltered = solutionsDatabase.filter(
      (localItem) => !formattedSanitySolutions.some((s: any) => s.slug === localItem.slug)
    );

    return [...formattedSanitySolutions, ...localFiltered];
  } catch (error) {
    console.error("Error fetching English solutions from Sanity:", error);
    return solutionsDatabase;
  }
}
export default async function ArabicSolutionsCatalogPage() {
  const allSolutions = await getSanitySolutions();

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right" dir="rtl">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7] text-right">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>حلول هندسية متكاملة تسليم مفتاح • قطاعات متخصصة</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            حلول وتطبيقات الخيام المتطورة في <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              الإمارات والمملكة العربية السعودية
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            من مستودعات التخزين اللوجستي الشاقة وهناجر الطائرات إلى قاعات الأعراس الملكية الفاخرة وصالات المعارض الدولية. مصممة للتركيب السريع ومقاومة أعلى الظروف المناخية.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSolutions.map((solution: any, idx: number) => {
            const arData = solution;

            return (
              <div
                key={solution.slug || idx}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md text-right"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={solution.heroImage}
                      alt={arData.name || "حل هندسي"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={idx < 3}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs">
                      {arData.badge || "Industrial Grade"}
                    </span>

                    <span className="absolute top-4 left-4 z-10 px-2.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-800 flex items-center gap-1.5 text-[10px] font-semibold border border-slate-200/80 shadow-xs">
                      <Video className="w-3 h-3 text-[#df9d17]" />
                      <span>فيديو</span>
                    </span>
                  </div>

                  <div className="p-7 space-y-4">
                    <h2 className="text-xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors leading-snug font-heading">
                      {arData.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-2 leading-relaxed">
                      {arData.tagline || arData.overview}
                    </p>

                    {arData.industryApplications?.length > 0 && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                        {arData.industryApplications.slice(0, 2).map((app: string, aIdx: number) => (
                          <div key={aIdx} className="flex items-center gap-2 truncate justify-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                            <span className="truncate">{app}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href={`/ar/solutions/${solution.slug}`}
                    className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200/80 hover:border-[#df9d17] transition-all shadow-xs hover:shadow-md group/btn"
                  >
                    <span>استعراض الحل والفيديو</span>
                    <ArrowUpLeft className="w-4 h-4 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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