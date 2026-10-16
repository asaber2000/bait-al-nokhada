import {
  Sparkles,
  ArrowLeft,
  Send,
  CheckCircle2,
  ChevronDown,
  Building2,
  PhoneCall,
  Video
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutionsDatabase } from "@/app/data/solutions.En";
import { client } from "@/app/lib/sanity";

async function getSolutionDetailEn(slug: string) {
  try {
    const query = `*[_type == "solutionEn" && slug.current == $slug][0]{
      titleEn, 
      badgeEn, 
      summaryEn, 
      overviewTitleEn, 
      overviewDescEn1, 
      overviewDescEn2, 
      targetSectorsEn, 
      technicalHighlightsEn[]{label, value},
      keyFeaturesGridEn[]{title, description}, 
      videoSectionTitleEn, 
      youtubeUrlEn,
      faqsEn[]{question, answer}, 
      "gallery": solutionGalleryEn[].asset->url,
      "coverImage": coverImage.asset->url
    }`;
    return await client.fetch(query, { slug }, { cache: 'no-store' });
  } catch (error) {
    return null;
  }
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanity = await getSolutionDetailEn(slug);
  const local = solutionsDatabase.find((s) => s.slug === slug);

  const solution = sanity ? {
    slug: slug,
    name: sanity.titleEn || local?.name,
    overviewTitle: sanity.overviewTitleEn || `Why Our ${sanity.titleEn || local?.name} Lead the Market`,
    badge: sanity.badgeEn || local?.badge || "Industrial Grade",
    tagline: sanity.summaryEn || local?.tagline,
    overview: sanity.overviewDescEn1 || local?.overview,
    whyChooseText: sanity.overviewDescEn2 || local?.whyChooseText || "",
    keyBenefits: sanity.keyFeaturesGridEn || local?.keyBenefits || [],
    industryApplications: sanity.targetSectorsEn || local?.industryApplications || [],
    technicalSpecs: sanity.technicalHighlightsEn || local?.technicalSpecs || [],
    faqs: sanity.faqsEn ? sanity.faqsEn.map((f: any) => ({ q: f.question, a: f.answer })) : local?.faqs || [],
    heroImage: sanity.coverImage || local?.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    youtubeVideoId: sanity.youtubeUrlEn ? (sanity.youtubeUrlEn.split("v=")[1] || sanity.youtubeUrlEn.split("/").pop()) : local?.youtubeVideoId
  } : (local || solutionsDatabase[0]);

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.heroImage}
            alt={solution.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* زر الرجوع لأعلى الهيرو */}
          <div className="mb-8">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-[#000000] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Solutions</span>
            </Link>
          </div>

          {/* تقسيم الهيرو لعمودين: نصوص على اليسار + كرت الصورة على اليمين */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* 1. جانب النصوص */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1220] leading-[1.12] font-heading">
                {solution.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {solution.tagline}
              </p>

              {/* أزرار التواصل */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#df9d17]/20 flex items-center gap-2"
                >
                  <span>Request Solution Proposal</span>
                  <Send className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>Direct Engineering Hotline</span>
                </a>
              </div>
            </div>


            {/* جهة الصورة البارزة المتطابقة مع المنتجات بدون فريم */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={solution.heroImage}
                  alt={solution.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/80 font-sans tracking-wider text-[11px]">Bait Al Nokhada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Benefits */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                Proven Structural Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] leading-tight font-heading">
                {(solution as any).overviewTitle || solution.name}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {solution.overview}
            </p>

            {solution.whyChooseText && (
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {solution.whyChooseText}
              </p>
            )}

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {solution.keyBenefits.map((b: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#df9d17]/50 transition-all space-y-1.5">
                  <h4 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {b.desc || b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Target Industry Sectors</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {solution.industryApplications.map((app: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/60 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#df9d17] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs Table */}
            {solution.technicalSpecs?.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Technical Highlights</h3>
                <div className="divide-y divide-slate-100 text-xs">
                  {solution.technicalSpecs.map((spec: any, idx: number) => (
                    <div key={idx} className="py-2.5 flex justify-between gap-4">
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-[#0B1220] text-right font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            <Video className="w-4 h-4" />
            <span>Real Project Showcase Video</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            Featured Case Study: {solution.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            Watch our structural assembly, fit-out precision, and operational deployment in action across client sites.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${solution.youtubeVideoId}?rel=0&modestbranding=1`}
            title={solution.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 border-t border-slate-200/60">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {solution.faqs?.map((faq: any, idx: number) => (
            <details
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors group cursor-pointer"
            >
              <summary className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1220] group-hover:text-[#df9d17] transition-colors">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-[#df9d17] group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      {sanity?.gallery?.length > 0 && (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-12 border-t border-slate-200/60">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              Project Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] font-heading">
              Field Installation & Execution Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanity.gallery.map((url: string, idx: number) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100 group">
                {url && (
                  <Image
                    src={url}
                    alt="Project Gallery Image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Bottom CTA */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              Get Full Turnkey Quotation
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
              Consult with Our Engineers on Your Next Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              We provide comprehensive site inspection, 3D CAD staging diagrams, and turnkey rental or supply proposals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#df9d17] hover:bg-[#000000] text-white font-black text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>Submit Project Requirements</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}