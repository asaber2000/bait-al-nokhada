"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectInteractiveMediaProps {
  galleryImages?: { url: string; caption?: string; type?: string }[];
  comparison?: { before?: string; after?: string } | null;
}

export default function ProjectInteractiveMediaAr({
  galleryImages,
  comparison,
}: ProjectInteractiveMediaProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mounted, setMounted] = useState(false);

  const validImages = (galleryImages || []).filter((img) => Boolean(img?.url));

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeLightbox = () => setActiveIndex(null);

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === 0 ? validImages.length - 1 : activeIndex - 1);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === validImages.length - 1 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : prev === 0 ? validImages.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : prev === validImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, validImages.length]);

  const lightboxModal =
    mounted && activeIndex !== null && validImages[activeIndex]
      ? createPortal(
          <div
            dir="ltr"
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 999999,
            }}
            className="bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none cursor-zoom-out"
          >
            {/* عداد الصور */}
            <div className="fixed top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-bold z-50">
              {activeIndex + 1} / {validImages.length}
            </div>

            {/* زر الإغلاق */}
            <button
              type="button"
              onClick={closeLightbox}
              className="fixed top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
              aria-label="إغلاق العرض الموسع"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* أسهم التنقل */}
            {validImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#df9d17] text-white transition-all cursor-pointer z-50 shadow-2xl"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* حاوية الصورة في منتصف الشاشة تماماً */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[75vh] sm:h-[82vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black cursor-default flex items-center justify-center"
            >
              <Image
                src={validImages[activeIndex].url}
                alt={validImages[activeIndex].caption || "عرض موسع للمشروع"}
                fill
                priority
                quality={95}
                className="object-contain object-center p-2"
              />

              {validImages[activeIndex].caption && (
                <div
                  dir="rtl"
                  className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none"
                >
                  <span className="px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                    {validImages[activeIndex].caption}
                  </span>
                </div>
              )}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {/* 1. شبكة صور المعرض الميداني */}
      {validImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {validImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200/80 hover:border-[#df9d17] transition-all shadow-xs hover:shadow-md bg-slate-100"
            >
              <Image
                src={img.url}
                alt={img.caption || "صورة من المشروع"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {img.type && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#df9d17] border border-slate-200/80 shadow-xs">
                    {img.type}
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                <p className="text-xs font-semibold text-white leading-snug">
                  {img.caption || "توثيق ميداني"}
                </p>
                <div className="w-8 h-8 rounded-full bg-[#df9d17] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-black transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. سلايدر مقارنة قبل وبعد */}
      {comparison?.before && comparison?.after && (
        <div className="pt-10 space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              التحول الإنشائي للموقع
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] font-heading">
              مقارنة الموقع قبل وبعد سرعة التركيب والتسليم
            </h3>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200/80 select-none shadow-md">
            <Image
              src={comparison.after}
              alt="بعد الإنجاز والتشغيل"
              fill
              className="object-cover"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-white/95 text-xs font-mono font-bold text-[#df9d17] border border-slate-200/80 shadow-xs z-10">
              الهيكل بعد اكتمال التنفيذ
            </span>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src={comparison.before}
                alt="أرض الموقع قبل التركيب"
                fill
                className="object-cover max-w-none"
                style={{ width: "100%" }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 text-xs font-mono font-bold text-white z-10">
                أرض الموقع قبل البناء
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="مقارنة الصورة قبل وبعد التنفيذ"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />

            <div
              className="absolute top-0 bottom-0 w-1 bg-[#df9d17] pointer-events-none z-20 shadow-[0_0_10px_#df9d17]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#df9d17] text-white font-bold text-xs flex items-center justify-center shadow-lg">
                ↔
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Portal Lightbox Modal (محقون مباشرة في document.body) */}
      {lightboxModal}
    </>
  );
}