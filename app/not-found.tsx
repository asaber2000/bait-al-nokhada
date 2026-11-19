"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <span className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
        404
      </span>

      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        {isArabic ? "عذراً، هذه الصفحة غير موجودة" : "Page Not Found"}
      </h1>

      <p className="text-base md:text-lg text-slate-600 max-w-md mb-8 leading-relaxed">
        {isArabic
          ? "يبدو أن الرابط الذي تحاول الوصول إليه قد تم نقله أو لم يعد متوفراً. يمكنك العودة إلى الصفحة الرئيسية واستكشاف حلولنا ومنتجاتنا."
          : "The page you are looking for might have been moved or is no longer available. Return to the homepage to explore our tent solutions and products."}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={isArabic ? "/ar/" : "/"}
          className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
        >
          {isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to Homepage"}
        </Link>

        <Link
          href={isArabic ? "/ar/products/" : "/products/"}
          className="px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
        >
          {isArabic ? "تصفح المنتجات" : "Explore Products"}
        </Link>
      </div>
    </main>
  );
}