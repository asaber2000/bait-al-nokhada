import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { client } from "@/app/lib/sanity";

const FeatureShowcase = dynamic(() => import("@/components/FeatureShowcase"));
const SolutionsSection = dynamic(() => import("../components/SolutionsSection"));
const FeaturedSolutions = dynamic(() => import("@/components/FeaturedSolutions"));
const ClientsTicker = dynamic(() => import("../components/ClientsTicker"));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));
const Footer = dynamic(() => import("../components/Footer"));

// ============================================================================
// 1. SEO, GEO & AIO METADATA (مطابق لإعدادات Rank Math + تحسينات الذكاء الاصطناعي)
// ============================================================================
export const metadata: Metadata = {
  title: "Tent Manufacturers In UAE | Tent Suppliers In Dubai",
  description:
    "Bait Al Nokhada – 30+ years of excellence! Leading tent suppliers in UAE & KSA. Fast, durable event, wedding & warehouse, Ramadan tents. Get a free quote today!",
  keywords: [
    "Tent Supplier",
    "Tent Rental",
    "tent manufacturers",
    "tent suppliers in Dubai",
    "tent manufacturers in UAE",
    "warehouse tents UAE",
    "event tent rental Dubai",
    "wedding tents UAE & KSA",
    "Ramadan tents supplier",
    "Bait Al Nokhada Tents Factory",
  ],
  alternates: {
    canonical: "https://baitalnokhada.com/",
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
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    url: "https://baitalnokhada.com/",
    siteName: "Bait Al Nokhada Tents Factory",
    title: "Tent Manufacturers In UAE | Tent Suppliers In Dubai",
    description:
      "Bait Al Nokhada – 30+ years of excellence! Leading tent suppliers in UAE & KSA. Fast, durable event, wedding & warehouse, Ramadan tents. Get a free quote today!",
    images: [
      {
        url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/adipac-project-2026.webp",
        width: 1200,
        height: 630,
        alt: "Bait Al Nokhada Tents Factory - Tent Manufacturers in UAE & Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tent Manufacturers In UAE | Tent Suppliers In Dubai",
    description:
      "Bait Al Nokhada – 30+ years of excellence! Leading tent suppliers in UAE & KSA. Fast, durable event, wedding & warehouse, Ramadan tents. Get a free quote today!",
    images: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/adipac-project-2026.webp",
    ],
  },
};

// ============================================================================
// 2. JSON-LD GRAPH SCHEMA (SEO + GEO + AIO ENTITY AUTHORITY)
// ============================================================================
const homeJsonLd = {
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
      name: "Bait Al Nokhada",
      legalName: "Bait Al Nokhada Tents & Fabric Structures LLC",
      alternateName: [
        "BAITALNOKHADA TENTS FACTORY - HEAD OFFICE DUBAI",
        "Bait Al Nokhada Tents Factory",
        "بيت النوخذة للخيام",
      ],
      url: "https://baitalnokhada.com/",
      email: "info@baitalnokhada.com",
      telephone: "+971558850631",
      foundingDate: "1997",
      description:
        "Bait Al Nokhada – 30+ years of excellence! Leading tent manufacturers and suppliers in UAE & KSA. Fast, durable event, wedding, exhibition, aircraft hangar, sports, warehouse, and Ramadan tents.",
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
        url: "https://baitalnokhada.com/logo.png",
        contentUrl: "https://baitalnokhada.com/logo.png",
        caption: "BAITALNOKHADA TENTS FACTORY - HEAD OFFICE DUBAI",
        inLanguage: "en-US",
      },
      image: {
        "@id": "https://baitalnokhada.com/#primaryimage",
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
      knowsAbout: [
        "Tent Manufacturing",
        "Tent Rental",
        "Event Tents",
        "Exhibition Tents",
        "Industrial Warehouse Tents",
        "Luxury Wedding Tents",
        "Ramadan Tents",
        "Aircraft Hangar Tents",
        "Sports Tents",
      ],
      location: {
        "@id": "https://baitalnokhada.com/#place",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://baitalnokhada.com/#website",
      url: "https://baitalnokhada.com/",
      name: "BAITALNOKHADA TENTS FACTORY - HEAD OFFICE DUBAI",
      alternateName: "Bait Al Nokhada",
      publisher: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      "@id": "https://baitalnokhada.com/#primaryimage",
      url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
      contentUrl:
        "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
      width: 1080,
      height: 607,
      caption: "Professional event tent rental service in Dubai.",
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://baitalnokhada.com/#webpage",
      url: "https://baitalnokhada.com/",
      name: "Tent Manufacturers In UAE | Tent Suppliers In Dubai",
      datePublished: "2021-07-19T18:06:30+04:00",
      dateModified: "2026-11-14T10:30:00+04:00",
      about: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      isPartOf: {
        "@id": "https://baitalnokhada.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://baitalnokhada.com/#primaryimage",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://baitalnokhada.com/#service",
      name: "Tent Manufacturers in UAE | Tent Suppliers in Dubai",
      description:
        "Bait Al Nokhada – 30+ years of excellence! Leading tent suppliers in UAE & KSA. Fast, durable event, wedding & warehouse, Ramadan tents. Get a free quote today!",
      serviceType: "Tent Supplier & Manufacturer",
      provider: {
        "@id": "https://baitalnokhada.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "AdministrativeArea", name: "Gulf Cooperation Council (GCC)" },
        { "@type": "Place", name: "Worldwide" },
      ],
      image: {
        "@id": "https://baitalnokhada.com/#primaryimage",
      },
      mainEntityOfPage: {
        "@id": "https://baitalnokhada.com/#webpage",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://baitalnokhada.com/#catalog",
      name: "Bait Al Nokhada Tent Solutions & Structures",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Event Tents Rental & Supply", url: "https://baitalnokhada.com/solutions/event-tent/" } },
        { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Exhibition Tents Supply", url: "https://baitalnokhada.com/solutions/exhibition-tent/" } },
        { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Industrial Warehouse Tents", url: "https://baitalnokhada.com/solutions/warehouse-tent/" } },
        { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "Luxury Wedding Tents", url: "https://baitalnokhada.com/solutions/wedding-tent/" } },
        { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Ramadan Tents & Majlis", url: "https://baitalnokhada.com/solutions/ramadan-tent/" } },
        { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Aircraft Hangar Tents", url: "https://baitalnokhada.com/solutions/aircraft-hangar-tent/" } },
        { "@type": "ListItem", position: 7, item: { "@type": "Service", name: "Sports & Padel Court Tents", url: "https://baitalnokhada.com/solutions/sports-tent/" } },
      ],
    },
  ],
};

async function getHeroData() {
  try {
    return await client.fetch(
      `*[_type == "homeHeroEn"][0]{
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
      { next: { revalidate: 3600 } }
    );
  } catch {
    return null;
  }
}

async function getFeatureShowcaseData() {
  try {
    return await client.fetch(
      `*[_type == "featureShowcaseEn"][0]{
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
      { next: { revalidate: 3600 } }
    );
  } catch {
    return null;
  }
}

export default async function Home() {
  const heroData = await getHeroData();
  const featureShowcaseData = await getFeatureShowcaseData();

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#C99A2C] selection:text-white">
      {/* Structured Data for Search Engines & AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
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
}