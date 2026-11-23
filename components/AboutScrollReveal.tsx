"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScrollReveal({
  scopeRef,
}: {
  scopeRef?: RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    const scope = scopeRef?.current || document.body;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".scroll-item").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, scope);

    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 200);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [scopeRef]);

  return null;
}