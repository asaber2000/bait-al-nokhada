// بدلاً من الاستيراد القديم:
// import Navbar from "../../components/Navbar";
// import Hero from "../../components/Hero";

// اجعله يشير للمجلد العربي الجديد:
import type { Metadata } from "next";
import Navbar from "../../components-ar/components/Navbar.Ar";
import Hero from "../../components-ar/components/Hero";
import FeatureShowcase from "@/components-ar/components/FeatureShowcase";
import SolutionsSection from "../../components-ar/components/SolutionsSection";
import FeaturedSolutions from "../../components-ar/components/FeaturedSolutions";
import ClientsTicker from "../../components-ar/components/ClientsTicker";
import TestimonialsSection from "../../components-ar/components/TestimonialsSection";
import Footer from "@/components-ar/components/Footer.Ar";
import { client } from "@/app/lib/sanity";

export const metadata: Metadata = {
  title: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
  description:
    "30+ عامًا من التميز. موردو خيام رائدون في الإمارات والسعودية. لتأجير خيام فعاليات وزفاف ومخازن متينة وسريعة التركيب. اطلب عرض سعر مجاني اليوم!",
  keywords: [
    "موردي ومصنعي الخيام",
    "تأجير خيام وفعاليات",
    "موردو خيام في الإمارات والسعودية",
    "تأجير خيام فعاليات وزفاف",
    "خيام مخازن ومستودعات",
    "تأجير خيام دبي",
    "بيت النوخذة للخيام",
  ],
  alternates: {
    canonical: "https://baitalnokhada.com/ar/",
    languages: {
      "en-AE": "https://baitalnokhada.com/",
      "ar-AE": "https://baitalnokhada.com/ar/",
      "x-default": "https://baitalnokhada.com/",
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
    url: "https://baitalnokhada.com/ar/",
    siteName: "بيت النوخذة للخيام",
    title: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
    description:
      "30+ عامًا من التميز. موردو خيام رائدون في الإمارات والسعودية. لتأجير خيام فعاليات وزفاف ومخازن متينة وسريعة التركيب. اطلب عرض سعر مجاني اليوم!",
    images: [
      {
        url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
        width: 1080,
        height: 607,
        alt: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
    description:
      "30+ عامًا من التميز. موردو خيام رائدون في الإمارات والسعودية. لتأجير خيام فعاليات وزفاف ومخازن متينة وسريعة التركيب. اطلب عرض سعر مجاني اليوم!",
    images: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
    ],
  },
};

const arabicHomeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://baitalnokhada.com/#place",
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
      "@id": "https://baitalnokhada.com/#organization",
      name: "بيت النوخذة للخيام",
      legalName: "Bait Al Nokhada Tents & Fabric Structures LLC",
      alternateName: [
        "مصنع بيت النوخذة للخيام",
        "Bait Al Nokhada",
        "BAITALNOKHADA TENTS FACTORY - HEAD OFFICE DUBAI",
      ],
      url: "https://baitalnokhada.com/ar/",
      email: "info@baitalnokhada.com",
      telephone: "+971558850631",
      foundingDate: "1997",
      description:
        "30+ عامًا من التميز. موردو خيام رائدون في الإمارات والسعودية. لتأجير خيام فعاليات وزفاف ومخازن متينة وسريعة التركيب.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Land No. TP 010102 - Technopark",
        addressLocality: "Mina Jebel Ali",
        addressRegion: "National Industries Park - Dubai",
        postalCode: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "24.93410630",
        longitude: "55.06500100",
      },
      logo: {
        "@type": "ImageObject",
        "@id": "https://baitalnokhada.com/#logo",
        url: "https://baitalnokhada.com/bait-alnokhada-final-g.svg",
        contentUrl: "https://baitalnokhada.com/bait-alnokhada-final-g.svg",
        caption: "مصنع بيت النوخذة للخيام - المقر الرئيسي دبي",
        inLanguage: "ar-AE",
      },
      image: {
        "@id": "https://baitalnokhada.com/ar/#primaryimage",
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
      knowsAbout: [
        "تصنيع وتوريد الخيام",
        "تأجير خيام الفعاليات والمعارض",
        "خيام المخازن والمستودعات",
        "خيام الزفاف والأعراس",
        "خيام رمضان والمجالس",
        "خيام حظائر الطائرات",
        "خيام الملاعب الرياضية",
      ],
      location: {
        "@id": "https://baitalnokhada.com/#place",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://baitalnokhada.com/ar/#website",
      url: "https://baitalnokhada.com/ar/",
      name: "بيت النوخذة للخيام",
      alternateName: "مصنع بيت النوخذة للخيام",
      publisher: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      inLanguage: "ar-AE",
    },
    {
      "@type": "ImageObject",
      "@id": "https://baitalnokhada.com/ar/#primaryimage",
      url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
      contentUrl:
        "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
      width: 1080,
      height: 607,
      caption: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
      inLanguage: "ar-AE",
    },
    {
      "@type": "WebPage",
      "@id": "https://baitalnokhada.com/ar/#webpage",
      url: "https://baitalnokhada.com/ar/",
      name: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
      datePublished: "2021-07-19T18:06:30+04:00",
      dateModified: "2026-11-14T10:30:00+04:00",
      about: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      isPartOf: {
        "@id": "https://baitalnokhada.com/ar/#website",
      },
      primaryImageOfPage: {
        "@id": "https://baitalnokhada.com/ar/#primaryimage",
      },
      inLanguage: "ar-AE",
    },
    {
      "@type": "Service",
      "@id": "https://baitalnokhada.com/ar/#service",
      name: "موردي ومصنعي الخيام - تأجير خيام وفعاليات | بيت النوخذة",
      description:
        "30+ عامًا من التميز. موردو خيام رائدون في الإمارات والسعودية. لتأجير خيام فعاليات وزفاف ومخازن متينة وسريعة التركيب. اطلب عرض سعر مجاني اليوم!",
      serviceType: "تصنيع وتوريد وتأجير الخيام",
      provider: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "الإمارات العربية المتحدة" },
        { "@type": "Country", name: "المملكة العربية السعودية" },
        { "@type": "AdministrativeArea", name: "GCC" },
        { "@type": "Place", name: "Worldwide" },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
      image: {
        "@id": "https://baitalnokhada.com/ar/#primaryimage",
      },
      mainEntityOfPage: {
        "@id": "https://baitalnokhada.com/ar/#webpage",
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://baitalnokhada.com/ar/#catalog",
      name: "حلول وخيام بيت النوخذة",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام الفعاليات والمؤتمرات", url: "https://baitalnokhada.com/ar/solutions/event-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام المعارض الكبرى", url: "https://baitalnokhada.com/ar/solutions/exhibition-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام المستودعات والمخازن", url: "https://baitalnokhada.com/ar/solutions/warehouse-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام الزفاف والأعراس", url: "https://baitalnokhada.com/ar/solutions/wedding-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام رمضان والمجالس", url: "https://baitalnokhada.com/ar/solutions/ramadan-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام حظائر الطائرات", url: "https://baitalnokhada.com/ar/solutions/aircraft-hangar-tent/" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "خيام الملاعب الرياضية", url: "https://baitalnokhada.com/ar/solutions/sports-tent/" } },
      ],
    },
  ],
};

async function getArabicHomeData() {
  try {
    const [heroData, featureShowcaseData] = await Promise.all([
      client.fetch(
        `*[_type == "homeHeroAr"][0]{
          topBadge,
          subHeading,
          mainHeadingWhite,
          mainHeadingGradient,
          description,
          primaryButtonText,
          primaryButtonUrl,
          secondaryButtonText,
          secondaryButtonUrl,
          videoUrl,
          "posterUrl": posterImage.asset->url
        }`,
        {},
        { cache: "no-store" }
      ),
      client.fetch(
        `*[_type == "featureShowcaseAr"][0]{
          badgeText,
          mainHeadingBlack,
          mainHeadingGradient,
          description,
          "sideImageUrl": sideImage.asset->url,
          pillarsSectionBadge,
          pillarsSectionTitleBlack,
          pillarsSectionTitleGradient,
          pillarsSectionDescription,
          pillarsList
        }`,
        {},
        { cache: "no-store" }
      ),
    ]);

    return { heroData, featureShowcaseData };
  } catch {
    return { heroData: null, featureShowcaseData: null };
  }
}


export default async function ArabicHome() {
  const { heroData, featureShowcaseData } = await getArabicHomeData();
  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans">
      <Navbar />
      <Hero sanityData={heroData} />
      <FeatureShowcase sanityData={featureShowcaseData} />
      <SolutionsSection />
      <FeaturedSolutions />
      <ClientsTicker />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};