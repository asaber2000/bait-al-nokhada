"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGalleryLightbox({ images }: { images: string[] }) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1);
    }
  };

  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Visual Engineering Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Site Staging & Installed Structures
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Click any project to preview high-resolution structural details and internal installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img: string, idx: number) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] transition-all duration-300 shadow-xl bg-black"
            >
              <Image
                src={img}
                alt={`Structure View ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              
              <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-[#D4AF37] text-[#070B14] shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 select-none cursor-zoom-out"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-all cursor-pointer z-50 shadow-2xl"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-all cursor-pointer z-50 shadow-2xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-all cursor-pointer z-50 shadow-2xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#070B14] cursor-default"
            >
              <Image
                src={images[activeImageIndex]}
                alt="High Resolution Structure View"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}