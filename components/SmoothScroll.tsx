"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // التأكد من أن الكود يعمل في متصفح العميل وأن الشاشة ليست موبايل (أكبر من 768px)
    if (typeof window === "undefined" || window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}