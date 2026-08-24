import { 
  Sparkles, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Maximize2, 
  PhoneCall, 
  Boxes, 
  ShieldCheck, 
  Eye 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsDatabase } from "@/app/data/products.En";
import { client } from "@/app/lib/sanity";

async function getProduct(slug: string) {
  const localMatch = productsDatabase.find((p) => p.slug === slug);
  if (localMatch) return localMatch;

  try {
    const query = `*[_type == "productsEn" && slug.current == $slug][0]{
      titleEn,
      summaryEn,
      summaryAr,
      overviewTitleEn,
      overviewDescEn,
      engineeredAdvantages,
      topBadges,
      availableProfiles[]{
        sizeName,
        dimensions,
        capacity
      },
      engineeringDataSheet{
        mainFrame,
        steelComponents,
        windLoad,
        operatingTemp,
        fabricFire,
        roofCovering,
        wallOptions,
        standardSpans
      },
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      productGallery[]{
        "imageUrl": asset->url,
        alt,
        title
      }
    }`;
    
    const sanityItem = await client.fetch(query, { slug }, { cache: 'no-store' });

    if (sanityItem) {
      return {
        slug: sanityItem.slug,
        name: sanityItem.titleEn,
        // التقاط الملخص سواء كان مكتوب في summaryEn أو summaryAr
        tagline: sanityItem.summaryEn || sanityItem.summaryAr || "Engineered architectural tent solution.",
        
        // التقاط العنوان التفصيلي المكتوب في سانتي (Overview Section Title)
        descriptionTitle: sanityItem.overviewTitleEn || "Structural Design & Material Standards",
        badges: sanityItem.topBadges || ["DIN 4102 B1 • High Wind Resistance"],
        description: sanityItem.overviewDescEn || "Engineered with high-frequency welded PVC membranes and aerospace aluminum frames designed to withstand extreme GCC climates.",
        
        // التقاط الـ Badges الحقيقية المضافة في سانتي
        badge: sanityItem.topBadges?.[0] || "DIN 4102 B1 • High Wind Resistance",
        heroImage: sanityItem.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        
        features: sanityItem.engineeredAdvantages || [
          "German DIN EN 13782 structural safety certification",
          "High-frequency welded translucent or opaque PVC fabric",
          "Modular bay spacing allowing infinite expansion",
          "Corrosion-resistant anodized aluminum alloy frame"
        ],
        
        models: sanityItem.availableProfiles?.length > 0 
          ? sanityItem.availableProfiles.map((p: any) => ({
              name: p.sizeName || "Profile Model",
              size: p.dimensions || "Custom Span",
              capacity: p.capacity || "High Capacity"
            }))
          : [{ name: "Model Standard", size: "Custom Span", capacity: "High Capacity" }],
        
        specs: [
          { label: "Main Frame Structure", value: sanityItem.engineeringDataSheet?.mainFrame || "Hard pressed extruded aluminum 6061/T6" },
          { label: "Steel Components", value: sanityItem.engineeringDataSheet?.steelComponents || "Hot-dip galvanized steel" },
          { label: "Wind Load Tolerance", value: sanityItem.engineeringDataSheet?.windLoad || "120 km/h (0.5 kN/m²)" },
          { label: "Operating Temperature", value: sanityItem.engineeringDataSheet?.operatingTemp || "-30°C to +70°C" },
          { label: "Fabric Fire Retardancy", value: sanityItem.engineeringDataSheet?.fabricFire || "DIN 4102 B1, M2" },
          { label: "Roof Covering", value: sanityItem.engineeringDataSheet?.roofCovering || "Translucent / Opaque PVC" },
          { label: "Side Wall Options", value: sanityItem.engineeringDataSheet?.wallOptions || "Glass, ABS, Sandwich Panel, PVC" },
          { label: "Available Spans", value: sanityItem.engineeringDataSheet?.standardSpans || "3m to 60m clear span" }
        ],

        gallery: sanityItem.productGallery?.length > 0 
          ? sanityItem.productGallery.map((g: any) => g.imageUrl) 
          : null
      };
    }
  } catch (error) {
    console.error("Error fetching product detail from Sanity:", error);
  }

  return productsDatabase[0];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  // Gallery fallback photos
  const galleryImages = [
    product.heroImage,
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* 1. Grand Hero Section */}
      <section className="relative pt-48 pb-24 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              {((product as any).badges || [(product as any).badge]).map((b: string, idx: number) => (
                <div key={idx} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight font-heading">
              {product.name}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              {product.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <span>Request Structural Quotation</span>
              <Send className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/971505932598"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#0D1527] hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Engineering WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Dimensions Matrix */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Technical Overview
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                {(product as any).descriptionTitle || "Structural Design & Material Standards"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Advantages */}
            <div className="p-8 rounded-3xl bg-[#0D1527] border border-[#D4AF37]/30 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Engineered Advantages & Climate Certifications</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {product.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Matrix */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Model Sizes */}
            <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-5 shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Available Profiles & Guest Capacities</span>
              </h3>
              <div className="space-y-3">
                {product.models.map((mod: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between bg-white/2 border-white/5 text-slate-400 hover:bg-white/5"
                  >
                    <div>
                      <strong className="block text-sm font-bold text-white">{mod.name}</strong>
                      <span className="text-xs text-[#D4AF37] font-medium">{mod.size}</span>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5">
                      {mod.capacity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Data Sheet */}
            <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Boxes className="w-4 h-4 text-[#D4AF37]" />
                <span>Official Engineering Data Sheet</span>
              </h3>
              <div className="divide-y divide-white/10 text-xs sm:text-sm">
                {product.specs.map((spec: any, idx: number) => (
                  <div key={idx} className="py-3.5 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-bold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. High-Resolution Gallery & Project Applications */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Visual Engineering Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Site Staging & Installed Structures
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Explore live site executions, high-eave wall systems, and interior climate setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img: string, idx: number) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37]/60 transition-all shadow-xl bg-black"
            >
              <Image
                src={img}
                alt={`Gallery View ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technical RFQ Call to Action */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-5xl font-black text-white font-heading">
          Ready to Engineer Your Custom Venue?
        </h3>
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Contact our Abu Dhabi and Dubai engineering headquarters for 3D CAD site layouts, wind-load calculations, and turnkey factory quotations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
          >
            <span>Request Full Project Proposal</span>
            <Send className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}