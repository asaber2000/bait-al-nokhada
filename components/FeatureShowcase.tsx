"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Wrench, 
  Coins, 
  ShieldCheck as ShieldIcon 
} from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "PROFESSIONALISM",
    desc: "Dedicated engineering adhering to German DIN safety benchmarks with 28+ years of craftsmanship.",
    icon: Wrench,
  },
  {
    num: "02",
    title: "AFFORDABILITY & VALUE",
    desc: "Direct-from-factory pricing, turnkey leasing, and high return on investment fabrication.",
    icon: Coins,
  },
  {
    num: "03",
    title: "PROVEN RELIABILITY",
    desc: "Sustainable tensile membrane structures deployed across 5,000+ mega projects in UAE & GCC.",
    icon: ShieldIcon,
  },
];

const badges = [
  { icon: Award, label: "5,000+ Projects Delivered" },
  { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
  { icon: CheckCircle2, label: "All 7 Emirates Coverage" },
  { icon: Clock, label: "24/7 Field Support" },
  { icon: Flame, label: "Certified Fire-Retardant PVC" },
];

export default function FeatureShowcase() {
  return (
    <section className="relative z-20 bg-[#070B14] pt-8 pb-16 px-6 lg:px-16 overflow-hidden border-t border-white/5">
      
      {/* إضاءة خلفية محيطية خفيفة */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* 1. الصف الرئيسي: النص التعريفي (H1) + صورة المشروع */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* النص من الشمال */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Experts in UAE & KSA – Since 1997</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.15]">
              Tent Rental, Supplier & <br className="hidden sm:inline" />
              Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">Experts</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Bait Al Nokhada is a leading tent manufacturing company serving Dubai, Abu Dhabi, UAE, and KSA. We engineer premium event marquees, industrial storage structures, and specialized military setups compliant with international safety benchmarks.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* الصورة الرسمية من اليمين */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-br from-white/[0.05] to-transparent p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp"
                alt="Bait Al Nokhada Exhibition Tents"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-xl">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Certified International Standards</p>
                  <p className="text-[10px] text-slate-400">German DIN & Fire-Retardant PVC</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 2. قسم Why Choose Us المدمج (H2 + 3 Strategic Pillars مضغوطة) */}
        <div className="pt-8 border-t border-white/10 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Gold Standard Since 1997</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Why Industry Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">Trust Bait Al Nokhada</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              Precision engineering and turnkey installations tailored for royal venues and corporate summits.
            </p>
          </div>

          {/* كروت الركائز الثلاث مضغوطة وأنيقة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors">
                      {pillar.num}
                    </span>
                    <pillar.icon className="w-5 h-5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <h3 className="text-base font-extrabold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 3. شريط أختام الجودة والاعتمادات (Badges Strip) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-all text-center space-y-2 group shadow-md"
            >
              <div className="p-2 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070B14] transition-all duration-300">
                <badge.icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}