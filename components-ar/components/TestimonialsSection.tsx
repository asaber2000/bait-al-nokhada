"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { Quote, Sparkles, ChevronRight, ChevronLeft, Building2, Plane, ShieldAlert } from "lucide-react";

const allTestimonialsAr = [
  {
    client: "إدارة عمليات نافدكس وآيدكس",
    role: "فريق إدارة الفعاليات الحكومية",
    quote: "التزمت شركة بيت النوخذة بالجدول الزمني بدقة متناهية في توريد القاعات المؤقتة الكبرى، وقدم فريقهم الهندسي الميداني دعماً فنياً سريعاً ومستمراً طوال فترة المعرض الدفاعي الدولي.",
    icon: Building2,
  },
  {
    client: "قمة معرض دبي للطيران",
    role: "لجنة البنية التحتية لقطاع الطيران",
    quote: "تجاوزت أجنحة الضيافة الملكية وقاعات المعارض الكبرى كافة المعايير الدولية، وتميزت أنظمة التكييف المتكاملة بأداء استثنائي حافظ على كفاءة الأجواء الداخلية خلال درجات الحرارة المرتفعة.",
    icon: Plane,
  },
  {
    client: "معرض ومؤتمر أديبك للطاقة",
    role: "وفد البنية التحتية لقطاع الطاقة",
    quote: "دقة هندسية متقدمة وسرعة فائقة في التركيب والتجهيز الميداني، مع مطابقة كاملة لأعلى معايير الأمان الألمانية (DIN) عبر جميع القاعات المؤقتة وهياكل المعارض الكبرى." ,
    icon: ShieldAlert,
  },
  {
    client: "القرية العالمية دبي",
    role: "إدارة العمليات والأجنحة الثقافية",
    quote: "جودة تصنيع فائقة وثبات هيكلي استثنائي. أثبتت خيام وقاعات الفعاليات قدرتها العالية على استيعاب التدفق الجماهيري الضخم ومقاومة مختلف الظروف المناخية طوال الموسم بكل كفاءة.",
    icon: Building2,
  },
  {
    client: "هيئة الشارقة للاستثمار والتطوير (شروق)",
    role: "قطاع الوجهات والضيافة التراثية",
    quote: "تنفيذ دقيق لهياكل وخيام الفعاليات المعيارية مع عناية فائقة بالتفاصيل والتشطيبات الداخلية الراقية، مما حقق التناغم الكامل مع معاييرنا للضيافة الفاخرة والأصالة التراثية.",
    icon: Sparkles,
  },
  {
    client: "القيادة العامة لشرطة دبي",
    role: "إدارة الفعاليات والعمليات الأمنية",
    quote: "جاهزية تشغيلية وسرعة استثنائية في توريد وتجهيز المقرات الميدانية في أوقات قياسية، مع الالتزام التام بكافة معايير السلامة واشتراطات الدفاع المدني المعتمدة.",
    icon: ShieldAlert,
  },
];

// كارت تفاعلي يتبع الماوس بهالة ذهبية راقية
function TestimonialCardAr({ item }: { item: typeof allTestimonialsAr[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-500 shadow-xs hover:shadow-lg flex flex-col justify-between h-full overflow-hidden text-right"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(223, 157, 23, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="space-y-4 relative z-10">
        <Quote className="w-6 h-6 text-[#df9d17] group-hover:text-[#b87d0e] transition-colors shrink-0 rotate-180" />
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
          «{item.quote}»
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-5 mt-6 border-t border-slate-100 relative z-10">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-[#df9d17] group-hover:bg-[#df9d17] group-hover:text-white group-hover:border-[#df9d17] shadow-xs transition-all duration-300 shrink-0">
          <item.icon className="w-4 h-4" />
        </div>
        <div className="truncate text-right">
          <h4 className="text-sm font-bold text-[#0B1220] group-hover:text-[#df9d17] transition-colors truncate">
            {item.client}
          </h4>
          <p className="text-[11px] text-slate-500 font-medium tracking-wide truncate">
            {item.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSectionAr() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const maxPages = Math.ceil(allTestimonialsAr.length / itemsPerPage);

  // في الـ RTL السهم التالي ينقل للأمام
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxPages) % maxPages);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 6500);
    return () => clearInterval(interval);
  }, [isPaused, maxPages]);

  const visibleItems = allTestimonialsAr.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section 
      dir="rtl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-20 lg:py-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden font-sans text-right"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 space-y-10">
        {/* Header فخم متطابق مع النسخة الإنجليزية ومرتب للـ RTL */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-2 max-w-xl text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-normal uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#df9d17]" />
              <span>آراء العملاء والشركاء</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] tracking-tight leading-tight">
               وراء كل هيكل،{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
               علاقة مبنية على الثقة
              </span>
            </h2>
          </div>

          {/* أزرار الأسهم والمؤشرات مضبوطة لـ RTL */}
          <div className="flex items-center gap-4 shrink-0 flex-row-reverse sm:flex-row">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-[#df9d17]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`الانتقال إلى المجموعة ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* زر السابق في RTL يشير لليمين */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 transition-all shadow-xs active:scale-90"
                aria-label="المجموعة السابقة"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* زر التالي في RTL يشير لليسار */}
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-[#df9d17] hover:bg-[#b87d0e] text-white transition-all shadow-md active:scale-90 font-bold"
                aria-label="المجموعة التالية"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* عرض الكروت مع حركة انسيابية وثابتة */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {visibleItems.map((item, idx) => (
              <TestimonialCardAr key={item.client + idx} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}