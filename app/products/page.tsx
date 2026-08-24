import { Sparkles, ArrowUpRight, Search, ShieldCheck, Wind, Building2, Send, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";

// دالة لجلب منتجات سانتي وصورتها الأصلية مباشرة من السيرفر (تظهر فوراً مع الداتا المحلية)
async function getSanityProducts() {
  try {
    const query = `*[_type == "productsEn"]{
      titleEn,
      categoryEn,
      summaryEn,
      topBadges,
      "slug": slug.current,
      "coverImage": coverImage.asset->url
    }`;
    // استخدام cache مع revalidate لضمان السرعة الفورية الخارقة وعدم حدوث أي تأخير
    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return (sanityData || []).map((item: any) => ({
      slug: item.slug || "custom-product",
      name: item.titleEn || "Custom Product",
      tagline: item.summaryEn || "Engineered architectural tent solution.",
      category: item.categoryEn || "Mega Arenas & Expos",
      heroImage: item.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
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
  
  // دمج منتجات سانتي (بصورها الحقيقية) مع المنتجات المحلية على السيرفر ككتلة واحدة سريعة جداً
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

      {/* Products Grid (تحميل فوري وسريع من السيرفر بدون أي تأخير أو وميض) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, idx) => (
            <div
              key={product.slug || idx}
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col justify-between shadow-2xl relative"
            >
              <div>
                <div className="relative h-72 w-full overflow-hidden bg-gradient-to-b from-[#0B1120] to-[#070B14]">
                  <Image
                    src={product.heroImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      {product.badge ? product.badge.split("•")[0] : "DIN 4102 B1"}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 backdrop-blur-md text-slate-300">
                      {product.models ? product.models.length : "3"} Models
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <Wind className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="text-slate-200 font-medium truncate">{product.windSpeed} */</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="text-slate-200 font-medium truncate">DIN 4102 B1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full py-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#C5A880] text-white hover:text-[#070B14] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all shadow-md group/btn"
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