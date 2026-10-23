"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { Quote, Sparkles, ChevronLeft, ChevronRight, Building2, Plane, ShieldAlert, CheckCircle2 } from "lucide-react";

const allTestimonials = [
  {
    client: "NAVDEX & IDEX Operations",
    role: "Government Event Operations Team",
    quote: "Bait Al Nokhada delivered excellent temporary structures on time with zero hitches. The main high-span pavilions looked extraordinary, and their engineering team found swift solutions for every technical challenge on site.",
    icon: Building2,
  },
  {
    client: "Dubai Airshow Aerospace Summit",
    role: "Aviation Infrastructure Committee",
    quote: "The royal hospitality marquees and custom exhibition hangars exceeded international standards. Exceptional climate control performance under high Middle Eastern temperatures.",
    icon: Plane,
  },
  {
    client: "ADIPEC Energy Exhibition",
    role: "Energy Infrastructure Delegation",
    quote: "Precision engineering, rapid turnkey delivery, and flawless adherence to heavy-duty DIN standards across all temporary exhibition halls.",
    icon: ShieldAlert,
  },
  {
    client: "Global Village Dubai",
    role: "Cultural Pavilion Operations",
    quote: "Unmatched fabrication quality and structural stability. Their modular setups withstand high footfall and seasonal wind forces effortlessly.",
    icon: Building2,
  },
  {
    client: "Sharjah Investment & Dev. (Shurooq)",
    role: "Destinations & Tourism Authority",
    quote: "Flawless architectural tensile structures delivered with extreme attention to aesthetic finishes, meeting our exact royal hospitality guidelines.",
    icon: Sparkles,
  },
  {
    client: "Dubai Police GHQ",
    role: "Special Events & Security Ops",
    quote: "Turnkey security enclosures and rapid field command centers assembled in record times with certified civil defense compliance.",
    icon: ShieldAlert,
  },
];

// كارت تفاعلي يتبع الماوس بهالة ذهبية راقية
function TestimonialCard({ item }: { item: typeof allTestimonials[0] }) {
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
      className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-500 shadow-xs hover:shadow-lg flex flex-col justify-between h-full overflow-hidden"
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
        <Quote className="w-6 h-6 text-[#df9d17] group-hover:text-[#b87d0e] transition-colors shrink-0" />
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
          “{item.quote}”
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-5 mt-6 border-t border-slate-100 relative z-10">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-[#df9d17] group-hover:bg-[#df9d17] group-hover:text-white group-hover:border-[#df9d17] shadow-xs transition-all duration-300 shrink-0">
          <item.icon className="w-4 h-4" />
        </div>
        <div className="truncate">
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

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const maxPages = Math.ceil(allTestimonials.length / itemsPerPage);

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

  const visibleItems = allTestimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-20 lg:py-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 space-y-10">
        {/* Header متناسق مع أزرار التحكم الفاخرة */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#df9d17]" />
              <span>Partner Endorsements</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] tracking-tight leading-tight">
              Behind Every Structure Is A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                Relationship Built On Trust
              </span>
            </h2>
          </div>

          {/* أزرار الأسهم والمؤشرات مثل Featured Projects تماماً */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-[#df9d17]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 transition-all shadow-xs active:scale-90"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-[#df9d17] hover:bg-[#b87d0e] text-white transition-all shadow-md active:scale-90 font-bold"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* مسرح العرض: انزلاق الكروت مع دخول أنيق */}
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
              <TestimonialCard key={item.client + idx} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}