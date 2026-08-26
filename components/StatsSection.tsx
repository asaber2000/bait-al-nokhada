import { Award, Building2, Globe2 } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative z-25 bg-[#070B14] py-12 px-4 sm:px-6 lg:px-12 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        
        <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Award className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">28+</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">Years Legacy</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Building2 className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">5,000+</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">Structures Built</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Globe2 className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">12+</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">GCC Countries</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">99%</span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">Trust</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">Repeat Enterprise</div>
          </div>
        </div>

      </div>
    </section>
  );
}