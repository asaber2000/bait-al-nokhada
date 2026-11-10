import { Sparkles } from "lucide-react";
import Navbar from "@/components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import { productsDatabase } from "@/app/data/products.Ar";
import { client } from "@/app/lib/sanity";
import ProductsCatalogClientAr from "@/components-ar/components/ProductsCatalogClient";

export const revalidate = 60;

const arabicTranslations: Record<string, { name: string; tagline: string }> = {
  "pyramid-tent": {
    name: "خيمة هرمية",
    tagline: "واحدة من أكثر تصاميم الخيام المؤقتة طلباً ومرونة لتوفير أقصى مساحة داخلية بدون أعمدة وسطية."
  },
  "dome-tent": {
    name: "خيمة القبة",
    tagline: "هياكل قباب جيوديسية مستقبلية بمساحة بانورامية مفتوحة 360 درجة للفعاليات والمعارض."
  },
  "capsule-tent": {
    name: "خيمة الكبسولة",
    tagline: "وحدات إقامة فاخرة VIP وحلول إقامة مستقبلية مدمجة وسريعة التركيب."
  },
  "wave-tent": {
    name: "خيمة ثورية",
    tagline: "تصميم عصري مبتكر يجمع بين المتانة العالية والشكل المستقبلي للفعاليات الراقية."
  },
  "polygon-tent": {
    name: "خيمة مضلعة",
    tagline: "هياكل متعددة الزوايا واسعة الامتداد للمعارض الضخمة والساحات الرياضية."
  },
  "arch-tent": {
    name: "خيمة القوس",
    tagline: "أسقف منحنية فريدة تمنح مظهراً هندسياً أنيقاً وتجربة فاخرة للفعاليات."
  },
  "panoramic-tent": {
    name: "خيمة بانورامية",
    tagline: "تصميم زجاجي وشفاف بالكامل لإطلالات بانورامية ساحرة في الفعاليات والاحتفالات."
  },
  "pyramid-dome-tent": {
    name: "خيمة القبة الهرمية",
    tagline: "دمج مبتكر بين الهيكل الهرمي والقبة لتوفير أقصى اتساع ومرونة تشغيلية."
  },
  "geodesic-tent": {
    name: "خيمة القبة الجيوديسية",
    tagline: "قبة كروية ذاتية الدعم مقاومة للعواصف ومثالية لعروض العرض الضوئي 360 درجة."
  },
  "arabic-majlis-tent": {
    name: "خيمة المجلس العربي",
    tagline: "أصالة التراث العربي العريق ممزوجة بأحدث تقنيات العزل ومقاومة الطقس."
  },
  "double-decker-tent": {
    name: "خيام ذات طابقين",
    tagline: "مساحات عرض واستضافة رأسية من مستويين لمضاعفة القدرة الاستيعابية للفعالية."
  },
  "revolution-tent": {
    name: "خيمة ثورية (Revolution)",
    tagline: "صالات عملاقة ذات بحر مفتوح مخصصة للقمم العالمية والمعارض الدولية الكبرى."
  },
  "curve-tent": {
    name: "خيمة المنحنى (TFS)",
    tagline: "هياكل حظائر منحنية شديدة التحمل للرياح لقطاعات الطيران والتخزين الصناعي."
  }
};

async function getSanityArabicProducts() {
  try {
    const query = `*[_type in ["product", "productAr", "productsAr"] && defined(slug.current)]{
      titleAr,
      summaryAr,
      topBadges,
      "windSpeed": coalesce(engineeringDataSheet.windLoad, "120 كم/س"),
      "slug": slug.current,
      "catalogImage": catalogImage.asset->url,
      "coverImage": coverImage.asset->url,
      "image": coalesce(catalogImage.asset->url, coverImage.asset->url, mainImage.asset->url)
    }`;
    

    const sanityData = await client.fetch(query, {}, { next: { revalidate: 60 } });

    return sanityData.map((item: any) => {
      // البحث عن النسخة المحلية المطابقة للـ fallback
      const local = productsDatabase.find((p) => p.slug === item.slug);

      return {
        slug: item.slug,
        name: item.titleAr || local?.ar?.name || "خيمة معمارية",
        tagline: item.summaryAr || local?.ar?.tagline || "",
        catalogImage: item.catalogImage || local?.catalogImage || item.image || local?.heroImage,
        heroImage: item.coverImage || local?.heroImage || item.image,
        windSpeed: local?.windSpeed || "120 كم/ساعة",
        badge: local?.badge || "DIN 4102 B1",
      };
    });
  } catch (error) {
    console.error("Error fetching Sanity Arabic products:", error);
    return [];
  }
}

export default async function ArabicProductsCatalogPage() {
  const sanityProducts = await getSanityArabicProducts();
  const sanitySlugs = new Set(sanityProducts.map((p: any) => p.slug));
  const remainingLocal = productsDatabase
    .filter((lp: any) => !sanitySlugs.has(lp.slug))
    .map((lp: any) => ({
      slug: lp.slug,
      name: arabicTranslations[lp.slug]?.name || lp.ar?.name || lp.name,
      tagline: arabicTranslations[lp.slug]?.tagline || lp.ar?.tagline || lp.tagline,
      category: "هياكل معمارية",
      catalogImage: lp.catalogImage || lp.heroImage,
      heroImage: lp.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      windSpeed: lp.windSpeed || "120 كم/س",
      badge: lp.badge || "DIN 4102 B1"
    }));

  const allProducts = [...sanityProducts, ...remainingLocal];

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "كتالوج الخيام المعمارية وهياكل النسيج | بيت النخادة",
    "url": "https://baitalnokhada.com/ar/products",
    "description": "استعرض مجموعة واسعة من الخيام المعمارية، القباب الفضائية، وخيام الضيافة المصنعة في أبوظبي.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": product.name,
        "url": `https://baitalnokhada.com/ar/products/${product.slug}`
      }))
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white font-sans text-right" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />

      <Navbar />

      {/* الهيدر العلوي المتطابق بمقاسات site-container */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>أكثر من 30 عاماً من الريادة في تصنيع وتوريد الخيام</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
            حلول خيام معمارية فاخرة<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              للفعاليات الكبرى والمشاريع
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            في شركة بيت النوخذة، نجمع بين خبرة تتجاوز 30 عاماً والتميز الهندسي في تصنيع وتوريد وتأجير الخيام الفاخرة لقطاعات الفعاليات والمعارض الكبرى والمشاريع في الإمارات والمملكة العربية السعودية. نوفر تشكيلة متكاملة من خيام الهياكل الصلبة المصممة بمساحات واسعة خالية من الأعمدة، والمقاومة لأقسى الظروف المناخية. سواء كنت تبحث عن استئجار خيام للمؤتمرات العالمية أو شراء حلول مخصصة وطويلة الأمد، يقدم فريقنا الهندسي أعلى معايير الجودة والتنفيذ السريع. استكشف مجموعتنا الهندسية أدناه.</p>
        </div>
      </section>

      {/* المكون التفاعلي للبحث وعرض الكروت المتطابقة تماماً مع الإنجليزي */}
      <ProductsCatalogClientAr initialProducts={allProducts} />

      <Footer />
    </main>
  );
}