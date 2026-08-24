"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Building2, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section dir="rtl" className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 overflow-hidden bg-[#070B14] text-center">
      
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 filter brightness-105 will-change-transform"
        >
          <source src="/Dubai Harbor Short Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-[#070B14]/80 via-transparent to-[#070B14]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto text-center space-y-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg font-heading"
        >
          الريادة والبراعة الهندسية <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
            في صناعة الهياكل الفاخرة
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-light drop-shadow"
        >
          هندسة أرقى القاعات الملكية ومظلات الشد الإنشائي الذكية في مختلف أنحاء الشرق الأوسط.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-[#070B14] bg-linear-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>استكشاف المعرض البارز</span>
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-black/40 border border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
          >
            <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>مشاهدة الفيلم التعريفي</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/15 backdrop-blur-[2px] text-right"
      >
        <div className="flex items-center gap-3 justify-start">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Award className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">+28</div>
            <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">سنة من الريادة</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-start">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">+5,000</div>
            <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">هيكل مصنع ومبني</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-start">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Globe2 className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">+12</div>
            <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">دولة خليجية وإقليمية</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-start">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-lg font-bold text-[#D4AF37]">99%</span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">ثقة مطلقة</div>
            <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">عملاء المؤسسات الكبرى</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}