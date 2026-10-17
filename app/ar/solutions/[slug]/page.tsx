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
      youtubeUrlAr,
faqs[]{question, answer}, 
"gallery": solutionGallery[].asset->url,
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
  const solution: any = sanitySolution ? {
    slug: slug,
    heroImage: sanitySolution.coverImage || localSolution?.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    videoUrl: sanitySolution.youtubeUrlAr || sanitySolution.youtubeUrl || (localSolution as any)?.videoUrl || (localSolution as any)?.youtubeVideoId || "",
    name: sanitySolution.titleAr || localSolution?.name,
    overviewTitle: sanitySolution.overviewTitleAr || `لماذا تتصدر ${sanitySolution.titleAr || localSolution?.name} السوق الإقليمي`,
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
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-right">
          {/* زر الرجوع لأعلى الهيرو */}
          <div className="mb-8">
            <Link
              href="/ar/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17] hover:text-black transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لكافة الحلول والخدمات</span>
            </Link>
          </div>

          {/* تقسيم الهيرو لعمودين: نصوص على اليمين + صورة بارزة على اليسار */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* جانب النصوص */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{arData.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
                {arData.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {arData.tagline}
              </p>

              {/* أزرار الأكشن */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/ar/contact"
                  className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#df9d17]/20 flex items-center gap-2"
                >
                  <span>طلب دراسة فنية وعرض سعر</span>
                  <Send className="w-4 h-4 rotate-180" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>الخط الهندسي المباشر</span>
                </a>
              </div>
            </div>

            {/* جهة الصورة البارزة المتطابقة تماماً بدون فريم أبيض مزدوج */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={solution.heroImage}
                  alt={arData.name || "حل هندسي"}
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
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                قدرات وخبرات إنشائية معتمدة
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] leading-tight font-heading">
                {solution.overviewTitle}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {arData.overview}
            </p>

            {arData.whyChooseText && (
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {arData.whyChooseText}
              </p>
            )}

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {arData.keyBenefits?.map((b: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#df9d17]/50 transition-all space-y-1.5">
                  <h4 className="text-sm font-bold text-[#0B1220] flex items-center gap-2 justify-start">
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#df9d17] flex items-center gap-2 justify-start">
                <Building2 className="w-4 h-4" />
                <span>أبرز القطاعات المستفيدة</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {arData.industryApplications?.map((app: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/60 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#df9d17] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs Table */}
            {arData.technicalSpecs?.length > 0 && (
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">أبرز المواصفات الفنية</h3>
                <div className="divide-y divide-slate-100 text-xs">
                  {arData.technicalSpecs.map((spec: any, idx: number) => (
                    <div key={idx} className="py-2.5 flex justify-between gap-4">
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-[#0B1220] text-left font-bold">{spec.value}</span>
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
            <span>فيديو توثيقي للمشاريع المنفذة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            دراسة حالة وتوثيق ميداني: {arData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            شاهد مراحل التركيب الإنشائي، الدقة الهندسية في التجهيز، والتشغيل الميداني الفعلي في مواقع عملائنا.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
          {solution.videoUrl?.includes("youtube.com") || solution.videoUrl?.includes("youtu.be") ? (
            <iframe
              className="w-full h-full"
              src={
                solution.videoUrl.includes("embed/")
                  ? solution.videoUrl
                  : `https://www.youtube.com/embed/${solution.videoUrl.split("v=")[1]?.split("&")[0] ||
                  solution.videoUrl.split("/").pop()?.split("?")[0]
                  }?rel=0&modestbranding=1`
              }
              title={arData.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src={solution.videoUrl}
                type={solution.videoUrl?.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
              />
              <source src={solution.videoUrl} />
              متصفحك لا يدعم تشغيل هذا الفيديو.
            </video>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 border-t border-slate-200/60 text-right">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            أسئلة وإجابات فنية
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            الأسئلة الشائعة حول هذا الحل
          </h2>
        </div>

        <div className="space-y-3">
          {arData.faqs?.map((faq: any, idx: number) => (
            <details
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors group cursor-pointer"
            >
              <summary className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1220] group-hover:text-[#df9d17] transition-colors">
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

      {/* Solution Gallery Section */}
      {sanitySolution?.gallery?.length > 0 && (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-12 border-t border-slate-200/60">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              معرض الصور الميداني
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] font-heading">
              مشاهد حية من التركيب والتنفيذ الميداني
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanitySolution.gallery.map((url: string, idx: number) => {
              if (!url) return null;
              return (
                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100 group">
                  <Image
                    src={url}
                    alt="صورة ميدانية للحل"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              احصل على دراسة فنية وعرض سعر متكامل
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
              استشر مهندسينا في مشروعك القادم
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              نوفر معاينات ميدانية شاملة للموقع، مخططات CAD ثلاثية الأبعاد، وعروض توريد أو تأجير تسليم مفتاح.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ar/contact"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
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