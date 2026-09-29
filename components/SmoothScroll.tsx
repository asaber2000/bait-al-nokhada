"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // تشغيل السموث سكرول على الديسكتوب فقط وتجاهل الموبايل تماماً للحفاظ على سلاسة اللمس الأصلية
    if (typeof window === "undefined" || window.innerWidth < 768) {
      return;
    }

    let lenisInstance: any = null;
    let rafId: number;

    // استيراد Lenis ديناميكياً بعد تحميل الصفحة الأساسية لعدم حجز خيط المعالجة الأولي
    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}