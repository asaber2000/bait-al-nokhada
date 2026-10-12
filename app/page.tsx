import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import SolutionsSection from "../components/SolutionsSection";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ClientsTicker from "../components/ClientsTicker";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#090D16] selection:bg-[#C99A2C] selection:text-white">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <SolutionsSection />
      <FeaturedSolutions />
      <ClientsTicker />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}