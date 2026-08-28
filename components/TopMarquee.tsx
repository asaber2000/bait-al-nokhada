"use client";

import { motion } from "framer-motion";

export default function TopMarquee({ lang = "en" }: { lang?: "en" | "ar" }) {
  const items = lang === "ar" ? [
    "✨ المعيار الذهبي في تصنيع الخيام والهياكل النسيجية منذ 1997",
    "🚀 تغطية شاملة لكافة إمارات الدولة ومجلس التعاون الخليجي",
    "🛡️ خامات ألمانية معتمدة ومطابقة لمواصفات السلامة العالمية",
    "⭐ أكثر من 5,000 مشروع عملاق تم إنجازه بنجاح",
  ] : [
    "✨ The Gold Standard in Tents & Fabric Structures Since 1997",
    "🚀 Full Coverage Across All Emirates & The GCC Region",
    "🛡️ Certified German Materials & International Safety Standards",
    "⭐ Over 5,000 Mega-Scale Projects Successfully Delivered",
  ];

  return (
    <div className="relative z-40 bg-[#070B14] border-b border-white/10 py-2.5 overflow-hidden">
      <div className="flex overflow-x-hidden group">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-10 whitespace-nowrap shrink-0 group-hover:[animation-play-state:paused]"
          style={{ animationPlayState: 'running' }}
        >
          {[...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-bold tracking-wider text-slate-300">
              {/* النقطة الصفراء العاجبة ياسر */}
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping shrink-0" />
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 absolute" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}