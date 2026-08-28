"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Are Bait Al Nokhada structures certified against UAE extreme heat and wind loads?",
    a: "Yes, all our tensile fabrics and structural aluminum frames are engineered according to international safety standards (German DIN standards) with high wind-load ratings and certified UV/fire-retardant PVC membranes.",
  },
  {
    q: "Do you offer both short-term rental and permanent turnkey manufacturing?",
    a: "Absolutely. We supply modular structures for temporary rental (weddings, corporate exhibitions, summits) as well as permanent tensile shade solutions and industrial warehouses.",
  },
  {
    q: "How fast can large-span exhibition or warehouse tents be installed?",
    a: "Our rapid-deployment teams can assemble standard clear-span structures in 48 to 72 hours, complete with flooring, lighting, and HVAC climate control integration.",
  },
  {
    q: "Do you provide turnkey interior fit-outs and HVAC cooling systems?",
    a: "Yes, we deliver full turnkey solutions including luxury royal majlis drapery, glass walling, automated double doors, heavy-tonnage AC units, and custom flooring.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 bg-[#070B14] border-t border-white/10 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#D4AF37]/6 blur-[180px] rounded-full pointer-events-none" />

      {/* الحاوية الرئيسية بنفس المسافات الواسعة */}
      <div className="w-full px-12 sm:px-16 lg:px-32">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">Questions</span>
          </h2>
        </motion.div>

        {/* Faqs List تملى العرض بالكامل بين الهوامش */}
        <div className="w-full space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? "bg-[#0D1527] border-[#D4AF37]/40 shadow-2xl shadow-black/60 scale-[1.01]" 
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-6 font-bold text-white transition-colors cursor-pointer"
                >
                  <span className={`text-base sm:text-xl transition-colors duration-300 font-heading ${isOpen ? "text-[#D4AF37]" : "hover:text-slate-200"}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${isOpen ? "bg-[#D4AF37]/15 text-[#D4AF37] rotate-180 shadow-lg" : "bg-white/5 text-slate-400"}`}>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-6 sm:px-7 pb-7 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}