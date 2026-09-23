"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const megaProjects = [
  {
    id: "01",
    title: "GITEX Global 2025",
    category: "TECHNOLOGY & EXHIBITION TENTS",
    client: "DUBAI WORLD TRADE CENTRE",
    location: "Dubai, UAE",
    area: "15,500 m²",
    year: "2025",
    desc: "For GITEX Global 2025, Bait Al Nokhada delivered purpose-built exhibition structures for one of the region’s leading technology events. The project was designed to support large-scale visitor environments while maintaining the high-impact presence required for a major international exhibition.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/gitex2025.webp",
    slug: "gitex-global",
  },
  {
    id: "02",
    title: "GULFOOD 2026",
    category: "EVENT & EXHIBITION TENTS",
    client: "DUBAI WORLD TRADE CENTER",
    location: "Dubai, UAE",
    area: "35000 m²",
    year: "2026",
    desc: "For Gulfood 2026, Bait Al Nokhada delivered large-scale event structures designed to support a major international food and hospitality exhibition. The project combined functional covered space with a strong presence suited to a high-profile exhibition environment.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/gulfood2026.webp",
    slug: "gulfood2026",
  },
  {
    id: "03",
    title: "DRIFTx Event 2026",
    category: "WORLDWIDE EVENTS",
    client: "WORLDWIDE EVENTS",
    location: "Abu Dhabi, UAE",
    area: "25,000 m²",
    year: "2025",
    desc: "For DRIFTx 2026 in Abu Dhabi, Bait Al Nokhada delivered a large-scale event environment supporting a technology and mobility-focused experience. The project brought together multiple tent solutions to create a functional and engaging environment for a complex event setting.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/driftx.webp",
    slug: "driftx2026",
  },
  {
    id: "04",
    title: "Netflix: Stranger Things The Experience",
    category: "IMMERSIVE ENTERTAINMENT STRUCTURE",
    client: "MIRAL DESTINATION ",
    location: "Abu Dhabi, UAE",
    area: "5000 m²",
    year: "2025",
    desc: "For Netflix’s Stranger Things: The Experience, Bait Al Nokhada delivered a distinctive event environment designed around an immersive visitor journey. The project demonstrates how our structures can combine scale, visual impact and flexibility for branded entertainment experiences.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/netflix-stranger-things.webp",
    slug: "netflix",
  },
  {
    id: "05",
    title: "Dubai Airshow 2025", 
    category: "AVIATION & EXHIBITION TENTS",
    client: "GOVERNMENT SECTOR",
    location: "Dubai, UAE",
    area: "15000 m²",
    year: "2026",
    desc: "For Dubai Airshow 2025, Bait Al Nokhada delivered large-scale temporary structures supporting one of the region’s leading aviation events. The project reflects our experience in creating professional event environments for high-profile exhibitions and demanding project requirements.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/airshow.webp",
    slug: "airshow",
  },

  {
    id: "06",
    title: "Amaal × Mansory",
    category: "SALES GALLERY",
    client: "SALES GALLERY",
    location: "Dubai, UAE",
    area: "2,500 m²",
    year: "2025",
    desc: "For Amaal × Mansory, Bait Al Nokhada delivered a purpose-built environment designed to support a premium sales and customer experience. The structure provided a prominent branded space tailored to the needs of the development and its visitors.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Featured%20Projects/amaal2025.webp",
    slug: "amaal",
  },
];

export default function FeaturedProjects() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const active = megaProjects[currentIdx];

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % megaProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + megaProjects.length) % megaProjects.length);
  };

  return (
    <section className="relative bg-[#040811] py-20 px-6 sm:px-12 lg:px-24 border-t border-white/5 overflow-hidden">

      {/* شبكة إحداثيات رادارية معمارية خلفية */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* 1. الهيدر المعماري الفاخر */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Projects<span className="text-[#D4AF37]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
            Proven Engineering at Scale: Precision modular architecture and clear-span structures deployed across royal venues and international summits.
          </p>
        </div>

        {/* 2. شريط التحكم والترقيم التفاعلي */}
        <div className="flex items-center justify-between gap-4">

          {/* مؤشرات الانتقال بالضغط */}
          <div className="flex items-center gap-2">
            {megaProjects.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIdx ? 1 : -1);
                  setCurrentIdx(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden ${currentIdx === i ? "w-12 bg-[#D4AF37]" : "w-3 bg-white/15 hover:bg-white/30"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              >
                {currentIdx === i && (
                  <motion.div
                    layoutId="activeBarGlow"
                    className="absolute inset-0 bg-white/40"
                    transition={{ duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* عداد رقمي مع أسهم النقر ثلاثية الأبعاد */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-[#D4AF37] bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-white font-bold">{active.id}</span> / 06
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-transform active:scale-90"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-[#D4AF37] hover:brightness-110 text-[#070B14] transition-transform active:scale-90 font-bold shadow-lg shadow-[#D4AF37]/20"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. شريط المواصفات الهندسية الأربعة مع انيميشن هولوغرام */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "CLIENT NAME", value: active.client, isGold: false },
            { label: "LOCATION", value: active.location, isGold: true },
            { label: "COVERED AREA", value: active.area, isGold: false },
            { label: "YEAR DELIVERED", value: active.year, isGold: false },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden backdrop-blur-md"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                {item.label}
              </span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id + item.label}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`text-xs sm:text-sm font-bold tracking-wide truncate ${item.isGold ? "text-[#D4AF37]" : "text-white"
                    }`}
                >
                  {item.value}
                </motion.p>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* 4. مسرح العرض المعماري: انفجار العدسة المركزية (Iris Shockwave Burst) */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#03060D] perspective-[1200px]">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              // تأثير انفجار العدسة من المنتصف مع فلاش ضوئي وزووم سينمائي
              initial={{
                clipPath: "circle(0% at 50% 50%)",
                scale: 1.35,
                filter: "brightness(2.2) contrast(1.1)",
              }}
              animate={{
                clipPath: "circle(150% at 50% 50%)",
                scale: 1.0,
                filter: "brightness(1) contrast(1)",
              }}
              exit={{
                scale: 0.88,
                opacity: 0,
                filter: "brightness(0.5) blur(8px)",
              }}
              transition={{
                duration: 0.45, // زمن سريع وانفجاري بدل 0.85
                ease: [0.16, 1, 0.3, 1], // منحنى تسارع حاد ورشيق
              }}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              {/* صورة المشروع مع حركة كين-بيرنز الهادئة المستمرة */}
              <motion.div
                animate={{ scale: [1, 1.05] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="relative w-full h-full"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* تظليل سينمائي ناعم يبرز العنوان */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040811] via-black/30 to-transparent pointer-events-none" />

              {/* بادج الموقع والنوع في أعلى الصورة */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {active.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{active.location}</span>
                </div>
              </div>

              {/* العنوان الكبير ينطلق مع الانفجار */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 z-20 space-y-2"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  PROJECT HIGHLIGHT 0{active.id}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
                  {active.title}
                </h3>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* حلقة الموجة الارتدادية الذهبية (Shockwave Ring Effect) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`shockwave-${active.id}`}
              initial={{ scale: 0.1, opacity: 1, borderWidth: "5px" }}
              animate={{ scale: 2.5, opacity: 0, borderWidth: "1px" }}
              transition={{ duration: 0.4, ease: "easeOut" }} // قللها إلى 0.4 ثانية
              className="pointer-events-none absolute inset-0 m-auto w-44 h-44 rounded-full border border-[#D4AF37]/80 z-30"
            />
          </AnimatePresence>
        </div>

        {/* 5. شريط نبذة المشروع وزر دراسة الحالة */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              ENGINEERING SUMMARY
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {active.desc}
            </p>
          </div>

          <Link
            href={`/projects/${active.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all text-xs font-bold uppercase tracking-widest shrink-0 group"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}