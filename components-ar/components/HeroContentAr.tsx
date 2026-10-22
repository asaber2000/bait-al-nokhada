"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft, Sparkles, Building2 } from "lucide-react";

export default function HeroContentAr() {
  return (
    <div
      dir="rtl"
      className="relative z-20 w-full h-full flex flex-col justify-between items-center px-6 sm:px-12 lg:px-20 pt-36 pb-12 pointer-events-none select-none"
    >
      {/* 1. البادج العلوية */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#df9d17] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/90">
            تأسس 1997 • رواد الهياكل الإنشائية والخيام الملكية
          </span>
        </div>
      </motion.div>

      {/* 2. كتلة العنوان الرئيسي والوصف */}
      <div className="max-w-4xl mx-auto text-center space-y-6 my-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <span className="block text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest uppercase text-[#df9d17] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            ريادة الهندسة الإنشائية والمعمارية
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-heading tracking-tight leading-[1.2] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            نبتكر الفضاءات، <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              لنصنع هيبة المكان
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-xl mx-auto text-xs sm:text-sm text-slate-100 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          حلول متكاملة لتصميم وتصنيع وتأجير خيام المعارض الكبرى والقصور والمشاريع التنموية في الإمارات والخليج بأعلى المعايير العالمية.
        </motion.p>

        {/* 3. شريط الأزرار العائم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="inline-flex items-center gap-3 p-1.5 rounded-full bg-black/50 backdrop-blur-2xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          <Link
            href="/ar/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#df9d17] hover:bg-white text-[#0B1220] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span>طلب دراسة مشروع</span>
            <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/ar/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white/10 text-white/90 hover:text-white font-medium text-xs uppercase tracking-wider transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#df9d17]" />
            <span>معرض الأعمال</span>
          </Link>
        </motion.div>
      </div>

      {/* 4. الشريط السفلي */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-300 font-medium border-t border-white/15 pt-4 pointer-events-auto"
      >
        <span className="hidden sm:inline-block">أبوظبي • دبي • الرياض</span>

        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Building2 className="w-3.5 h-3.5 text-[#df9d17]" />
          <span>تصنيع وهندسة متكاملة بأيدينا</span>
        </div>

        <span className="hidden sm:inline-block">+30 عاماً من الريادة</span>
      </motion.div>
    </div>
  );
}