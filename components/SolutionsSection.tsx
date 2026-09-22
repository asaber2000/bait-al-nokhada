"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "Exhibition & Trade Halls",
    desc: "Custom large-scale pavilions for international expos, trade fairs, and airshows across the GCC region.",
    tag: "Commercial",
    specs: "Up to 60m Clear-Span • High Wind Load",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
    href: "/solutions/exhibition-tents",
  },
  {
    id: "02",
    title: "Wedding Tents",
    desc: "Bespoke royal marquees crafted for outdoor ceremonies in UAE & KSA, offering customized luxury ambiance.",
    tag: "Luxury Venues",
    specs: "Acoustic Glass Walls • Royal Drapery",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
    href: "/solutions/wedding-tents",
  },
  {
    id: "03",
    title: "Sports Tents",
    desc: "Engineered structures providing climate control and certified safety for stadiums, academies, and sports events.",
    tag: "High-Span",
    specs: "Thermal Roof Insulation • FIFA / Sports Specs",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90",
    href: "/solutions/sports-tents",
  },
  {
    id: "04",
    title: "Warehouse & Industrial",
    desc: "Heavy-duty clear-span temporary & permanent storage tents for logistics and industrial operations.",
    tag: "Industrial",
    specs: "Rapid Deployment • German DIN Safety Standards",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90",
    href: "/solutions/warehouse-tents",
  },
  {
    id: "05",
    title: "Mega Event Tents",
    desc: "Iconic event venues and summits setups featuring smart lighting, acoustic insulation, and full HVAC.",
    tag: "Global Summits",
    specs: "Multi-Tiered Staging • Heavy-Duty HVAC Integration",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=90",
    href: "/solutions/event-tents",
  },
  {
    id: "06",
    title: "Ramadan Tents",
    desc: "Authentic Arabic heritage structures merged with modern elegance for Iftar gatherings and royal majlis.",
    tag: "Heritage Craft",
    specs: "Custom Interior Majlis • Fire Retardant PVC",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=90",
    href: "/solutions/ramadan-tents",
  },
];

export default function SolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = solutions[selectedIdx];

  return (
    <section className="relative py-28 bg-[#040811] border-t border-white/10 overflow-hidden">
      
      {/* خلفية معمارية ناعمة */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* الهيدر العلوي */}
      <div className="w-full px-6 sm:px-12 lg:px-24 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
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
              Explore our comprehensive range of high-span modular tents, tensioned fabric membranes, and custom event halls.
            </p>
            
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 text-xs font-bold uppercase tracking-widest shrink-0"
            >
              <span>View All 13 Lines</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* شاشة العرض التفاعلية المنقسمة (Split Interactive Showcase) */}
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الجانب الأيسر: شاشة العرض السينمائية الكبيرة الثابتة */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[540px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#070B14]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* شريط معلومات فوق الصورة يعطي طابع المعارض الهندسية */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {activeItem.tag}
                </span>
                <span className="font-mono text-sm tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg">
                  {activeItem.id} / 06
                </span>
              </div>

              {/* شريط المواصفات التقنية في الأسفل */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070B14]/80 backdrop-blur-md border border-white/10 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>{activeItem.specs}</span>
                </div>
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* الجانب الأيمن: قائمة الحلول التفاعلية الستة */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-white/10">
            {solutions.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group py-5 transition-all duration-300 cursor-pointer flex flex-col justify-center px-4 rounded-2xl ${
                    isSelected ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? "text-[#D4AF37]" : "text-slate-600 group-hover:text-slate-400"
                      }`}>
                        {item.id}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-wide transition-colors ${
                        isSelected ? "text-white" : "text-slate-400 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border transition-all ${
                      isSelected 
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#070B14] rotate-45" 
                        : "border-white/10 text-slate-500 group-hover:border-white/30 group-hover:text-white"
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* الشرح يظهر بنعومة للحل المختار حالياً */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-10 sm:pl-12 pt-3"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}