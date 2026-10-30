// بدلاً من الاستيراد القديم:
// import Navbar from "../../components/Navbar";
// import Hero from "../../components/Hero";

// اجعله يشير للمجلد العربي الجديد:
import Navbar from "../../components-ar/components/Navbar.Ar";
import Hero from "../../components-ar/components/Hero";
import FeatureShowcase from "@/components-ar/components/FeatureShowcase";
import SolutionsSection from "../../components-ar/components/SolutionsSection";
import FeaturedSolutions from "../../components-ar/components/FeaturedSolutions";
import ClientsTicker from "../../components-ar/components/ClientsTicker";
import TestimonialsSection from "../../components-ar/components/TestimonialsSection";
import Footer from "@/components-ar/components/Footer.Ar";
import { client } from "@/app/lib/sanity";

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