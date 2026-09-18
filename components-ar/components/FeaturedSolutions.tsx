"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "gitex",
    title: "جيتكس جلوبال 2025",
    client: "مركز دبي التجاري العالمي",
    location: "دبي، الإمارات",
    year: "2025",
    coveredArea: "15,500 م²",
    category: "خيام وقاعات التكنولوجيا والمعارض الكبرى",
    desc: "لمعرض جيتكس جلوبال 2025، نفذت بيت النواخذة هياكل وقاعات مخصصة لأحد أضخم الفعاليات التقنية عالمياً. صُمم المشروع لاستيعاب التدفق الجماهيري الضخم وتوفير مساحات عرض متطورة بأعلى معايير الأمان والهيبة المؤسسية.",
    img: "/webp/gitex2025.webp",
  },
  {
    id: "gulfood",
    title: "جلفود 2026",
    client: "مركز دبي التجاري العالمي",
    location: "دبي، الإمارات",
    year: "2026",
    coveredArea: "35,000 م²",
    category: "خيام المعارض والضيافة العالمية",
    desc: "لمعرض جلفود 2026، قدمت بيت النواخذة منشآت عملاقة مغطاة ومجهزة بالكامل لأنظمة التكييف والتحكم المناخي المتطورة لاستيعاب أكبر معرض للأغذية والضيافة في الشرق الأوسط.",
    img: "/webp/gulfood2026.webp",
  },
  {
    id: "driftx",
    title: "فعالية درفت إكس 2026",
    client: "ورلد وايد إيفنتس",
    location: "أبوظبي، الإمارات",
    year: "2025",
    coveredArea: "10,000 م²",
    category: "منشآت النقل الذكي والابتكار",
    desc: "لحدث DRIFTx في أبوظبي، شيدت بيت النواخذة بيئة متكاملة لفعاليات قطاع التنقل والابتكار، شملت حلولاً هندسية متقدمة لتوفير مساحات تفاعلية تجمع بين الأداء العملي والمظهر المستقبلي.",
    img: "/webp/driftx.webp",
  },
  {
    id: "netflix",
    title: "تجربة نتفليكس: سترينجر ثينقز",
    client: "ميرال دستينيشنز",
    location: "أبوظبي، الإمارات",
    year: "2025",
    coveredArea: "5,000 م²",
    category: "هياكل الفعاليات الترفيهية التفاعلية",
    desc: "لتجربة Stranger Things من نتفليكس، صممت بيت النواخذة قبة ومنشأة مخصصة لدعم تجربة بصرية تفاعلية فريدة، مؤكدة مرونة منشآتنا وقدرتها على استضافة أضخم إنتاجات الترفيه العالمية.",
    img: "/webp/netflix-stranger-things.webp",
  },
  {
    id: "airshow",
    title: "معرض دبي للطيران 2025",  
    client: "القطاع الحكومي", 
    location: "دبي، الإمارات",
    year: "2026",
    coveredArea: "15,000 م²",
    category: "أجنحة الطيران والضيافة الملكية",
    desc: "لمعرض دبي للطيران، نفذت الشركة صالات استقبال ملكية وأجنحة ضيافة وقاعات عرض مطابقة للمواصفات الألمانية ومعايير الطيران الصارمة، مع عزل حراري استثنائي في أقسى الظروف الجوية.",
    img: "/webp/airshow.webp",
  },
  {
    id: "amaal",
    title: "آمال × منصوري",
    client: "معرض مبيعات حصري",
    location: "دبي، الإمارات",
    year: "2025",
    coveredArea: "2,500 م²",
    category: "صالات العرض والمبيعات الفاخرة",
    desc: "تعاون استثنائي لتوفير صالة عرض فاخرة ومصممة خصيصاً لعلامة تجارية راقية، تعكس الفخامة المطلقة وتلبي متطلبات تجربة كبار العملاء والزوار.",
    img: "/webp/amaal2025.webp",
  }
];

export default function FeaturedSolutionsAr() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = projects[currentIndex];

  return (
    <section 
      dir="rtl" 
      className="relative w-full -mt-10 sm:-mt-16 pt-0 pb-12 sm:pb-20 px-4 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden text-right font-sans"
    >
      
      {/* هيدر القسم الرئيسي */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 border-b border-white/10 pb-6 max-w-7xl mx-auto">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
            سجل الإنجازات والمشاريع
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            مشاريع بارزة نفخر بها.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
          ريادة هندسية في أضخم المشاريع: استكشف كيف تقدم خيامنا وهياكلنا الإنشائية المصنعة بأعلى المعايير بيئات مغطاة موثوقة في جميع أنحاء الإمارات والخليج العربي.
        </p>
      </div>

      {/* شريط التحكم الموحد */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between bg-[#0F172A] sm:bg-[#0F172A]/90 border border-white/10 rounded-2xl p-3 sm:px-6 sm:py-4 sm:backdrop-blur-md">
          
          {/* المؤشرات التفاعلية النقاط */}
          <div className="flex items-center gap-1 pr-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="py-3 px-1.5 inline-flex items-center justify-center cursor-pointer focus:outline-none"
                aria-label={`الانتقال إلى المشروع ${idx + 1}`}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 sm:w-10 bg-[#D4AF37]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* العداد وأزرار الأسهم متوافقة مع القراءة العربية */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-mono text-slate-400 select-none">
              <span className="text-white font-bold text-sm sm:text-base">0{currentIndex + 1}</span> / 0{projects.length}
            </span>
            
            <div className="flex items-center gap-2">
              {/* زر السابق - سهم يمين بالعربي */}
              <button
                onClick={prevProject}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 active:scale-95 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                aria-label="المشروع السابق"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* زر التالي - سهم يسار بالعربي */}
              <button
                onClick={nextProject}
                className="p-2.5 sm:p-3 rounded-xl bg-[#D4AF37] active:scale-95 hover:brightness-110 text-black font-bold transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                aria-label="المشروع التالي"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* تفاصيل المشروع بالكامل */}
      <div 
        key={activeProject.id}
        className="flex flex-col gap-6 w-full max-w-7xl mx-auto transition-opacity duration-300 animate-fadeIn"
      >
        {/* كروت المعلومات السريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block mb-1 truncate">
              اسم العميل / الشريك
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.client}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
              الموقع
            </span>
            <p className="text-xs sm:text-base font-bold text-[#D4AF37] truncate">{activeProject.location}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
              المساحة المغطاة
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.coveredArea}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] sm:bg-[#0F172A]/80 border border-white/10 sm:backdrop-blur-md">
            <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
              سنة التسليم
            </span>
            <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.year}</p>
          </div>
        </div>

        {/* حاوية الصورة والاسم */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] lg:aspect-[21/10] rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-xl">
          <Image  
            src={activeProject.img}
            alt={`${activeProject.title} - ${activeProject.category} من بيت النواخذة للخيام`}
            fill
            quality={80}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 800px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 left-4 sm:left-8 flex flex-col gap-1 sm:gap-2 text-right">
            <span className="text-[10px] sm:text-sm font-bold tracking-wider text-[#D4AF37] uppercase">
              {activeProject.category}
            </span>
            <h3 className="text-base sm:text-4xl font-bold text-white leading-tight">
              {activeProject.title}
            </h3>
          </div>
        </div>

        {/* المواصفات الفنية والنظرة العامة */}
        <div className="bg-[#0F172A] sm:bg-[#0F172A]/60 border border-white/10 p-5 sm:p-8 rounded-3xl sm:backdrop-blur-xl flex flex-col gap-2 sm:gap-3 text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
            أبرز ملامح المشروع
          </span>
          <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
            {activeProject.desc}
          </p>
        </div>
      </div>

      {/* تحسينات السيو للهياكل باللغة العربية */}
      <div className="sr-only">
        {projects.map((p) => (
          <article key={p.id}>
            <h3>{p.title} - {p.category}</h3>
            <p>{p.desc}</p>
            <span>{p.location} - {p.coveredArea}</span>
          </article>
        ))}
      </div>

    </section>
  );
}