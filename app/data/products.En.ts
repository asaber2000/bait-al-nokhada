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
    badge: "100% Usable Space",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/pyramid/pyramid+tent.webp",
    windSpeed: "Weather Resistant",
    description: "The Pyramid Tent is a premium modular structure designed to combine luxury, strength, and flexibility. Its iconic sloping shape and high peak create a bold visual statement, making it ideal for weddings, high-end corporate events, exhibitions, and VIP functions. Engineered with reinforced aluminum frames and durable PVC fabric, this tent offers exceptional stability and weather resistance for both short-term and semi-permanent use.",
    models: [
      { name: "Pyramid PT 5x5", size: "5m x 5m (25 m² Area)", capacity: "20 - 30 Guests" },
      { name: "Pyramid PT 6x6", size: "6m x 6m (36 m² Area)", capacity: "35 - 50 Guests" },
      { name: "Pyramid PT 8x8", size: "8m x 8m (64 m² Area)", capacity: "60 - 80 Guests" },
      { name: "Pyramid PT 10x10", size: "10m x 10m (100 m² Area)", capacity: "90 - 120 Guests" },
      { name: "Pyramid PT Custom", size: "Modular Length Extensions", capacity: "Custom Event Capacities" },
    ],
    features: [
      "High-strength reinforced aluminum structure providing 100% unobstructed usable space.",
      "Weather-resistant PVC fabric built for desert heat, rain, and high wind stability.",
      "Fully modular design allowing unlimited length extensions and custom configurations.",
      "Versatile side wall options: Soft/hard PVC panels, glass walls, and solid sandwich panels.",
      "Full turnkey event support: Integrated HVAC air conditioning, luxury drapery, and custom lighting.",
    ],
    specs: [
      { label: "Main Frame Structure", value: "High-Strength Extruded Aluminum Alloy" },
      { label: "Weather Durability", value: "Resistant to High Winds, Heat & Rain" },
      { label: "Cover Material", value: "Heavy-Duty Flame-Retardant PVC Fabric" },
      { label: "Interior Layout", value: "100% Usable Space (Zero Center Poles)" },
      { label: "Standard Sizes", value: "5x5m, 6x6m, 8x8m, 10x10m (Modular)" },
      { label: "Availability", value: "Available for Rental & Permanent Sale" },
    ],
  },
  {
    id: "2",
    slug: "dome-tent",
    name: "Dome Tent",
    tagline: "Futuristic geodesic dome structures with panoramic 360° open space for luxury events.",
    badge: "360° Open Space",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Dome/dome-tents.webp",
    windSpeed: "Weather Resistant",
    description: "The Dome Tent is a bold architectural statement, blending futuristic aesthetics with all-weather durability. Its freestanding geodesic design eliminates the need for central poles, unlocking full interior usability for immersive event layouts. With panoramic open space, exceptional wind resistance, and a modular structure that allows multiple domes to be connected, it offers unmatched versatility for indoor-outdoor experiences.",
    models: [
      { name: "Dome DT 5M", size: "5m Diameter (19.6 m² Area)", capacity: "15 - 20 Guests" },
      { name: "Dome DT 10M", size: "10m Diameter (78.5 m² Area)", capacity: "50 - 70 Guests" },
      { name: "Dome DT 15M", size: "15m Diameter (176 m² Area)", capacity: "120 - 160 Guests" },
      { name: "Dome DT Custom", size: "Custom Large Spans (Up to 35m)", capacity: "Custom Event Capacities" },
    ],
    features: [
      "Freestanding geodesic framework delivering 100% usable floor space with zero center poles.",
      "Robust all-weather resistance against high winds, intense desert heat, and rain.",
      "Panoramic clear/white PVC and transparent panel options ideal for 360° projection mapping.",
      "Full HVAC integration ensuring efficient cooling and heating performance.",
      "Modular interconnectivity enabling multi-dome complexes for large exhibitions and VIP summits.",
    ],
    specs: [
      { label: "Main Frame Structure", value: "High-Strength Aluminum & Galvanized Steel Frame" },
      { label: "Weather Durability", value: "Resistant to High Winds, Heat & Rain" },
      { label: "Cover Material", value: "Transparent PVC, Solid Panels & Glass Options" },
      { label: "Interior Layout", value: "100% Usable Space (Zero Center Poles)" },
      { label: "Standard Sizes", value: "5m, 10m, 15m (Custom Sizes Available)" },
      { label: "Availability", value: "Available for Rental & Permanent Sale" },
    ],
  },
  {
    id: "3",
    slug: "capsule-tent",
    name: "Capsule Tent",
    tagline: "Modular Futuristic Glamping Pods & VIP Accommodation Units",
    badge: "Smart Pod • Modular Plug & Play",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Capsule+Tent/capsule.webp",
    windSpeed: "100 km/h Wind Load",
    description: "The Capsule Tent offers a sleek aerodynamic form factor engineered for rapid deployment as luxury suites, outdoor lounges, and private retreat units. Built with aerospace composites and thermally broken double-glazed curved glass.",
    models: [
      { name: "Capsule C-06", size: "6m x 3.5m (21 m²)", capacity: "2 - 4 Guests" },
      { name: "Capsule C-09", size: "9m x 4.0m (36 m²)", capacity: "4 - 6 Guests" },
      { name: "Capsule C-12", size: "12m x 4.2m (50 m²)", capacity: "6 - 8 Guests Suite" },
    ],
    features: [
      "Modular Prefabricated Quick-Lock Aviation Composite Frame",
      "Full Curved Panoramic Double-Glazed Glass End Walls with Low-E Coating",
      "Integrated Multi-Zone Climate Control & Smart Ambient Lighting Channels",
      "Pre-Plumbed and Pre-Wired for Immediate Plug & Play Site Installation",
    ],
    specs: [
      { label: "Frame Assembly", value: "Aero-Grade Curved Aluminum 6061/T6" },
      { label: "Shell Insulation", value: "50mm Polyurethane Core (R-Value 16)" },
      { label: "Wind Resistance", value: "100 km/h Certified" },
      { label: "Glass Specs", value: "6mm + 12A + 6mm Argon Low-E Tempered Glass" },
      { label: "Electrical Rating", value: "IP66 Integrated Distribution System" },
    ],
  },
  {
    id: "4",
    slug: "arabic-majlis-tent",
    name: "Arabic Majlis Tent",
    tagline: "Authentic Cultural Heritage Tents Engineered with Modern Climate Tech",
    badge: "Heritage Craft • Royal Sadu Interiors",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Arabic+Majlis+Tent/arabic-tent.webp",
    windSpeed: "110 km/h Wind Load",
    description: "The Arabic Majlis Tent merges authentic GCC heritage craftsmanship with industrial-grade modular frames. Featuring traditional hand-stitched Sadu fabric patterns treated for fire retardancy, combined with multi-layer desert insulation.",
    models: [
      { name: "Majlis Royal 12", size: "12m x 20m (240 m²)", capacity: "80 - 120 Guests" },
      { name: "Majlis Royal 20", size: "20m x 40m (800 m²)", capacity: "250 - 350 Guests" },
      { name: "Majlis Grand 30", size: "30m x 60m (1,800 m²)", capacity: "600 - 900 Guests" },
    ],
    features: [
      "Traditional Geometric Sadu Interior Fabric Linings (DIN 4102 B1 Flame Retardant)",
      "Multi-Layer Heavy Thermal Insulation Blanket Eliminating Desert Heat Penetration",
      "Heavy-Duty Exterior Black & Gold Stripe Traditional Arab Facade Membrane",
      "Integrated Perimeter Sub-Floor Framing for High-End Carpet & Marble Installation",
    ],
    specs: [
      { label: "Structural Frame", value: "Reinforced 6061/T6 Extruded Aluminum Alloy" },
      { label: "Lining Material", value: "Certified Fire-Resistant Arabian Sadu Textiles" },
      { label: "Wind Resistance", value: "110 km/h Structural Wind Rating" },
      { label: "Outer Membrane", value: "850g/m² Heavy PVC Blockout with UV Protection" },
      { label: "Thermal Insulation", value: "Rockwool + Double Aluminum Reflective Foil" },
    ],
  },
  {
    id: "5",
    slug: "revolution-tent",
    name: "Revolution Tent",
    tagline: "Large-Span High-End Venues for Mega Expos & World Summits",
    badge: "Mega Clear Span • Heavy Rigging",
    heroImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Revolution/revalution.webp",
    windSpeed: "120 km/h Wind Load",
    description: "The Revolution Tent is an engineered clear-span mammoth structure designed for global expos, trade shows, and international conferences requiring immense overhead rigging for LED arrays and sound rigs.",
    models: [
      { name: "Revolution RV-30", size: "30m Span (Infinite 5m Bays)", capacity: "800 - 1,200 Guests" },
      { name: "Revolution RV-40", size: "40m Span (Infinite 5m Bays)", capacity: "1,400 - 2,200 Guests" },
      { name: "Revolution RV-50", size: "50m Span (Infinite 5m Bays)", capacity: "2,500 - 4,500 Guests" },
    ],
    features: [
      "Engineered High-Payload Roof Trusses for Heavy AV Lighting & Massive LED Walls",
      "Up to 50m Clear Span Width with 100% Usable Floor Area and Zero Obstacles",
      "Multi-Module Continuous Bay Expansion in 5-Meter Increments for Unlimited Length",
      "Compatible with Heavy-Duty Glass Curtain Walls and Integrated Double Doors",
    ],
    specs: [
      { label: "Main Profile Beam", value: "350 x 120 x 5.0 mm Box-Section Aluminum" },
      { label: "Wind Resistance", value: "120 km/h (DIN EN 13782 Eurocode)" },
      { label: "Roof Hanging Load", value: "Up to 50 kg/m linear point load for AV rigs" },
      { label: "Eave Height", value: "4.0m / 5.0m / 6.0m Industrial Clearance" },
      { label: "Roof System", value: "Dual Air-Pneumatic Thermal Insulation Membrane" },
    ],
  },
  {
    id: "6",
    slug: "polygon-tent",
    name: "Polygon Tent",
    tagline: "Heavy-Duty Multi-Angle Clear Span for Industrial & Athletic Arenas",
    badge: "Vaulted Apex • High Clearance",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Polygon/polygon-tent.webp",
    windSpeed: "120 km/h Wind Load",
    description: "The Polygon Tent features a distinctive multi-faceted polygonal vaulted roof line that maximizes interior vertical headroom. Ideal for indoor padel arenas, tennis courts, aircraft hangars, and logistics warehousing.",
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
    description: "The Arch Tent features a continuous smooth curvature that merges architectural flair with superior aerodynamics, ensuring natural rainwater shedding and rapid sand dispersal.",
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
    description: "The Double Decker Tent doubles usable event capacity within the same footprint. Engineered with heavy-duty structural steel mezzanine framing, it provides ground-floor expos with upper-level VIP lounges and cantilever balconies.",
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
    description: "The Panoramic Crystal Marquee delivers 360-degree views using optical-grade transparent PVC and full-perimeter floor-to-ceiling glass walls, blending luxury indoor comfort with surrounding landscapes.",
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
    description: "Engineered specifically for 360-degree digital mapping and fulldome entertainment venues with zero interior columns, featuring internal negative-pressure projection screens.",
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
    description: "Features a dynamic undulating wave ridge line that mimics natural desert dunes and sea waves, providing an iconic aesthetic statement for beachfront hospitality and VIP outdoor resorts.",
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
    description: "A hybrid structure marrying the striking high apex of the pyramid tent with the graceful curve of a dome, providing unique luxury appeal and superior natural chimney ventilation.",
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