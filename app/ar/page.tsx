// بدلاً من الاستيراد القديم:
// import Navbar from "../../components/Navbar";
// import Hero from "../../components/Hero";

// اجعله يشير للمجلد العربي الجديد:
import Navbar from "../../components-ar/components/Navbar.Ar";
import Hero from "../../components-ar/components/Hero";
import StatsSection from "../../components-ar/components/StatsSection";
import WhyUsSection from "../../components-ar/components/WhyUsSection";
import SolutionsSection from "../../components-ar/components/SolutionsSection";
import FeaturedProjects from "../../components-ar/components/FeaturedProjects";
import ClientsTicker from "../../components-ar/components/ClientsTicker";
import TestimonialsSection from "../../components-ar/components/TestimonialsSection";
import FaqSection from "../../components-ar/components/FaqSection";
import BlogSection from "../../components-ar/components/BlogSection";
import MapSection from "../../components-ar/components/MapSection";
import Footer from "@/components-ar/components/Footer.Ar";

export default function ArabicHome() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />
      <Hero />
      <StatsSection />
      <WhyUsSection />
      <SolutionsSection />
      <FeaturedProjects />
      <ClientsTicker />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <MapSection />
      <Footer />
    </main>
  );
};