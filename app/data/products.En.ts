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
  heroImage: string;
  windSpeed: string;
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
    tagline: "Elegant, durable, and modular structure with 100% clear-span interior space.",
    badge: "Engineered for Extreme Weather • International Safety Compliant",
    overviewTitle: "Why Choose Bait Al Nokhada Pyramid Tents?",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid/pyramid+tent.webp",
    windSpeed: "Weather Resistant",
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
    tagline: "Distinctive high-peak architectural tents delivering open 360° space and superior structural elegance for VIP events.",
    badge: "High-Peak Profile • 360° Open Space",
    overviewTitle: "Why Choose Bait Al Nokhada Dome Tents?",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/dome-tents.webp",
    windSpeed: "Weather Resistant",
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
    tagline: "Modular Futuristic Glamping Pods & VIP Accommodation Units",
    badge: "Futuristic Design • Rapid Deployment",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule.webp",
    windSpeed: "100 km/h Wind Load",
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
    tagline: "Authentic Cultural Heritage Tents Engineered with Modern Climate Tech",
    badge: "Heritage Craft • Desert Climate Insulation",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/arabic-tent.webp",
    windSpeed: "110 km/h Wind Load",
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
    tagline: "Large-Span High-End Venues for Mega Expos & World Summits",
    badge: "Mega Clear Span • Heavy Rigging Capacity",
  heroImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Revolution/revalution.webp",
  windSpeed: "120 km/h Wind Load",
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
    tagline: "Heavy-Duty Multi-Angle Clear Span for Industrial & Athletic Arenas",
    badge: "Vaulted Apex • High Clearance",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/polygon-tent.webp",
    windSpeed: "120 km/h Wind Load",
    description: "The Polygon Tent brilliantly combines modern architecture with exceptional practical functionality, making it an ideal choice for large event tents, grand exhibitions, or demanding industrial purposes, showcasing our expertise in temporary structures.",
    models: [
      { name: "Polygon PG-20", size: "20m Span (8.5m Apex)", capacity: "2 Padel Courts / Warehousing" },
      { name: "Polygon PG-30", size: "30m Span (11.0m Apex)", capacity: "4 Padel Courts / Logistics" },
      { name: "Polygon PG-40", size: "40m Span (14.0m Apex)", capacity: "Major Stadium / Heavy Storage" },
    ],
    features: [
      "Vaulted High-Apex Polygonal Roof Yielding Maximum Internal Air Clearance",
      "Superior Wind Aerodynamics via Segmented Multi-Angle Aluminum Rafters",
      "Engineered for Indoor Padel, Tennis, Basketball, and Industrial Forklift Operations",
    ],
    specs: [
      { label: "Apex Height", value: "8.5m to 14.0 meters Center Clearance" },
      { label: "Structural Alloy", value: "6061/T6 Extruded Aluminum Alloy" },
      { label: "Wind Resistance", value: "120 km/h (1.0 kN/m²)" },
      { label: "Sidewall Covering", value: "Insulated Sandwich Panels or 850g PVC" },
    ],
  },
  {
    id: "7",
    slug: "arch-tent",
    name: "Arch Tent",
    tagline: "Aesthetic Curved Roof Architecture for Sophisticated Outdoor Galas",
    badge: "Curved Elegance • Seamless Drain",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arch/arch-tents.webp",
    windSpeed: "100 km/h Wind Load",
    description: "Modern arch tents, with their distinctive curved roofs, offer an elegant and sophisticated look perfect for corporate events, magnificently enhancing any outdoor setting. Their contemporary design makes them a top choice for upscale gatherings.",
    models: [
      { name: "Arch AT-15", size: "15m Span (Infinite Length)", capacity: "150 - 200 Guests" },
      { name: "Arch AT-25", size: "25m Span (Infinite Length)", capacity: "350 - 500 Guests" },
      { name: "Arch AT-35", size: "35m Span (Infinite Length)", capacity: "700 - 1,000 Guests" },
    ],
    features: [
      "Curved Roof Beam Profile Ensuring Immediate Rain & Dust Run-Off",
      "Full Compatibility with Panoramic Glass Wall Systems and Automatic Sliding Doors",
      "Modern Minimalist Aesthetics Suitable for High-End Galas and Luxury Launches",
    ],
    specs: [
      { label: "Frame Profile", value: "Curved 6061/T6 Anodized Aluminum Rafters" },
      { label: "Fabric Cover", value: "850g/m² High-Gloss White Blockout PVC" },
      { label: "Wind Rating", value: "100 km/h (0.5 kN/m²)" },
      { label: "Eave Height", value: "4.0m Standard Clearance" },
    ],
  },
  {
    id: "8",
    slug: "double-decker-tent",
    name: "Double Decker Tent",
    tagline: "Two-Story Maximum Capacity Pavilions for VIP Hospitality & F1 Tracks",
    badge: "Two-Story Structure • VIP Mezzanine",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Double+Decker+Tent/double-Decker.webp",
    windSpeed: "120 km/h Wind Load",
    description: "Revolutionize your event space with the double-decker tent, offering two levels of unparalleled functionality. It's the optimal solution for major exhibitions, corporate events, and elaborate hospitality setups, making it a top choice for tent renta",
    models: [
      { name: "Double Decker DD-15", size: "15m Span (Two Levels)", capacity: "500+ VIPs" },
      { name: "Double Decker DD-20", size: "20m Span (Two Levels)", capacity: "800+ VIPs" },
      { name: "Double Decker DD-30", size: "30m Span (Two Levels)", capacity: "1,800+ VIPs" },
    ],
    features: [
      "Heavy-Duty Structural Steel & Aluminum Composite Mezzanine Floor System",
      "Integrated VIP Outdoor Cantilever Balconies Overlooking Tracks and Arenas",
      "Dual Internal Staircases with Fire-Escape Compliance and ADA Lift Ready",
    ],
    specs: [
      { label: "Floor Live Load", value: "500 kg/m² Certified Load Capacity (Upper Floor)" },
      { label: "Total Structure Height", value: "Up to 9.5 meters Two-Story Clearance" },
      { label: "Wind Resistance", value: "120 km/h (1.0 kN/m²)" },
      { label: "Wall Options", value: "Double-Glazed Panoramic Curtain Glass" },
    ],
  },
  {
    id: "9",
    slug: "panoramic-tent",
    name: "Panoramic Tent",
    tagline: "360-Degree Transparent Crystal Marquees for Spectacular Outdoor Views",
    badge: "Crystal Clear • 360° Views",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Panoramic/panaromic-tent.webp",
    windSpeed: "100 km/h Wind Load",
    description: "The panoramic tent delivers immersive experiences with its breathtaking transparent design, making it perfect for events that truly embrace the surrounding scenery. It’s ideal for dream weddings, vibrant exhibitions, and more, offering unparalleled views.",
    models: [
      { name: "Panoramic PN-15", size: "15m Span (Infinite Length)", capacity: "150 - 200 Guests" },
      { name: "Panoramic PN-20", size: "20m Span (Infinite Length)", capacity: "250 - 350 Guests" },
      { name: "Panoramic PN-25", size: "25m Span (Infinite Length)", capacity: "400 - 600 Guests" },
    ],
    features: [
      "Optical-Grade 98% Ultra-Clear UV-Treated PVC Roof Membrane",
      "Full Modular Framing for Seamless Glass Curtain Walls",
      "High-Efficiency Climate Control Integration for Desert Environments",
    ],
    specs: [
      { label: "Transparency", value: "98% Optical Grade Clarity" },
      { label: "Main Frame", value: "Anodized 6061/T6 Extruded Aluminum" },
      { label: "Wind Rating", value: "100 km/h" },
      { label: "Wall System", value: "Tempered Clear Glass Panels (10mm)" },
    ],
  },
  {
    id: "10",
    slug: "geodesic-tent",
    name: "Geodesic Tent",
    tagline: "Spherical Projection Enclosures for Immersive Audio-Visual Experiences",
    badge: "Fulldome VR • Structural Sphere",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Geodesic+/geodesic-dome-tent.webp",
    windSpeed: "120 km/h Wind Load",
    description: "The geodesic dome offers an architecturally stunning, dome-shaped design, providing exceptional spaciousness and robust, weather-resistant shelter. It's ideal for captivating events, dynamic exhibitions, or luxurious outdoor stays.",
    models: [
      { name: "Geodesic GD-15", size: "15m Diameter (176 m²)", capacity: "120 - 150 Guests" },
      { name: "Geodesic GD-20", size: "20m Diameter (314 m²)", capacity: "250 - 320 Guests" },
      { name: "Geodesic GD-30", size: "30m Diameter (706 m²)", capacity: "500 - 750 Guests" },
    ],
    features: [
      "Negative-Pressure Internal Projection Screen Membrane Ready",
      "Self-Supporting Triangular Lattice High-Strength Steel Frame",
      "Acoustically Optimized for Concert-Grade Surround Sound Performance",
    ],
    specs: [
      { label: "Structure", value: "Self-Supporting Q235 Triangular Truss" },
      { label: "Acoustics", value: "Multi-Layer Sound Dampening Envelope" },
      { label: "Wind Rating", value: "120 km/h Certified" },
    ],
  },
  {
    id: "11",
    slug: "wave-tent",
    name: "Wave Tent",
    tagline: "Dynamic Sinuous High-Tension Fabric Structures for Seaside Lounges",
    badge: "Organic Wave • Tensile Membrane",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wave+Tent/WAVE.webp",
    windSpeed: "110 km/h Wind Load",
    description: "With its graceful, flowing silhouette, the Royal Wave Tent adds a distinctive, modern, and elegant touch. It's ideal for breathtaking beachfront events, stylish pavilions, and sophisticated receptions, defining luxury tent design.",
    models: [
      { name: "Wave WV-15", size: "15m Span (Infinite Length)", capacity: "150 - 200 Guests" },
      { name: "Wave WV-20", size: "20m Span (Infinite Length)", capacity: "300 - 450 Guests" },
    ],
    features: [
      "Custom Tensile 3D Sinuous Curved Profiles",
      "Architectural Grade High-Gloss PVC Resisting Salt Air Corrosion",
      "Organic Sculptural Appearance for Elite Seaside Venues",
    ],
    specs: [
      { label: "Frame Rafters", value: "Sculpted Aluminum Extrusion 6061/T6" },
      { label: "Wind Rating", value: "110 km/h" },
      { label: "Membrane", value: "850g/m² High-Tensile Lacquered PVC" },
    ],
  },
  {
    id: "12",
    slug: "pyramid-dome-tent",
    name: "Pyramid Dome Tent",
    tagline: "Architectural Fusion of High Apex Peak and Soft Curvature",
    badge: "Hybrid Architecture • High Elegance",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid-dome-tent/pyramid-dome-tant.webp",
    windSpeed: "100 km/h Wind Load",
    description: "The pyramid with dome tent presents an innovative fusion of classic pyramid structures with added dynamic flexibility, making it unrivaled for diverse and large event tent requirements.",
    models: [
      { name: "Hybrid PD-15", size: "15m x 15m (225 m²)", capacity: "150 - 180 Guests" },
      { name: "Hybrid PD-20", size: "20m x 20m (400 m²)", capacity: "250 - 320 Guests" },
    ],
    features: [
      "Natural Convective Chimney Peak Ventilation System",
      "Unique Hybrid Structural Aesthetics Standing Out at VIP Events",
      "Fast Modular Assembly with Standard Interlocking Pins",
    ],
    specs: [
      { label: "Apex Height", value: "Up to 8.5m Center Elevation" },
      { label: "Structure Frame", value: "Hard-Pressed 6061/T6 Aluminum" },
      { label: "Wind Rating", value: "100 km/h" },
    ],
  },
];