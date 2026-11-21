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
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeywords?: string[];
    breadcrumbTitle?: string;
  };
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
      { name: "Pyramid Tent 5 m", size: "Width: 5 m", capacity: "Eave: 2.25 m • Ridge: 3.3 m" },
      { name: "Pyramid Tent 10 m", size: "Width: 10 m", capacity: "Eave: 3.2 m • Ridge: 5.1 m" },
      { name: "Pyramid Tent 15 m", size: "Width: 15 m", capacity: "Eave: 4.25 m • Ridge: 6.65 m" },
      { name: "Pyramid Tent 20 m", size: "Width: 20 m", capacity: "Eave: 4.25 m • Ridge: 7.4 m" },
      { name: "Pyramid Tent 25 m", size: "Width: 25 m", capacity: "Eave: 4.25 m • Ridge: 8.2 m" },
      { name: "Pyramid Tent 30 m", size: "Width: 30 m", capacity: "Eave: 4.25 m • Ridge: 9.3 m" },
      { name: "Pyramid Tent 40 m", size: "Width: 40 m", capacity: "Eave: 4.25 m • Ridge: 10.95 m" },
      { name: "Custom Engineered Span", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "High-Strength Extruded Aluminum Structure - Precision-engineered aluminum alloy frame providing 100% unobstructed usable space from 5 m up to 40 m standard widths.",
      "Weather & Wind-Resistant PVC Membrane - Heavy-duty covers engineered for wind resistance, U.V. resistance, tear resistance, and dimensional stability.",
      "Certified Flame-Retardant & Thermal Comfort - Flame-retardant roof membrane designed for thermal comfort with zero water pockets or bubbles.",
      "Fully Modular Expanding System - Continuous longitudinal expansion and interlocking configurations with fast installation time.",
      "Versatile Walling Configurations - Compatible with tempered glass panels, solid insulated wall panels, and flexible sliding PVC curtains.",
      "Complete Event Fit-Out Support - Full compatibility with HVAC climate control, cassette flooring, lighting systems, and interior linings."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "5 m, 10 m, 15 m, 20 m, 25 m, 30 m & 40 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "2.25 m (5 m) • 3.2 m (10 m) • 4.25 m (15 m to 40 m)" },
      { label: "Standard Ridge Heights", value: "3.3 m up to 10.95 m (By Span Configuration)" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Cover & Roof System", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Side Wall Options", value: "Tempered Glass, Solid Panels, or Flexible PVC Curtains" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Pyramid Tent for Sale & Rental in UAE | Luxury Event Tents by Bait Al Nokhada",
      metaDescription:
        "Buy or rent a luxury Pyramid Tent in UAE. Perfect for weddings, VIP events, and exhibitions. Fully customizable and built to impress.",
      focusKeywords: [
        "Pyramid Tents",
        "Luxury Pyramid Tents UAE",
        "Pyramid Tent Supplier Dubai",
        "Pyramid Tent for Sale",
      ],
      breadcrumbTitle: "Pyramid Tent",
    },
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
      { name: "Dome Tent 3 m", size: "Width: 3 m", capacity: "Eave: 2.53 m • Ridge: 4.73 m" },
      { name: "Dome Tent 4 m", size: "Width: 4 m", capacity: "Eave: 2.53 m • Ridge: 4.73 m" },
      { name: "Dome Tent 5 m", size: "Width: 5 m", capacity: "Eave: 2.53 m • Ridge: 4.73 m" },
      { name: "Custom Dome Tent", size: "Custom Width & Modular Configurations", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "High-Strength Extruded Aluminum Framing - Engineered aluminum alloy structure delivering 100% unobstructed clear-span interior space across 3 m, 4 m, and 5 m standard widths.",
      "Weather & Wind-Resistant Heavy-Duty PVC - Protective membrane engineered for wind resistance, U.V. resistance, tear resistance, and dimensional stability.",
      "Certified Flame-Retardant & Thermal Comfort - Flame-retardant roof covering designed for thermal comfort with zero water pockets or bubbles.",
      "Modular Interlocking & Fast Installation - Precision-engineered connectors enabling fast installation time and seamless multi-unit linking.",
      "Versatile Walling Configurations - Compatible with tempered glass walls, solid panels, and sliding flexible PVC curtains.",
      "Complete Event Fit-Out Support - Compatible with tempered glass walls, solid panels, cassette flooring, and HVAC climate control."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "3 m, 4 m & 5 m (Plus Custom Sizes)" },
      { label: "Standard Eave Height", value: "2.53 m" },
      { label: "Standard Ridge Height", value: "4.73 m" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Cover Material", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Side Wall Options", value: "Tempered Glass, Solid Panels, or Sliding PVC Curtains" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Leading Dome Tent Supplier In UAE",
      metaDescription:
        "Leading dome tent supplier in UAE. Royal dome tents, full customization, fast setup & delivery across UAE, KSA & beyond.",
      focusKeywords: [
        "Dome Tents",
        "Luxury Dome Tents UAE",
        "Dome Tent Supplier Dubai",
        "Dome Tent Sales KSA",
      ],
      breadcrumbTitle: "Dome Tent",
    },
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
      { name: "Capsule Tent 10 m", size: "Width: 10 m", capacity: "Eave: 3 m • Ridge: 3.3 m" },
      { name: "Capsule Tent 15 m", size: "Width: 15 m", capacity: "Eave: 3 m • Ridge: 3.5 m" },
      { name: "Capsule Tent 20 m", size: "Width: 20 m", capacity: "Eave: 4 m • Ridge: 4.65 m" },
      { name: "Custom Capsule Tent", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Futuristic Capsule Form - Sleek architectural profile designed for exhibitions, brand activations, and commercial spaces across 10 m, 15 m, and 20 m standard widths.",
      "Clear-Span Aluminum Frame - Curved extruded aluminum structure providing column-free interior space and dimensional stability.",
      "Panoramic Glass & Wall Integration - Compatible with double-glazed panoramic glass walls, solid panels, and secure entrances.",
      "All-Weather & Flame-Retardant Protection - Engineered for wind resistance, U.V. resistance, tear resistance, and flame retardancy with zero pockets or bubbles.",
      "Rapid Modular Setup - Pre-engineered components enabling fast installation time with minimal on-site disruption.",
      "5-Year Guarantee & Fit-Out Support - Backed by a 5-year guarantee with support for thermal comfort, HVAC cooling, and integrated lighting."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "10 m, 15 m & 20 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "3 m (on 10 m & 15 m) • 4 m (on 20 m)" },
      { label: "Standard Ridge Heights", value: "3.3 m (10 m) • 3.5 m (15 m) • 4.65 m (20 m)" },
      { label: "Main Frame Assembly", value: "Curved Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Covering & Roof System", value: "Flame-Retardant Membrane with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Glass & Wall Options", value: "Double-Glazed Panoramic Glass Walls & Solid Panels" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Capsule Tents For Events In UAE & KSA | Bait Al Nokhada",
      metaDescription:
        "Discover high-quality capsule tent rentals for exhibitions & events in Dubai, Riyadh & beyond. For sale or rent. Lightweight, stylish, and fully customizable.",
      focusKeywords: [
        "Capsule Tents",
        "Luxury Capsule Tents UAE",
        "Capsule Tent Supplier Dubai",
        "Capsule Tents Sales KSA",
      ],
      breadcrumbTitle: "Capsule Tent",
    },
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
      { name: "Majlis Custom", size: "Modular Widths & Lengths", capacity: "Custom Event Capacities" }
    ],
    features: [
      "High-Strength Aluminum Frame - Extruded aluminum structure engineered for full clear-span layout without internal poles.",
      "Traditional Geometric Sadu Linings - Authentic interior textiles treated with certified flame-retardant safety standards (DIN 4102 B1).",
      "Heavy-Duty Exterior Weather Covering - Flame-retardant PVC exterior engineered for solar reflection, heat resistance, and rain protection.",
      "Multi-Layer Desert Thermal Insulation - Advanced thermal barrier systems preventing heat penetration and optimizing internal AC efficiency.",
      "Traditional Heritage Exterior Accents - Classic exterior patterns, trim details, and optional glass entrance doors.",
      "Complete Majlis Fit-Out Support - Integrated sub-flooring for carpets, low majlis seating, ambient warm lighting, and a 5-year guarantee."
    ],
    specs: [
      { label: "Main Structural Frame", value: "High-Strength Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Interior Lining Material", value: "Certified Flame-Retardant Traditional Arabian Sadu Textiles" },
      { label: "Weather Durability", value: "Engineered for Wind Load, Desert Heat & Rain Protection" },
      { label: "Outer Protective Layer", value: "Heavy-Duty Blackout PVC with Full UV Shielding" },
      { label: "Thermal Insulation System", value: "Multi-Layer Thermal Core for Maximum AC Efficiency" },
      { label: "Flooring & Accessories", value: "Sub-Floor Framing for Carpeting, Glass Doors & Majlis Setup" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" },
      { label: "Service Availability", value: "Available for Rental & Permanent Custom Manufacturing" }
    ],
    seo: {
      metaTitle: "Arabic Majlis Tents | Arabic Tent In UAE | Bait Al Nokhada",
      metaDescription:
        "Buy or rent luxury Arabic majlis tents in UAE & KSA. Traditional designs, custom interiors & fast setup. Trusted tent manufacturer since 1997.",
      focusKeywords: [
        "Arabic Majlis Tents",
        "Luxury Arabic Majlis Tents UAE",
        "Arabic Majlis Tent Supplier Dubai",
        "Arabic Majlis Tent Sales KSA",
      ],
      breadcrumbTitle: "Arabic Majlis Tent",
    },
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
    description: "The Revolution Tent is a premium, high-capacity tent structure designed for prestigious, large-scale events across the UAE and KSA. Engineered with clear-span architecture (zero internal poles) and towering ceiling heights, it provides a wide, uninterrupted interior ideal for international exhibitions, trade shows, world summits, and high-profile brand activations. Built with high-strength aluminum profiles and heavy-duty flame-retardant PVC covers, it ensures reliable all-weather performance.",
    models: [
      { name: "Revolution Tent 10 m", size: "Width: 10 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 15 m", size: "Width: 15 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 20 m", size: "Width: 20 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 25 m", size: "Width: 25 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 30 m", size: "Width: 30 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 40 m", size: "Width: 40 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 50 m", size: "Width: 50 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Revolution Tent 60 m", size: "Width: 60 m", capacity: "Eave: 6.9 m • Ridge: 9.0 m" },
      { name: "Custom Engineered Span", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Up to 60m Clear-Span Width - Vast unobstructed interior layout with 100% usable floor area and zero central pillars.",
      "Engineered High-Payload Roof Trusses - Heavy-duty roof profiles designed to safely support massive AV lighting rigs, sound systems, and LED walls.",
      "Modular Infinite Bay Expansion - Expandable length configured in modular bays to match any event footprint.",
      "Compatible with Architectural Façades - Full integration with insulated glass curtain walls, solid wall panels, and automatic entrance doors.",
      "Thermal Comfort & No Pockets or Bubbles - Tensioned dual-layer roof membrane engineered for dimensional stability, thermal insulation, and zero water pockets.",
      "All-Weather Certified Protection - Wind resistant, U.V. resistant, tear resistant, and flame retardant with fast installation time and a 5-year guarantee."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "10 m, 15 m, 20 m, 25 m, 30 m, 40 m, 50 m & 60 m (Plus Custom Sizes)" },
      { label: "Standard Eave Height", value: "6.9 m" },
      { label: "Standard Ridge Height", value: "9.0 m" },
      { label: "Main Profile Structure", value: "High-Strength Extruded Aluminum Alloy" },
      { label: "Weather & Wind Performance", value: "Wind Resistant, U.V. Resistant & Dimensional Stability" },
      { label: "Roof Membrane System", value: "Flame-Retardant, Tear-Resistant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Side Wall Systems", value: "Insulated Solid Panels, Panoramic Glass Walls & Double Doors" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" },
    ],
    seo: {
      metaTitle: "Revolution Tent – Premium Tent For Grand Events In UAE & KSA",
      metaDescription:
        "Discover Revolution Tent: premium, customizable event tents for exhibitions, weddings & more. Available for rent or sale in UAE & Saudi Arabia.",
      focusKeywords: [
        "Revolution Tents",
        "Luxury Revolution Tents UAE",
        "Revolution Tent Supplier Dubai",
        "Revolution Tent Sales KSA",
      ],
      breadcrumbTitle: "Revolution Tent",
    },
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
      { name: "Polygonal Tent 15 m, 2 Slopes", size: "Width: 15 m", capacity: "Eave: 4.25 m • Ridge: 7.7 m" },
      { name: "Polygonal Tent 20 m, 2 Slopes", size: "Width: 20 m", capacity: "Eave: 4.25 m • Ridge: 8.3 m" },
      { name: "Polygonal Tent 25 m, 2 Slopes", size: "Width: 25 m", capacity: "Eave: 4.25 m • Ridge: 8.86 m" },
      { name: "Polygonal Tent 30 m, 2 Slopes", size: "Width: 30 m", capacity: "Eave: 4.25 m • Ridge: 11.16 m" },
      { name: "Polygonal Tent 40 m, 2 Slopes", size: "Width: 40 m", capacity: "Eave: 4.25/6.32 m • Ridge: 12.31/15.19 m" },
      { name: "Polygonal Tent 50 m, 3 Slopes", size: "Width: 50 m", capacity: "Eave: 4.25/6.32 m • Ridge: 13.45/16.7 m" },
      { name: "Polygonal Tent 60 m, 3 Slopes", size: "Width: 60 m", capacity: "Eave: 5.46 m • Ridge: 17 m" },
      { name: "Custom Engineered Span", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Vaulted Multi-Slope Polygonal Roof - 2-slope and 3-slope polygonal profiles providing vertical clearance up to 17 m ridge height for sports arenas and warehousing.",
      "Superior Wind Aerodynamics - Segmented multi-angle rafters engineered for wind resistance and dimensional stability.",
      "Engineered for Indoor Sports Arenas - Generous vertical clearance and clear spans suited for padel, tennis, basketball, and multi-sport facilities.",
      "Vast Column-Free Clear Span - Unobstructed internal layout from 15 m up to 60 m standard widths without central pillars.",
      "Heavy-Duty Industrial Walling - Compatible with insulated sandwich panels, glass systems, solid panels, and PVC enclosures.",
      "All-Weather Certified Protection - Wind resistant, U.V. resistant, tear resistant, and flame retardant with thermal comfort, no pockets or bubbles, fast installation, and a 5-year guarantee."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "15 m, 20 m, 25 m, 30 m, 40 m, 50 m & 60 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "4.25 m to 6.32 m (5.46 m on 60 m)" },
      { label: "Standard Ridge Heights", value: "7.7 m up to 17 m (By Span & Slope Configuration)" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Box-Section Aluminum Alloy" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Cover & Roof System", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Sidewall Enclosures", value: "Insulated Sandwich Panels, Glass Curtain Walls & PVC" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Polygon Tent | Rent Tent | Tents On Rent | Tent Supplier In UAE",
      metaDescription:
        "Buy or rent high-capacity polygon tents in Dubai, Abu Dhabi & Riyadh. Ideal for business, weddings & exhibitions. Engineered for all weather.",
      focusKeywords: [
        "Polygon Tents",
        "Luxury Polygon Tents UAE",
        "Polygon Tent Supplier Dubai",
        "Polygon Tent Sales KSA",
      ],
      breadcrumbTitle: "Polygon Tent",
    },
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
      { name: "Arch Tent 10 m", size: "Width: 10 m", capacity: "Eave: 3.2 m • Ridge: 4.7 m" },
      { name: "Arch Tent 15 m", size: "Width: 15 m", capacity: "Eave: 4.25 m • Ridge: 6.2 m" },
      { name: "Arch Tent 20 m", size: "Width: 20 m", capacity: "Eave: 4.25 m • Ridge: 6.9 m" },
      { name: "Arch Tent 25 m", size: "Width: 25 m", capacity: "Eave: 4.25 m • Ridge: 7.7 m" },
      { name: "Arch Tent 30 m", size: "Width: 30 m", capacity: "Eave: 4.25 m • Ridge: 8.3 m" },
      { name: "Arch Tent 40 m", size: "Width: 40 m", capacity: "Eave: 4.25 m • Ridge: 9.85 m" },
      { name: "Arch Tent 50 m", size: "Width: 50 m", capacity: "Eave: 4.25 m • Ridge: 11.4 m" },
      { name: "Custom Engineered Span", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Curved Aerodynamic Roof Beam Profile - Engineered curved silhouette that prevents water pockets or bubbles while enhancing wind resistance.",
      "100% Unobstructed Clear-Span Space - Extruded aluminum structural framework delivering a completely pillar-free floor area from 10 m to 50 m standard widths.",
      "Architectural Glass & Automated Entrance Integration - Full compatibility with insulated glass curtain walls, double-glazed doors, and solid wall panels.",
      "Heavy-Duty Flame-Retardant PVC Covering - Protective membrane offering thermal comfort, U.V. resistance, tear resistance, and dimensional stability.",
      "Modular Multi-Bay Expansion - Scalable longitudinal expansion configured in continuous modular bays with fast installation time.",
      "Certified 5-Year Guarantee & Fit-Out Support - Backed by a 5-year guarantee with full support for HVAC climate control, interior lining, and lighting systems."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "10 m, 15 m, 20 m, 25 m, 30 m, 40 m & 50 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "3.2 m (on 10 m) • 4.25 m (on 15 m to 50 m)" },
      { label: "Standard Ridge Heights", value: "4.7 m up to 11.4 m (By Span Configuration)" },
      { label: "Main Structural Frame", value: "Curved Extruded Aluminum Alloy Rafters (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Covering Membrane", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Sidewall Systems", value: "Tempered Glass Walls, Solid Panels, or Flexible PVC" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Arch Tent For Sale & Rental In UAE & KSA | Bait Al Nokhada",
      metaDescription:
        "Explore premium arch tents for sale or rent in UAE & KSA. Bait Al Nokhada offers clear-span, weatherproof tents for events, exhibitions, and industrial use.",
      focusKeywords: [
        "Arch Tents",
        "Luxury Arch Tents UAE",
        "Arch Tent Supplier Dubai",
        "Arch Tent Sales KSA",
      ],
      breadcrumbTitle: "Arch Tent",
    },
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
      { name: "Double Decker Tent 10 m", size: "Width: 10 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 15 m", size: "Width: 15 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 20 m", size: "Width: 20 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 25 m", size: "Width: 25 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 30 m", size: "Width: 30 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 40 m", size: "Width: 40 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 50 m", size: "Width: 50 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Double Decker Tent 60 m", size: "Width: 60 m", capacity: "Eave: 9.96 m • Ridge: 12 m" },
      { name: "Custom Engineered Span", size: "Custom Width & Modular Length", capacity: "Tailored Multi-Level Specs" }
    ],
    features: [
      "Dual-Level Usable Space Optimization - Doubles functional event capacity on the exact same ground footprint, separating general guest reception from exclusive upper-tier VIP lounges.",
      "Engineered Steel & Aluminum Mezzanine - Heavy-duty composite intermediate deck built with reinforced load-bearing beams for structural stability and dimensional accuracy.",
      "Integrated Outdoor Cantilever Balconies - Elevated open-air viewing terraces offering clear sightlines over racetrack circuits, golf courses, and sports arenas.",
      "Dedicated Internal Access & Safety Staircases - Equipped with internal stairs, accessibility access, and certified fire escape pathways.",
      "Full Panoramic Curtain Glass Façades - Double-glazed perimeter thermal glass walls delivering natural lighting, sound reduction, and thermal comfort.",
      "High-Capacity Multi-Zone Climate Control - Independent centralized HVAC ducted systems with zero pockets or bubbles, U.V. and tear resistance, and a 5-year guarantee."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "10 m, 15 m, 20 m, 25 m, 30 m, 40 m, 50 m & 60 m (Plus Custom Sizes)" },
      { label: "Standard Eave Height", value: "9.96 m" },
      { label: "Standard Ridge Height", value: "12 m" },
      { label: "Main Frame Assembly", value: "Reinforced Structural Steel & Extruded Aluminum Profiles" },
      { label: "Weather & Dimensional Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Flame Retardant" },
      { label: "Cover & Roof System", value: "Heavy-Duty PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Perimeter Walling", value: "Double-Glazed Panoramic Glass Curtain Walls & Solid Panels" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Double Decker Tent Rental & Sales | Bait Al Nokhada",
      metaDescription:
        "Discover high-quality Double Decker tent for rent and sale in UAE & KSA. Ideal for VIP lounges, sports events, and exhibitions in Dubai and Riyadh.",
      focusKeywords: [
        "Double Decker Tent",
        "Luxury Double Decker Tents UAE",
        "Double Decker Tent Supplier Dubai",
        "Double Decker Tent Rental KSA",
      ],
      breadcrumbTitle: "Double Decker Tent",
    },
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
      { name: "Panoramic Tent 10 m", size: "Diameter: Ø 10 m", capacity: "Eave: 3 m • Ridge: 5.25 m" },
      { name: "Panoramic Tent 20 m", size: "Diameter: Ø 20 m", capacity: "Eave: 4.3 m • Ridge: 8.5 m" },
      { name: "Panoramic Tent 30 m", size: "Diameter: Ø 30 m", capacity: "Eave: 4.3 m • Ridge: 10.5 m" },
      { name: "Panoramic Tent 40 m", size: "Diameter: Ø 40 m", capacity: "Eave: 4.3 m • Ridge: 12 m" },
      { name: "Custom Panoramic Tent", size: "Custom Diameter & Configuration", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Full 360-Degree Panoramic View - Circular polygonal perimeter glazing providing unobstructed panoramic visibility across 10 m, 20 m, 30 m, and 40 m diameters.",
      "Clear-Span Extruded Aluminum Frame - High-strength structural framing delivering 100% usable interior floor area free of center columns.",
      "UV-Resistant & Flame-Retardant Roof Membrane - Protective roof covering engineered for U.V. resistance, tear resistance, flame retardancy, and dimensional stability.",
      "Thermal Comfort & Zero Pockets or Bubbles - Tensioned membrane system designed for thermal comfort with zero water pockets or bubbles.",
      "Modular Architectural Glazing & Entrances - Compatible with tempered glass panels, double-glazed doors, and insulated solid wall options.",
      "5-Year Guarantee & Fast Installation - Backed by a 5-year guarantee with fast installation time and full support for HVAC climate control."
    ],
    specs: [
      { label: "Standard Diameters", value: "Ø 10 m, Ø 20 m, Ø 30 m & Ø 40 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "3 m (on Ø 10 m) • 4.3 m (on Ø 20 m, Ø 30 m & Ø 40 m)" },
      { label: "Standard Ridge Heights", value: "5.25 m (10 m) • 8.5 m (20 m) • 10.5 m (30 m) • 12 m (40 m)" },
      { label: "Main Structural Frame", value: "High-Strength Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Roof Covering", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Glass & Wall Enclosures", value: "Tempered Clear Safety Glass Panels & Double-Glazed Doors" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Panoramic Tent Manufacturer In Dubai | Bait Al Nokhada",
      metaDescription:
        "Trusted manufacturer of panoramic tents in Dubai. Buy or rent luxury tents for events in UAE, Abu Dhabi, Riyadh & Jeddah.",
      focusKeywords: [
        "Panoramic Tents",
        "Luxury Panoramic Tents UAE",
        "Panoramic Tent Supplier Dubai",
        "Panoramic Tent Sales KSA",
      ],
      breadcrumbTitle: "Panoramic Tent",
    },
  },
  {
    id: "10",
    slug: "geodesic-tent",
    name: "Geodesic Tent",
    tagline: "Geodesic dome manufacturer supplying 360-degree immersive venues for dynamic events.",
    badge: "Geodesic Engineering • 360° Immersive Projection",
    overviewTitle: "Why Choose Bait Al Nokhada Geodesic Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/geodesic-dome-tent.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/45.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/90.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/DSC03044.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/Geodesic-Tents.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/Geodesic-dome-tents-in-congo.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/Geodesic-tent.webp",
    ],
    windSpeed: "Dome Sphere",
    catalogBadge: "Projection Ready",
    description: "The Geodesic Dome Tent merges avant-garde spherical architecture with exceptional structural strength. Engineered with an interconnected triangular network, it offers superior aerodynamic wind stability, incredible acoustic balance, and an expansive column-free interior. It serves as the ultimate venue for 360° multimedia projections, high-profile product launches, planetariums, immersive brand experiences, and luxury glamping activations across the UAE and KSA.",
    models: [
      { name: "Geodesic Tent 5 m", size: "Diameter: 5 m • Area: 19.6 Sq.m", capacity: "Ridge Height: 3 m" },
      { name: "Geodesic Tent 10 m", size: "Diameter: 10 m • Area: 77.2 Sq.m", capacity: "Ridge Height: 5 m" },
      { name: "Geodesic Tent 15 m", size: "Diameter: 15 m • Area: 175.5 Sq.m", capacity: "Ridge Height: 7.5 m" },
      { name: "Geodesic Tent 20 m", size: "Diameter: 20 m • Area: 312.0 Sq.m", capacity: "Ridge Height: 10 m" },
      { name: "Geodesic Tent 25 m", size: "Diameter: 25 m • Area: 487.3 Sq.m", capacity: "Ridge Height: 12.5 m" },
      { name: "Geodesic Tent 30 m", size: "Diameter: 30 m • Area: 701.7 Sq.m", capacity: "Ridge Height: 15 m" },
      { name: "Geodesic Tent 35 m", size: "Diameter: 35 m • Area: 955.08 Sq.m", capacity: "Ridge Height: 17.5 m" },
      { name: "Geodesic Tent 40 m", size: "Diameter: 40 m • Area: 1247.0 Sq.m", capacity: "Ridge Height: 20 m" },
      { name: "Custom Geodesic Dome", size: "Custom Diameter & Configuration", capacity: "Tailored Area & Ridge" }
    ],
    features: [
      "Spherical Triangulated Framework - Self-supporting geometric network providing column-free interior space across 5 m to 40 m standard diameters.",
      "360-Degree Projection Readiness - Spherical interior geometry suited for immersive projections, showcases, and experiential events.",
      "Superior Aerodynamic & Wind Resistance - Curved dome contour engineered for wind resistance, U.V. resistance, tear resistance, and dimensional stability.",
      "Flame-Retardant & Zero Pockets or Bubbles - Tensioned membrane designed for thermal comfort with zero water pockets or bubbles.",
      "Versatile Shell & Entrance Options - Compatible with transparent or opaque membranes, tempered glass doors, and air-lock access tunnels.",
      "5-Year Guarantee & Fast Installation - Backed by a 5-year guarantee with fast installation time and support for HVAC cooling and acoustic linings."
    ],
    specs: [
      { label: "Standard Diameters", value: "5 m, 10 m, 15 m, 20 m, 25 m, 30 m, 35 m & 40 m (Plus Custom Sizes)" },
      { label: "Floor Area Range", value: "19.6 Sq.m up to 1247.0 Sq.m (By Diameter)" },
      { label: "Standard Ridge Heights", value: "3 m up to 20 m (Half of Diameter Span)" },
      { label: "Structural Frame", value: "High-Strength Steel Framework with Anti-Corrosion Coating" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Covering Membrane", value: "Flame-Retardant Membrane with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Door & Entrance Systems", value: "Tempered Glass Single/Double Doors & Air-Lock Tunnels" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Premium Geodesic Tents For Events & Exhibitions | Bait Al Nokhada",
      metaDescription:
        "Discover luxury geodesic tents for events, exhibitions, and outdoor experiences. Available for rent or sale across UAE, KSA, and the Middle East.",
      focusKeywords: [
        "Geodesic Tents",
        "Luxury Geodesic Tents UAE",
        "Geodesic Tent Supplier Dubai",
        "Geodesic Tent Sales KSA",
      ],
      breadcrumbTitle: "Geodesic Tent",
    },
  },
  {
    id: "11",
    slug: "wave-tent",
    name: "Wave Tent",
    tagline: "Custom wave tent supplier delivering sinuous luxury designs for elite beachfronts.",
    badge: "Organic Wave Contour • Salt Air Corrosion Resistant",
    overviewTitle: "Why Choose Bait Al Nokhada Wave Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/WAVE.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/93.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/wave-tent-rental-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/Wave-Tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/Wave-tents-for-event.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/WAVE-TENT.webp",
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
    ],
    seo: {
      metaTitle: "Wave Tent Rental & Sale In UAE & Saudi Arabia | Bait Al Nokhada",
      metaDescription:
        "Modern, elegant Wave Tents for luxury weddings, VIP events & exhibitions. Custom sizes available. Trusted rental & manufacturing company in UAE & KSA.",
      focusKeywords: [
        "Wave Tents",
        "Luxury Wave Tents UAE",
        "Wave Tent Supplier Dubai",
        "Wave Tent Sales KSA",
      ],
      breadcrumbTitle: "Wave Tent",
    },
  },
  {
    id: "12",
    slug: "pyramid-dome-tent",
    name: "Pyramid Dome Tent",
    tagline: "Hybrid pyramid dome tent manufacturing blending high-peak style with modular scale.",
    badge: "Hybrid Architecture • High-Peak Profile",
    overviewTitle: "Why Choose Bait Al Nokhada Pyramid Dome Tents?",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid-dome-tant.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid-dome-tent-in-uae.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/Pyramid-dome-tent-supplier.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid-dome-tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/compo-pyramid-tent-rental.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/92.webp",
    ],
    windSpeed: "Hybrid Roof",
    catalogBadge: "High Apex",
    description: "The Pyramid Dome Tent presents an innovative fusion of classic high-peak pyramid structures with gentle dome curvature, creating a visually striking silhouette and generous internal volume. Engineered to combine modular flexibility with architectural elegance, it offers an impressive ambiance, superior comfort, and clear-span unobstructed interiors. It is the premier choice for luxury weddings, corporate banquets, hospitality lounges, and prestigious exhibitions across the UAE and KSA.",
    models: [
      { name: "Pyramid Dome Tent 10 m", size: "Width: 10 m", capacity: "Eave: 3.25 m • Ridge: 9.25 m" },
      { name: "Pyramid Dome Tent 15 m", size: "Width: 15 m", capacity: "Eave: 4.25 m • Ridge: 11.10 m" },
      { name: "Pyramid Dome Tent 20 m", size: "Width: 20 m", capacity: "Eave: 4.25 m • Ridge: 11.90 m" },
      { name: "Custom Pyramid Dome Tent", size: "Custom Width & Modular Length", capacity: "Tailored Eave & Ridge" }
    ],
    features: [
      "Unique Hybrid Roofline Geometry - Architectural combination of a dome silhouette and elevated apex profile for distinct visual presence.",
      "Vertical Air Circulation & Thermal Comfort - Elevated peak geometry supporting comfortable interior air movement and thermal comfort.",
      "Unobstructed Clear-Span Usable Area - Extruded aluminum structural frame delivering column-free usable interior space across 10 m, 15 m, and 20 m standard widths.",
      "Fast Modular Assembly & Stability - Precision components enabling fast installation time, wind resistance, and dimensional stability.",
      "Heavy-Duty Flame-Retardant PVC Covering - Weather-resistant membrane engineered for U.V. resistance, tear resistance, and zero pockets or bubbles.",
      "5-Year Guarantee & Event Fit-Out Support - Backed by a 5-year guarantee and compatible with glass walls, solid panels, flooring, and climate control."
    ],
    specs: [
      { label: "Standard Clear-Span Widths", value: "10 m, 15 m & 20 m (Plus Custom Sizes)" },
      { label: "Standard Eave Heights", value: "3.25 m (on 10 m) • 4.25 m (on 15 m & 20 m)" },
      { label: "Standard Ridge Heights", value: "9.25 m (10 m) • 11.10 m (15 m) • 11.90 m (20 m)" },
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy (Corrosion-Resistant)" },
      { label: "Weather & Stability", value: "Wind Resistant, U.V. Resistant, Tear Resistant & Dimensional Stability" },
      { label: "Covering Material", value: "Flame-Retardant PVC with Thermal Comfort & No Pockets or Bubbles" },
      { label: "Side Enclosures", value: "Tempered Glass Walls, Solid Panels, or Sliding PVC Curtains" },
      { label: "Supply & Availability", value: "Available for Event Rental & Custom Factory Manufacturing" }
    ],
    seo: {
      metaTitle: "Pyramid Dome Tent For Rent & Sale In UAE & KSA | Bait Al Nokhada",
      metaDescription:
        "Elegant pyramid dome tents for rent or sale across UAE & KSA. Ideal for weddings, exhibitions & VIP events. Custom sizes & finishes available.",
      focusKeywords: [
        "Pyramid Dome Tents",
        "Luxury Pyramid Dome Tents UAE",
        "Pyramid Dome Tent Supplier Dubai",
        "Pyramid Dome Tent Sales KSA",
      ],
      breadcrumbTitle: "Pyramid Dome Tent",
    },
  },
];