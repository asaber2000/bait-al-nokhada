"use client";

import { motion } from "framer-motion";

const clients = [
  "تسلا",
  "شرطة دبي",
  "إعمار",
  "مطارات أبوظبي",
  "هيلتون",
  "الاتحاد قطار",
  "دي بي ورلد",
  "إكسبو سيتي دبي",
  "الهلال الأحمر الإماراتي",
  "مبادلة",
  "اليونيسف",
  "فيرمونت",
];

export default function ClientsTicker() {
  return (
    <section className="relative py-16 bg-[#070B14] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
          نحظى بثقة كبرى المؤسسات العالمية والجهات الحكومية
        </span>
      </div>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all group cursor-default"
            >
              <span className="text-lg sm:text-xl font-black tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}