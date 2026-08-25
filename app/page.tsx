import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import WhyUsSection from "../components/WhyUsSection";
import SolutionsSection from "../components/SolutionsSection";
import FeaturedProjects from "../components/FeaturedProjects";
import ClientsTicker from "../components/ClientsTicker";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import BlogSection from "../components/BlogSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
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
}