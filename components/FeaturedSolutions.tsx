"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "gitex",
    title: "GITEX Global 2025",
    client: "DUBAI WORLD TRADE CENTER",
    location: "Dubai, UAE",
    year: "2025",
    coveredArea: "15500 m²",
    category: "TECHNOLOGY & EXHIBITION TENTS",
    desc: "For GITEX Global 2025, Bait Al Nokhada delivered purpose-built exhibition structures for one of the region’s leading technology events. The project was designed to support large-scale visitor environments while maintaining the high-impact presence required for a major international exhibition.",
    img: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
  },
  {
    id: "gulfood",
    title: "GULFOOD 2026",
    client: "DUBAI WORLD TRADE CENTER",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "35000 m²",
    category: "EVENT & EXHIBITION TENTS",
    desc: "For Gulfood 2026, Bait Al Nokhada delivered large-scale event structures designed to support a major international food and hospitality exhibition. The project combined functional covered space with a strong presence suited to a high-profile exhibition environment.",
    img: "/webp/gulfood2026.webp",
  },
  {
    id: "driftx",
    title: "DRIFTx Event 2026",
    client: "WORLDWIDE EVENTS",
    location: "Abu Dhabi, UAE",
    year: "2025",
    coveredArea: "10000 m²",
    category: "MOBILITY & TECHNOLOGY EVENT",
    desc: "For DRIFTx 2026 in Abu Dhabi, Bait Al Nokhada delivered a large-scale event environment supporting a technology and mobility-focused experience. The project brought together multiple tent solutions to create a functional and engaging environment for a complex event setting.",
    img: "/webp/driftx.webp",
  },
  {
    id: "netflix",
    title: "Netflix: Stranger Things The Experience",
    client: "MIRAL DESTINATION ",
    location: "Abu Dhabi, UAE",
    year: "2025",
    coveredArea: "5000 m²",
    category: "IMMERSIVE ENTERTAINMENT STRUCTURE",
    desc: "For Netflix’s Stranger Things: The Experience, Bait Al Nokhada delivered a distinctive event environment designed around an immersive visitor journey. The project demonstrates how our structures can combine scale, visual impact and flexibility for branded entertainment experiences.",
    img: "/webp/netflix-stranger-things.webp",
  },
  {
    id: "airshow",
    title: "Dubai Airshow 2025",  
    client: "GOVERNMENT SECTOR", 
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "15000 m²",
    category: "AVIATION & EXHIBITION TENTS",
    desc: "For Dubai Airshow 2025, Bait Al Nokhada delivered large-scale temporary structures supporting one of the region’s leading aviation events. The project reflects our experience in creating professional event environments for high-profile exhibitions and demanding project requirements.",
    img: "/webp/airshow.webp",
  },
  {
    id: "amaal",
    title: "Amaal × Mansory",
    client: "SALES GALLERY",
    location: "Dubai, UAE",
    year: "2025",
    coveredArea: "2,500 m²",
    category: "SALES GALLERY",
    desc: "For Amaal × Mansory, Bait Al Nokhada delivered a purpose-built environment designed to support a premium sales and customer experience. The structure provided a prominent branded space tailored to the needs of the development and its visitors.",
    img: "/webp/amaal2025.webp",
  }
];

export default function FeaturedSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = projects[currentIndex];
  // تجهيز رابط الصورة التالية لتنزيلها بالخلفية بدون إثقال المعالج
  const nextProjectIndex = (currentIndex + 1) % projects.length;


  return (
    <section className="relative w-full -mt-10 sm:-mt-16 pt-0 pb-12 sm:pb-20 px-4 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden">
      
      {/* هيدر القسم الرئيسي */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 border-b border-white/10 pb-6 max-w-7xl mx-auto">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
            Featured Projects.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
          Proven Engineering at Scale: Discover how our custom clear-span tents and heavy-duty structural enclosures deliver reliable covered spaces across the UAE & GCC.
        </p>
      </div>

      {/* شريط التحكم الموحد */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between bg-[#0F172A] sm:bg-[#0F172A]/90 border border-white/10 rounded-2xl p-3 sm:px-6 sm:py-4 sm:backdrop-blur-md">
          {/* المؤشرات التفاعلية النقاط */}
          <div className="flex items-center gap-1 pl-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="py-3 px-1.5 inline-flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label={`Go to project ${idx + 1}`}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 sm:w-10 bg-[#D4AF37]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

          {/* العداد وأزرار الأسهم */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-mono text-slate-400 select-none">
              <span className="text-white font-bold text-sm sm:text-base">0{currentIndex + 1}</span> / 0{projects.length}
            </span>
            
            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 active:scale-95 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="p-2.5 sm:p-3 rounded-xl bg-[#D4AF37] active:scale-95 hover:brightness-110 text-black font-bold transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                aria-label="Next Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* تفاصيل المشروع بالكامل بأنيميشن CSS فائق السرعة */}
      <div 
        key={activeProject.id}
        className="flex flex-col gap-6 w-full max-w-7xl mx-auto transition-opacity duration-300 animate-fadeIn"
      >
        {/* كروت المعلومات السريعة بدون blur على الموبايل */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1 truncate">
              CLIENT NAME
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.client}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
              Location
            </span>
            <p className="text-xs sm:text-base font-bold text-[#D4AF37] truncate">{activeProject.location}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
              Covered Area
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.coveredArea}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
              YEAR DELIVERED
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.year}</p>
          </div>
        </div>

        {/* حاوية الصورة والاسم */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] lg:aspect-[21/10] rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-xl">
          <Image  
            src={activeProject.img}
            alt={`${activeProject.title} - ${activeProject.category} by Bait Al Nokhada Tents`}
            fill
            quality={80}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 800px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col gap-1 sm:gap-2">
            <span className="text-[10px] sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
              {activeProject.category}
            </span>
            <h3 className="text-base sm:text-4xl font-bold font-heading text-white leading-tight">
              {activeProject.title}
            </h3>
          </div>
        </div>

        {/* المواصفات الفنية والنظرة العامة */}
        <div className="bg-[#0F172A] sm:bg-[#0F172A]/60 border border-white/10 p-5 sm:p-8 rounded-3xl sm:backdrop-blur-xl flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
            PROJECT HIGHLIGHTS
          </span>
          <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
            {activeProject.desc}
          </p>
        </div>
      </div>
      <div className="sr-only">
        {projects.map((p) => (
          <article key={p.id}>
            <h3>{p.title} - {p.category}</h3>
            <p>{p.desc}</p>
            <span>{p.location} - {p.coveredArea}</span>
          </article>
        ))}
      </div>

    </section>
  );
}