export interface ProductModel {
  name: string;
  size: string;
  capacity: string;
}

export interface ProductItemEn {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  overviewTitle?: string;
  catalogImage?: string;
  heroImage: string;
  gallery?: string[];
  windSpeed: string;
  catalogBadge?: string;
  description: string;
  models: ProductModel[];
  features: string[];
  specs: { label: string; value: string }[];
}

export const productsDatabase: ProductItemEn[] = [
  {
    id: "1",
    slug: "pyramid-tent",
    name: "Pyramid Tent",
    tagline: "Leading manufacturer of modular pyramid tents for corporate events and premium rentals.",
    badge: "Engineered for Extreme Weather • International Safety Compliant",
    overviewTitle: "Why Choose Bait Al Nokhada Pyramid Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid/pyramid+tent.webp", // صورة الكرت الخارجي
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid/Luxury-pyramid-tent.webp",
    gallery: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/pyramiid.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tents-1.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-supplier.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-inside.webp",
    ],
    windSpeed: "Weather Resistant",
    catalogBadge: "Clear Span",
    description: "The pyramid tent features a timeless triangular design, seamlessly merging traditional aesthetics with modern functionality. It’s exceptionally versatile and ideal for both formal galas and casual gatherings.",
    models: [
      { name: "Pyramid PT 5x5", size: "5m x 5m (25 m² Area)", capacity: "20 - 30 Guests" },
      { name: "Pyramid PT 6x6", size: "6m x 6m (36 m² Area)", capacity: "35 - 50 Guests" },
      { name: "Pyramid PT 8x8", size: "8m x 8m (64 m² Area)", capacity: "60 - 80 Guests" },
      { name: "Pyramid PT 10x10", size: "10m x 10m (100 m² Area)", capacity: "90 - 120 Guests" },
      { name: "Pyramid PT Custom", size: "Modular Length Extensions", capacity: "Custom Event Capacities" },
    ],
    features: [
      "High-Strength Aluminum Structure - Precision-engineered T6/6061 extruded alloy providing 100% unobstructed usable space without center poles.",
      "Weather-Resistant PVC Membrane - Heavy-duty dual-coated covers engineered for extreme desert heat, rain protection, and high wind stability.",
      "Certified Flame-Retardant Standards - Globally certified adhering to international safety benchmarks (DIN 4102 B1, M2, and NFPA 701).",
      "Fully Modular Expanding System - Continuous expansion and interlocking configurations supported via integrated rain gutters.",
      "Versatile Walling Configurations - Tempered glass panels, solid ABS sandwich walls, and flexible sliding PVC curtains.",
      "Complete Turnkey Event Fit-Out - High-tonnage climate control HVAC, luxury interior drapery, and integrated custom lighting.",
      "Comprehensive Accessories & Decor Fit-Out - Tempered glass walls, solid ABS panels, cassette wooden flooring, luxury linings, and centralized HVAC cooling systems."
    ],
    specs: [
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy (Rust-Proof)" },
      { label: "Connecting Components", value: "Heavy-Duty Hot-Dip Galvanized Steel Connectors" },
      { label: "Weather Durability", value: "Engineered for High Winds, Extreme Heat & Heavy Rain" },
      { label: "Cover Material", value: "Heavy-Duty, Flame-Retardant German PVC (Blackout / Translucent)" },
      { label: "Side Wall Options", value: "Tempered Glass, Solid ABS Walls, or Flexible PVC Curtains" },
      { label: "Standard Sizes", value: "From 3x3m up to 10x10m (Custom Modular Sizing Available)" },
      { label: "Service Availability", value: "Available for Short-Term Rental & Direct Factory Sale" },
    ],
  },
  {
    id: "2",
    slug: "dome-tent",
    name: "Dome Tent",
    tagline: "Custom dome tent supplier delivering elegant clear-span structures for luxury venues.",
    badge: "High-Peak Profile • 360° Open Space",
    overviewTitle: "Why Choose Bait Al Nokhada Dome Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/dome-tents.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/Dome-Tents-for-Events+.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/ROYAL-DOME-TENT.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/Dome-tentage.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/DOME-TENT2.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/Dome-tent-for-sale.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/Dome-tents-rental.webp",
    ],
    windSpeed: "High Peak",
    catalogBadge: "Clear Span",
    description: "This dome tent, with its unique geometric design, offers superior stability and a spacious interior, making it ideal for exhibitions, sports events, and temporary hospitality. It reflects our commitment as a leading tent supplier in the UAE and KSA.",
    models: [
      { name: "Dome DT 5M", size: "5m Diameter (19.6 m² Area)", capacity: "15 - 20 Guests" },
      { name: "Dome DT 10M", size: "10m Diameter (78.5 m² Area)", capacity: "50 - 70 Guests" },
      { name: "Dome DT 15M", size: "15m Diameter (176 m² Area)", capacity: "120 - 160 Guests" },
      { name: "Dome DT Custom", size: "Custom Large Spans (Up to 35m)", capacity: "Custom Event Capacities" },
    ],
    features: [
      "High-Strength Aluminum Framing - Engineered extruded aluminum alloy structure ensuring 100% unobstructed clear-span interior space without central columns.",
      "Weather-Resistant Heavy-Duty PVC - Premium durable covers designed for intense desert sun reflection, waterproof sealing, and high wind stability.",
      "Certified Fire-Retardant Standards - Globally compliant flame-retardant materials adhering to international safety benchmarks (DIN 4102 B1, M2, and NFPA 701).",
      "Modular Interlocking Configurations - Continuous expansion and multi-tent connection system utilizing integrated rain gutters for large-scale setups.",
      "Versatile Walling Configurations - Compatible with luxury glass walls, rigid ABS solid paneling, and sliding flexible PVC curtains.",
      "Complete Event Fit-Out Solutions - Comprehensive integration of high-capacity HVAC cooling, decorative interior linings, and professional lighting.",
      "Comprehensive Flooring & Accessories - Heavy-duty cassette flooring, VIP carpeting, glass double-doors, and dedicated cable management."
    ],
    specs: [
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy" },
      { label: "Connection Elements", value: "Hot-Dip Galvanized Steel Connectors" },
      { label: "Weather Durability", value: "Engineered for Extreme Heat, Heavy Rain & High Winds" },
      { label: "Cover Material", value: "Heavy-Duty Flame-Retardant PVC (White / Translucent / Transparent)" },
      { label: "Interior Layout", value: "100% Usable Space (Zero Center Poles)" },
      { label: "Side Wall Options", value: "Tempered Glass, Solid ABS Panels, or Sliding PVC Curtains" },
      { label: "Standard Sizes", value: "5x5m, 6x6m, 8x8m, 10x10m (Custom Configurations Available)" },
      { label: "Availability", value: "Available for Event Rental & Direct Factory Sale" },
    ],
  },
  {
    id: "3",
    slug: "capsule-tent",
    name: "Capsule Tent",
    tagline: "Modular capsule tent manufacturing engineered for VIP lounges and luxury activations.",
    badge: "Futuristic Design • Rapid Deployment",
    overviewTitle: "Why Choose Bait Al Nokhada Capsule Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule-tent-for-exhibition.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule-tent-for-events.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule-tent-for-sale.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/Capsule-Tents-for-Rent+.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule-tent-for-event.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule-tent-Dubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/Buy-and-Rent-Capsule-Tents+.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/Capsule-3D.webp",
    ],
    windSpeed: "Modern Pod",
    catalogBadge: "Fully Insulated",
    description: "The Capsule Tent brings futuristic design and portability together in a bold, sculptural form. With a clean, obstruction-free interior and ultra-modern exterior, it delivers visual sophistication and functional excellence. Engineered for fast setup, all-weather performance, and full customization, it’s the perfect choice for exhibitions, trade shows, corporate lounges, and brand activations across the UAE and KSA.",
    models: [
      { name: "Capsule C-06", size: "6m x 3.5m (21 m²)", capacity: "2 - 4 Guests" },
      { name: "Capsule C-09", size: "9m x 4.0m (36 m²)", capacity: "4 - 6 Guests" },
      { name: "Capsule C-12", size: "12m x 4.2m (50 m²)", capacity: "6 - 8 Guests Suite" }
    ],
    features: [
      "Futuristic Capsule Form - Sleek, sculptural architectural design creating a strong visual impact for high-profile brand activations.",
      "Clear-Span Aluminum Frame - Heavy-duty curved aluminum structure providing 100% obstruction-free, fully usable interior space.",
      "Curved Panoramic Glass Walls - Double-glazed insulated glass ends offering wide panoramic views and superior thermal protection.",
      "All-Weather Durability - Fully insulated shell built to withstand intense desert heat, wind, dust, and heavy rain.",
      "Rapid Deployment & Setup - Pre-engineered modular design allowing fast on-site assembly with minimal operational downtime.",
      "Integrated Climate & Lighting - Pre-configured conduits for high-efficiency HVAC cooling, ambient LED lighting, and safe power distribution."
    ],
    specs: [
      { label: "Main Frame Assembly", value: "Curved Extruded Aluminum Frame (Rust-Proof)" },
      { label: "Shell Insulation", value: "High-Density Thermal Insulation Core for Extreme Heat" },
      { label: "Wind Durability", value: "Engineered & Certified for 100 km/h Wind Resistance" },
      { label: "Glass Specifications", value: "Double-Glazed Panoramic Tempered Safety Glass" },
      { label: "Electrical & Fit-Out", value: "Integrated Weatherproof Wiring & Power Channels" },
      { label: "Recommended Use", value: "Trade Shows, VIP Lounges, Pop-Ups & Branded Activations" },
      { label: "Availability", value: "Available for Event Rental & Direct Factory Sale" }
    ]
  },
  {
    id: "4",
    slug: "arabic-majlis-tent",
    name: "Arabic Majlis Tent",
    tagline: "Premier traditional tent manufacturer supplying insulated majlis venues across the GCC.",
    badge: "Heritage Craft • Desert Climate Insulation",
    overviewTitle: "Why Choose Bait Al Nokhada Arabic Majlis Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/arabic-tent.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/arabic-tents.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/ARABIC+.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/Majlis-Tents-for-Sale.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/Arabic-majlis-tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/13.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/8.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/arabic-tents.webp",
    ],
    windSpeed: "Heritage Design",
    catalogBadge: "Thermal Insulated",
    description: "The Arabic Majlis Tent brings the essence of authentic Arabian hospitality to modern event settings. Inspired by Bedouin heritage and engineered with high-performance materials, it offers immersive interiors, cultural elegance, and year-round usability. From VIP corporate lounges to National Day festivals, it is trusted across Dubai, Abu Dhabi, Riyadh, and beyond.",
    models: [
      { name: "Majlis Royal 12", size: "12m x 20m (240 m²)", capacity: "80 - 120 Guests" },
      { name: "Majlis Royal 20", size: "20m x 40m (800 m²)", capacity: "250 - 350 Guests" },
      { name: "Majlis Grand 30", size: "30m x 60m (1,800 m²)", capacity: "600 - 900 Guests" },
      { name: "Majlis Custom", size: "Modular Length Extensions", capacity: "Custom Event Capacities" }
    ],
    features: [
      "High-Strength Aluminum Frame - Heavy-duty extruded structure engineered for full clear-span layout without any internal poles.",
      "Traditional Geometric Sadu Linings - Authentic interior textiles treated with certified flame-retardant safety standards (DIN 4102 B1).",
      "Heavy-Duty Exterior Weather Covering - Premium German PVC exterior engineered for extreme sun reflection, heat resistance, and rain protection.",
      "Multi-Layer Desert Thermal Insulation - Advanced thermal barrier systems preventing heat penetration and optimizing internal AC efficiency.",
      "Traditional Heritage Exterior Accents - Classic exterior patterns, gold trim details, and optional glass hybrid entrance doors.",
      "Complete Majlis Fit-Out Support - Integrated sub-flooring for luxury Arabian carpets, low majlis seating, and ambient warm lighting."
    ],
    specs: [
      { label: "Main Structural Frame", value: "High-Strength Extruded Aluminum Alloy (Rust-Proof)" },
      { label: "Interior Lining Material", value: "Certified Flame-Retardant Traditional Arabian Sadu Textiles" },
      { label: "Weather Durability", value: "Engineered for 110 km/h Wind Load, Desert Heat & Rain" },
      { label: "Outer Protective Layer", value: "Heavy-Duty Blackout PVC with Full UV Shielding" },
      { label: "Thermal Insulation System", value: "Multi-Layer Thermal Core for Maximum AC Efficiency" },
      { label: "Flooring & Accessories", value: "Sub-Floor Framing for Carpeting, Glass Doors & Majlis Setup" },
      { label: "Service Availability", value: "Available for Rental & Permanent Custom Manufacturing" }
    ]
  },
  {
    id: "5",
    slug: "revolution-tent",
    name: "Revolution Tent",
    tagline: "Giant clear-span tent supplier providing large-scale venues for expos and summits.",
    badge: "Mega Clear Span • Heavy Rigging Capacity",
    overviewTitle: "Why Choose Bait Al Nokhada Revolution Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/revalution.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/1.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/71.jpg",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/24.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/Luxury-Revolution-Tents-for-Events-UAE%2CDubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/Outdoor-Revolution-Tents.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/Festival-tents.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/exhibition-tent-2026.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/Revolution-tent-rental-in-Riyadh.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Revolution/DSC06877.webp",
    ],
    windSpeed: "Mega Space",
    catalogBadge: "Heavy Duty",
    description: "The Revolution Tent is a premium, high-capacity tent structure designed for prestigious, large-scale events across the UAE and KSA. Engineered with clear-span architecture (zero internal poles) and towering ceiling heights, it provides a wide, uninterrupted interior ideal for international exhibitions, trade shows, world summits, and high-profile brand activations. Built with high-strength aluminum profiles and heavy-duty flame-retardant PVC covers, it ensures reliable all-weather performance[cite: 37].",
    models: [
      { name: "Revolution RV-30", size: "30m Span (Infinite 5m Bays)", capacity: "800 - 1,200 Guests" },
      { name: "Revolution RV-40", size: "40m Span (Infinite 5m Bays)", capacity: "1,400 - 2,200 Guests" },
      { name: "Revolution RV-50", size: "50m Span (Infinite 5m Bays)", capacity: "2,500 - 4,500 Guests" }
    ],
    features: [
      "Up to 50m Clear-Span Width - Vast unobstructed interior layout with 100% usable floor area and zero central pillars[cite: 36].",
      "Engineered High-Payload Roof Trusses - Heavy-duty roof profiles designed to safely support massive AV lighting rigs, sound systems, and LED walls[cite: 36].",
      "Modular Infinite Bay Expansion - Expandable length configured in 5-meter incremental bays to match any event footprint[cite: 36].",
      "Compatible with Architectural Façades - Full integration with insulated glass curtain walls, solid wall panels, and automatic entrance doors[cite: 36].",
      "High-Efficiency Thermal & Sound Insulation - Dual-layer roof membrane systems maintaining optimal indoor AC cooling and exterior noise reduction[cite: 36].",
      "Comprehensive Large-Scale Event Infrastructure - Fully compatible with heavy equipment access, integrated cable management, and high-tonnage HVAC systems."
    ],
    specs: [
      { label: "Main Profile Structure", value: "High-Strength Box-Section Extruded Aluminum Alloy" },
      { label: "Wind Load Durability", value: "Certified Resistance for Wind Speeds up to 120 km/h" },
      { label: "Roof Rigging Payload", value: "Engineered High-Point Rigging Capacity for Staging & AV Systems" },
      { label: "Eave Height Clearance", value: "Towering 4.0m / 5.0m / 6.0m Clearance for Multi-Level Exhibition Stands" },
      { label: "Roof Membrane System", value: "Heavy-Duty Flame-Retardant PVC with Dual Thermal Air Insulation" },
      { label: "Side Wall Systems", value: "Insulated Solid Panels, Panoramic Glass Walls & Double Doors" },
      { label: "Availability", value: "Available for Short-Term Rental & Permanent Turnkey Manufacturing" }
    ]
  },
  {
    id: "6",
    slug: "polygon-tent",
    name: "Polygon Tent",
    tagline: "Heavy-duty polygon tent manufacturing with soaring clearance for sports and logistics.",
    badge: "Vaulted Apex • High Clearance Architecture",
    overviewTitle: "Why Choose Bait Al Nokhada Polygon Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/polygon-tent.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/Luxury-polygon-tents-in-Dubai.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/polygon-tent-installation-services-in-Dubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/Event-Tents-for-Rent-in-Dubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/FIFA+WORLD+CUP2.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/FIFA-WORLD-CUP3.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/Polygon-Tent-KSA.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/tent-rental-MedLab-2025.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/86.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/14.webp",
    ],
    windSpeed: "High Ceiling",
    catalogBadge: "Wide Spans",
    description: "The Polygon Tent combines striking multi-sided geometry with industrial-grade performance for unforgettable event environments. Engineered with a heavy-duty aluminum frame and flame-retardant PVC covers, it delivers vast, column-free interiors and soaring ceiling heights. Ideal for high-capacity exhibitions, indoor sports complexes, and premium commercial activations across the UAE, KSA, and GCC.",
    models: [
      { name: "Polygon PG-20", size: "20m Span (8.5m Apex Height)", capacity: "2 Padel Courts / High-Cube Logistics" },
      { name: "Polygon PG-30", size: "30m Span (11.0m Apex Height)", capacity: "4 Padel Courts / Commercial Arena" },
      { name: "Polygon PG-40", size: "40m Span (14.0m Apex Height)", capacity: "Major Stadium / Industrial Storage" },
      { name: "Polygon Custom", size: "Spans from 10m to 60m+", capacity: "Tailored Multi-Sport & Mega Expo Capacities" }
    ],
    features: [
      "Vaulted High-Apex Polygonal Roof - Multi-angle polygonal design providing towering vertical clearance for multi-tier staging, sports flight paths, and heavy warehousing.",
      "Superior Wind Aerodynamics - Segmented multi-sided rafters engineered to reduce wind resistance and provide exceptional stability in extreme weather.",
      "Engineered for Indoor Sports Arenas - Ideal vertical clearance and unobstructed spans tailored for indoor padel, tennis, basketball, and gymnastics facilities.",
      "Vast Column-Free Clear Span - 100% usable internal footprint from 10m up to 60m+ wide without central pillars, allowing total freedom in floor planning.",
      "Heavy-Duty Industrial Walling - Compatible with insulated thermal sandwich panels, solid ABS walling, double-glazed glass systems, and flexible PVC.",
      "All-Weather GCC Certification - Engineered with heat-reflective PVC and heavy framing to resist extreme desert temperatures, high winds, and heavy rain."
    ],
    specs: [
      { label: "Apex Center Height", value: "8.5m to 14.0m+ Soaring Vertical Clearance" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Box-Section Aluminum Alloy" },
      { label: "Wind Durability", value: "Certified Resistance for Wind Speeds up to 120 km/h" },
      { label: "Cover Material", value: "Heavy-Duty Flame-Retardant PVC (Blockout & UV Resistant)" },
      { label: "Sidewall Enclosures", value: "Insulated Sandwich Panels, Glass Curtain Walls, or PVC" },
      { label: "Sports Suitability", value: "Fully Compliant for Indoor Padel, Tennis, and Athletics" },
      { label: "Availability", value: "Available for Event Rental & Turnkey Factory Sales" }
    ]
  },
  {
    id: "7",
    slug: "arch-tent",
    name: "Arch Tent",
    tagline: "Curved arch tent supplier delivering versatile clear-span venues for upscale galas.",
    badge: "Curved Architectural Profile • Natural Rain & Dust Run-Off",
    overviewTitle: "Why Choose Bait Al Nokhada Arch Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/arch-tents.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/Arch-Tents-for-sale.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/NORTH+STAR2.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/Exhibition-Tent-Rental.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/FIA+TENT.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/ADIPEC+4.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/ADIPEC+2.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/22.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/arch-tent-supplier.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/11.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/arch-tent-manufacturer.webp",
    ],
    windSpeed: "Curved Roof",
    catalogBadge: "Glass Walls",
    description: "The Arch Tent is a high-performance modular structure crafted to combine modern aesthetics with structural strength, flexibility, and all-weather durability. Its curved, clear-span design provides a wide, column-free interior with towering ceiling volume, making it the ideal choice for corporate events, grand exhibitions, sports facilities, and luxury outdoor galas across Dubai, Abu Dhabi, and Riyadh.",
    models: [
      { name: "Arch AT-15", size: "15m Span (Infinite Modular Length)", capacity: "150 - 200 Guests" },
      { name: "Arch AT-25", size: "25m Span (Infinite Modular Length)", capacity: "350 - 500 Guests" },
      { name: "Arch AT-35", size: "35m Span (Infinite Modular Length)", capacity: "700 - 1,000 Guests" },
      { name: "Arch Custom", size: "Modular Widths from 10m to 60m", capacity: "Custom Event Capacities" }
    ],
    features: [
      "Curved Aerodynamic Roof Beam Profile - Engineered curved silhouette that prevents rain and dust accumulation while enhancing exterior wind resistance.",
      "100% Unobstructed Clear-Span Space - Heavy-duty aluminum structural framework delivering a completely pillar-free floor area for flexible internal zoning.",
      "Architectural Glass & Automated Entrance Integration - Full compatibility with insulated glass curtain walls, double-glazed doors, and automated sliding entrances.",
      "Heavy-Duty Flame-Retardant PVC Covering - Premium blackout protective membrane offering superior solar reflection, thermal insulation, and fire safety compliance.",
      "Modular Multi-Bay Expansion - Scalable longitudinal expansion configured in standard continuous increments to accommodate any project footprint.",
      "Comprehensive Interior Fit-Out Support - Complete support for high-tonnage HVAC climate control, decorative interior drapery, and integrated ambient lighting systems."
    ],
    specs: [
      { label: "Main Structural Frame", value: "Curved Extruded Aluminum Alloy Rafters (Rust-Proof)" },
      { label: "Covering Membrane", value: "Heavy-Duty Flame-Retardant White Blockout PVC" },
      { label: "Wind Load Durability", value: "Engineered & Certified for Wind Resistance up to 100 km/h" },
      { label: "Eave Height Clearance", value: "4.0m Standard Industrial Clearance for High-Profile Setups" },
      { label: "Sidewall Systems", value: "Tempered Glass Walls, Solid ABS Wall Panels, or Flexible PVC" },
      { label: "Service Availability", value: "Available for Event Rental & Turnkey Factory Sales" }
    ]
  },
  {
    id: "8",
    slug: "double-decker-tent",
    name: "Double Decker Tent",
    tagline: "Custom two-story luxury tent manufacturer maximizing space for VIP sports events.",
    badge: "Two-Story Structure • VIP Mezzanine Level",
    overviewTitle: "Why Choose Bait Al Nokhada Double Decker Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/double-Decker.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/16.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/Tent-Rentals.jpg",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/18.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/luxury-Double-decker-tent-in-Dubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/tent-rental-in-uae.webp",
    ],
    windSpeed: "Two Stories",
    catalogBadge: "VIP Balcony",
    description: "The Double Decker Tent is a multi-level structure that delivers elegance, capacity, and impact. Designed for luxury events with limited ground footprint, it doubles usable floor space by adding an upper mezzanine level—ideal for VIP hospitality lounges, media centers, or elevated viewing decks overlooking tracks and arenas, while the ground floor hosts grand receptions and public exhibition zones.",
    models: [
      { name: "Double Decker DD-15", size: "15m Span (Two Levels)", capacity: "500+ VIP Guests" },
      { name: "Double Decker DD-20", size: "20m Span (Two Levels)", capacity: "800+ VIP Guests" },
      { name: "Double Decker DD-30", size: "30m Span (Two Levels)", capacity: "1,800+ VIP Guests" },
      { name: "Double Decker Custom", size: "Modular Widths from 15m to 40m+", capacity: "Tailored Multi-Level Capacities" }
    ],
    features: [
      "Dual-Level Usable Space Optimization - Doubles functional event capacity on the exact same ground footprint, separating general guest reception from exclusive upper-tier VIP lounges.",
      "Engineered Steel & Aluminum Mezzanine - Heavy-duty composite intermediate deck built with reinforced load-bearing beams to provide superior structural rigidity and zero vibration.",
      "Integrated Outdoor Cantilever Balconies - Elevated open-air viewing terraces offering clear sightlines over racetrack circuits, golf courses, and sports arenas.",
      "Dedicated Internal Access & Safety Staircases - Equipped with dual internal stairs, ADA-compliant accessibility access, and certified fire escape pathways.",
      "Full Panoramic Curtain Glass Façades - Double-glazed perimeter thermal glass walls delivering maximum natural lighting, sound reduction, and thermal insulation.",
      "High-Capacity Multi-Zone Climate Control - Independent centralized HVAC ducted systems maintaining stable temperatures on both upper and ground floors."
    ],
    specs: [
      { label: "Main Frame Assembly", value: "Reinforced Structural Steel & Extruded Aluminum Profiles" },
      { label: "Mezzanine Floor Load", value: "High-Load Capacity Certified for High-Density Crowds" },
      { label: "Total Structure Clearance", value: "Up to 9.5m Total Height (Generous Clearances on Both Levels)" },
      { label: "Wind Durability", value: "Engineered & Certified for Wind Resistance up to 120 km/h" },
      { label: "Cover Material", value: "Heavy-Duty Flame-Retardant PVC (White Blockout & UV Shielded)" },
      { label: "Perimeter Walling", value: "Double-Glazed Panoramic Glass Curtain Walls & Solid ABS Panels" },
      { label: "Service Availability", value: "Available for Short-Term Rental & Permanent Manufacturing" }
    ],
  },
  {
    id: "9",
    slug: "panoramic-tent",
    name: "Panoramic Tent",
    tagline: "Crystal-clear panoramic tent supplier delivering 360-degree views for elite weddings.",
    badge: "Crystal Clear • 360° Panoramic Views",
    overviewTitle: "Why Choose Bait Al Nokhada Panoramic Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/panaromic-tent.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/Panoramic-tents-KSA.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/panoramic-Tent-Rental.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/Panoramic-tents-inside.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/Panoramic-tents-3D.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/Panoramic-tents-.webp",
    ],
    windSpeed: "360 View",
    catalogBadge: "Crystal Glass",
    description: "The Panoramic Tent merges modern luxury and structural brilliance in a high-peak, clear-span design. Engineered with heavy-duty aluminum framing and thermally efficient, weather-resistant materials, it delivers expansive, unobstructed interiors and breathtaking transparent vistas. Ideal for high-end hospitality lounges, luxury weddings, VIP exhibitions, and premier resort venues across Dubai, Abu Dhabi, Riyadh, and the GCC.",
    models: [
      { name: "Panoramic PN-15", size: "15m Span (Infinite Modular Length)", capacity: "150 - 200 Guests" },
      { name: "Panoramic PN-20", size: "20m Span (Infinite Modular Length)", capacity: "250 - 350 Guests" },
      { name: "Panoramic PN-25", size: "25m Span (Infinite Modular Length)", capacity: "400 - 600 Guests" },
      { name: "Panoramic Custom", size: "Spans from 10m to 50m+", capacity: "Tailored Multi-Zone Capacities" }
    ],
    features: [
      "Full 360-Degree Panoramic View - Continuous perimeter glass walling providing unobstructed panoramic visibility and integrating indoor luxury with scenic surroundings.",
      "Optical-Grade 98% Ultra-Clear Roof - Advanced UV-treated crystal PVC roof membrane engineered to resist discoloration, yellowing, and harsh solar degradation.",
      "Unobstructed Clear-Span Footprint - 100% usable interior floor area free of internal columns or center poles, granting total creative freedom for event staging.",
      "Specialized Desert Climate Control - High-efficiency ducted HVAC integration engineered specifically to maintain cool interior temperatures within glazed environments.",
      "Modular Architectural Glazing - Compatible with high-impact tempered glass panels, automated sliding entrance doors, and solid composite wall inserts.",
      "All-Weather Durability - Heavy-duty extruded aluminum frame designed to withstand high winds, heavy rain, and extreme ambient summer heat."
    ],
    specs: [
      { label: "Transparency & Clarity", value: "98% Optical-Grade Crystal Clear View" },
      { label: "Main Structural Frame", value: "High-Strength Extruded Aluminum Alloy (Rust-Proof)" },
      { label: "Wind Load Durability", value: "Engineered & Certified for Wind Resistance up to 100 km/h" },
      { label: "Glass Enclosures", value: "Tempered Clear Safety Glass Panels & Double-Glazed Doors" },
      { label: "Roof Covering", value: "UV-Resistant, Flame-Retardant Transparent PVC" },
      { label: "Service Availability", value: "Available for Short-Term Event Rental & Factory Direct Sales" }
    ]
  },
  {
    id: "10",
    slug: "geodesic-tent",
    name: "Geodesic Tent",
    tagline: "Geodesic dome manufacturer supplying 360-degree immersive venues for dynamic events.",
    badge: "Geodesic Engineering • 360° Immersive Projection",
    overviewTitle: "Why Choose Bait Al Nokhada Geodesic Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/geodesic-dome-tent.webp",
    heroImage: "",
    gallery: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/pyramiid.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tents-1.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-supplier.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-inside.webp",
    ],
    windSpeed: "Dome Sphere",
    catalogBadge: "Projection Ready",
    description: "The Geodesic Dome Tent merges avant-garde spherical architecture with exceptional structural strength. Engineered with an interconnected triangular network, it offers superior aerodynamic wind stability, incredible acoustic balance, and an expansive column-free interior. It serves as the ultimate venue for 360° multimedia projections, high-profile product launches, planetariums, immersive brand experiences, and luxury glamping activations across the UAE and KSA.",
    models: [
      { name: "Geodesic GD-10", size: "10m Diameter (78.5 m² Area)", capacity: "40 - 60 Guests" },
      { name: "Geodesic GD-15", size: "15m Diameter (176 m² Area)", capacity: "100 - 140 Guests" },
      { name: "Geodesic GD-25", size: "25m Diameter (490 m² Area)", capacity: "250 - 350 Guests" },
      { name: "Geodesic GD-35", size: "35m Diameter (960 m² Area)", capacity: "500 - 800 Guests" },
      { name: "Geodesic Custom", size: "Custom Spans up to 50m+", capacity: "Tailored Multi-Experience Arenas" }
    ],
    features: [
      "Spherical Triangulated Framework - Self-supporting geometric network that distributes load evenly, providing extreme structural stability with zero internal columns.",
      "360-Degree Projection Mapping Readiness - Perfectly spherical interior contour tailored for seamless immersive digital projections, VR showcases, and dome theaters.",
      "Superior Aerodynamic Wind Resistance - Curved aerodynamic geometry naturally deflects heavy desert winds, gusts, and sandstorms with minimal surface drag.",
      "Versatile Shell Configurations - Options for fully transparent crystal fronts, dual-tone blackout membranes, or custom branded architectural shells.",
      "Advanced Climate & Acoustic Control - Fully compatible with ducted high-tonnage HVAC systems and acoustic soundproofing layers for private multimedia galas.",
      "Rapid Modular Assembly - Precision-engineered bolted joint components facilitating rapid on-site setup and minimal ground impact."
    ],
    specs: [
      { label: "Structural Frame", value: "High-Strength Galvanized Steel Framework with Anti-Corrosion Coating" },
      { label: "Covering Membrane", value: "Heavy-Duty Flame-Retardant PVC (Blockout, Translucent, or Crystal Clear)" },
      { label: "Wind Durability", value: "Engineered & Certified for Wind Resistance up to 120 km/h" },
      { label: "Internal Clearance", value: "Soaring Spherical Apex Height Ensuring Maximum Interior Volume" },
      { label: "Door & Entrance Systems", value: "Tempered Glass Single/Double Doors & Specialized Air-Lock Tunnels" },
      { label: "Service Availability", value: "Available for Short-Term Event Rental & Factory Direct Sales" }
    ]
  },
  {
    id: "11",
    slug: "wave-tent",
    name: "Wave Tent",
    tagline: "Custom wave tent supplier delivering sinuous luxury designs for elite beachfronts.",
    badge: "Organic Wave Contour • Salt Air Corrosion Resistant",
    overviewTitle: "Why Choose Bait Al Nokhada Wave Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/WAVE.webp",
    heroImage: "",
    gallery: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/pyramiid.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tents-1.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-supplier.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-inside.webp",
    ],
    windSpeed: "Wave Design",
    catalogBadge: "Weather Proof",
    description: "The Wave Tent stands out with its signature curved roof and sleek, pillar-free structure, blending contemporary aesthetics with functional clear-span space. Its sweeping design creates an airy, luxurious atmosphere ideal for VIP lounges, upscale weddings, outdoor exhibitions, and high-profile brand activations[cite: 57]. Built with modular engineering, it offers full flexibility whether used as a standalone venue or combined in a continuous series across the UAE, KSA, and GCC[cite: 57].",
    models: [
      { name: "Wave WV-15", size: "15m Span (Infinite Modular Length)", capacity: "150 - 200 Guests" },
      { name: "Wave WV-20", size: "20m Span (Infinite Modular Length)", capacity: "300 - 450 Guests" },
      { name: "Wave WV-25", size: "25m Span (Infinite Modular Length)", capacity: "450 - 650 Guests" },
      { name: "Wave Custom", size: "Custom Spans from 10m to 40m+", capacity: "Tailored Seaside & Gala Capacities" }
    ],
    features: [
      "Sinuous 3D Curved Roofline - Sculptural multi-curved design echoing ocean waves and desert dunes to deliver an iconic visual statement for seaside venues[cite: 55, 56].",
      "Pillar-Free Clear-Span Interior - Heavy-duty aluminum structural frame ensuring 100% unobstructed floor area with complete freedom for luxury staging[cite: 57].",
      "High-Gloss Salt-Resistant PVC - Specialized architectural-grade covering engineered to withstand coastal humidity, saline air corrosion, and intense solar UV rays[cite: 55, 56].",
      "Modular Bay Expansion - Precision-engineered system supporting standalone deployment or multi-unit interlocking configurations with integrated guttering[cite: 57].",
      "Seamless Glass & Solid Wall Integration - Compatible with full-height panoramic glass curtain walls, double-leaf access doors, and insulated solid panels[cite: 57].",
      "Specialized Coastal Climate Control - Engineered ducting integration for high-efficiency HVAC cooling to maintain comfortable interior temperatures year-round[cite: 57]."
    ],
    specs: [
      { label: "Main Frame Rafters", value: "Sculpted Extruded Aluminum Alloy (Corrosion-Proof)" },
      { label: "Wind Durability", value: "Certified Resistance for Wind Speeds up to 110 km/h" },
      { label: "Covering Material", value: "Heavy-Duty Flame-Retardant PVC with Protective Lacquered Finish" },
      { label: "Interior Clearance", value: "Generous Eave & Apex Height for Maximum Air Circulation" },
      { label: "Wall Enclosures", value: "Panoramic Glass Panels, Solid ABS Walls, or Flexible PVC Curtains" },
      { label: "Service Availability", value: "Available for Event Rental & Factory Direct Sales" }
    ]
  },
  {
    id: "12",
    slug: "pyramid-dome-tent",
    name: "Pyramid Dome Tent",
    tagline: "Hybrid pyramid dome tent manufacturing blending high-peak style with modular scale.",
    badge: "Hybrid Architecture • High-Peak Profile",
    overviewTitle: "Why Choose Bait Al Nokhada Pyramid Dome Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid-dome-tant.webp",
    heroImage: "",
    gallery: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/pyramiid.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tents-1.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-supplier.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/pyramid/Pyramid-tent-inside.webp",
    ],
    windSpeed: "Hybrid Roof",
    catalogBadge: "High Apex",
    description: "The Pyramid Dome Tent presents an innovative fusion of classic high-peak pyramid structures with gentle dome curvature, creating a visually striking silhouette and generous internal volume. Engineered to combine modular flexibility with architectural elegance, it offers an impressive ambiance, superior comfort, and clear-span unobstructed interiors. It is the premier choice for luxury weddings, corporate banquets, hospitality lounges, and prestigious exhibitions across the UAE and KSA.",
    models: [
      { name: "PD-15", size: "15m x 15m (225 m² Area)", capacity: "150 - 180 Guests" },
      { name: "PD-20", size: "20m x 20m (400 m² Area)", capacity: "250 - 320 Guests" },
      { name: "PD-25", size: "25m x 25m (625 m² Area)", capacity: "400 - 500 Guests" },
      { name: "PD Custom", size: "Modular Spans from 10m to 60m", capacity: "Custom Event Capacities" }
    ],
    features: [
      "Unique Hybrid Roofline Geometry - Architectural combination of an elevated central apex and curved eaves that creates a dramatic visual profile for VIP events.",
      "Natural Convective Chimney Peak Ventilation - Aerodynamic roof design that promotes natural upward thermal airflow, optimizing interior air circulation and cooling efficiency.",
      "Unobstructed Clear-Span Usable Area - High-strength aluminum structural frame delivering 100% usable floor space with zero center poles or internal obstacles.",
      "Fast Modular Pin-Lock Assembly - Precision-engineered interlocking components facilitating swift setup, clean on-site deployment, and zero downtime.",
      "Heavy-Duty Flame-Retardant PVC Covering - Dual-coated weather-resistant membrane engineered for high UV reflection, extreme sun protection, and waterproof sealing.",
      "Comprehensive Event Fit-Out Compatibility - Seamlessly integrates with glass curtain walls, automated doors, cassette wooden flooring, and centralized HVAC systems."
    ],
    specs: [
      { label: "Apex Center Height", value: "Up to 8.5m Towering Center Elevation" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy (Rust-Proof)" },
      { label: "Wind Durability", value: "Engineered & Certified for Wind Resistance up to 100 km/h" },
      { label: "Covering Material", value: "Heavy-Duty Flame-Retardant White PVC (UV & Heat Shielded)" },
      { label: "Side Enclosures", value: "Tempered Glass Walls, Solid ABS Panels, or Sliding PVC Curtains" },
      { label: "Service Availability", value: "Available for Event Rental & Factory Direct Sales" }
    ]
  },
];