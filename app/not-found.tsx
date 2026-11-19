"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FDFCF7] text-[#0F172A] flex flex-col justify-between"
    >
      {/* شريط علوي متناسق مع هوية الموقع */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href={isArabic ? "/ar/" : "/"}
          className="text-lg font-extrabold tracking-tight flex items-center gap-1"
        >
          <span className="text-[#EAB308]">BAIT</span>
          <span className="text-[#0F172A]">AL NOKHADA</span>
        </Link>

        <Link
          href={isArabic ? "/" : "/ar/"}
          className="px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 text-xs font-semibold text-slate-700 hover:border-amber-400 transition-colors"
        >
          {isArabic ? "EN" : "AR"}
        </Link>
      </header>

      {/* المحتوى الرئيسي بنفس ستايل الـ Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto">
        {/* الـ Pill Badge الذهبية */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFE0] border border-[#EADBC0] text-[#B8860B] text-[11px] font-bold tracking-widest uppercase mb-6">
          <span>
            {isArabic ? "خطأ 404 • الصفحة غير موجودة" : "ERROR 404 • PAGE NOT FOUND"}
          </span>
        </div>

        {/* العنوان المزدوج (كحلي + ذهبي) */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
          {isArabic ? (
            <>
              <span className="block text-[#0F172A]">عذراً، لم نتمكن من العثور</span>
              <span className="block text-[#E5B822]">على الصفحة المطلوبة</span>
            </>
          ) : (
            <>
              <span className="block text-[#0F172A]">Oops, We Couldn’t Find</span>
              <span className="block text-[#E5B822]">That Page</span>
            </>
          )}
        </h1>

        {/* الوصف */}
        <p className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
          {isArabic
            ? "قد يكون الرابط الذي اتبعته قديماً أو تم نقل الصفحة إلى مسار جديد. يمكنك العودة إلى الصفحة الرئيسية أو استكشاف مجموعتنا من الخيام والحلول الهندسية."
            : "The link you followed may be outdated or the page has been moved. Return to our homepage or explore our architectural tent solutions and collections."}
        </p>

        {/* أزرار متناسقة مع هوية الموقع */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={isArabic ? "/ar/" : "/"}
            className="px-7 py-3.5 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            {isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to Homepage"}
          </Link>

          <Link
            href={isArabic ? "/ar/products/" : "/products/"}
            className="px-7 py-3.5 rounded-full bg-white border border-slate-200 text-[#0F172A] text-sm font-semibold hover:border-[#E5B822] hover:bg-[#FAF8F5] transition-all"
          >
            {isArabic ? "تصفح المنتجات" : "Explore Products"}
          </Link>
        </div>
      </main>

      {/* تذييل بسيط */}
      <footer className="py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bait Al Nokhada Tents & Fabric Shades
      </footer>
    </div>
  );
}