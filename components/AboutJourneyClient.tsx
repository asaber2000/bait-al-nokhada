"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutJourneyClient({ journeyMilestones }: { journeyMilestones: any[] }) {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const active = journeyMilestones[activeMilestone];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200/60 relative overflow-hidden bg-[#FDFCF7]">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Heritage & Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">
          Company <span className="text-[#df9d17]">Journey</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-md mx-auto leading-relaxed">
          Tracing our progression from a local manufacturing pioneer to an international modular engineering powerhouse.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative pt-6 pb-2">
          <div className="absolute top-[38px] left-4 right-4 h-[2px] bg-slate-200 pointer-events-none" />

          <motion.div
            className="absolute top-[38px] h-[2px] bg-[#df9d17] pointer-events-none"
            animate={{
              left: `${(activeMilestone / (journeyMilestones.length - 1)) * 80}%`,
              width: "20%"
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
          <div className="relative flex justify-between items-center px-4 sm:px-12">
            {journeyMilestones.map((item, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <div key={item.year} className="flex flex-col items-center relative z-20">
                  <button
                    onClick={() => setActiveMilestone(idx)}
                    className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
                    aria-label={`Milestone ${item.year}`}
                  >
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative ${
                      isSelected
                        ? "bg-white border-[#df9d17] shadow-[0_0_15px_rgba(223,157,23,0.35)] scale-110"
                        : "bg-white border-slate-300 group-hover:border-slate-400"
                    }`}>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isSelected ? "bg-[#df9d17] scale-125" : "bg-slate-300 group-hover:bg-slate-400"}`} />

                      {isSelected && (
                        <motion.div
                          layoutId="nodeRadar"
                          className="absolute -inset-1.5 rounded-full border border-[#df9d17]/40 animate-ping pointer-events-none"
                        />
                      )}
                    </div>

                    <div className={`mt-3 px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-[#df9d17] text-white border-[#df9d17] shadow-md shadow-[#df9d17]/25 -translate-y-0.5 font-black"
                        : "bg-slate-50 text-slate-600 border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900"
                    }`}>
                      {item.year}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 min-h-[480px] flex items-center shadow-xs mt-6">
          <div className="absolute right-6 bottom-0 select-none pointer-events-none text-[120px] sm:text-[200px] lg:text-[240px] font-black font-mono text-slate-200/50 leading-none z-0">
            {active.year}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full relative z-10">
            <div className="lg:col-span-7 relative h-[320px] sm:h-[355px] shadow-md p-2 bg-white rounded-2xl group border border-slate-200/80">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                  className={`object-cover ${active.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.year}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                className="lg:col-span-5 space-y-5 text-left"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#df9d17]/10 border border-[#df9d17]/30 text-[#df9d17] text-[11px] font-mono font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{active.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] font-heading tracking-tight leading-tight">
                    {active.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#df9d17] font-semibold tracking-wide">
                    // {active.tagline}
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                  {active.desc}
                </p>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FDFCF7] border border-slate-200/80 flex items-start gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#df9d17] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {active.highlight}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden pointer-events-none" aria-hidden="true">
            {journeyMilestones.map((item) => (
              <Image key={item.year} src={item.image} alt="preload" width={20} height={20} priority />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}