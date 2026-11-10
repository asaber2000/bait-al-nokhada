"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGalleryLightboxAr({
  images,
  productName = "الخيام",
}: {
  images: string[];
  productName?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // تقليب تلقائي ناعم
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const lightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1);
    }
  };

  const lightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <section
        dir="rtl"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200/60 space-y-8 sm:space-y-10 font-sans text-right"
      >
        {/* الترويسة المتجاوبة */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 px-2">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
            معرض الصور والأعمال الهندسية
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-snug">
            نماذج من مشاريعنا وتنفيذ {productName} على أرض الواقع
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            استعرض التجهيزات الميدانية والمساحات المفتوحة دون أعمدة بمقاسات وتفاصيل كاملة الدقة.
          </p>
        </div>

        {/* الحاوية البانورامية المتجاوبة لكل الأجهزة */}
        <div
          className="space-y-3 sm:space-y-4 max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* شاشة العرض الرئيسية */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-lg group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full cursor-pointer p-2 sm:p-4 flex items-center justify-center"
                onClick={() => openLightbox(currentIndex)}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${productName} - صورة ${currentIndex + 1}`}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-contain object-center select-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* طبقة تدرج خفيفة */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* زر التكبير للشاشة الكاملة */}
            <button
              onClick={() => openLightbox(currentIndex)}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-black/50 hover:bg-[#df9d17] backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer shadow-md group-hover:scale-105 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold z-10"
              aria-label="عرض فائق الدقة"
            >
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">عرض فائق الدقة</span>
            </button>

            {/* عداد الصور المتجاوب */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold z-10">
              {currentIndex + 1} / {images.length}
            </div>

            {/* أزرار الأسهم مع دعم أحجام شاشات اللمس */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#df9d17] text-slate-900 hover:text-white backdrop-blur-md shadow-md transition-all cursor-pointer border border-slate-200/60 z-10"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#df9d17] text-slate-900 hover:text-white backdrop-blur-md shadow-md transition-all cursor-pointer border border-slate-200/60 z-10"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}
          </div>

          {/* مصغرات الصور المتجاوبة (تعمل بالسحب Touch Scroll على الموبايل) */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar justify-start sm:justify-center px-1">
              {images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 sm:w-20 md:w-24 aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "border-[#df9d17] shadow-sm scale-105"
                      : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400"
                  }`}
                  aria-label={`عرض الصورة ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`مصغرة ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 70px, 100px"
                    quality={85}
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* نافذة التكبير الكبرى (Lightbox Modal) عالية النقاء */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none cursor-zoom-out"
          >
            {/* زر الإغلاق */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
              aria-label="إغلاق المعاينة"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* أسهم التنقل داخل المعاينة المكبرة */}
            {images.length > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-3 sm:left-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={lightboxNext}
                  className="absolute right-3 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* الحاوية الأصلية النقية للصورة */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black cursor-default p-2 flex items-center justify-center"
            >
              <Image
                src={images[activeImageIndex]}
                alt="معاينة الصورة الأصلية"
                fill
                priority
                quality={95}
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}