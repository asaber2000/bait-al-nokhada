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
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      <section className="relative pt-44 pb-12 px-6 border-b border-white/10 overflow-hidden">
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
        </div>
      </section>

      {/* المكون التفاعلي للبحث وعرض الكروت فورياً */}
      <ProductsCatalogClient initialProducts={allProducts} />

      <Footer />
    </main>
  );
}