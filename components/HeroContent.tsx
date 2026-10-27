"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export default function HeroContent() {
    return (
        <div className="relative z-20 w-full h-full flex flex-col justify-between items-center px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-8 pointer-events-none">
            {/* 1. Top Bar: Luxury Pill without heavy black shadow */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pointer-events-auto"
            >
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[#df9d17] animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-white/90">
                        EST. 1997 • PREMIER TENT MANUFACTURERS IN UAE
                    </span>
                </div>
            </motion.div>

            {/* 2. Center: Editorial Luxury Title */}
            <div className="max-w-4xl mx-auto text-center space-y-6 my-auto pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-2"
                >
                    <span className="block text-[11px] sm:text-xs md:text-[12px] font-mono font-bold tracking-[0.3em] uppercase text-[#df9d17] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                        ENGINEERED SOLUTIONS FOR MEGA PROJECTS & EVENTS
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.1] uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                        TENTS SALE & RENTAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
                            FOR MAJOR EVENTS
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="max-w-xl mx-auto text-xs sm:text-sm lg:text-[13px] text-slate-100 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                >
                    Precision-engineered exhibition tents, sales centers, and industrial storage solutions built to international standards. Offering premium tents for sale and rental with full on-site deployment across the UAE, KSA, GCC, and worldwide.
                </motion.p>
                {/* 3. Floating Glass CTA Bar - بحجم ملموم ومصغر */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-black/50 backdrop-blur-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                    {/* زر Request Instant Quote */}
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#df9d17] hover:bg-white text-[#0B1220] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
                    >
                        <span>REQUEST INSTANT QUOTE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {/* زر Explore Projects */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-white/10 text-white/90 hover:text-white font-medium text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300"
                    >
                        <Sparkles className="w-3 h-3 text-[#df9d17]" />
                        <span>EXPLORE PROJECTS</span>
                    </Link>
                </motion.div>
            </div>

            {/* 4. Bottom Metrics Strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.45 }}
                className="w-full max-w-5xl flex items-center justify-between text-[9px] font-mono tracking-widest text-slate-300 font-medium border-t border-white/15 pt-4 pointer-events-auto"
            >
                <span className="hidden sm:inline-block">ABU DHABI • DUBAI • RIYADH</span>

                <div className="flex items-center gap-2 mx-auto sm:mx-0">
                    <Building2 className="w-3.5 h-3.5 text-[#df9d17]" />
                    <span>IN-HOUSE MANUFACTURING & ENGINEERING</span>
                </div>

                <span className="hidden sm:inline-block">30+ YEARS OF LEADERSHIP</span>
            </motion.div>
        </div>
    );
}