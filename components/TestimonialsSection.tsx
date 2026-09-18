"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Building2, Plane, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
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
];

// مضاعفة الكروت 4 مرات لضمان اتصال لا نهائي بدون أي فراغ على جميع الشاشات
const repeatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function TestimonialsSection() {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(document.documentElement.dir === "rtl" || document.documentElement.lang === "ar");
  }, []);

  return (
    <section className="relative py-16 bg-[#070B14] border-t border-white/5 overflow-hidden">
      
      {/* توهج خفيف في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[220px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header مصغر وفخم */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Endorsements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Behind Every Structure Is A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5A880]">
            Relationship Built On Trust
          </span>
        </h2>
      </div>

      {/* شريط السكرول المتصل بدون انقطاع */}
      <div className="relative w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: isRtl ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 55, // سرعة هادئة وخفيفة بدون تسرع
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center gap-6 whitespace-normal shrink-0 will-change-transform"
          style={{ width: "max-content" }}
        >
          {repeatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] h-[205px] p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] transition-colors duration-300 flex flex-col justify-between shrink-0 shadow-xl group"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3 italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="p-2 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070B14] transition-all duration-300 shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {item.client}
                  </h4>
                  <p className="text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}