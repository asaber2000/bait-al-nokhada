import { Award, Building2, Globe2 } from "lucide-react";

export default function ArabicStatsSection() {
  return (
    <section dir="rtl" className="relative z-25 bg-[#070B14] py-12 px-4 sm:px-6 lg:px-12 border-b border-white/10 text-right">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        
        {/* الكارد الأول: سنة من الريادة */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center sm:text-right">
          <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-base sm:text-2xl font-black text-white font-heading">+28</div>
            <div className="text-[10px] sm:text-xs font-medium text-slate-400 leading-tight mt-0.5">سنة من الريادة</div>
          </div>
        </div>

        {/* الكارد الثاني: هيكل مصنع ومبني */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center sm:text-right">
          <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-base sm:text-2xl font-black text-white font-heading">+5,000</div>
            <div className="text-[10px] sm:text-xs font-medium text-slate-400 leading-tight mt-0.5">هيكل مصنع ومبني</div>
          </div>
        </div>

        {/* الكارد الثالث: دولة خليجية وإقليمية */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center sm:text-right">
          <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-base sm:text-2xl font-black text-white font-heading">+12</div>
            <div className="text-[10px] sm:text-xs font-medium text-slate-400 leading-tight mt-0.5">دولة خليجية وإقليمية</div>
          </div>
        </div>

        {/* الكارد الرابع: ثقة مطلقة */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center sm:text-right">
          <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <span className="text-sm sm:text-xl font-bold text-[#D4AF37]">99%</span>
          </div>
          <div>
            <div className="text-base sm:text-2xl font-black text-white font-heading">ثقة مطلقة</div>
            <div className="text-[10px] sm:text-xs font-medium text-slate-400 leading-tight mt-0.5">عملاء المؤسسات الكبرى</div>
          </div>
        </div>

      </div>
    </section>
  );
}