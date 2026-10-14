import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Maximize2,
  PhoneCall,
  Boxes,
  ShieldCheck,
  Award,
  Clock,
  Layers,
  FileText
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";
import ProductGalleryLightboxAr from "@/components-ar/components/ProductGalleryLightbox";

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
      overviewTitle: sanityProduct.overviewTitleAr || "التصميم الإنشائي ومعايير جودة المواد",
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
        { label: "الهيكل الإنشائي الرئيسي", value: sanityProduct.engineeringDataSheet?.mainFrame || "ألومنيوم فضاء معالج 6061/T6" },
        { label: "المكونات الفولاذية", value: sanityProduct.engineeringDataSheet?.steelComponents || "صلب مجلفن على الساخن" },
        { label: "مقاومة الرياح القصوى", value: sanityProduct.engineeringDataSheet?.windLoad || "120 كم/ساعة" },
        { label: "درجات الحرارة التشغيلية", value: sanityProduct.engineeringDataSheet?.operatingTemp || "-30°C إلى +70°C" },
        { label: "معايير مقاومة الحريق", value: sanityProduct.engineeringDataSheet?.fabricFire || "DIN 4102 B1, M2" },
        { label: "غطاء السقف والغشاء", value: sanityProduct.engineeringDataSheet?.roofCovering || "بي في سي عالي الكثافة معتم/شبه شفاف" },
        { label: "خيارات الجدران الجانبية", value: sanityProduct.engineeringDataSheet?.wallOptions || "زجاج مقسى، ساندويتش بانل، ABS" },
        { label: "البحور القياسية المتاحة", value: sanityProduct.engineeringDataSheet?.standardSpans || "من 10م حتى 60م بحر مفتوح" }
      ]
    };
  }

  // Fallback لو المنتج مش موجود خالص
  if (!product || !arData) {
    product = productsDatabase[0];
    arData = product.ar;
  }

  const galleryImages: string[] = sanityProduct?.productGallery?.length > 0
    ? sanityProduct.productGallery.map((img: any) => img.url).filter(Boolean)
    : [
      product.heroImage,
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ];

  const schemaData = generateProductGraphSchema(product, arData);

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* 1. Grand Hero Section: معدل بتوزيع ثنائي وصورة بارزة لملء الفراغ */}
      <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7] text-right">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage}
            alt={arData.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF7]/60 via-[#FDFCF7]/90 to-[#FDFCF7]" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/ar/products"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#df9d17] hover:text-black transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى كتالوج المنتجات بالكامل</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* جهة النصوص والأزرار */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{arData.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
                {arData.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {arData.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/ar/contact"
                  className="px-7 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
                >
                  <span>طلب دراسة فنية وعرض سعر</span>
                  <Send className="w-4 h-4 rotate-180" />
                </Link>

                <a
                  href="https://wa.me/971505932598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#df9d17] font-bold text-xs tracking-wider border border-slate-200/80 shadow-xs transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#df9d17]" />
                  <span>استشارة هندسية فورية عبر الواتساب</span>
                </a>
              </div>
            </div>

            {/* بطاقة صورة المنتج لملء الفراغ الجانبي */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
                <Image
                  src={product.heroImage}
                  alt={arData.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center text-xs pointer-events-none">
                  <span className="text-white/80 font-sans tracking-wider text-[11px]">بيت النوخذة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Specifications & Features Grid */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-slate-200/60 font-sans text-right" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* الجانب الأيمن: النصوص التوضيحية + شبكة المميزات (2x2) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
                قدرات وخبرات إنشائية معتمدة
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
                {arData.overviewTitle || `لماذا تتصدر منتجاتنا السوق الإقليمي`}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {arData.description}
              </p>
            </div>

            {/* شبكة كروت المميزات الثنائية تماماً كالصورة المطلوبة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {arData.features.map((feat: any, idx: number) => {
                const title = typeof feat === "string" ? feat.split(" - ")[0] || feat : feat.title || feat;
                const desc = typeof feat === "string" && feat.includes(" - ") ? feat.split(" - ")[1] : feat.desc || "مصممة وفق أعلى معايير الجودة العالمية ومقاومة العوامل الجوية.";

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#df9d17]/50 transition-all space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-[#0B1220] flex items-center gap-2 justify-start">
                      <CheckCircle2 className="w-4 h-4 text-[#df9d17] shrink-0" />
                      <span>{title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed pr-6">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* الجانب الأيسر: كرت المقاسات + كرت المواصفات الفنية المعتمدة */}
          <div className="lg:col-span-5 space-y-6">

            {/* 1. كرت المقاسات وسعة الحضور */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold tracking-wider text-[#df9d17] flex items-center gap-2 justify-start">
                <Maximize2 className="w-4 h-4" />
                <span>المقاسات المتاحة وسعة الحضور التقديرية</span>
              </h3>
              <div className="space-y-2">
                {arData.models.map((mod: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border flex items-center justify-between bg-[#FDFCF7] border-slate-200/70 text-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#df9d17] shrink-0" />
                      <strong className="text-xs font-bold text-[#0B1220]">{mod.name}</strong>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200/80 shadow-xs text-slate-800">
                      {mod.capacity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. كرت جدول البيانات الفنية المعتمدة */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 justify-start">
                <Boxes className="w-4 h-4 text-[#df9d17]" />
                <span>أبرز المواصفات الفنية</span>
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {arData.specs.map((spec: any, idx: number) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center gap-4">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-[#0B1220] text-left font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. المعرض التفاعلي مع نافذة التكبير الكبرى */}
      <ProductGalleryLightboxAr images={galleryImages} />

      {/* 4. Technical RFQ Call to Action */}
      <section className="pb-24 pt-6 px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center space-y-5 shadow-xs">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">
              دراسة فنية وعرض سعر تسليم مفتاح
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B1220] font-heading tracking-tight">
              هل تخطط لتنفيذ مشروع بمواصفات خاصة؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              تواصل مع الإدارة الهندسية في أبوظبي ودبي للحصول على مخططات CAD ثلاثية الأبعاد وعروض أسعار المصنع مباشرة.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/ar/contact"
              className="px-8 py-3.5 rounded-xl bg-[#df9d17] hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-105 shadow-md shadow-[#df9d17]/20 transition-all flex items-center gap-2"
            >
              <span>طلب دراسة فنية وعرض سعر متكامل</span>
              <Send className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}