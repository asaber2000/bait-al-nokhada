"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function ArticleFaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-8 border-t border-slate-200/60 space-y-4">
      <h3 className="text-lg font-bold text-[#0B1220] flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-[#df9d17]" />
        <span>Frequently Asked Questions</span>
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, fIdx) => {
          const isOpen = openFaq === fIdx;
          return (
            <div key={fIdx} className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors">
              <button
                onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0B1220] hover:text-[#df9d17] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#df9d17] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-xs text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-2">
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