"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpLeft, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const megaProjectsAr = [
  {
    id: "٠١",
    title: "جيتكس جلوبال 2025",
    category: "خيام وقاعات التكنولوجيا والمعارض الكبرى",
    client: "مركز دبي التجاري العالمي",
    location: "دبي، الإمارات",
    area: "١٥,٥٠٠ م²",
    year: "٢٠٢٥",
    desc: "لمعرض جيتكس جلوبال، نفذت بيت النوخذة هياكل وقاعات مخصصة لأحد أضخم الفعاليات التقنية عالمياً؛ صُممت لاستيعاب التدفق الجماهيري العالي وتوفير مساحات عرض متطورة بأعلى معايير الأمان.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/wedding-tents-rental.webp",
    slug: "gitex-global",
  },
  {
    id: "٠٢",
    title: "جلفود 2026",
    category: "خيام المعارض والضيافة العالمية",
    client: "مركز دبي التجاري العالمي",
    location: "دبي، الإمارات",
    area: "٣٥,٠٠٠ م²",
    year: "٢٠٢٦",
    desc: "منشآت عملاقة مغطاة ومجهزة بالكامل بأنظمة التكييف والتحكم المناخي المتطورة لاستيعاب أكبر حدث دولي للأغذية والضيافة في الشرق الأوسط.",
    image: "/webp/gulfood2026.webp",
    slug: "gulfood",
  },
  {
    id: "٠٣",
    title: "فعالية درفت إكس 2026",
    category: "منشآت النقل الذكي والابتكار",
    client: "ورلد وايد إيفنتس",
    location: "أبوظبي، الإمارات",
    area: "١٠,٠٠٠ م²",
    year: "٢٠٢٥",
    desc: "بيئة متكاملة لفعاليات قطاع التنقل الذكي شملت حلولاً هندسية متقدمة لتوفير مساحات تفاعلية تجمع بين الأداء العملي والمظهر المستقبلي الجريء.",
    image: "/webp/driftx.webp",
    slug: "driftx",
  },
  {
    id: "٠٤",
    title: "تجربة نتفليكس: سترينجر ثينقز",
    category: "هياكل الفعاليات الترفيهية التفاعلية",
    client: "ميرال دستينيشنز",
    location: "أبوظبي، الإمارات",
    area: "٥,٠٠٠ م²",
    year: "٢٠٢٥",
    desc: "قبة ومنشأة مخصصة لدعم تجربة بصرية تفاعلية فريدة، مؤكدة مرونة هياكلنا الإنشائية وقدرتها على استضافة أضخم إنتاجات الترفيه العالمية.",
    image: "/webp/netflix-stranger-things.webp",
    slug: "netflix-stranger-things",
  },
  {
    id: "٠٥",
    title: "معرض دبي للطيران 2025",
    category: "أجنحة الطيران والضيافة الملكية",
    client: "مؤسسة دبي للطيران",
    location: "دبي، الإمارات",
    area: "١٥,٠٠٠ م²",
    year: "٢٠٢٥",
    desc: "صالات استقبال ملكية وأجنحة ضيافة مطابقة للمواصفات الألمانية ومعايير الطيران الصارمة، مع عزل حراري وصوتي استثنائي في أقسى الظروف المناخية.",
    image: "/webp/airshow.webp",
    slug: "dubai-airshow",
  },
  {
    id: "٠٦",
    title: "آمال × منصوري",
    category: "صالات العرض والمبيعات الفاخرة",
    client: "معرض مبيعات حصري",
    location: "دبي، الإمارات",
    area: "٢,٥٠٠ م²",
    year: "٢٠٢٥",
    desc: "تعاون نوعي لتوفير صالة عرض معمارية فاخرة مصممة خصيصاً لعلامة تجارية راقية، تعكس الفخامة المطلقة وتلبي متطلبات تجربة كبار الشخصيات.",
    image: "/webp/amaal2025.webp",
    slug: "amaal-mansory",
  },
];

export default function FeaturedSolutionsAr() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const active = megaProjectsAr[currentIdx];

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % megaProjectsAr.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + megaProjectsAr.length) % megaProjectsAr.length);
  };

  return (
    <section dir="rtl" className="relative bg-[#040811] py-20 px-6 sm:px-12 lg:px-24 border-t border-white/5 overflow-hidden text-right font-sans">
      
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
              <span>سجل الإنجازات والمشاريع الكبرى</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              مشاريع بارزة نفخر بها<span className="text-[#D4AF37]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
            ريادة هندسية وإنجازات عملاقة: استكشف كيف تقدم خيامنا وهياكلنا الإنشائية المصنعة بأعلى المعايير بيئات مغطاة موثوقة في جميع أنحاء الإمارات والخليج.
          </p>
        </div>

        {/* 2. شريط التحكم والترقيم التفاعلي */}
        <div className="flex items-center justify-between gap-4">

          {/* مؤشرات الانتقال بالضغط */}
          <div className="flex items-center gap-2">
            {megaProjectsAr.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIdx ? 1 : -1);
                  setCurrentIdx(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                  currentIdx === i ? "w-12 bg-[#D4AF37]" : "w-3 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`الانتقال إلى المشروع ${i + 1}`}
              >
                {currentIdx === i && (
                  <motion.div
                    layoutId="activeBarGlowAr"
                    className="absolute inset-0 bg-white/40"
                    transition={{ duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* عداد رقمي مع أزرار التنقل المعكوسة لـ RTL */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-[#D4AF37] bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/10">
              <span className="text-white font-bold">{active.id}</span> / ٠٦
            </span>
            <div className="flex items-center gap-2">
              {/* زر السابق - يشير لليمين في الـ RTL */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-transform active:scale-90"
                aria-label="المشروع السابق"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* زر التالي - يشير لليسار في الـ RTL */}
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-[#D4AF37] hover:brightness-110 text-[#070B14] transition-transform active:scale-90 font-bold shadow-lg shadow-[#D4AF37]/20"
                aria-label="المشروع التالي"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. شريط المواصفات الهندسية الأربعة مع انيميشن هولوغرام */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "اسم العميل / الشريك", value: active.client, isGold: false },
            { label: "الموقع", value: active.location, isGold: true },
            { label: "المساحة المغطاة", value: active.area, isGold: false },
            { label: "سنة التسليم", value: active.year, isGold: false },
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`text-xs sm:text-sm font-bold tracking-wide truncate ${
                    item.isGold ? "text-[#D4AF37]" : "text-white"
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
              initial={{
                clipPath: "circle(0% at 50% 50%)",
                scale: 1.3,
                filter: "brightness(2.2) contrast(1.1)",
              }}
              animate={{
                clipPath: "circle(150% at 50% 50%)",
                scale: 1.0,
                filter: "brightness(1) contrast(1)",
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                filter: "brightness(0.5) blur(8px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              {/* صورة المشروع مع حركة كين-بيرنز الهادئة */}
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

              {/* تظليل سينمائي لإبراز النصوص العربية */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040811] via-black/35 to-transparent pointer-events-none" />

              {/* بادج الفئة والموقع */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                  {active.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{active.location}</span>
                </div>
              </div>

              {/* عنوان المشروع العربي مع تأثير صعود سلس */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="absolute bottom-8 left-8 right-8 z-20 space-y-2"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  المشروع المميز {active.id}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
                  {active.title}
                </h3>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* حلقة الموجة الارتدادية الذهبية (Shockwave Ring) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`shockwave-${active.id}`}
              initial={{ scale: 0.1, opacity: 1, borderWidth: "5px" }}
              animate={{ scale: 2.5, opacity: 0, borderWidth: "1px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 m-auto w-44 h-44 rounded-full border border-[#D4AF37]/80 z-30"
            />
          </AnimatePresence>
        </div>

        {/* 5. شريط نبذة المشروع وزر دراسة الحالة */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              ملخص التنفيذ الهندسي
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {active.desc}
            </p>
          </div>

          <Link
            href={`/ar/projects/${active.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all text-xs font-bold uppercase tracking-widest shrink-0 group"
          >
            <span>استكشاف تفاصيل المشروع</span>
            <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}