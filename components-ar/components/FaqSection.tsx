"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "هل هياكل بيت النوخذة معتمدة ضد حرارة الإمارات العالية وأحمال الرياح؟",
    a: "نعم، كافة أقمشة الشد الإنشائي وهياكل الألمنيوم مصممة هندسياً وفق أحدث المعايير العالمية (المعايير الألمانية DIN) مع مقاومة عالية لأحمال الرياح واعتمادات أغشية PVC المقاومة للحريق والأشعة فوق البنفسجية.",
  },
  {
    q: "هل تقدمون خدمات التأجير قصير الأجل والتصنيع الدائم تسليم مفتاح؟",
    a: "بالتأكيد. نوفر هياكل معيارية للتأجير المؤقت (الأعراس، المعارض التجارية، القمم الدبلوماسية) بالإضافة إلى مظلات الشد الإنشائي الدائمة والمستودعات الصناعية.",
  },
  {
    q: "ما هي سرعة تركيب خيام المعارض والمستودعات ذات البحور الكبيرة؟",
    a: "فرق التركيب السريع لدينا قادرة على تجميع الهياكل القياسية خلال 48 إلى 72 ساعة، متكاملة مع الأرضيات، الإضاءات، وأنظمة التكييف والتحكم المناخي.",
  },
  {
    q: "هل توفرون التجهيزات الداخلية المتكاملة وأنظمة التكييف HVAC؟",
    a: "نعم، نقدم حلول تسليم مفتاح شاملة تشمل بطانات المجالس الملكية الفاخرة، الواجهات الزجاجية، الأبواب المزدوجة الأوتوماتيكية، وحدات التكييف عالية السعة، والأرضيات المخصصة.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section dir="rtl" className="relative py-24 px-6 bg-[#070B14] border-t border-white/10 text-right">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>لديك استفسار؟</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            الأسئلة الشائعة
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
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
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