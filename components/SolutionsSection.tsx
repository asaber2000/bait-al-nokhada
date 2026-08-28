"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Wedding Tents",
    desc: "Bespoke royal marquees crafted for outdoor ceremonies in UAE & KSA, offering customized luxury ambiance.",
    tag: "Luxury Venues",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/wedding-tents",
  },
  {
    title: "Sports Tents",
    desc: "Engineered structures providing climate control and certified safety for stadiums, academies, and sports events.",
    tag: "High-Span",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/sports-tents",
  },
  {
    title: "Warehouse & Industrial",
    desc: "Heavy-duty clear-span temporary & permanent storage tents for logistics and industrial operations.",
    tag: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/warehouse-tents",
  },
  {
    title: "Mega Event Tents",
    desc: "Iconic event venues and summits setups featuring smart lighting, acoustic insulation, and full HVAC.",
    tag: "Global Summits",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/event-tents",
  },
  {
    title: "Ramadan Tents",
    desc: "Authentic Arabic heritage structures merged with modern elegance for Iftar gatherings and royal majlis.",
    tag: "Heritage Craft",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/ramadan-tents",
  },
  {
    title: "Exhibition & Trade Halls",
    desc: "Custom large-scale pavilions for international expos, trade fairs, and airshows across the GCC region.",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    href: "/solutions/exhibition-tents",
  },
];

export default function SolutionsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollCard = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector("div") as HTMLElement;
      const cardWidth = cardElement ? cardElement.clientWidth : 420;
      const gap = 32; // gap-8
      const shiftAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -shiftAmount : shiftAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-28 bg-[#070B14] border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* الهيدر مع مسافات جانبية أوسع بكثير (px-12 sm:px-16 lg:px-32) */}
      <div className="w-full px-12 sm:px-16 lg:px-32 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
              Turnkey Architectural Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              Bespoke Structures <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                Tailored For Every Vision
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <p className="text-slate-400 text-sm sm:text-base max-w-md font-light">
              Delivering German-standard PVC and high-grade aluminum tensile structures designed for extreme Middle East climates.
            </p>
            
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-xl shrink-0"
            >
              <span>View All Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* حاوية الكروت بنفس المسافات الواسعة المحترمة يمين ويسار */}
      <div className="w-full px-12 sm:px-16 lg:px-32 overflow-hidden mb-12">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-none pb-4 pt-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-[#0D1527]/90 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col w-[360px] sm:w-[440px] lg:w-[480px] shrink-0 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 440px, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-[#0D1527]/30 to-transparent z-10 pointer-events-none" />
                
                <span className="absolute top-5 left-5 z-20 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 shadow-lg">
                  {item.tag}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors font-heading tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors pt-2"
                >
                  <span>Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* أزرار التحريك تحت */}
      <div className="flex items-center justify-center gap-4 w-full">
        <button
          onClick={() => scrollCard("left")}
          className="p-4 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-2xl cursor-pointer"
          aria-label="Previous Card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollCard("right")}
          className="p-4 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-2xl cursor-pointer"
          aria-label="Next Card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
}