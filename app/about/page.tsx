"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Target,
  Compass,
  Quote,
  CheckCircle2,
  Award,
  Users,
  Building,
  Calendar,
  Layers,
  ShieldCheck,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const journeyMilestones = [
  {
    year: "1997",
    badge: "ESTABLISHED IN ABU DHABI",
    title: "Foundation in Abu Dhabi",
    tagline: "30+ Years of Engineering Heritage",
    desc: "Bait Al Nokhada was established in Abu Dhabi, pioneering the manufacturing of traditional Arabic majlis tents and luxury tensile shade systems for the UAE market.",
    highlight: "First production facility established in Abu Dhabi.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/About+Page/Bait-Al-Nokhada-2005.webp",
  },
  {
    year: "2005",
    badge: "ICAD-1 INDUSTRIAL FACILITY",
    title: "Industrial & Factory Expansion",
    tagline: "40,000+ SQM Manufacturing Capacity & ISO Certified",
    desc: "Upgraded manufacturing plants to ICAD-1 (Industrial City of Abu Dhabi) spanning over 40,000 sqm, incorporating German automated CNC cutting and high-frequency HF welding.",
    highlight: "Achieved ISO 9001:2015 and DIN safety compliance certifications.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/About+Page/Bait-al-nokhada-old-logo.webp",
    imagePosition: "object-[center_60%]"
  },
  {
    year: "2015",
    badge: "GLOBAL EVENTS & EXPOS",
    title: "Large-Scale Structures for International Summits",
    tagline: "Engineering Large-Scale Event Structures Across the UAE",
    desc: "Became the premier turnkey modular structure contractor for major events including IDEX, NAVDEX, Dubai Airshow, and global state receptions.",
    highlight: "Over 3,000 mega structures successfully deployed across UAE.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/About+Page/Bait-Al-Nokhada-old.webp",
  },
  {
    year: "2022",
    badge: "GCC STRATEGIC GROWTH",
    title: "Cross-Border Delivery Across Saudi Arabia & GCC",
    tagline: "Major Infrastructure & Entertainment Deployments",
    desc: "Expanded direct operations and project offices across Saudi Arabia to cater to massive entertainment seasons and industrial logistics parks.",
    highlight: "Reliable execution of high-span industrial and royal tent projects across KSA, GCC",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/About+Page/Bait-Al-Nokhada-New-Front.webp",
    imagePosition: "object-[75%_center]",
  },
  {
    year: "Now",
    badge: "NEXT-GEN INNOVATION",
    title: "Modular Structures & Sustainable Tent Systems",
    tagline: "6,000+ Completed Projects Across the GCC",
    desc: "Integrating solar-ready tensile membranes, smart insulated acoustic panels, and sustainable double-decker pavilions for futuristic GCC landmark projects.",
    highlight: "Over 6,000+ completed projects with 100% turnkey capabilities.",
    image: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Exhibitions/Tents-for-sale-north-star-exhibition.webp",
    imagePosition: "object-[95%_center]",
  },
];

const expertiseList = [
  {
    title: "Design, Engineering & Production",
    desc: "Custom-built aluminum and steel clear-span structures manufactured in our factory. Every project follows German DIN safety standards and uses premium European fire-retardant fabrics.",
    icon: Cpu,
  },
  {
    title: "Commercial Tent Rental & Leasing",
    desc: "Extensive inventory of modular clear-span structures available for immediate deployment across Dubai, Abu Dhabi, Riyadh for major exhibitions, corporate events, and temporary storage.",
    icon: Layers,
  },
  {
    title: "VIP Fit-Out & Royal Interior Styling",
    desc: "High-end Arabic majlis linings, crystal lighting, double-glazed glass walls, automatic sliding doors, and integrated raised cassette flooring for elite private and corporate gatherings.",
    icon: Sparkles,
  },
  {
    title: "Heavy-Duty HVAC Cooling & Climate Control",
    desc: "High-capacity, low-noise industrial cooling systems designed to maintain a comfortable 21°C interior climate even during peak 50°C summer conditions in the Gulf region.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const active = journeyMilestones[activeMilestone];

  return (
    <main className="min-h-screen bg-[#040811] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-36 pb-8 px-6 sm:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Established 1997 • Engineering Legacy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] font-heading"
          >
            Pioneering Custom Tents & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Architectural Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed"
          >
            For three decades, Bait Al Nokhada has designed and manufactured premium event marquees, royal summit halls, and heavy-duty industrial warehouses across the UAE and GCC.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline */}
      <section className="pt-10 pb-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">

        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Heritage & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
            Tracing our continuous evolution from artisanal desert tent crafting to a multinational engineering powerhouse.
          </p>
        </div>

        {/* منظومة أوتار الشد والسنوات */}
        <div className="relative w-full max-w-7xl mx-auto">

          <div className="relative pt-6 pb-2">
            <div className="absolute top-[38px] left-4 right-4 h-[1px] bg-white/10 pointer-events-none" />

            <motion.div
              className="absolute top-[38px] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent pointer-events-none filter drop-shadow-[0_0_8px_#D4AF37]"
              animate={{
                left: `${(activeMilestone / (journeyMilestones.length - 1)) * 80}%`,
                width: "20%"
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />

            <div className="relative flex justify-between items-center px-4 sm:px-12">
              {journeyMilestones.map((item, idx) => {
                const isSelected = activeMilestone === idx;
                return (
                  <div key={item.year} className="flex flex-col items-center relative z-20">
                    <button
                      onClick={() => setActiveMilestone(idx)}
                      className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
                      aria-label={`Milestone ${item.year}`}
                    >
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative ${isSelected
                        ? "bg-[#070B14] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,1)] scale-110"
                        : "bg-[#040811] border-white/20 group-hover:border-white/50"
                        }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isSelected ? "bg-[#D4AF37] scale-125" : "bg-white/20 group-hover:bg-white/60"
                          }`} />

                        {isSelected && (
                          <motion.div
                            layoutId="nodeRadar"
                            className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 animate-ping pointer-events-none"
                          />
                        )}
                      </div>

                      <div className={`mt-3 px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${isSelected
                        ? "bg-[#D4AF37] text-[#070B14] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 -translate-y-0.5 font-black"
                        : "bg-[#090F1C]/80 text-slate-400 border-white/10 group-hover:text-white group-hover:border-white/30"
                        }`}>
                        {item.year}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative h-16 w-full pointer-events-none hidden sm:block overflow-visible -mt-1">
            <svg className="w-full h-full overflow-visible">
              <motion.line
                animate={{
                  x1: `${[
                    "calc(3rem + 26px)",
                    "calc(25% + 1.5rem)",
                    "50%",
                    "calc(75% - 1.5rem)",
                    "calc(100% - 3rem - 26px)"
                  ][activeMilestone]}`,
                  y1: "0px",
                  x2: "50%",
                  y2: "100%"
                }}
                stroke="#D4AF37"
                strokeWidth="2"
                strokeDasharray="5 5"
                className="opacity-80 filter drop-shadow-[0_0_6px_#D4AF37]"
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
              <motion.circle
                animate={{
                  cx: `${[
                    "calc(3rem + 26px)",
                    "calc(25% + 1.5rem)",
                    "50%",
                    "calc(75% - 1.5rem)",
                    "calc(100% - 3rem - 26px)"
                  ][activeMilestone]}`,
                  cy: "0px"
                }}
                r="3.5"
                fill="#D4AF37"
                className="filter drop-shadow-[0_0_8px_#D4AF37]"
                transition={{ duration: 0.45 }}
              />
              <circle
                cx="50%"
                cy="100%"
                r="4"
                fill="#D4AF37"
                className="filter drop-shadow-[0_0_8px_#D4AF37]"
              />
            </svg>
          </div>

          {/* مسرح الكرت المعماري الموسع بتصميم مطابق لكروت الإحصائيات */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-10 lg:p-12 min-h-[480px] flex items-center">

            <div className="absolute right-6 bottom-0 select-none pointer-events-none text-[120px] sm:text-[200px] lg:text-[240px] font-black font-mono text-white/[0.02] leading-none z-0">
              {active.year}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full relative z-10">

              {/* بوكس الصورة ثابت خارج AnimatePresence حتى لا يختفي إطلاقاً */}
              <div className="lg:col-span-7 relative h-[320px] sm:h-[355px] shadow-2xl p-2 bg-[#090F1C]/70 backdrop-blur-xl rounded-2xl group border border-white/10">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#070B14]">
                  <Image
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                    className={`object-cover ${active.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* جانب النصوص هو فقط المحاط بـ AnimatePresence ليتحرك بسرعة */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.year}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="lg:col-span-5 space-y-5 text-left"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-tight">
                      {active.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-[#D4AF37] font-medium tracking-wide">
          // {active.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                      {active.highlight}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* التحميل المسبق خارج الكارت وخارج الحركة ليعمل في خلفية الصفحة دوماً */}
            <div className="hidden pointer-events-none" aria-hidden="true">
              {journeyMilestones.map((item) => (
                <Image key={item.year} src={item.image} alt="preload" width={20} height={20} priority />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="p-8 sm:p-10 rounded-3xl bg-[#090F1C]/80 border border-white/10 hover:border-[#D4AF37]/30 transition-colors space-y-4 relative overflow-hidden backdrop-blur-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              We aim to set new standards in efficiency, durability, and architectural design through our advanced shelter systems. As a leading tent supplier in the UAE and KSA, our goal is to be the preferred choice for high-span modular structures throughout the GCC.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#090F1C]/80 border border-white/10 hover:border-[#D4AF37]/30 transition-colors space-y-4 relative overflow-hidden backdrop-blur-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Our mission is to redefine excellence as the trusted UAE tent provider and an authority in tensile fabric engineering. We engineer turn-key structures combining rapid deployment, certified German safety, and sustainable longevity.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Core Capabilities - كروت مندمجة وتفرد مع السكرول مثل الفيديو */}
      <section className="py-28 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto border-b border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            INTEGRATED SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            End-to-End Structural Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            In-house manufacturing, precision structural engineering, and fast on-site installation across the UAE & KSA.
          </p>
        </div>

        {/* حاوية الكروت المتراكبة */}
        <div className="relative flex flex-col items-center gap-4">
          {expertiseList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="w-full sticky top-28 rounded-2xl p-6 sm:p-8 bg-[#090F1C]/95 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300"
              style={{
                top: `calc(100px + ${idx * 25}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="flex items-start sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#D4AF37] font-semibold">0{idx + 1}.</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-slate-400">
                  <span className="text-xs font-mono">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Executive Message Banner */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-br from-[#090F1C] via-[#070B14] to-[#090F1C] p-8 sm:p-14 shadow-2xl">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">Executive Message</span>
                <h4 className="text-lg font-black text-white font-heading">Leadership Greetings</h4>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed italic">
              {`"At Bait Al Nokhada, we proudly blend modern modular architecture with our rich royal traditions. Every project we craft is engineered to set international benchmarks in the tensile structures industry. Our mission is simple: to deliver high-capacity shelters that combine structural integrity, aesthetic prestige, and German-certified safety across the UAE, KSA, and the GCC."`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>Executive Management • Bait Al Nokhada Tents Factory</span>
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified Engineering Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Historical Numbers Strip */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 border-t border-white/10 bg-[#070B14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Award className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">30+</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Years Experience</p>
            <p className="text-xs text-slate-400 font-light">Pioneering modular architecture in the GCC since 1997.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Users className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">3,000+</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Corporate & Gov Partners</p>
            <p className="text-xs text-slate-400 font-light">Long-term partnerships across landmark summits & ministries.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Building className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">6,000+</span>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Completed Projects</p>
            <p className="text-xs text-slate-400 font-light">High-span temporary marquees and permanent industrial shades.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}