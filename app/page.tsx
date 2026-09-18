import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatsSection from "../components/StatsSection";
import SolutionsSection from "../components/SolutionsSection";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ClientsTicker from "../components/ClientsTicker";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <StatsSection />
      <SolutionsSection />
      <FeaturedSolutions />
      <ClientsTicker />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}