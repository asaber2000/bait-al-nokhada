import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";
import ProductsCatalogClient from "@/components/ProductsCatalogClient";

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
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <Navbar />

      <section className="relative pt-44 pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>30+ Years of Manufacturing Leadership • 13 Engineering Lines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0B1220] leading-tight font-heading">
            Architectural Modular Tents & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              Tensile Fabric Structures
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            Engineered at our 40,000 m² Abu Dhabi manufacturing facility. Combining German DIN EN 13782 structural safety, aerospace aluminum frames, and high-frequency welded PVC membranes engineered for extreme GCC climates.
          </p>
        </div>
      </section>

      {/* المكون التفاعلي للبحث وعرض الكروت فورياً */}
      <ProductsCatalogClient initialProducts={allProducts} />

      <Footer />
    </main>
  );
}