"use client";

import { useState } from "react";
import { Search, Wind, ShieldCheck, ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductAr {
  slug: string;
  name: string;
  tagline: string;
  category?: string;
  heroImage: string;
  windSpeed: string;
  badge: string;
}

export default function ProductsCatalogClientAr({ initialProducts }: { initialProducts: ProductAr[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = initialProducts.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      product.name?.toLowerCase().includes(query) ||
      product.tagline?.toLowerCase().includes(query) ||
      product.slug?.toLowerCase().includes(query)
    );
  });

  return (
    <section className="relative z-10 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#FDFCF7]" dir="rtl">
      <div className="site-container max-w-7xl mx-auto w-full space-y-10">
        
        {/* شريط البحث المماثل للإنجليزي */}
        <div className="pt-6 max-w-xl mx-auto w-full">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم الخيمة، الطراز، أو المواصفات الإنشائية..."
              className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 focus:border-[#df9d17] text-[#0B1220] text-sm outline-none shadow-2xs transition-all placeholder:text-slate-400 text-right"
            />
          </div>
        </div>

        {/* شبكة الكروت التفاعلية */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-xl font-bold text-[#0B1220]">لم يتم العثور على خيام مطابقة لبحثك</p>
            <p className="text-sm text-slate-600">جرب البحث بكلمات أخرى مثل: هرمية، قبة، مجلس، أو كبسولة</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.slug || idx}
                className="group relative rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-500 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1.5 overflow-hidden text-right"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#df9d17]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* إطار الصورة الفخم المتطابق مع الإنجليزي */}
                  <div className="p-3.5 pb-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        quality={85}
                        priority={idx < 3}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* البادج الزجاجي الداخلي */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-[#df9d17] border border-slate-200/80 shadow-xs">
                          {product.category || "هياكل معمارية"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* نصوص وتفاصيل الكرت */}
                  <div className="p-6 space-y-3.5">
                    <h2 className="text-xl sm:text-2xl font-black text-[#0B1220] group-hover:text-[#df9d17] transition-colors font-heading tracking-tight">
                      {product.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {product.tagline}
                    </p>

                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/70 flex items-center gap-2 group-hover:border-[#df9d17]/40 transition-colors">
                        <Wind className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                        <span className="text-slate-700 font-medium truncate">{product.windSpeed}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FDFCF7] border border-slate-200/70 flex items-center gap-2 group-hover:border-[#df9d17]/40 transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#df9d17] shrink-0" />
                        <span className="text-slate-700 font-medium truncate">{product.badge || "DIN 4102 B1"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* زر الإجراء السفلي الموحد */}
                <div className="p-6 pt-0 relative z-10">
                  <Link
                    href={`/ar/products/${product.slug}`}
                    className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-[#df9d17] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200/80 hover:border-[#df9d17] transition-all duration-300 group/btn shadow-xs hover:shadow-md"
                  >
                    <span>عرض المواصفات والمقاسات</span>
                    <ArrowUpLeft className="w-4 h-4 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}