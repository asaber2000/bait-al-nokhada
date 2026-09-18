"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowLeft, 
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
    num: "٠١",
    title: "الاحترافية الهندسية",
    desc: "هندسة تصنيع متقدمة تخضع لمعايير الأمان الألمانية DIN وخبرة عريقة تمتد لأكثر من ٢٨ عاماً.",
    icon: Wrench,
  },
  {
    num: "٠٢",
    title: "أفضل قيمة وأسعار المصنع",
    desc: "أسعار تنافسية مباشرة من المصنع، مع حلول تأجير متكاملة وعائد استثماري مرتفع للشركات.",
    icon: Coins,
  },
  {
    num: "٠٣",
    title: "موثوقية وسجل إنجازات معتمد",
    desc: "هياكل شد إنشائية مستدامة تم تركيبها في أكثر من ٥,٠٠٠ مشروع ضخم في الإمارات ودول الخليج.",
    icon: ShieldIcon,
  },
];

export default function FeatureShowcaseAr() {
  return (
    <section dir="rtl" className="relative z-20 bg-[#070B14] pt-8 pb-16 px-6 lg:px-16 overflow-hidden border-t border-white/5 font-sans text-right">
      
      {/* إضاءة خلفية محيطية خفيفة */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* 1. الصف الرئيسي: النص التعريفي (H1) + صورة المشروع */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* النص من اليمين */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5 text-right"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>رواد تصنيع وتأجير الخيام في الإمارات والسعودية – منذ عام ١٩٩٧</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.25]">
              خبراء توريد، تأجير، <br className="hidden sm:inline" />
              وتصنيع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">الخيام والهياكل الإنشائية</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              تُعد شركة بيت النوخذة رائدة صناعة الخيام والهياكل النسيجية في دبي، أبوظبي، وكافة مناطق الإمارات والمملكة العربية السعودية. نصمم وننفذ خيام الفعاليات الكبرى، المستودعات التخزينية الصناعية، والتجهيزات المتطورة المعتمدة لأعلى معايير السلامة العالمية.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-105"
              >
                <span>احصل على استشارة هندسية</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* الصورة الرسمية من اليسار */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-br from-white/[0.05] to-transparent p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
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

        {/* 2. قسم Why Choose Us المدمج (H2 + 3 ركائز استراتيجية) */}
        <div className="pt-8 border-t border-white/10 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>المعيار الذهبي منذ عام ١٩٩٧</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                لماذا يختار رواد الصناعة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">بيت النوخذة؟</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              دقة في الحسابات الإنشائية وحلول تسليم مفتاح متكاملة مخصصة للمناسبات الملكية والقمم والمؤتمرات الكبرى.
            </p>
          </div>

          {/* كروت الركائز الثلاث */}
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

      </div>
    </section>
  );
}