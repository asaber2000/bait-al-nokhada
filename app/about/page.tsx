"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    badge: "THE FOUNDATION",
    title: "Foundation in Abu Dhabi",
    tagline: "The Inception of Quality Craftsmanship",
    desc: "Bait Al Nokhada was established in Abu Dhabi, pioneering the manufacturing of traditional Arabic majlis tents and luxury tensile shade systems for the UAE market.",
    highlight: "First production facility established in Abu Dhabi.",
    stats: { label: "Initial Workspace", value: "2,500 m²" },
    image: "https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp",
  },
  {
    year: "2005",
    badge: "INDUSTRIAL EXPANSION",
    title: "Industrial & Factory Expansion",
    tagline: "Advanced German Engineering Standards",
    desc: "Upgraded manufacturing plants to ICAD-1 (Industrial City of Abu Dhabi) spanning over 40,000 sqm, incorporating German automated CNC cutting and high-frequency HF welding.",
    highlight: "Achieved ISO 9001:2015 and DIN safety compliance certifications.",
    stats: { label: "Manufacturing Hub", value: "40,000 m²" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2015",
    badge: "GLOBAL SUMMITS",
    title: "Mega International Summits Era",
    tagline: "Leader in Diplomatic & Defense Arenas",
    desc: "Became the premier turnkey modular structure contractor for major events including IDEX, NAVDEX, Dubai Airshow, and global state receptions.",
    highlight: "Over 3,000 mega structures successfully deployed across UAE.",
    stats: { label: "Completed Deployments", value: "3,000+ Units" },
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2022",
    badge: "REGIONAL SCALING",
    title: "GCC & Saudi Arabia Expansion",
    tagline: "Cross-Border Architectural Deployments",
    desc: "Expanded direct operations and project offices across Saudi Arabia (Riyadh & Jeddah) to cater to massive entertainment seasons and industrial logistics parks.",
    highlight: "Turnkey delivery for high-span industrial & royal pavilions in KSA.",
    stats: { label: "Active GCC Hubs", value: "UAE & KSA" },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    year: "2026",
    badge: "FUTURE MODULAR ARCHITECTURE",
    title: "Next-Gen Sustainable Tensile Architecture",
    tagline: "Futuristic Modular Engineering",
    desc: "Integrating solar-ready tensile membranes, smart insulated acoustic panels, and sustainable double-decker pavilions for futuristic GCC landmark projects.",
    highlight: "Over 6,000+ completed projects with 100% turnkey capabilities.",
    stats: { label: "Total Completed", value: "6,000+ Projects" },
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
  },
];

const expertiseList = [
  {
    title: "Design, Engineering & Production",
    desc: "Specialized tailoring of clear-span structural systems seamlessly integrating innovation with luxury. Every phase is managed using premium European materials and German DIN safety standards.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    icon: Cpu,
  },
  {
    title: "Turnkey Tent Rental & Leasing",
    desc: "A massive inventory of modular structures available for rapid deployment across Dubai, Abu Dhabi, Riyadh, and Jeddah for diplomatic summits, corporate exhibitions, and private galas.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    icon: Layers,
  },
  {
    title: "Luxury Fit-Out & Royal Drapery",
    desc: "Opulent Arabic majlis linings, crystal chandeliers, glass walling, automatic sensor double doors, and integrated cassette flooring engineered for VIP prestige.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles,
  },
  {
    title: "High-Tonnage HVAC Climate Control",
    desc: "Quiet, high-capacity cooling packages engineered to maintain an ambient 21°C inside the marquee even during 50°C peak Arabian Gulf summers.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
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
        {/* خلفية الإضاءة الهندسية */}
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
            Engineering Landmark Shelters & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Architectural Tensile Structures
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed"
          >
            For nearly three decades, Bait Al Nokhada has engineered clear-span event marquees, royal summit pavilions, and heavy-duty industrial warehouses built to withstand the harshest desert climates across the UAE and GCC.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline (Dynamic Rigging Cables) */}
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

        {/* منظومة أوتار الشد والسنوات مع كابلات الربط الحية */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* كابل الشد الأفقي الرئيسي */}
          <div className="relative py-8 mb-6">
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[1px] bg-white/10 pointer-events-none" />
            
            {/* خط الطاقة المتوهج المشدود */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent pointer-events-none filter drop-shadow-[0_0_8px_#D4AF37]"
              animate={{ 
                left: `${(activeMilestone / (journeyMilestones.length - 1)) * 80}%`,
                width: "20%" 
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* محطات الأعوام الخمسة */}
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
                      {/* بكرة التثبيت (Rigging Node) */}
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative ${
                        isSelected 
                          ? "bg-[#070B14] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,1)] scale-110" 
                          : "bg-[#040811] border-white/20 group-hover:border-white/50"
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isSelected ? "bg-[#D4AF37] scale-125" : "bg-white/20 group-hover:bg-white/60"
                        }`} />
                        
                        {/* هالة رادارية تدور حول السنة المحددة */}
                        {isSelected && (
                          <motion.div 
                            layoutId="nodeRadar"
                            className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 animate-ping pointer-events-none"
                          />
                        )}
                      </div>

                      {/* شارة السنة */}
                      <div className={`mt-3 px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#070B14] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 -translate-y-1 font-black"
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

          {/* خط التوصيل الليزري المائل المتجه مباشرة إلى كرت المواصفات */}
          <div className="relative h-12 w-full overflow-visible pointer-events-none hidden sm:block">
            <svg className="w-full h-full">
              <motion.line
                x1={`${10 + (activeMilestone / (journeyMilestones.length - 1)) * 80}%`}
                y1="0"
                x2="50%"
                y2="100%"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="50%"
                cy="100%"
                r="3"
                fill="#D4AF37"
                transition={{ duration: 0.5 }}
              />
            </svg>
          </div>

          {/* مسرح الكرت المعماري المطور */}
          <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-[#070B14]/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-12 min-h-[460px] flex items-center">
            
            {/* مؤشرات الزوايا الهندسية التقنية (Truss Corner Brackets) */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-[#D4AF37]/60 flex items-center gap-1 select-none">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]/60 rounded-full" />
              <span>TENSION ANCHOR // REF-{(activeMilestone + 1) * 102}</span>
            </div>
            <div className="absolute top-4 right-4 font-mono text-[9px] text-slate-500 select-none">
              LOAD CAPACITY: 94.8%
            </div>

            {/* رقم السنة كعلامة مائية متحركة وضخمة */}
            <div className="absolute right-6 bottom-0 select-none pointer-events-none text-[120px] sm:text-[210px] font-black font-mono text-white/[0.025] leading-none z-0">
              {active.year}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10"
              >
                {/* الجانب المرئي: الصورة المعمارية مع حدود ليزرية */}
                <div className="lg:col-span-5 relative h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group bg-[#090F1C]">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent pointer-events-none" />
                  
                  {/* شريط الإحصائية السفلي */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">{active.stats.label}</span>
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider">{active.stats.value}</span>
                  </div>
                </div>

                {/* الجانب التفصيلي: البيانات وقصة التطور */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-wide">
                      {active.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-mono text-[#D4AF37] font-medium">
                      // {active.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200 font-light">
                      {active.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </section>

      {/* 3. Vision & Mission (Architectural Prism Grid) */}
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

      {/* 4. Core Capabilities (Full-Spectrum Engineering Services) */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            Full-Spectrum Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
            End-to-End Structural Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Comprehensive in-house manufacturing, structural analysis, and rapid turnkey deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#090F1C] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#070B14]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-[#090F1C]/30 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[#D4AF37]">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
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
              <span>Executive Management • Bait Al Nokhada Tents & Fabric Structures</span>
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