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


export default function ArabicHome() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-[#0B1220] selection:bg-[#df9d17] selection:text-white">
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
};