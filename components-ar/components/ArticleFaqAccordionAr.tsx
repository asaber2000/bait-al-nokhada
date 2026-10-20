"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function ArticleFaqAccordionAr({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-10 border-t border-slate-200/60 space-y-6">
      <h3 className="text-xl font-bold text-[#0B1220] flex items-center gap-2 justify-start">
        <HelpCircle className="w-5 h-5 text-[#df9d17]" />
        <span>الأسئلة الشائعة حول الموضوع</span>
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, fIdx) => {
          const isOpen = openFaq === fIdx;
          return (
            <div key={fIdx} className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors">
              <button
                onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                className="w-full p-4 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0B1220] hover:text-[#df9d17] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#df9d17] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}