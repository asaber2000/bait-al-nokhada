import { use } from "react";
import { 
  Sparkles, 
  ArrowRight, 
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
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";

// 1. توليد الـ Slugs ثابتاً للسرعة الخارقة (SSG)
export async function generateStaticParams() {
  try {
    const query = `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`;
    const slugs = await client.fetch(query);
    return (slugs || []).map((item: any) => ({ slug: item.slug }));
  } catch (error) {
    return [];
  }
}

// 2. دالة جلب بيانات منتج واحد من سانتي بناءً على الـ slug
async function getSanityProductBySlug(slug: string) {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      titleAr,
      summaryAr,
      topBadges,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      overviewTitleAr,
      overviewDescAr,
      engineeredAdvantages,
      availableProfiles,
      engineeringDataSheet {
        mainFrame,
        steelComponents,
        windLoad,
        operatingTemp,
        fabricFire,
        roofCovering,
        wallOptions,
        standardSpans
      },
      "productGallery": productGallery[]{
        "url": asset->url
      }
    }`;
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch (error) {
    return null;
  }
}

const generateProductGraphSchema = (product: any, arData: any) => {
  const currentUrl = `https://baitalnokhada.com/ar/products/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": "https://baitalnokhada.com/#place",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.93410630",
          "longitude": "55.06500100"
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=24.93410630, 55.06500100",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Land No. TP 010102 - Technopark",
          "addressLocality": "Mina Jebel Ali",
          "addressRegion": "National Industries Park - Dubai",
          "postalCode": "Dubai",
          "addressCountry": "AE"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://baitalnokhada.com/#organization",
        "name": "Bait Al Nokhada",
        "url": "https://baitalnokhada.com",
        "email": "info@baitalnokhada.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Land No. TP 010102 - Technopark",
          "addressLocality": "Mina Jebel Ali",
          "addressRegion": "National Industries Park - Dubai",
          "postalCode": "Dubai",
          "addressCountry": "AE"
        },
        "logo": {
          "@type": "ImageObject",
          "@id": "https://baitalnokhada.com/#logo",
          "url": "https://baitalnokhada.com/wp-content/uploads/2024/08/Brand-identity-2_.png",
          "width": 1894,
          "height": 1319
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+971558850631",
            "contactType": "customer support"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+97143444091",
            "contactType": "customer support"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://baitalnokhada.com/#website",
        "url": "https://baitalnokhada.com",
        "name": "BAITALNOKHADA TENTS FACTORY -HEAD OFFICE DUBAI",
        "publisher": {
          "@id": "https://baitalnokhada.com/#organization"
        },
        "inLanguage": "ar"
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": arData.name,
        "isPartOf": {
          "@id": "https://baitalnokhada.com/#website"
        },
        "inLanguage": "ar"
      },
      {
        "@type": "Product",
        "name": arData.name,
        "description": arData.tagline,
        "@id": `${currentUrl}#richSnippet`,
        "isPartOf": {
          "@id": `${currentUrl}#webpage`
        },
        "image": {
          "@type": "ImageObject",
          "url": product.heroImage
        },
        "url": currentUrl
      }
    ]
  };
};

export default async function ArabicProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. نبحث أولاً في الداتا المحلية
  let product: any = productsDatabase.find((p) => p.slug === slug);
  let arData: any = product ? product.ar : null;

  // 2. إذا لم يكن موجوداً محلياً، نجلبه مباشرة من سانتي!
  const sanityProduct = await getSanityProductBySlug(slug);

if (sanityProduct) {
    product = {
      slug: sanityProduct.slug,
      heroImage: sanityProduct.coverImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    };
    arData = {
      name: sanityProduct.titleAr || "منتج مخصص",
      badge: sanityProduct.topBadges?.[0] || "DIN 4102 B1",
      tagline: sanityProduct.summaryAr || "حلول خيام معمارية مبتكرة.",
      overviewTitle: sanityProduct.overviewTitleAr ||"",
      description: sanityProduct.overviewDescAr || sanityProduct.summaryAr || "",
      features: sanityProduct.engineeredAdvantages || ["معايير ألمانية معتمدة", "مقاومة عالية للرياح"],
      models: sanityProduct.availableProfiles?.length > 0 
        ? sanityProduct.availableProfiles.map((prof: any) => ({
            name: prof.sizeName || "طراز قياسي",
            size: prof.dimensions || "مواصفات خاصة",
            capacity: prof.capacity || "حسب الطلب"
          }))
        : [{ name: "موديل أساسي", size: "مقاس قياسي", capacity: "متعدد الاستخدام" }],
      specs: [
        { label: "Main Frame Structure", value: sanityProduct.engineeringDataSheet?.mainFrame || "ألومنيوم فضاء معالج" },
        { label: "Steel Components", value: sanityProduct.engineeringDataSheet?.steelComponents || "صلب مجلفن على الساخن" },
        { label: "Wind Load Tolerance", value: sanityProduct.engineeringDataSheet?.windLoad || "120 كم/ساعة" },
        { label: "Operating Temperature", value: sanityProduct.engineeringDataSheet?.operatingTemp || "-30°C إلى +70°C" },
        { label: "Fabric Fire Retardancy", value: sanityProduct.engineeringDataSheet?.fabricFire || "DIN 4102 B1" },
        { label: "Roof Covering", value: sanityProduct.engineeringDataSheet?.roofCovering || "بي في سي عالي التحمل" },
        { label: "Side Wall Options", value: sanityProduct.engineeringDataSheet?.wallOptions || "ألواح زجاجية أو ساندويتش بانل" },
        { label: "Available Standard Spans", value: sanityProduct.engineeringDataSheet?.standardSpans || "من 10م حتى 50م" }
      ]
    };
  }
  // Fallback لو المنتج مش موجود خالص
  if (!product || !arData) {
    product = productsDatabase[0];
    arData = product.ar;
  }

  const galleryImages = sanityProduct?.productGallery?.length > 0 
    ? sanityProduct.productGallery.map((img: any) => img.url).filter(Boolean)
    : [
        product.heroImage,
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      ];
  const selectedModel = 0; 
  const activePhoto: string | null = null;

  const schemaData = generateProductGraphSchema(product, arData);

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]" dir="rtl">
      {/* حقن كود السكيما في رأس الصفحة أوتوماتيكياً */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* 1. Grand Hero Section */}
      <section className="relative pt-48 pb-24 px-6 border-b border-white/10 overflow-hidden text-right">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={arData.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14] via-[#070B14]/90 to-[#070B14]" />
          <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-200 h-87.5 bg-[#D4AF37]/15 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          <Link
            href="/ar/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4AF37] hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى كتالوج المنتجات بالكامل</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{arData.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight font-heading">
              {arData.name}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              {arData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/ar/contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 shadow-xl shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
            >
              <span>طلب عرض سعر ومواصفات هندسية</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>

            <a
              href="https://wa.me/971505932598"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#0D1527] hover:bg-white/10 text-white font-bold text-xs tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>استشارة هندسية فورية عبر الواتساب</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Dimensions Matrix */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Right Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                نظرة هندسية عامة
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading">
                {arData.overviewTitle}
                التصميم الإنشائي ومعايير جودة المواد
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {arData.description}
              </p>
            </div>

            {/* Key Advantages */}
            <div className="p-8 rounded-3xl bg-[#0D1527] border border-[#D4AF37]/30 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold tracking-wider text-[#D4AF37] flex items-center gap-2 justify-start">
                <ShieldCheck className="w-5 h-5" />
                <span>المميزات الهندسية واعتمادات مقاومة المناخ</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {arData.features.map((feat: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 justify-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-5 shadow-2xl">
              <h3 className="text-sm font-bold tracking-wider text-white flex items-center gap-2 justify-start">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>المقاسات المتاحة وسعة الحضور التقديرية</span>
              </h3>
              <div className="space-y-3">
                {arData.models.map((mod: any, idx: number) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedModel === idx
                        ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white"
                        : "bg-white/2 border-white/5 text-slate-400"
                    }`}
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
              <h3 className="text-xs font-bold tracking-wider text-slate-400 flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#D4AF37]" />
                <span>جدول البيانات الهندسية المعتمدة</span>
              </h3>
              <div className="divide-y divide-white/10 text-xs sm:text-sm">
                {arData.specs.map((spec: any, idx: number) => (
                  <div key={idx} className="py-3.5 flex justify-between gap-4">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. High-Resolution Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            معرض الصور الهندسي
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            مشاهد من واقع التركيب والتنفيذ الميداني
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            استعرض تفاصيل الهيكل والواجهات بدقة عالية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img: string, idx: number) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black"
            >
              <Image
                src={img}
                alt={`معرض صور الهيكل ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">تفاصيل الهيكل</span>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#070B14] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technical RFQ Call to Action */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-5xl font-black text-white font-heading">
          هل تخطط لتنفيذ مشروع بمواصفات خاصة؟
        </h3>
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          تواصل مع الإدارة الهندسية في أبوظبي ودبي للحصول على مخططات CAD ثلاثية الأبعاد وعروض أسعار المصنع مباشرة.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/ar/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
          >
            <span>طلب دراسة فنية وعرض سعر متكامل</span>
            <Send className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}