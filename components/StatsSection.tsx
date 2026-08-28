"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Building2, Globe2, ShieldCheck, Zap, Users, Factory, Sparkles } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: <Award className="w-5 h-5 text-[#D4AF37]" />, value: "28+", label: "Years Legacy" },
    { icon: <Building2 className="w-5 h-5 text-[#D4AF37]" />, value: "5,000+", label: "Structures Built" },
    { icon: <Globe2 className="w-5 h-5 text-[#D4AF37]" />, value: "12+", label: "GCC Countries" },
    { icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />, value: "100%", label: "DIN Safety Compliant" },
    { icon: <Factory className="w-5 h-5 text-[#D4AF37]" />, value: "30,000 m²", label: "Manufacturing Facility" },
    { icon: <Users className="w-5 h-5 text-[#D4AF37]" />, value: "500+", label: "Expert Engineers" },
    { icon: <Zap className="w-5 h-5 text-[#D4AF37]" />, value: "24/7", label: "Rapid Deployment" },
    { icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />, value: "99%", label: "Repeat Enterprise Trust" },
  ];

  // التحكم في سرعة الشريط بسلاسة بدل الإيقاف الفجائي لمنع أي اهتزاز
  const [speed, setSpeed] = useState(35);

  return (
    <section className="relative z-30 bg-[#070B14] py-10 overflow-hidden border-y border-white/10">
      {/* إضاءة خلفية ناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-gradient-to-r from-[#D4AF37]/5 via-[#D4AF37]/15 to-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* حاوية الشريط المتحرك بالعرض الكامل */}
      <div 
        className="relative w-full overflow-hidden flex"
        onMouseEnter={() => setSpeed(90)} // بتبطأ السرعة بنعومة شديدة بدل ما تقف فتهتز
        onMouseLeave={() => setSpeed(35)} // ترجع للسرعة العادية بسلاسة مذهلة
      >
        <motion.div
          className="flex gap-6 shrink-0 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg cursor-pointer min-h-[80px] shrink-0 group relative overflow-hidden"
            >
              {/* بديل النقطة الصفراء: خط إشعاعي ذهبي رأسي فخم في أقصى الكارت */}
              <div className="absolute right-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all" />

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/25 transition-all shrink-0">
                {stat.icon}
              </div>

              <div>
                <div className="text-lg sm:text-xl font-black text-white font-heading group-hover:text-[#D4AF37] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}