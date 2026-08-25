"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // تحديد وقت ظهور الـ Preloader (مثلاً 1.8 ثانية)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#070B14] flex flex-col items-center justify-center text-white"
        >
          <div className="overflow-hidden flex flex-col items-center space-y-2">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-black tracking-wider text-white font-heading"
            >
              بيت النوخذة
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-semibold"
            >
              TENTS & FABRIC STRUCTURES
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}