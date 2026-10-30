import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import SolutionsSection from "../components/SolutionsSection";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ClientsTicker from "../components/ClientsTicker";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { client } from "@/app/lib/sanity";

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
      { cache: "no-store" } // يضمن جلب التعديل في نفس ثانية التحديث
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
      { cache: "no-store" }
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
      <Navbar />
      <Hero sanityData={heroData} />
      <FeatureShowcase sanityData={featureShowcaseData} />
      <FeatureShowcase />
      <SolutionsSection />
      <FeaturedSolutions />
      <ClientsTicker />
      <TestimonialsSection />
      <Footer />
    </main>

  );
}