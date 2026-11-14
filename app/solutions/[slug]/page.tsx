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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutionsDatabase } from "@/app/data/solutions.En";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightbox from "@/components/ProductGalleryLightbox";
import SmartVideoPlayer from "@/components/SmartVideoPlayer";

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
      _createdAt,
      _updatedAt,
      seo{
        metaTitle,
        metaDescription,
        focusKeywords,
        canonicalUrl
        },
      "catalogImage": catalogImage.asset->url,
      "gallery": solutionGalleryEn[].asset->url,
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
  const sanity = await getSolutionDetailEn(slug);
  const local = solutionsDatabase.find((s) => s.slug === slug);

  const name = sanity?.titleEn || local?.name || "Custom Tent Solution";
  const rawDesc =
    sanity?.seo?.metaDescription ||
    local?.seo?.metaDescription ||
    sanity?.summaryEn ||
    local?.tagline ||
    `Custom ${name} manufacturing, supply, and rental in UAE, Saudi Arabia, and GCC by Bait Al Nokhada Tents Factory.`;

  const metaTitle =
    sanity?.seo?.metaTitle ||
    local?.seo?.metaTitle ||
    `${name} Supplier & Rental in UAE & KSA | Bait Al Nokhada`;
  const metaDescription =
    rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;

  const canonicalUrl = `${BASE_URL}/solutions/${slug}/`;
  const arUrl = `${BASE_URL}/ar/solutions/${slug}/`;
  const ogImage =
    sanity?.coverImage ||
    sanity?.catalogImage ||
    local?.heroImage ||
    "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp";

  const keywords: string[] = Array.isArray(sanity?.seo?.focusKeywords)
    ? sanity.seo.focusKeywords
    : Array.isArray(local?.seo?.focusKeywords)
      ? local.seo.focusKeywords
      : [
          name,
          `${name} UAE`,
          `${name} Dubai`,
          `${name} Saudi Arabia`,
          `${name} rental`,
          `${name} supplier`,
          "Bait Al Nokhada Tents Factory",
        ];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-AE": canonicalUrl,
        "ar-AE": arUrl,
        "x-default": canonicalUrl,
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
      locale: "en_AE",
      alternateLocale: ["ar_AE"],
      url: canonicalUrl,
      siteName: "Bait Al Nokhada Tents Factory",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} - Bait Al Nokhada Tents Factory`,
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

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanity = await getSolutionDetailEn(slug);
  const local = solutionsDatabase.find((s) => s.slug === slug);

  const solution: any = sanity ? {
    slug: slug,
    name: sanity.titleEn || local?.name,
    overviewTitle: sanity.overviewTitleEn || local?.overviewTitle || `Why Our ${sanity.titleEn || local?.name} Lead the Market`,
    badge: sanity.badgeEn || local?.badge || "Industrial Grade",
    tagline: sanity.summaryEn || local?.tagline,
    overview: sanity.overviewDescEn1 || local?.overview,
    whyChooseText: sanity.overviewDescEn2 || local?.whyChooseText || "",
    keyBenefits: sanity.keyFeaturesGridEn || local?.keyBenefits || [],
    industryApplications: sanity.targetSectorsEn || local?.industryApplications || [],
    technicalSpecs: sanity.technicalHighlightsEn || local?.technicalSpecs || [],
    faqs: sanity.faqsEn ? sanity.faqsEn.map((f: any) => ({ q: f.question, a: f.answer })) : local?.faqs || [],
    heroImage: sanity.coverImage || local?.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    videoUrl: (sanity as any)?.youtubeUrlEn || (sanity as any)?.youtubeUrl || (local as any)?.videoUrl || (local as any)?.youtubeVideoId || "",
  } : (local || solutionsDatabase[0]);
  const galleryImages: string[] =
    sanity?.gallery?.length > 0
      ? sanity.gallery.filter(Boolean)
      : (local as any)?.gallery && (local as any).gallery.length > 0
        ? (local as any).gallery
        : [
          solution.heroImage,
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        ];

        const pageUrl = `${BASE_URL}/solutions/${slug}/`;

  const solutionJsonLd = {
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
        name: "Bait Al Nokhada",
        legalName: "Bait Al Nokhada Tents & Fabric Structures LLC",
        url: `${BASE_URL}/`,
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
            availableLanguage: ["English", "Arabic"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+97143444091",
            contactType: "customer support",
            areaServed: ["AE", "SA", "GCC", "Worldwide"],
            availableLanguage: ["English", "Arabic"],
          },
        ],
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "AdministrativeArea", name: "GCC" },
          { "@type": "Place", name: "Worldwide" },
        ],
        location: { "@id": `${BASE_URL}/#place` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: "Bait Al Nokhada Tents Factory",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-AE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${BASE_URL}/solutions/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${solution.name} | Bait Al Nokhada Tents Factory`,
        description: solution.tagline,
        datePublished: sanity?._createdAt || "2021-07-19T18:06:30+04:00",
        dateModified: sanity?._updatedAt || "2026-11-14T10:30:00+04:00",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${pageUrl}#service` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: solution.heroImage,
        },
        inLanguage: "en-AE",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: solution.name,
        description: solution.overview || solution.tagline,
        serviceType: solution.name,
        category: solution.badge,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "AdministrativeArea", name: "GCC" },
          { "@type": "Place", name: "Worldwide" },
        ],
        image: solution.heroImage,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/contact-us/`,
        },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      ...(solution.faqs && solution.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: solution.faqs.map((faq: { q: string; a: string }) => ({
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
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionJsonLd) }}
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
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

        <div className="site-container max-w-7xl mx-auto w-full relative z-10">
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

            {/* جانب النصوص */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
                {solution.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {solution.tagline}
              </p>

              {/* أزرار التواصل */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#df9d17]/20 flex items-center gap-2"
                >
                  <span>REQUEST A QUOTE</span>
                  <Send className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs uppercase tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>SPEAK WITH AN EXPERT</span>
                </a>
              </div>
            </div>

            {/* جهة الصورة البارزة - بدون باك جراوند وبكامل تفاصيل الصورة */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={solution.heroImage}
                  alt={solution.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* بادج الهوية الأنيق بالأسفل */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/95 font-sans tracking-wider text-[11px] bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-sm">
                    Bait Al Nokhada
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                  MANUFACTURING & ENGINEERING EXCELLENCE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] leading-tight font-heading">
                  {solution.overviewTitle || `Why Choose Bait Al Nokhada ${solution.name}?`}
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
                  <span>KEY INDUSTRY APPLICATIONS</span>
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
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">TECHNICAL DATA & CAPACITIES</h3>
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
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            <Video className="w-4 h-4" />
            <span>Real Project Showcase Video</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
            See Our Engineering in Action: {solution.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto">
            A real look into our on-site structural assembly, interior fit-out precision, and fast deployment across client venues.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black">
          <SmartVideoPlayer
            url={solution.videoUrl}
            title={solution.name}
            poster={solution.heroImage}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-t border-slate-200/60">
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

      {/* Gallery Showcase with Lightbox */}
      <ProductGalleryLightbox
        images={galleryImages}
        productName={solution.name}
      />
      {/* Bottom CTA */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              CUSTOM ENGINEERING & PROJECT ESTIMATION
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading">
              Plan Your Next Large-Scale Tent Solution with Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Connect with our senior engineering team for comprehensive site inspections, tailored 3D CAD layout planning, and competitive direct manufacturing or rental proposals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-[#df9d17] hover:bg-[#000000] text-white font-black text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>Submit Project Requirements</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}