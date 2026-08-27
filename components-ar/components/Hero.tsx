"use client";

import { ArrowRight, Play } from "lucide-react";

export default function ArabicHero() {
  return (
    <section 
      dir="rtl" 
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden bg-[#070B14] text-center"
    >
      
      {/* خلفية الفيديو - تم تحويلها إلى absolute طبيعي مع منع أي زووم عبر object-cover وثبات الحاوية */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-75 filter brightness-105"
        >
          <source src="/Dubai Harbor Short Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/80 via-transparent to-[#070B14]/90" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-6 pt-16">
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg font-heading">
          الريادة والبراعة الهندسية <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
            في صناعة الهياكل الفاخرة
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto font-light drop-shadow">
          هندسة أرقى القاعات الملكية ومظلات الشد الإنشائي الذكية في مختلف أنحاء الشرق الأوسط.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all duration-300 hover:scale-[1.02]"
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
        </div>
      </div>

    </section>
  );
}