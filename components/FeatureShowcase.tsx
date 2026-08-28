"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function FeatureShowcase() {
  return (
    <section className="relative z-20 bg-[#070B14] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* النص مع حركة الظهور (Scroll Reveal) من الشمال */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>Experts in UAE & KSA – Since 1997</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-[1.15]">
            Tent Rental, Supplier & Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">Experts</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Looking for tent rental or tents for sale in UAE or Saudi Arabia? Bait Al Nokhada is a leading tent manufacturing company with over 30 years of experience serving Dubai, Abu Dhabi, UAE, KSA, and the Middle East. We provide premium event tents, wedding tents, labour tents, warehouse tents, Ramadan tents, and specialized structures for military, aviation, and sports events.
          </p>

          <div className="pt-2 text-sm text-slate-400 space-y-3 border-t border-white/10">
            <p className="leading-relaxed">
              Our high-quality tents are made with German PVC and heavy-duty aluminum, built for the harsh regional climate and certified to international safety standards. Trusted by governments, embassies, and global event firms, we offer fast delivery, custom designs, and expert installation. Whether you need a temporary tent rental or a permanent tent structure, we are your go-to tent supplier in UAE and KSA.
            </p>
            <p className="text-[#D4AF37] font-medium pt-1">
              Contact Bait Al Nokhada for reliable tent solutions—manufactured in the UAE, delivered worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#070B14] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-105"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* الصورة الرسمية مع تأثير الـ Hover السلس */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-br from-white/[0.05] to-transparent p-2"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="https://baitalnokhada.com/wp-content/uploads/2025/08/exhibition-tents-UAE.webp"
              alt="Bait Al Nokhada Exhibition Tents"
              fill
              unoptimized // ضرورية لأن الصورة خارجية من ووردبريس
              className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-xl">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">Certified International Standards</p>
                <p className="text-[11px] text-slate-400">German PVC & Heavy-Duty Aluminum</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}