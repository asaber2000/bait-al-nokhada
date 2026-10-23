"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles, Building2, Plane, ShieldAlert, ArrowDown, ArrowUp } from "lucide-react";

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

export default function TestimonialsGridExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 3;
  const displayedItems = isExpanded ? allTestimonials : allTestimonials.slice(0, initialCount);

  return (
    <section className="relative py-20 lg:py-24 bg-[#FDFCF7] border-t border-slate-200/60 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#df9d17]" />
            <span>Strategic Relationships</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] tracking-tight leading-tight">
            Behind Every Structure Is A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              Relationship Built On Trust
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Direct feedback from key government authorities, defense stakeholders, and international event organizers.
          </p>
        </div>

        {/* شبكة الكروت مع حركة ظهور انسيابية */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.client}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, delay: idx > 2 ? (idx - 3) * 0.08 : 0 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <Quote className="w-6 h-6 text-[#df9d17] group-hover:text-[#b87d0e] transition-colors shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
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
            ))}
          </AnimatePresence>
        </motion.div>

        {/* زر التوسيع / الإغلاق الفخم */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#df9d17] text-[#0B1220] hover:text-white border border-slate-200 hover:border-[#df9d17] shadow-xs hover:shadow-md transition-all text-xs font-bold uppercase tracking-widest group"
          >
            <span>{isExpanded ? "Show Less" : `View All Partner Reviews (${allTestimonials.length})`}</span>
            {isExpanded ? (
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}