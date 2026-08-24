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
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.heroImage}
            alt={solution.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{solution.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              {solution.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {solution.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <span>Request Solution Proposal</span>
              <Send className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/971505932598"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#0D1527] hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Engineering Hotline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Benefits */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Proven Structural Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight font-heading">
                Why Our {solution.name} Lead the Market
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {solution.overview}
            </p>

            {solution.whyChooseText && (
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {solution.whyChooseText}
              </p>
            )}

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {solution.keyBenefits.map((b: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0D1527] border border-white/10 space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {b.desc || b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0D1527] border border-[#D4AF37]/30 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Target Industry Sectors</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-200">
                {solution.industryApplications.map((app: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs Table */}
            {solution.technicalSpecs?.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#0D1527] border border-white/10 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Highlights</h3>
                <div className="divide-y divide-white/10 text-xs">
                  {solution.technicalSpecs.map((spec: any, idx: number) => (
                    <div key={idx} className="py-2.5 flex justify-between gap-4">
                      <span className="text-slate-400 font-semibold">{spec.label}</span>
                      <span className="text-white text-right font-medium">{spec.value}</span>
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
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Video className="w-4 h-4" />
            <span>Real Project Showcase Video</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
            Featured Case Study: {solution.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
            Watch our structural assembly, fit-out precision, and operational deployment in action across client sites.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl shadow-black/80 bg-black">
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
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 border-t border-white/10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {solution.faqs?.map((faq: any, idx: number) => (
            <details
              key={idx}
              className="rounded-2xl bg-[#0D1527] border border-white/10 overflow-hidden transition-colors group cursor-pointer"
            >
              <summary className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#D4AF37] transition-colors">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-[#D4AF37] group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      {sanity?.gallery?.length > 0 && (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Project Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Field Installation & Execution Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanity.gallery.map((url: string, idx: number) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
                {url && (
                  <Image 
                    src={url} 
                    alt="Project Gallery Image" 
                    fill 
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
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-[#0D1527] via-[#070B14] to-[#0D1527] border border-[#D4AF37]/40 text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Get Full Turnkey Quotation
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-heading">
              Consult with Our Engineers on Your Next Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
              We provide comprehensive site inspection, 3D CAD staging diagrams, and turnkey rental or supply proposals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
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