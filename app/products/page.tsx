import { Sparkles, ArrowUpRight, Search, ShieldCheck, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";

async function getSanityProducts() {
  try {
    const query = `*[_type == "productsEn"]{
      titleEn,
      categoryEn,
      summaryEn,
      topBadges,
      "slug": slug.current,
      "coverImage": coalesce(heroImageUrl, coverImage.asset->url)
    }`;

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => ({
      slug: item.slug || "custom-product",
      name: item.titleEn || "Custom Product",
      tagline: item.summaryEn || "Engineered architectural tent solution.",
      category: item.categoryEn || "Mega Arenas & Expos",
      heroImage: item.coverImage || "https://d3g07f5oxrfvni.cloudfront.net/media-images/default-fallback.webp",
      windSpeed: "120 km/h Wind",
      badge: item.topBadges?.[0] || "DIN 4102 B1",
      models: ["Model 1", "Model 2"]
    }));
  } catch (error) {
    console.error("Error fetching Sanity products:", error);
    return [];
  }
}

export default async function ProductsCatalogPage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = [...sanityProducts, ...productsDatabase];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>30+ Years of Manufacturing Leadership • 13 Engineering Lines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight font-heading">
            Architectural Modular Tents & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Tensile Fabric Structures
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Engineered at our 40,000 m² Abu Dhabi manufacturing facility. Combining German DIN EN 13782 structural safety, aerospace aluminum frames, and high-frequency welded PVC membranes engineered for extreme GCC climates.
          </p>

          {/* Search Bar */}
          <div className="pt-6 max-w-4xl mx-auto">
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by tent model, span width, or engineering line..."
                className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#0D1527] border border-white/15 focus:border-[#D4AF37] text-white text-sm outline-none shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern High-End Products Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, idx) => (
            <div
              key={product.slug || idx}
              className="group relative rounded-3xl bg-[#0A0F1D] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* توهج ضوئي خافت عند التمرير */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* إطار الصورة الزجاجي النقي - بدون أي تدرج معتم */}
                <div className="p-3.5 pb-0">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#050811] border border-white/5">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      quality={85}
                      priority={idx < 3}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* شارة هندسية طافية بدون حجب تفاصيل الهيكل */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 shadow-lg">
                        {product.category || "Modular Structure"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* تفاصيل المنتج والمعايير الفنية */}
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

              {/* زر استعراض المواصفات */}
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
      </section>

      <Footer />
    </main>
  );
}