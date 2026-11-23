import type { Metadata } from "next";
import {
  Sparkles,
  Target,
  Compass,
  Quote,
  CheckCircle2,
  Award,
  Users,
  Building,
  Layers,
  ShieldCheck,
  Cpu,
  ArrowUpLeft
} from "lucide-react";
import Navbar from "../../../components-ar/components/Navbar.Ar";
import Footer from "@/components-ar/components/Footer.Ar";
import AboutJourneyClientArabic from "@/components-ar/components/AboutJourneyClient.Ar"; // مسار مكون التايملاين العربي

const journeyMilestones = [
  {
    year: "1997",
    badge: "مرحلة التأسيس",
    title: "التأسيس في أبوظبي",
    tagline: "أكثر من 30 عاماً من الإرث الهندسي العريق",
    desc: "تأسس مصنع بيت النوخذة في أبوظبي، ليكون من أوائل المنشآت الصناعية الوطنية المتخصصة في تصنيع خيام المجالس العربية والهياكل الإنشائية المعتمدة للمشاريع في أبوظبي",
    highlight: "بدء التصنيع المحلي للخيام والهياكل في أبوظبي.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-2005.webp",
  },
  {
    year: "2005",
    badge: "تطور خطوط الإنتاج والتقنيات",
    title: "التوسع الصناعي والمصانع الكبرى",
    tagline: "طاقة إنتاجية تتجاوز 40,000 م² معتمدة بشهادات ISO",
    desc: "نقل وتوسيع العمليات الإنتاجية إلى مدينة أبوظبي الصناعية (ICAD-1)، مع إدخال خطوط تشكيل مقاطع الألمنيوم المؤتمتة (CNC) وتقنيات اللحام الحراري لإنتاج خيام وهياكل ألمنيوم عالية التحمل للمشاريع الكبرى.",
    highlight: "اعتماد شهادات الجودة العالمية ومطابقة مواصفات الدفاع المدني.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-al-nokhada-old-logo.webp",
    imagePosition: "object-[center_60%]",
  },
  {
    year: "2015",
    badge: "الفعاليات والمعارض العالمية",
    title: "قاعات معارض للمؤتمرات والقمم الدولية",
    tagline: "ريادة هندسية معتمدة عبر كبرى فعاليات الإمارات",
    desc: "اعتماد بيت النوخذة شريكاً تصنيعياً وتنفيذياً موثوقاً لأضخم المعارض الدولية والقمم الحكومية في الإمارات، وتشييد قاعات عملاقة واسعة البحور بدون أعمدة لمعارض آيدكس (IDEX)، ونافدكس (NAVDEX)، ومعارض الطيران.",
    highlight: "تنفيذ قاعات ومجمعات معارض متكاملة لصالح القطاعين الحكومي والدفاعي.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-old.webp",
  },
  {
    year: "2022",
    badge: "حضور إقليمي وانتشار عالمي",
    title: "مشاريع استراتيجية والتصدير حول العالم",
    tagline: "تغطية كبرى مشاريع البنية التحتية والترفيه",
    desc: "توسيع التوريد المباشر وتنفيذ مشاريع الخيام والقاعات الضخمة في المملكة العربية السعودية ودول الخليج دعماً للمشاريع العملاقة ومواسم الفعاليات، إلى جانب تصنيع وتصدير الهياكل المعيارية المخصصة لعملاء ومشاريع تجارية حول العالم (Worldwide).",
    highlight: "توريد وتنفيذ هياكل الفعاليات والمستودعات في الخليج وتصديرها للأسواق العالمية.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-New-Front.webp",
    imagePosition: "object-[75%_center]",
  },
  {
    year: "2026",
    badge: "الجيل القادم من الابتكار",
    title: "هياكل معيارية وأنظمة خيام مستدامة",
    tagline: "+6,000 مشروع منجز بنجاح عبر دول الخليج",
    desc: "تصنيع وتشييد أحدث القاعات المعيارية المدعمة بواجهات زجاجية بانورامية، وألواح عازلة للصوت، وخيام الطابقين المخصصة لكبرى الفعاليات والمعارض في الإمارات والمنطقة وحول العالم.",
    highlight: "إنجاز أكثر من 6,000 مشروع مع قدرات تسليم مفتاح متكاملة بنسبة 100%.",
    image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Tents-for-sale-north-star-exhibition.webp",
    imagePosition: "object-[95%_center]",
  },
];

const expertiseList = [
  {
    title: "التصميم والتصنيع الهندسي",
    desc: "تصنيع وتفصيل هياكل الألمنيوم والفولاذ في مصانعنا وفق أعلى مواصفات الأمان العالمية واشتراطات مقاومة الحريق المعتمدة.",
    icon: Cpu,
  },
  {
    title: "قاعات الفعاليات والمعارض الكبرى",
    desc: "جاهزية فورية لتشييد مجمعات القاعات المعيارية واسعة البحور بدون أعمدة داخلية للفعاليات والمؤتمرات والمعارض في دبي، وأبوظبي، والرياض.",
    icon: Layers,
  },
  {
    title: "التجهيز الداخلي والديكورات الملكية",
    desc: "فرش داخلي راقٍ للخيام والمجالس العربية، جدران زجاجية مزدوجة، أبواب أوتوماتيكية، وأرضيات كاسيت مستوية ومرفوعة لتمديدات الخدمات.",
    icon: Sparkles,
  },
  {
    title: "أنظمة التكييف المركزي HVAC عالية القدرة",
    desc: "وحدات تكييف صناعية مركزية عالية الكفاءة ومنخفضة الضجيج، تحافظ على ثبات درجات الحرارة عند 20° مئوية خلال أشد فترات الصيف حرارة.",
    icon: ShieldCheck,
  },
];

const BASE_URL = "https://baitalnokhada.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "من نحن | رواد صناعة وتوريد الخيام الكبرى في الإمارات والسعودية منذ 1997",
    description: "تعرف على إرث بيت النوخذة الهندسي الممتد لأكثر من 30 عاماً. أكبر مصنع ومورد للخيام الكبرى، خيام الفعاليات والمستودعات في الإمارات والسعودية.",
    alternates: {
      canonical: `${BASE_URL}/ar/about-us/`,
      languages: {
        "en-AE": `${BASE_URL}/about-us/`,
        "ar-AE": `${BASE_URL}/ar/about-us/`,
        "x-default": `${BASE_URL}/about-us/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_AE",
      alternateLocale: ["en_AE"],
      url: `${BASE_URL}/ar/about-us/`,
      siteName: "مصنع بيت النوخذة للخيام",
      title: "من نحن | رواد صناعة وتوريد الخيام الكبرى في الإمارات والسعودية منذ 1997",
      description: "تعرف على إرث بيت النوخذة الهندسي الممتد لأكثر من 30 عاماً. أكبر مصنع ومورد للخيام الكبرى، خيام الفعاليات والمستودعات في الإمارات والسعودية.",
    },
  };
}

export default function ArabicAboutPage() {
  const arabicAboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${BASE_URL}/ar/#place`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.93410630",
          "longitude": "55.06500100"
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=24.93410630,55.06500100",
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
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BASE_URL}/ar/#organization`,
        "name": "مصنع بيت النوخذة للخيام",
        "legalName": "Bait Al Nokhada Tents & Fabric Structures LLC",
        "url": `${BASE_URL}/ar/`,
        "email": "info@baitalnokhada.com",
        "telephone": "+971558850631",
        "foundingDate": "1997",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/logo.png`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Land No. TP 010102 - Technopark",
          "addressLocality": "Mina Jebel Ali",
          "addressRegion": "National Industries Park - Dubai",
          "postalCode": "Dubai",
          "addressCountry": "AE"
        },
        "location": {
          "@id": `${BASE_URL}/ar/#place`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/ar/#website`,
        "url": `${BASE_URL}/ar/`,
        "name": "مصنع بيت النوخذة للخيام",
        "publisher": { "@id": `${BASE_URL}/ar/#organization` },
        "inLanguage": "ar-AE"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/ar/about-us/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": `${BASE_URL}/ar/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "من نحن",
            "item": `${BASE_URL}/ar/about-us/`
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${BASE_URL}/ar/about-us/#webpage`,
        "url": `${BASE_URL}/ar/about-us/`,
        "name": "من نحن | رواد صناعة وتوريد الخيام الكبرى في الإمارات والسعودية منذ 1997",
        "description": "تعرف على إرث بيت النوخذة الهندسي الممتد لأكثر من 30 عاماً في تصنيع المنشآت والخيام الكبرى.",
        "inLanguage": "ar-AE",
        "isPartOf": {
          "@id": `${BASE_URL}/ar/#website`
        },
        "breadcrumb": {
          "@id": `${BASE_URL}/ar/about-us/#breadcrumb`
        },
        "mainEntity": {
          "@id": `${BASE_URL}/ar/#organization`
        }
      }
    ]
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white text-right font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arabicAboutSchema) }}
      />
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#df9d17 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تأسست عام 1997 • إرث هندسي متواصل</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading">
            رواد صناعة وتوريد<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              الخيام الكبرى والمخصصة
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            لأكثر من 30 عاماً، يواصل مصنع بيت النوخذة ريادته كأكبر مصنع ومورد للخيام الكبرى، وخيام الفعاليات والمستودعات في الإمارات والسعودية، مع حلول وتصاميم مخصصة للمشاريع الكبرى حول العالم.
          </p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline */}
      <AboutJourneyClientArabic journeyMilestones={journeyMilestones} />

      {/* 3. Vision & Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">رؤيتنا</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              ترسيخ معايير متقدمة في الكفاءة الهندسية وجودة التصنيع من خلال منشآتنا المعيارية الحديثة. هدفنا أن نكون الشريك المفضل للحلول الإنشائية والقاعات المؤقتة وشبه الدائمة في الإمارات والسعودية والأسواق العالمية.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">رسالتنا</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              تقديم منشآت معيارية وخيام هندسية عالية الاعتمادية تجمع بين سرعة التشييد الميداني، وأعلى اشتراطات الأمان المعتمدة، والتجهيزات الراقية؛ لتمكين المؤسسات والجهات المنظمة حول العالم من استضافة فعالياتها ومشاريعها بأعلى درجات الثقة والتميز.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities - (استرجاع ديزاين الكروت المتراكبة sticky بالكامل بالعربي) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-slate-200/60 relative bg-[#FDFCF7]">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <span>خدمات شاملة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">
            قدراتنا الهندسية والتصنيعية الشاملة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            تصنيع محلي في مصانعنا، دراسات هندسية دقيقة، وتنفيذ ميداني سريع في الإمارات والسعودية وحول العالم.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="w-full sticky rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-[#df9d17]/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 group antialiased"
              style={{
                top: `calc(100px + ${idx * 25}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="flex items-start sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#df9d17] group-hover:bg-[#df9d17] group-hover:text-white group-hover:border-[#df9d17] transition-all shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#df9d17] font-bold">.٠{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] font-heading group-hover:text-[#df9d17] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-2xl antialiased">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#df9d17] group-hover:text-[#df9d17] transition-all shrink-0">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Executive Message Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#FDFCF7]">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-8 sm:p-14 shadow-sm">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3.5 justify-start">
              <div className="p-3 rounded-2xl bg-white text-[#df9d17] border border-slate-200 shadow-xs">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">تحية الإدارة التنفيذية</span>
                <h4 className="text-lg font-black text-[#0B1220] font-heading">رسالة الإدارة</h4>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic">
              {`"في بيت النوخذة، نفخر بدمج الهندسة المعيارية الحديثة مع تراثنا الأصيل. كل منشأة نشيدها مصممة لتضع معياراً صناعياً يحتذى به في متانة البناء ودقة التنفيذ. التزامنا واضح: تقديم قاعات ومنشآت متطورة تضمن سلامة الأفراد، وتلبي طموحات شركائنا في دولة الإمارات، والمملكة العربية السعودية، ومشاريعنا حول العالم."`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 text-xs font-mono text-slate-500">
              <span>الإدارة التنفيذية • مصنع بيت النوخذة للخيام</span>
              <div className="flex items-center gap-1.5 text-[#df9d17] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>معايير هندسية معتمدة دولياً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Historical Numbers Strip */}
      <section className="py-16 sm:py-20 border-t border-slate-200/60 bg-[#FDFCF7]">
        <div className="site-container max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#df9d17]">
                <Award className="w-6 h-6" />
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+30</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">عاماً من الخبرة</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">دة تصنيع وتشييد المنشآت والخيام المعيارية في المنطقة منذ عام 1997.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#df9d17]">
                <Users className="w-6 h-6" />
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+3,000</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">شريك ومؤسسة</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">علاقات وشراكات استراتيجية طويلة الأمد مع جهات حكومية وشركات كبرى.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#df9d17]">
                <Building className="w-6 h-6" />
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">+6,000</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">مشروع منجز</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">قاعات معارض، مستودعات، ومنشآت فعاليات كبرى تم تسليمها بنجاح محلياً وحول العالم.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}