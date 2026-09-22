"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { 
  ArrowLeft, 
  Award, 
  Sparkles, 
  Wrench, 
  Coins, 
  ShieldCheck as ShieldIcon 
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
      {count.toLocaleString("ar-EG")}{suffix}
    </span>
  );
}

// كرت الركيزة مع تأثير الاندماج الحركي المعكوس للـ RTL
function PillarCardAr({ pillar, idx }: { pillar: any; idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // في الـ RTL:
  // الكرت 01 على اليمين يندفع من اليمين (x: 90)
  // الكرت 03 على اليسار يندفع من اليسار (x: -90)
  // الكرت 02 الأوسط يصعد من الأسفل ويكبر
  const initialMotion = 
    idx === 0 
      ? { opacity: 0, x: 90, y: 30 } 
      : idx === 2 
      ? { opacity: 0, x: -90, y: 30 } 
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
      className="group relative p-7 rounded-3xl bg-[#090F1C] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-2xl flex flex-col justify-between overflow-hidden text-right"
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

        <h3 className="text-base font-black tracking-wider text-white group-hover:text-[#D4AF37] transition-colors font-heading">
          {pillar.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          {pillar.desc}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-white/5 flex items-baseline justify-between relative z-10">
        <span className="text-[11px] font-mono tracking-widest text-slate-500">
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
    num: "٠١",
    title: "الاحترافية الهندسية",
    desc: "هندسة تصنيع متقدمة تخضع لمعايير الأمان الألمانية DIN وخبرة عريقة تمتد لأكثر من ٢٨ عاماً.",
    icon: Wrench,
    statLabel: "الخبرة الهندسية",
    statValue: 29,
    statSuffix: "+ عاماً",
  },
  {
    num: "٠٢",
    title: "أفضل قيمة وأسعار المصنع",
    desc: "أسعار تنافسية مباشرة من المصنع، مع حلول تأجير متكاملة وعائد استثماري مرتفع للشركات.",
    icon: Coins,
    statLabel: "المجمع الصناعي",
    statValue: 40000,
    statSuffix: " م²",
  },
  {
    num: "٠٣",
    title: "موثوقية وسجل إنجازات معتمد",
    desc: "هياكل شد إنشائية مستدامة تم تركيبها في أكثر من ٥,٠٠٠ مشروع ضخم في الإمارات ودول الخليج.",
    icon: ShieldIcon,
    statLabel: "المشاريع المنفذة",
    statValue: 5000,
    statSuffix: "+ مشروع",
  },
];

export default function FeatureShowcaseAr() {
  return (
    <section dir="rtl" className="relative z-20 bg-[#040811] pt-12 pb-8 px-6 lg:px-16 overflow-hidden border-t border-white/5 text-right font-sans">
      
      {/* إضاءات وشبكة إحداثيات خلفية */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* 1. الصف العلوي: النص يندفع من اليمين والصورة تندفع من اليسار */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* النص من اليمين */}
          <motion.div 
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase shadow-inner"
            >
              <Award className="w-3.5 h-3.5" />
              <span>رواد تصنيع وتأجير الخيام في الإمارات والسعودية – منذ عام ١٩٩٧</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.25]">
              خبراء توريد، تأجير، <br />
              وتصنيع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">الخيام والهياكل الإنشائية</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              تُعد شركة بيت النوخذة رائدة صناعة الخيام والهياكل النسيجية في دبي، أبوظبي، وكافة مناطق الإمارات والمملكة العربية السعودية. نصمم وننفذ خيام الفعاليات الكبرى، المستودعات التخزينية الصناعية، والتجهيزات المتطورة المعتمدة لأعلى معايير السلامة العالمية.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-105 uppercase tracking-wider"
              >
                <span>احصل على استشارة هندسية</span>
                <ArrowLeft className="w-4 h-4" />
              </a>

              <div className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>طاقة إنتاجية وتصنيعية: عمليات على مدار الساعة</span>
              </div>
            </div>
          </motion.div>

          {/* الصورة تندفع من أقصى اليسار */}
          <motion.div 
            initial={{ opacity: 0, x: -120, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-[#090F1C]/70 backdrop-blur-xl group"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#070B14]">
              <Image
                src="https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp"
                alt="خيام المعارض والفعاليات - بيت النوخذة"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

        </div>

        {/* 2. قسم الركائز: الكروت تندمج وتضم على بعضها */}
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
                <span>المعيار الذهبي في الهندسة الإنشائية منذ عام ١٩٩٧</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                لماذا يختار رواد الصناعة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">بيت النوخذة؟</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              دقة في الحسابات الإنشائية وسرعة تركيب ميدانية معتمدة بأعلى مقاييس الأمان الهيكلي الأوروبي.
            </p>
          </motion.div>

          {/* شبكة الكروت المندمجة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden p-2">
            {pillars.map((pillar, idx) => (
              <PillarCardAr key={idx} pillar={pillar} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}