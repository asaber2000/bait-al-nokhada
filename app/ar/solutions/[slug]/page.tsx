import { 
  Sparkles, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  Building2,
  PhoneCall,
  Video
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";
import { client } from "@/app/lib/sanity";

async function getSolutionDetail(slug: string) {
  try {
    const query = `*[_type == "solution" && slug.current == $slug][0]{
      titleAr, 
      badgeAr, 
      summaryAr, 
      overviewTitleAr, 
      overviewDescAr1, 
      overviewDescAr2, 
      targetSectors, 
      technicalHighlights[]{label, value},
      keyFeaturesGrid[]{title, description}, 
      videoSectionTitle, 
      youtubeUrl,
      faqs[]{question, answer}, 
      "solutionGallery": solutionGallery[]{
        "url": asset->url
      },
      "coverImage": coverImage.asset->url
    }`;
    return await client.fetch(query, { slug }, { cache: 'no-store' });
  } catch (error) {
    return null;
  }
}

export default async function ArabicSolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const sanitySolution = await getSolutionDetail(slug);
  const localSolution = solutionsDatabase.find((s) => s.slug === slug);
  
  // دمج بيانات سانتي مع البيانات المحلية كـ fallback
const solution = sanitySolution ? {
    slug: slug,
    heroImage: sanitySolution.coverImage || localSolution?.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    youtubeVideoId: sanitySolution.youtubeUrl ? sanitySolution.youtubeUrl.split("v=")[1] || "dQw4w9WgXcQ" : "dQw4w9WgXcQ",
    name: sanitySolution.titleAr || localSolution?.name,
    badge: sanitySolution.badgeAr || localSolution?.badge || "Industrial Grade",
    tagline: sanitySolution.summaryAr || localSolution?.tagline,
    overview: sanitySolution.overviewDescAr1 || localSolution?.overview,
    whyChooseText: sanitySolution.overviewDescAr2 || localSolution?.whyChooseText || "",
    keyBenefits: sanitySolution.keyFeaturesGrid || localSolution?.keyBenefits || [],
    industryApplications: sanitySolution.targetSectors || localSolution?.industryApplications || [],
    technicalSpecs: sanitySolution.technicalHighlights || localSolution?.technicalSpecs || [],
    faqs: sanitySolution.faqs ? sanitySolution.faqs.map((f: any) => ({ q: f.question, a: f.answer })) : localSolution?.faqs || []
  } : (localSolution || solutionsDatabase[0]);

  const arData = solution;
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.heroImage}
            alt={arData.name || "حل هندسي"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-right">
          <Link
            href="/ar/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لكافة الحلول والخدمات</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{arData.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              {arData.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {arData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/ar/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <span>طلب دراسة فنية وعرض سعر</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>

            <a
              href="https://wa.me/971505932598"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#0D1527] hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>الخط الهندسي المباشر</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Benefits */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-right">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                قدرات وخبرات إنشائية معتمدة
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight font-heading">
               {sanitySolution?.overviewTitleAr || `لماذا تتصدر ${arData.name} السوق الإقليمي`}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {arData.overview}
            </p>

            {arData.whyChooseText && (
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {arData.whyChooseText}
              </p>
            )}

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {arData.keyBenefits?.map((b: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0D1527] border border-white/10 space-y-1.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 justify-start">
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2 justify-start">
                <Building2 className="w-4 h-4" />
                <span>أبرز القطاعات المستفيدة</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-200">
                {arData.industryApplications?.map((app: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs Table */}
            {arData.technicalSpecs?.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#0D1527] border border-white/10 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">أبرز المواصفات الفنية</h3>
                <div className="divide-y divide-white/10 text-xs">
                  {arData.technicalSpecs.map((spec: any, idx: number) => (
                    <div key={idx} className="py-2.5 flex justify-between gap-4">
                      <span className="text-slate-400 font-semibold">{spec.label}</span>
                      <span className="text-white text-left font-medium">{spec.value}</span>
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
            <span>فيديو توثيقي للمشاريع المنفذة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
            دراسة حالة وتوثيق ميداني: {arData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
            شاهد مراحل التركيب الإنشائي، الدقة الهندسية في التجهيز، والتشغيل الميداني الفعلي في مواقع عملائنا.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl shadow-black/80 bg-black">
          <iframe
            className="w-full h-full"
            src={sanitySolution?.youtubeUrl ? sanitySolution.youtubeUrl.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/") : `https://www.youtube.com/embed/${solution.youtubeVideoId}`}
            title={arData.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 border-t border-white/10 text-right">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            أسئلة وإجابات فنية
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
            الأسئلة الشائعة حول هذا الحل
          </h2>
        </div>

        <div className="space-y-3">
          {arData.faqs?.map((faq: any, idx: number) => (
            <details
              key={idx}
              className="rounded-2xl bg-[#0D1527] border border-white/10 overflow-hidden transition-colors group cursor-pointer"
            >
              <summary className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#D4AF37] transition-colors">
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

      {/* Solution Gallery Section */}
      {sanitySolution?.solutionGallery?.length > 0 && (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              معرض الصور الميداني
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              مشاهد حية من التركيب والتنفيذ الميداني
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanitySolution.solutionGallery.map((img: any, idx: number) => {
              const imageUrl = img?.url || img; // معالجة احتياطية لرابط الصورة
              if (!imageUrl) return null;

              return (
                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
                  <Image 
                    src={imageUrl} 
                    alt="صورة ميدانية للحل" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-[#0D1527] via-[#070B14] to-[#0D1527] border border-[#D4AF37]/40 text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              احصل على دراسة فنية وعرض سعر متكامل
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-heading">
              استشر مهندسينا في مشروعك القادم
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
              نوفر معاينات ميدانية شاملة للموقع، مخططات CAD ثلاثية الأبعاد، وعروض توريد أو تأجير تسليم مفتاح.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ar/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <span>إرسال متطلبات المشروع</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}