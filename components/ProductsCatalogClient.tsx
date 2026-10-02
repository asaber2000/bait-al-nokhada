"use client";

import { useState } from "react";
import { Search, Wind, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  heroImage: string;
  windSpeed: string;
  badge: string;
}

export default function ProductsCatalogClient({ initialProducts }: { initialProducts: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = initialProducts.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      product.name?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query) ||
      product.tagline?.toLowerCase().includes(query) ||
      product.slug?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {/* Search Input Bar */}
      <div className="pt-6 max-w-4xl mx-auto">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tent model, span width, or engineering line..."
            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#0D1527] border border-white/15 focus:border-[#D4AF37] text-white text-sm outline-none shadow-2xl transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Dynamic Filtered Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-xl font-bold text-slate-300">No structures found matching your query</p>
            <p className="text-sm text-slate-500">Try searching for other terms like Majlis, Dome, Arch, or Pyramid</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.slug || idx}
                className="group relative rounded-3xl bg-[#0A0F1D] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="p-3.5 pb-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#050811] border border-white/5">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        quality={85}
                        priority={idx < 3}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 shadow-lg">
                          {product.category || "Modular Structure"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading tracking-tight">
                      {product.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300/80 font-light line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {product.tagline}
                    </p>

                    <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 group-hover:border-[#D4AF37]/20 transition-colors">
                        <Wind className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-slate-200 font-medium truncate">{product.windSpeed}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 group-hover:border-[#D4AF37]/20 transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-slate-200 font-medium truncate">{product.badge || "DIN 4102 B1"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 relative z-10">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full py-3.5 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#C5A880] text-slate-200 hover:text-[#070B14] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all duration-300 group/btn shadow-md"
                  >
                    <span>View Specifications & 3D Sizes</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}