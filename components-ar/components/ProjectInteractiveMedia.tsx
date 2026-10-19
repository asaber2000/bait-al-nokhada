"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

interface ProjectInteractiveMediaProps {
  galleryImages?: { url: string; caption?: string; type?: string }[];
  comparison?: { before?: string; after?: string } | null;
}

export default function ProjectInteractiveMedia({
  galleryImages,
  comparison,
}: ProjectInteractiveMediaProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <>
      {/* 1. شبكة صور المعرض الميداني */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.url)}
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

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <p className="text-xs font-semibold text-white leading-snug">{img.caption || "توثيق ميداني"}</p>
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

      {/* 3. نافذة تكبير الصورة (Lightbox Modal) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="عرض موسع للمشروع"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}