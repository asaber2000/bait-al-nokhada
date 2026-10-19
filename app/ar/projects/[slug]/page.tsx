import type { Metadata } from "next";
import { ArrowRight, Video, Boxes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { projectsDatabase } from "@/app/data/projects.Ar";
import { client } from "@/app/lib/sanity";
import ProjectInteractiveMedia from "@/components-ar/components/ProjectInteractiveMedia";

export const revalidate = 60; // كاش سريع جداً ومحدث كل دقيقة

// دالة جلب المشروع من سانتي أو البيانات المحلية كـ Server Component
async function getProjectData(slug: string) {
  try {
    const query = `*[_type in ["project", "projectAr", "projectsAr"] && slug.current == $slug][0]{
      titleAr,
      clientAr,
      locationAr,
      year,
      coveredArea,
      categoryAr,
      scopeOfWorkAr,
      engineeringChallengeAr,
      tentsUsedAr,
      specs {
        netArea,
        wallSystem,
        roofFinish,
        acSystem
      },
      "coverImage": image.asset->url,
      videoUrl,
      videoUrlAr,
      youtubeUrl,
      "galleryImages": projectGallery[]{
        "url": asset->url,
        "caption": coalesce(caption, "توثيق ميداني"),
        "type": coalesce(type, "هيكل إنشائي")
      },
      comparison {
        "before": beforeImage.asset->url,
        "after": afterImage.asset->url
      },
        seo {
        metaTitle,
        metaDescription,
        breadcrumbTitle,
        canonicalUrl,
        robots {
          noIndex,
          noFollow
        }
      }
    }`;

    const sanityItem = await client.fetch(query, { slug }, { next: { revalidate: 60 } });

    if (sanityItem) {
      return {
        titleAr: sanityItem.titleAr,
        clientAr: sanityItem.clientAr || "جهة معتمدة",
        locationAr: sanityItem.locationAr || "الإمارات",
        year: sanityItem.year || "2026",
        coveredArea: sanityItem.coveredArea || "مساحة مخصصة",
        categoryAr: sanityItem.categoryAr || "مشاريع معمارية كبرى",
        scopeOfWorkAr: sanityItem.scopeOfWorkAr || "توريد وتركيب وتسليم تسليم مفتاح.",
        engineeringChallengeAr: sanityItem.engineeringChallengeAr || "تم تنفيذ المشروع وفق أعلى المعايير الهندسية ومعايير السلامة العالمية.",
        tentsUsedAr: sanityItem.tentsUsedAr || [],
        specs: {
          netArea: sanityItem.specs?.netArea || sanityItem.coveredArea || "حسب المخطط",
          wallSystem: sanityItem.specs?.wallSystem || "هياكل ألمنيوم معيارية وألواح حماية",
          roofFinish: sanityItem.specs?.roofFinish || "أقمشة PVC مزدوجة الطبقات عازلة",
          acSystem: sanityItem.specs?.acSystem || "أنظمة تكييف متكاملة"
        },
        coverImage: sanityItem.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        videoUrl: sanityItem.videoUrlAr || sanityItem.videoUrl || sanityItem.youtubeUrl || "",
        galleryImages: sanityItem.galleryImages || [],
        comparison: sanityItem.comparison?.before && sanityItem.comparison?.after ? sanityItem.comparison : null,
        seo: sanityItem.seo || null
      };
    }
  } catch (error) {
    console.error("Error fetching project from Sanity:", error);
  }

  // البحث في المحلي عند عدم العثور عليه في سانتي
  const cleanSlug = slug.toLowerCase().trim();
  const localMatch = projectsDatabase.find((p) => p.slug.toLowerCase().trim() === cleanSlug);

  if (localMatch) {
    return {
      titleAr: localMatch.title,
      clientAr: localMatch.client,
      locationAr: `${localMatch.city}، ${localMatch.country}`,
      year: localMatch.year,
      coveredArea: localMatch.area,
      categoryAr: localMatch.category,
      scopeOfWorkAr: localMatch.description,
      engineeringChallengeAr: localMatch.challengeAndSolution,
      tentsUsedAr: localMatch.relatedProducts ? localMatch.relatedProducts.map((p: any) => p.name) : [],
      specs: {
        netArea: localMatch.area,
        wallSystem: "هياكل ألمنيوم معيارية وألواح حماية",
        roofFinish: "أقمشة PVC مزدوجة الطبقات عازلة",
        acSystem: "تكييف مركزي عالي الكفاءة"
      },
      coverImage: localMatch.coverImage,
      videoUrl: localMatch.youtubeVideoId ? `https://www.youtube.com/watch?v=${localMatch.youtubeVideoId}` : "",
      galleryImages: localMatch.galleryImages || [],
      comparison: localMatch.beforeAfter ? {
        before: localMatch.beforeAfter.before,
        after: localMatch.beforeAfter.after
      } : null,
      seo: null
    };
  }

  return null;
}

// توليد الميتا داتا والـ SEO ديناميكياً بناءً على ما يُكتب في Sanity
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return { title: "المشروع غير موجود | بيت النوخذة" };
  }

  const metaTitle = project.seo?.metaTitle || `${project.titleAr} | دراسة حالة وتنفيذ ميداني | بيت النوخذة`;
  const metaDescription = project.seo?.metaDescription || project.scopeOfWorkAr?.slice(0, 160) || "استكشف تفاصيل المشروع الهندسي ومراحل التنفيذ من بيت النوخذة.";
  const canonicalUrl = project.seo?.canonicalUrl || `https://baitalnokhada.com/ar/projects/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !project.seo?.robots?.noIndex,
      follow: !project.seo?.robots?.noFollow,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ArabicProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] flex flex-col justify-between font-sans text-right">
        <Navbar />
        <div className="text-center space-y-4 py-44">
          <h1 className="text-2xl font-black text-[#0B1220] font-heading">المشروع غير موجود</h1>
          <Link href="/ar/projects" className="text-[#df9d17] hover:underline font-bold">العودة لكافة المشاريع المنفذة</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentUrl = `https://baitalnokhada.com/ar/projects/${slug}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://baitalnokhada.com/#organization",
        "name": "بيت النوخذة للخيام والمظلات",
        "url": "https://baitalnokhada.com",
        "logo": "https://baitalnokhada.com/icons/bait-al-nokhada-final-arabic-logo.svg"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://baitalnokhada.com/ar"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "المشاريع المنفذة",
            "item": "https://baitalnokhada.com/ar/projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.seo?.breadcrumbTitle || project.titleAr,
            "item": currentUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${currentUrl}#article`,
        "headline": project.seo?.metaTitle || project.titleAr,
        "description": project.seo?.metaDescription || project.scopeOfWorkAr,
        "image": [project.coverImage],
        "inLanguage": "ar-AE",
        "mainEntityOfPage": currentUrl,
        "publisher": {
          "@id": "https://baitalnokhada.com/#organization"
        }
      }
    ]
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.titleAr}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10 text-right">
          <Link
            href="/ar/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#df9d17] hover:text-black transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لكافة المشاريع المنفذة</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 justify-start">
              {project.categoryAr && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                  {project.categoryAr}
                </span>
              )}
              {project.locationAr && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/80 text-slate-700 shadow-xs">
                  {project.locationAr}
                </span>
              )}
              {project.year && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/80 text-slate-700 shadow-xs">
                  سنة الإنجاز {project.year}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
              {project.titleAr}
            </h1>
          </div>

          {/* 2. Modern Engineering HUD Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs max-w-6xl text-right">
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">العميل</span>
              <p className="text-xs sm:text-sm font-bold text-[#0B1220] truncate">{project.clientAr}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">الموقع</span>
              <p className="text-xs sm:text-sm font-bold text-[#df9d17] truncate">{project.locationAr}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">سنة التنفيذ</span>
              <p className="text-xs sm:text-sm font-bold text-[#0B1220]">{project.year}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">المساحة المغطاة</span>
              <p className="text-xs sm:text-sm font-black text-[#df9d17]">{project.coveredArea}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/70 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">التصنيف</span>
              <p className="text-xs sm:text-sm font-bold text-[#df9d17] truncate">{project.categoryAr}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Overview & Challenge */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-right">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">نطاق العمل والإنجاز</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] font-heading">مراحل التنفيذ وتسليم المشروع</h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {project.scopeOfWorkAr}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-sm font-bold tracking-wider text-[#df9d17]">
                التحدي الهندسي والحل الميداني المنفذ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {project.engineeringChallengeAr}
              </p>
            </div>

            {/* Related Tents / Structures Used */}
            {project.tentsUsedAr && project.tentsUsedAr.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">الخيام والهياكل المنفذة في المشروع</h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tentsUsedAr.map((tentName: string, idx: number) => (
                    <div
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-bold border border-slate-200/80 shadow-xs flex items-center gap-2 hover:border-[#df9d17]/50 transition-all"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#df9d17]" />
                      <span>{tentName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1220] flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#df9d17]" />
                <span>المواصفات الهندسية والتقنية</span>
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {project.specs?.netArea && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">المساحة الصافية</span>
                    <span className="text-[#0B1220] font-bold text-left">{project.specs.netArea}</span>
                  </div>
                )}
                {project.specs?.wallSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">نظام الجدران</span>
                    <span className="text-[#0B1220] font-bold text-left">{project.specs.wallSystem}</span>
                  </div>
                )}
                {project.specs?.roofFinish && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">تشطيب السقف</span>
                    <span className="text-[#0B1220] font-bold text-left">{project.specs.roofFinish}</span>
                  </div>
                )}
                {project.specs?.acSystem && (
                  <div className="py-3 flex justify-between gap-4">
                    <span className="text-slate-500 font-medium">نظام التكييف</span>
                    <span className="text-[#0B1220] font-bold text-left">{project.specs.acSystem}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rich Media & Universal Video Player */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto space-y-12 border-b border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">التوثيق الميداني والمرئي</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">معرض الصور وفيديو المشروع</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            اضغط على أي صورة لتكبيرها وفحص تفاصيل الهيكل والتشطيبات الإنشائية.
          </p>
        </div>

        {/* Universal Video Player: يدعم S3 ويوتيوب تلقائياً */}
        {project.videoUrl && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#df9d17] justify-start">
              <Video className="w-4 h-4" />
              <span>فيديو التايم لابس والتوثيق التشغيلي للحدث</span>
            </div>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
              {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
                <iframe
                  className="w-full h-full"
                  src={
                    project.videoUrl.includes("embed/")
                      ? project.videoUrl
                      : `https://www.youtube.com/embed/${
                          project.videoUrl.split("v=")[1]?.split("&")[0] ||
                          project.videoUrl.split("/").pop()?.split("?")[0]
                        }?rel=0&modestbranding=1`
                  }
                  title={project.titleAr}
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
                    src={project.videoUrl}
                    type={project.videoUrl.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
                  />
                  متصفحك لا يدعم تشغيل هذا الفيديو.
                </video>
              )}
            </div>
          </div>
        )}

        {/* المكون التفاعلي للصور والمقارنة */}
        <ProjectInteractiveMedia
          galleryImages={project.galleryImages}
          comparison={project.comparison}
        />
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 pt-6 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-5 shadow-xs">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              استشارات هندسية متكاملة
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
              هل تخطط لتنفيذ مشروع هندسي مماثل؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              تواصل مع الإدارة الهندسية في أبوظبي ودبي للحصول على مخططات موقع مخصصة، دراسات CAD ثلاثية الأبعاد، وعروض أسعار المصنع مباشرة.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/ar/contact"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all"
            >
              <span>طلب استشارة فنية وهندسية</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}