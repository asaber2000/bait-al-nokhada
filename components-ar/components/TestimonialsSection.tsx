"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    client: "عمليات معرضي آيدكس ونافدكس",
    role: "فريق العمليات والفعاليات الحكومية",
    quote: "قدمت شركة بيت النوخذة هياكل مؤقتة ممتازة وفي الموعد المحدد دون أي عقبات. بدت القاعات الكبرى ذات البحور المفتوحة بشكل استثنائي، وأثبت الفريق الهندسي كفاءة عالية في إيجاد حلول فورية لكل التحديات التقنية في الموقع.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "قمة دبي للطيران والفضاء",
    role: "لجنة البنية التحتية للطيران",
    quote: "تجاوزت خيام الضيافة الملكية وهناجر المعارض المخصصة كافة المعايير الدولية. أداء استثنائي لأنظمة التحكم المناخي في ظل درجات الحرارة المرتفعة بالمنطقة.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section dir="rtl" className="relative py-24 px-6 bg-[#0B1120] border-t border-white/10 overflow-hidden text-right">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left/Right Image Showcase */}
        <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].client}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B1120]/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content & Controls */}
        <div className="lg:col-span-6 space-y-8 lg:pr-6">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              آراء العملاء والشركاء
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
              خلف كل هيكل وقمة يوجد <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#C5A880]">
                تاريخ طويل من الثقة المشتركة
              </span>
            </h2>
          </div>

          <div className="p-3 rounded-2xl bg-[#D4AF37]/10 w-fit text-[#D4AF37]">
            <Quote className="w-8 h-8 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            > 
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed italic">
                {`"${testimonials[current].quote}"`}
              </p>

              <div>
                <h4 className="text-xl font-bold text-white tracking-wide font-heading">
                  {testimonials[current].client}
                </h4>
                <p className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase mt-0.5">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center gap-4 pt-4 justify-start">
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}