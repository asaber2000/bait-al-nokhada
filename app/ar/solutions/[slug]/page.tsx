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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { solutionsDatabase } from "@/app/data/solutions.Ar";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightboxAr from "@/components-ar/components/ProductGalleryLightbox";
import SmartVideoPlayerAr from "@/components-ar/components/SmartVideoPlayerAr";

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
_createdAt,
_updatedAt,
seo{
  metaTitle,
  metaDescription,
  focusKeywords,
  canonicalUrl
  },
"catalogImage": catalogImage.asset->url,
"gallery": solutionGallery[].asset->url,
"coverImage": coverImage.asset->url
    }`;
    return await client.fetch(query, { slug }, { cache: 'no-store' });
  } catch (error) {
    return null;
  }
}

const BASE_URL = "https://baitalnokhada.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sanitySolution = await getSolutionDetail(slug);
  const localSolution = solutionsDatabase.find((s) => s.slug === slug);

  const name = sanitySolution?.titleAr || localSolution?.name || "حلول الخيام";
  const rawDesc =
    sanitySolution?.seo?.metaDescription ||
    localSolution?.seo?.metaDescription ||
    sanitySolution?.summaryAr ||
    localSolution?.tagline ||
    `تصنيع وتوريد وتأجير ${name} في الإمارات والسعودية ودول الخليج من مصنع بيت النوخذة للخيام.`;

  const metaTitle =
    sanitySolution?.seo?.metaTitle ||
    localSolution?.seo?.metaTitle ||
    `${name} | تصنيع وتأجير في الإمارات والسعودية | بيت النوخذة`;
  const metaDescription =
    rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;

  const canonicalUrl = `${BASE_URL}/ar/solutions/${slug}/`;
  const enUrl = `${BASE_URL}/solutions/${slug}/`;
  const ogImage =
    sanitySolution?.coverImage ||
    sanitySolution?.catalogImage ||
    localSolution?.heroImage ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp";

  const keywords: string[] = Array.isArray(sanitySolution?.seo?.focusKeywords)
    ? sanitySolution.seo.focusKeywords
    : Array.isArray(localSolution?.seo?.focusKeywords)
      ? localSolution.seo.focusKeywords
      : [
          name,
          `تأجير ${name}`,
          `${name} الإمارات`,
          `${name} دبي`,
          `${name} السعودية`,
          `تصنيع وتوريد ${name}`,
          "بيت النوخذة للخيام",
        ];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-AE": enUrl,
        "ar-AE": canonicalUrl,
        "x-default": enUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_AE",
      alternateLocale: ["en_AE"],
      url: canonicalUrl,
      siteName: "مصنع بيت النوخذة للخيام",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} - بيت النوخذة للخيام`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export default async function ArabicSolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const sanitySolution = await getSolutionDetail(slug);
  const localSolution = solutionsDatabase.find((s) => s.slug === slug);

  // دمج بيانات سانتي مع البيانات المحلية كـ fallback
  const solution: any = sanitySolution ? {
    slug: slug,
    catalogImage: sanitySolution.catalogImage || (localSolution as any)?.catalogImage || sanitySolution.coverImage || localSolution?.heroImage,
    heroImage: sanitySolution.coverImage || localSolution?.heroImage || sanitySolution.catalogImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    videoUrl: sanitySolution.youtubeUrlAr || sanitySolution.youtubeUrl || (localSolution as any)?.videoUrl || (localSolution as any)?.youtubeVideoId || "",
    name: sanitySolution.titleAr || localSolution?.name,
    overviewTitle: sanitySolution.overviewTitleAr || localSolution?.overviewTitle || `لماذا تتصدر ${sanitySolution.titleAr || localSolution?.name} السوق الإقليمي`,
    badge: sanitySolution.badgeAr || localSolution?.badge || "Industrial Grade",
    tagline: sanitySolution.summaryAr || localSolution?.tagline,
    overview: sanitySolution.overviewDescAr1 || localSolution?.overview,
    whyChooseText: sanitySolution.overviewDescAr2 || localSolution?.whyChooseText || "",
    keyBenefits: sanitySolution.keyFeaturesGrid || localSolution?.keyBenefits || [],
    industryApplications: sanitySolution.targetSectors || localSolution?.industryApplications || [],
    technicalSpecs: sanitySolution.technicalHighlights || localSolution?.technicalSpecs || [],
    faqs: sanitySolution.faqs ? sanitySolution.faqs.map((f: any) => ({ q: f.question, a: f.answer })) : localSolution?.faqs || []
  } : (
    localSolution
      ? {
        ...localSolution,
        videoUrl: (localSolution as any)?.videoUrl || (localSolution as any)?.youtubeVideoId || "",
      }
      : solutionsDatabase[0]
  );
  const galleryImages: string[] =
    sanitySolution?.gallery?.length > 0
      ? sanitySolution.gallery.filter(Boolean)
      : (localSolution as any)?.gallery && (localSolution as any).gallery.length > 0
        ? (localSolution as any).gallery
        : [
          solution.heroImage,
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        ];

  const arData = solution;

const pageUrl = `${BASE_URL}/ar/solutions/${slug}/`;

  const arabicSolutionJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${BASE_URL}/#place`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: "24.93410630",
          longitude: "55.06500100",
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=24.93410630,55.06500100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Land No. TP 010102 - Technopark",
          addressLocality: "Mina Jebel Ali",
          addressRegion: "National Industries Park - Dubai",
          postalCode: "Dubai",
          addressCountry: "AE",
        },
      },
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BASE_URL}/#organization`,
        name: "بيت النوخذة للخيام",
        legalName: "Bait Al Nokhada Tents & Fabric Structures LLC",
        url: `${BASE_URL}/ar/`,
        email: "info@baitalnokhada.com",
        telephone: "+971558850631",
        foundingDate: "1997",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/bait-alnokhada-final-g.svg`,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971558850631",
            contactType: "customer support",
            areaServed: ["AE", "SA", "GCC", "Worldwide"],
            availableLanguage: ["Arabic", "English"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+97143444091",
            contactType: "customer support",
            areaServed: ["AE", "SA", "GCC", "Worldwide"],
            availableLanguage: ["Arabic", "English"],
          },
        ],
        areaServed: [
          { "@type": "Country", name: "الإمارات العربية المتحدة" },
          { "@type": "Country", name: "المملكة العربية السعودية" },
          { "@type": "AdministrativeArea", name: "GCC" },
          { "@type": "Place", name: "Worldwide" },
        ],
        location: { "@id": `${BASE_URL}/#place` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/ar/#website`,
        url: `${BASE_URL}/ar/`,
        name: "مصنع بيت النوخذة للخيام",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "ar-AE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: `${BASE_URL}/ar/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "الحلول",
            item: `${BASE_URL}/ar/solutions/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: localSolution?.seo?.breadcrumbTitle || arData.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${arData.name} | مصنع بيت النوخذة للخيام`,
        description: arData.tagline,
        datePublished: sanitySolution?._createdAt || "2021-07-19T18:06:30+04:00",
        dateModified: sanitySolution?._updatedAt || "2026-11-14T10:30:00+04:00",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        isPartOf: { "@id": `${BASE_URL}/ar/#website` },
        about: { "@id": `${pageUrl}#service` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: solution.heroImage,
        },
        inLanguage: "ar-AE",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: arData.name,
        description: arData.overview || arData.tagline,
        serviceType: arData.name,
        category: arData.badge,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "الإمارات العربية المتحدة" },
          { "@type": "Country", name: "المملكة العربية السعودية" },
          { "@type": "AdministrativeArea", name: "GCC" },
          { "@type": "Place", name: "Worldwide" },
        ],
        image: solution.heroImage,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/ar/contact-us/`,
        },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      ...(arData.faqs && arData.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: arData.faqs.map((faq: { q: string; a: string }) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arabicSolutionJsonLd) }}
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full relative z-10 text-right">
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

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
                {arData.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {arData.tagline}
              </p>

              {/* أزرار الأكشن */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/ar/contact-us"
                  className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#df9d17]/20 flex items-center gap-2"
                >
                  <span>طلب عرض سعر</span>
                  <Send className="w-4 h-4 rotate-180" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>تحدث مع أحد خبرائنا</span>
                </a>
              </div>
            </div>

            {/* جهة الصورة البارزة - بدون باك جراوند وبكامل تفاصيل الصورة */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={solution?.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
                  alt={arData?.name || "حل هندسي"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* بادج الهوية الأنيق بالأسفل */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/95 font-sans tracking-wider text-[11px] bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-sm">
                    بيت النوخذة
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Benefits */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="site-container max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-right">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                  معايير التصنيع الإنشائي المعتمد
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
                  <span>التطبيقات ومجالات الاستخدام</span>
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
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">المواصفات الفنية والهندسية</h3>
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
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            <Video className="w-4 h-4" />
            <span>التنفيذ الميداني والجاهزية الإنشائية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            شاهد دقة التنفيذ على أرض الواقع: {arData.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            توثيق ميداني مباشر يوضح مراحل التركيب الإنشائي السريع، والدقة الهندسية في التجهيز الداخلي بمواقع مشاريعنا.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
          <SmartVideoPlayerAr
            url={solution.videoUrl}
            title={arData.name}
            poster={solution.heroImage}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-t border-slate-200/60 text-right">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            أسئلة وأجوبة
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            الأسئلة الشائعة
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

      {/* معرض صور مشاريع الحل الهندسي */}
      <ProductGalleryLightboxAr
        images={galleryImages}
        productName={arData.name}
      />
      {/* Bottom CTA */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              استشارات هندسية ودراسة للمشاريع
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
              خطط لمشروعك القادم مع مهندسي بيت النوخذة
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              تواصل مباشرة مع فريقنا الهندسي للحصول على معاينة ميدانية للموقع، ومخططات توزيع ثلاثية الأبعاد (3D CAD)، وعروض أسعار منافسة للتصنيع المباشر أو التأجير.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ar/contact-us"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>أرسل متطلبات مشروعك</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}