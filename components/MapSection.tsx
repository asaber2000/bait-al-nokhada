"use client";

import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="relative py-20 px-6 bg-[#070B14] border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              Strategic Factory & Offices
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Visit Our Factory & Regional Hub
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>ICAD-1, Technopark, Abu Dhabi & Dubai, UAE</span>
          </div>
        </div>

        {/* Embedded Interactive Dark Map */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Abu%20Dhabi%20ICAD%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80"
            loading="lazy"
          />
          
          <div className="absolute bottom-6 left-6 z-10 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Abu Dhabi Industrial Hub</p>
              <p className="text-[11px] text-slate-400">Open Sun - Thu (8:00 AM - 6:00 PM)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}