"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectAutoVideoProps {
  videoUrl: string;
  poster: string;
  title: string;
}

export default function ProjectAutoVideo({
  videoUrl,
  poster,
  title,
}: ProjectAutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // مراقبة ظهور الكرت في شاشة المستخدم
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        // عندما يدخل 45% من الكرت في منتصف الشاشة
        if (entry.isIntersecting) {
          setShouldLoad(true); // ابدأ تحميل الفيديو فقط عند الاقتراب منه
          if (video) {
            video.play().catch(() => {});
          }
        } else {
          // عندما يخرج من الشاشة أوقف الفيديو فوراً لمنع تشغيل أكثر من فيديو
          if (video) {
            video.pause();
          }
        }
      },
      {
        threshold: 0.45, // يعمل فقط عندما يكون هو المحتوى الأساسي أمام عين الزائر
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [videoUrl]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        poster={poster}
        aria-label={title}
        className="w-full h-full object-cover transition-opacity duration-500"
      >
        {shouldLoad && (
          <source
            src={videoUrl}
            type={videoUrl.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
          />
        )}
      </video>
    </div>
  );
}