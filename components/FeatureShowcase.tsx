"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Award, 
  Sparkles, 
  Wrench, 
  Coins, 
  ShieldCheck as ShieldIcon,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Compass
} from "lucide-react";

// كومبوننت العداد الرقمي المتصاعد
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = value / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// كرت الركيزة مع تأثير الاندماج الحركي (Convergence / Merge Animation)
function PillarCard({ pillar, idx }: { pillar: any; idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // حركة الضم والاندماج:
  // الكرت 01 يندفع من اليسار، الكرت 03 يندفع من اليمين، والوسط يصعد من الأسفل ويكبر
  const initialMotion = 
    idx === 0 
      ? { opacity: 0, x: -90, y: 30 } 
      : idx === 2 
      ? { opacity: 0, x: 90, y: 30 } 
      : { opacity: 0, scale: 0.8, y: 60 };

  return (
    <motion.div
      initial={initialMotion}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ 
        duration: 0.85, 
        delay: idx * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseMove={handleMouseMove}
      className="group relative p-7 rounded-3xl bg-[#090F1C] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
    >
      {/* هالة تفاعلية حول الماوس */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.16),
              transparent 80%
            )
          `,
        }}
      />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-black text-[#D4AF37]/80 group-hover:text-[#D4AF37] font-mono transition-colors">
            {pillar.num}
          </span>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-300">
            <pillar.icon className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-base font-black tracking-wider text-white group-hover:text-[#D4AF37] transition-colors font-heading uppercase">
          {pillar.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          {pillar.desc}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-white/5 flex items-baseline justify-between relative z-10">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          {pillar.statLabel}
        </span>
        <span className="text-lg font-black text-[#F3E5AB]">
          <Counter value={pillar.statValue} suffix={pillar.statSuffix} />
        </span>
      </div>
    </motion.div>
  );
}

const pillars = [
  {
    num: "01",
    title: "PROFESSIONALISM",
    desc: "Dedicated engineering adhering to German DIN safety benchmarks with decades of elite Middle Eastern craftsmanship.",
    icon: Wrench,
    statLabel: "Engineering Legacy",
    statValue: 29,
    statSuffix: "+ Years",
  },
  {
    num: "02",
    title: "AFFORDABILITY & VALUE",
    desc: "Direct-from-factory pricing, turnkey leasing, and high return on investment fabrication from our mega UAE manufacturing complex.",
    icon: Coins,
    statLabel: "Industrial Facility",
    statValue: 40000,
    statSuffix: " m²",
  },
  {
    num: "03",
    title: "PROVEN RELIABILITY",
    desc: "Sustainable tensile membrane structures and royal pavilions deployed across landmark government and corporate summits.",
    icon: ShieldIcon,
    statLabel: "Projects Deployed",
    statValue: 5000,
    statSuffix: "+ Units",
  },
];


export default function FeatureShowcase() {
  return (
    <section className="relative z-20 bg-[#040811] pt-12 pb-8 px-6 lg:px-16 overflow-hidden border-t border-white/5">
      
      {/* إضاءات وشبكة إحداثيات خلفية */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* 1. الصف العلوي: النص يندفع بقوة من اليسار والصورة تندفع من اليمين ويصطدمان بسلاسة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* النص من أقصى اليسار */}
          <motion.div 
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase shadow-inner"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Pioneering Modular Architecture Since 1997</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.12]">
              Tent Rental, Supplier & <br />
              Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">Experts</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Bait Al Nokhada is a premier tent manufacturing powerhouse serving Dubai, Abu Dhabi, UAE, and KSA. We engineer clear-span event marquees, high-tonnage industrial warehouses, and custom tensile membrane structures built to withstand the harshest desert climates.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-105 uppercase tracking-wider"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Fabrication Capacity: 24/7 Operations</span>
              </div>
            </div>
          </motion.div>

          {/* الصورة تندفع من أقصى اليمين */}
          <motion.div 
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-[#090F1C]/70 backdrop-blur-xl group"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#070B14]">
              <Image
                src="https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp"
                alt="Bait Al Nokhada Exhibition Tents"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white/90 font-mono pointer-events-none">
                <span className="text-[#D4AF37] font-bold">GITEX GLOBAL PAVILION</span>
                <span>CLEAR-SPAN 40M</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 2. قسم الركائز: الكروت تندمج وتضم على بعضها من الأطراف للداخل */}
        <div className="pt-10 border-t border-white/10 space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Gold Standard In Tensile Engineering</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Why Industry Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">Trust Bait Al Nokhada</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              Precision manufacturing, rapid desert deployment, and certified European structural safety standards.
            </p>
          </motion.div>

          {/* شبكة الكروت المندمجة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden p-2">
            {pillars.map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}