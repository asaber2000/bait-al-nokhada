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
    <section className="relative py-24 px-6 bg-[#070B14] border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}