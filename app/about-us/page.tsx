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
  Calendar,
  Layers,
  ShieldCheck,
  Cpu
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutJourneyClient from "@/components/AboutJourneyClient"; // الملف الخاص بالتايملاين الذي فصلناه سابقاً للحفاظ على الـ useState

const expertiseList = [
  {
    title: "Design, Engineering & Production",
    desc: "Custom-built aluminum and steel clear-span structures manufactured in our factory. Every project follows strict safety standards and utilizes premium flame-retardant membranes.",
    icon: Cpu,
  },
  {
    title: "Commercial Tent Rental & Leasing",
    desc: "Extensive inventory of modular clear-span structures available for immediate deployment across Dubai, Abu Dhabi, and Riyadh for major exhibitions, corporate events, and temporary arenas.",
    icon: Layers,
  },
  {
    title: "VIP Fit-Out & Royal Interior Styling",
    desc: "High-end arabic majlis linings, crystal-lighting double-glazed glass walls, automatic sliding doors, and integrated raised cassette flooring for elite private and corporate gatherings.",
    icon: Sparkles,
  },
  {
    title: "Heavy-Duty HVAC Cooling & Climate Control",
    desc: "High-capacity, low-noise industrial cooling systems designed to maintain a comfortable 20°C interior climate even during peak summer conditions in the Gulf region.",
    icon: ShieldCheck,
  },
];

const BASE_URL = "https://baitalnokhada.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Leading Tent Manufacturer in UAE & KSA since 1997",
    description: "Discover Bait Al Nokhada's 30+ years of engineering heritage. Leading manufacturer of large-scale event tents, industrial storage, and custom structures.",
    alternates: {
      canonical: `${BASE_URL}/about-us/`,
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
      locale: "en_AE",
      alternateLocale: ["ar_AE"],
      url: `${BASE_URL}/about-us/`,
      siteName: "Bait Al Nokhada Tents Factory",
      title: "About Us | Leading Tent Manufacturer in UAE & KSA since 1997",
      description: "Discover Bait Al Nokhada's 30+ years of engineering heritage. Leading manufacturer of large-scale event tents, industrial storage, and custom structures.",
    },
  };
}

export default function AboutPage() {
  const journeyMilestones = [
    {
      year: "1997",
      badge: "ESTABLISHED IN ABU DHABI",
      title: "Foundation in Abu Dhabi",
      tagline: "30+ Years of Engineering Heritage",
      desc: "Bait Al Nokhada was established in Abu Dhabi, pioneering the manufacturing of high-grade aluminum structures, luxury traditional majlis tents, and specialized architectural venue systems for the UAE and regional markets.",
      highlight: "First industrial manufacturing facility established in Abu Dhabi.",
      image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-2005.webp",
    },
    {
      year: "2005",
      badge: "ICAD-1 INDUSTRIAL FACILITY",
      title: "Industrial & Factory Expansion",
      tagline: "HIGH-CAPACITY MANUFACTURING & ISO CERTIFIED",
      desc: "Relocated and expanded large-scale manufacturing operations to ICAD (Industrial City of Abu Dhabi). Integrated automated CNC metal profiling and high-frequency welding lines to manufacture high-capacity aluminum structures",
      highlight: "Certified ISO manufacturing and regional civil defense standards.",
      image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-al-nokhada-old-logo.webp",
      imagePosition: "object-[center_60%]"
    },
    {
      year: "2015",
      badge: "MEGA-EVENTS & GLOBAL SUMMITS",
      title: "Large-Scale Structures for International Summits",
      tagline: "Engineering Large-Scale Event Structures Across the UAE",
      desc: "Became the primary modular structure partner for landmark global exhibitions and state summits across the UAE, delivering clear-span pavilions for IDEX, NAVDEX, and major aviation expos.",
      highlight: "Over 3,000 mega structures successfully deployed across UAE.",
      image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-old.webp",
    },
    {
      year: "2022",
      badge: "REGIONAL SCALE & GLOBAL REACH",
      title: "Cross-Border Delivery & Worldwide Export",
      tagline: "Major Infrastructure & Entertainment Deployments",
      desc: "Expanded direct manufacturing supply across Saudi Arabia and the wider GCC to support giga-projects and entertainment seasons. Scaled operations to engineer and export custom modular structures worldwide for international commercial clients.",
      highlight: "Delivering high-span industrial and event structures across the GCC and worldwide markets.",
      image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/About+Page/Bait-Al-Nokhada-New-Front.webp",
      imagePosition: "object-[75%_center]",
    },
    {
      year: "Now",
      badge: "NEXT-GEN INNOVATION",
      title: "Modular Architecture & Worldwide Projects",
      tagline: "6,000+ Completed Projects Across the GCC",
      desc: "Deploying sustainable, clear-span pavilions featuring smart glass facades, acoustic insulated panels, and double-decker event structures for high-profile venues worldwide.",
      highlight: "Trusted international partner delivering modular structures for global brands and landmark destinations.",
      image: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Tents-for-sale-north-star-exhibition.webp",
      imagePosition: "object-[95%_center]",
    },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${BASE_URL}/#place`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.93410630",
          "longitude": "55.06500100"
        },
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
        "@id": `${BASE_URL}/#organization`,
        "name": "Bait Al Nokhada",
        "legalName": "Bait Al Nokhada Tents & Fabric Structures LLC",
        "url": BASE_URL,
        "email": "info@baitalnokhada.com",
        "telephone": "+971558850631",
        "foundingDate": "1997",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/bait-alnokhada-final-g.svg`
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
          "@id": `${BASE_URL}/#place`
        },
        "sameAs": [
          "https://www.linkedin.com/company/bait-al-nokhada-tents-and-fabric-structures-llc"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "Bait Al Nokhada Tents Factory",
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/about-us/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": `${BASE_URL}/about-us/`
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${BASE_URL}/about-us/#webpage`,
        "url": `${BASE_URL}/about-us/`,
        "name": "About Us | Leading Tent Manufacturer in UAE & KSA since 1997",
        "description": "Discover Bait Al Nokhada's 30+ years of engineering heritage and manufacturing excellence.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "breadcrumb": {
          "@id": `${BASE_URL}/about-us/#breadcrumb`
        },
        "mainEntity": {
          "@id": `${BASE_URL}/#organization`
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-[#090D16] selection:bg-[#df9d17] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden bg-[#FDFCF7]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df9d17]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="site-container max-w-7xl mx-auto w-full text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Established 1997 • Engineering Legacy</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-[#0B1220] leading-[1.2] font-heading uppercase">
            LEADING MANUFACTURER OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc200] via-[#e6b224] to-[#df9d17]">
              LARGE & CUSTOM TENTS
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            For over 30 years, Bait Al Nokhada has been the leading manufacturer and supplier of large-scale event tents, industrial storage tents, and custom structures across the UAE, Saudi Arabia, and worldwide.
          </p>
        </div>
      </section>

      {/* 2. Company Journey Interactive Timeline (استدعاء مكون التايملاين التفاعلي بـ useState والموشن) */}
      <AboutJourneyClient journeyMilestones={journeyMilestones} />

      {/* 3. Vision & Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200/60 bg-[#FDFCF7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              To set industry benchmarks in durability, engineering precision, and modern design through advanced modular structures. As a premier manufacturer, our goal is to remain the preferred global partner for temporary and semi-permanent venues across the GCC and worldwide.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 hover:border-[#df9d17]/60 transition-all duration-300 space-y-4 relative overflow-hidden shadow-xs hover:shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#df9d17] flex items-center justify-center border border-slate-200/90 shadow-xs group-hover:scale-110 group-hover:border-[#df9d17] transition-all">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] font-heading">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              To deliver reliable, high-performance modular structures that unite rapid on-site assembly, certified safety standards, and functional luxury. We engineer bespoke temporary and semi-permanent solutions that empower governments, global brands, and enterprises worldwide to host landmark projects with complete confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities - (تم استرجاع ديزاين الكروت المتراكبة sticky بالكامل كما كانت) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-slate-200/60 relative bg-[#FDFCF7]">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/30 shadow-xs">
            <span>INTEGRATED SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1220] font-heading tracking-tight">
            End-to-End Structural Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            In-house manufacturing, precision structural engineering, and rapid on-site installation across the UAE, KSA, and worldwide.
          </p>
        </div>

        {/* حاوية الكروت المتراكبة القديمة بالـ sticky بالكامل */}
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
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#df9d17] font-bold">0{idx + 1}.</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] font-heading group-hover:text-[#df9d17] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-2xl antialiased">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#df9d17] group-hover:text-[#df9d17] transition-all">
                  <span className="text-xs font-mono">↗</span>
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
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white text-[#df9d17] border border-slate-200 shadow-xs">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#df9d17]">Executive Message</span>
                <h4 className="text-lg font-black text-[#0B1220] font-heading">Leadership Greetings</h4>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed italic">
              {`"At Bait Al Nokhada, we proudly blend modern modular architecture with our rich royal traditions. Every project we craft is engineered to set international benchmarks in the tensile structures industry. Our mission is simple: to deliver high-capacity shelters that combine structural integrity, aesthetic prestige, and German-certified safety across the UAE, KSA, and the GCC."`}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 text-xs font-mono text-slate-500">
              <span>Executive Management • Bait Al Nokhada Tents Factory</span>
              <div className="flex items-center gap-1.5 text-[#df9d17] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified Engineering Standards</span>
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
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">30+</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">Years Experience</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">Pioneering modular architecture in the GCC since 1997.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#df9d17]">
                <Users className="w-6 h-6" />
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">3,000+</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">Satisfied Clients</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">We have many returning customers that got to trust us as a solid partner.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-center gap-2 text-[#df9d17]">
                <Building className="w-6 h-6" />
                <span className="text-4xl sm:text-5xl font-black text-[#0B1220] font-mono">6,000+</span>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">Completed Projects</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">High-span temporary structures and semi-permanent venues delivered worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}