"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    client: "NAVDEX & IDEX Operations",
    role: "Government Event Operations Team",
    quote: "Bait Al Nokhada delivered excellent temporary structures on time with zero hitches. The main high-span pavilions looked extraordinary, and their engineering team found swift solutions for every technical challenge on site.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    client: "Dubai Airshow Aerospace Summit",
    role: "Aviation Infrastructure Committee",
    quote: "The royal hospitality marquees and custom exhibition hangars exceeded international standards. Exceptional climate control performance under high Middle Eastern temperatures.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-28 bg-[#070B14] border-t border-white/10 overflow-hidden">
      
      {/* Background Glow Effects المتوهجة */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* الحاوية الرئيسية بنفس المسافات الواسعة */}
      <div className="w-full px-12 sm:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Dynamic 3D Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[420px] sm:h-[520px] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl bg-[#0D1527] group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.15, filter: "brightness(0.5) blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "brightness(0.5) blur(10px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].client}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
            
            {/* إطار مضيء خفيف على الكارت */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-[#D4AF37]/20 pointer-events-none" />
          </motion.div>

          {/* Right Side: High-End Staggered Content & Controls */}
          <div className="lg:col-span-6 space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
                Client Testimonials
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight">
                Behind Every Structure Is A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                  Relationship Built On Trust
                </span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 w-fit text-[#D4AF37] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-md"
            >
              <Quote className="w-8 h-8" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 min-h-[140px]"
              > 
                <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed italic">
                  {`"${testimonials[current].quote}"`}
                </p>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-2xl font-black text-white tracking-wide font-heading">
                    {testimonials[current].client}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Controls بحركات تفاعلية فخمة */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <button
                onClick={prev}
                className="group relative p-4 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-2xl cursor-pointer overflow-hidden"
                aria-label="Previous Testimonial"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <ChevronLeft className="relative z-10 w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={next}
                className="group relative p-4 rounded-2xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#070B14] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-2xl cursor-pointer overflow-hidden"
                aria-label="Next Testimonial"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <ChevronRight className="relative z-10 w-6 h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}