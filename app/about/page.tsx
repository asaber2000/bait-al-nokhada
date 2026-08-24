"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Target, 
  Compass, 
  Quote, 
  CheckCircle2, 
  Award, 
  Users, 
  Building,
  Calendar
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const journeyMilestones = [
  {
    year: "1997",
    title: "Foundation in Abu Dhabi",
    tagline: "The Inception of Quality Craftsmanship",
    desc: "Bait Al Nokhada was established in Abu Dhabi, pioneering the manufacturing of traditional Arabic majlis tents and luxury tensile shade systems for the UAE market.",
    highlight: "First production facility established in Abu Dhabi.",
  },
  {
    year: "2005",
    title: "Industrial & Factory Expansion",
    tagline: "Advanced German Engineering Standards",
    desc: "Upgraded manufacturing plants to ICAD-1 (Industrial City of Abu Dhabi) spanning over 40,000 sqm, incorporating German automated CNC cutting and high-frequency HF welding.",
    highlight: "Achieved ISO 9001:2015 and DIN safety compliance certifications.",
  },
  {
    year: "2015",
    title: "Mega International Summits Era",
    tagline: "Leader in Diplomatic & Defense Arenas",
    desc: "Became the premier turnkey modular structure contractor for major events including IDEX, NAVDEX, Dubai Airshow, and global state receptions.",
    highlight: "Over 3,000 mega structures successfully deployed across UAE.",
  },
  {
    year: "2022",
    title: "GCC & Saudi Arabia Expansion",
    tagline: "Cross-Border Architectural Deployments",
    desc: "Expanded direct operations and project offices across Saudi Arabia (Riyadh & Jeddah) to cater to massive entertainment seasons and industrial logistics parks.",
    highlight: "Turnkey delivery for high-span industrial & royal pavilions in KSA.",
  },
  {
    year: "2026",
    title: "Next-Gen Sustainable Tensile Architecture",
    tagline: "Futuristic Modular Engineering",
    desc: "Integrating solar-ready tensile membranes, smart insulated acoustic panels, and sustainable double-decker pavilions for futuristic GCC landmark projects.",
    highlight: "Over 6,000+ completed projects with 100% turnkey capabilities.",
  },
];

const structuralPillars = [
  {
    num: "01",
    title: "Aerospace-Grade Certified Alloys",
    desc: "Only strong, corrosion-resistant and lightweight materials consisting of anodized aluminum profiles (6061/T6) and hot-dip galvanized structural steel are used to minimize maintenance and maximize lifespan.",
  },
  {
    num: "02",
    title: "Infinite Relocation & Modular Reusability",
    desc: "Every structure is engineered to be demountable, re-transported an unlimited number of times, and compactly stored without risk of degradation under extreme desert environments.",
  },
  {
    num: "03",
    title: "Pioneering Curved & Arch Span Technology",
    desc: "Setting the trend for architectural standardization across the GCC with high-apex polygons, geodesic spheres, and multi-span clear structures that withstand heavy gust loads.",
  },
  {
    num: "04",
    title: "Automated CNC & High-Frequency HF Welding",
    desc: "Utilizing European automated numerical control machinery and high-frequency PVC membrane welding for 100% waterproof, flame-retardant (DIN 4102 B1), and UV-resistant performance.",
  },
  {
    num: "05",
    title: "Full-Cycle Turnkey Project Execution",
    desc: "A multidisciplinary team of structural engineers, 3D visualizers, and licensed site technicians taking projects from concept calculation to instant on-site handover.",
  },
];

const expertiseList = [
  {
    title: "Design, Engineering & Production",
    desc: "Specialized tailoring of clear-span structural systems seamlessly integrating innovation with luxury. Every phase is managed using premium European materials and German DIN safety standards.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Turnkey Tent Rental & Leasing",
    desc: "A massive inventory of modular structures available for rapid deployment across Dubai, Abu Dhabi, Riyadh, and Jeddah for diplomatic summits, corporate exhibitions, and private galas.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Fit-Out & Royal Drapery",
    desc: "Opulent Arabic majlis linings, crystal chandeliers, glass walling, automatic sensor double doors, and integrated cassette flooring engineered for VIP prestige.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "High-Tonnage HVAC Climate Control",
    desc: "Quiet, high-capacity cooling packages engineered to maintain an ambient 21°C inside the marquee even during 50°C peak Arabian Gulf summers.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#D4AF37] selection:text-[#070B14]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Established 1997 • Over 30 Years of Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-heading">
            Engineering Landmark Shelters & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Architectural Tensile Structures
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            For over 30 years, Bait Al Nokhada Industries has stood as the premier trusted tent supplier and fabric structure manufacturer in the UAE, Saudi Arabia, and across the GCC, delivering durable and luxury systems engineered to last in demanding climates.
          </p>
        </div>
      </section>

      {/* Company Journey Interactive Timeline */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Our Heritage & Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Company Journey
          </h2>
          <p className="text-sm text-slate-400 font-light">
            Tracing our continuous evolution from local artisanal tent crafting to a multinational engineering powerhouse.
          </p>
        </div>

        {/* Year Buttons Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-6">
          {journeyMilestones.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMilestone(idx)}
              className={`px-6 py-3 rounded-2xl text-sm font-black transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                activeMilestone === idx
                  ? "bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] shadow-lg shadow-[#D4AF37]/20 scale-105"
                  : "bg-[#0D1527] text-slate-400 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{item.year}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Card Display */}
        <div className="mt-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl bg-linear-to-b from-[#0D1527] to-[#070B14] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-[#D4AF37]">
                    {journeyMilestones[activeMilestone].year}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1 font-heading">
                    {journeyMilestones[activeMilestone].title}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 w-fit">
                  {journeyMilestones[activeMilestone].tagline}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {journeyMilestones[activeMilestone].desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>{journeyMilestones[activeMilestone].highlight}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Structural Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-heading">
              Precision Manufacturing & Heavy-Duty Reliability
            </h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              We operate state-of-the-art European fabrication plants in Abu Dhabi (ICAD-1) and Dubai, adhering to certified DIN EN 13782 standards.
            </p>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
              >
                <span>Consult With Our Engineers</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {structuralPillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0D1527]/70 border border-white/10 hover:border-[#D4AF37]/40 transition-all group flex gap-6"
              >
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#D4AF37] to-white/20 shrink-0">
                  {item.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-linear-to-b from-white/4 to-transparent border border-white/10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">Our Vision</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              We aim to set new standards in efficiency, durability, and design through our advanced shelter solutions. As a leading tent supplier in the UAE and KSA, our goal is to be the preferred choice for temporary and permanent structures throughout the GCC. With innovation and quality at our core, we continue to build lasting, sustainable structures that represent trust and excellence across the Middle East and beyond.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-linear-to-b from-white/4 to-transparent border border-white/10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading">Our Mission</h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Our mission is to redefine excellence as the trusted UAE tents provider and a leader in innovative shelter solutions. We deliver high-quality tents in Dubai, Abu Dhabi, and KSA, combining speed, reliability, and sustainability. Through our expertise in temporary structures and prefabricated buildings, we provide durable, customized solutions that empower clients across the GCC region to achieve success with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Full-Spectrum Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            End-to-End Structural Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#0D1527]/70 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D1527] via-transparent to-transparent" />
              </div>

              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Message Banner */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-linear-to-r from-[#0D1527] via-[#070B14] to-[#0D1527] p-8 sm:p-14 shadow-2xl">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Executive Message</span>
                <h4 className="text-lg font-bold text-white font-heading">Leadership Greetings</h4>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed italic">
              {`"At Bait Al Nokhada, we proudly blend modern style with our rich royal traditions. Every project we craft is inspired by tradition, reflecting our commitment to high-quality products and premium tents that set the benchmark in the tent industry. Our mission is simple: to deliver luxury tents and shade structures that combine elegance, durability, and innovation. Over the years, we have established new standards in the tents industry, and as we look ahead, we are excited to embrace new challenges and greater achievements across the UAE, KSA, and the broader GCC region."`}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-slate-400">
              <span>Executive Management • Bait Al Nokhada Tents & Fabric Structures</span>
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Numbers Strip */}
      <section className="py-16 px-6 border-t border-white/10 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Award className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">30+</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">Years Experience</p>
            <p className="text-xs text-slate-400">Established more than 30 years ago, leading the market.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Users className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">3000+</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">Satisfied Clients</p>
            <p className="text-xs text-slate-400">Long-term corporate and government partnerships.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Building className="w-6 h-6" />
              <span className="text-4xl sm:text-5xl font-black text-white">6000+</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-200">Projects Done</p>
            <p className="text-xs text-slate-400">Completed mega-scale temporary and permanent structures.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}