export interface ProjectItemEn {
  slug: string;
  title: string;
  client: string;
  category: "Exhibitions & Summits" | "Sports & Arenas" | "VIP & Royal Majlis" | "Warehouses & Logistics";
  country: "UAE" | "KSA" | "Qatar" | "International";
  city: string;
  year: string;
  area: string;
  span: string;
  coverImage: string;
  youtubeVideoId: string;
  summary: string;
  description: string;
  challengeAndSolution: string;
  specs: { label: string; value: string }[];
  galleryImages: { url: string; caption: string; type: "exterior" | "interior" | "drone" }[];
  beforeAfter?: { before: string; after: string };
  relatedProducts: { name: string; slug: string }[];
}

export const projectsDatabase: ProjectItemEn[] = [
  {
    slug: "emirates-agriculture-conference-exhibition-2026",
    title: "Emirates Agriculture Conference & Exhibition 2026",
    client: "Ministry of Climate Change & Environment",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Al Ain",
    year: "2026",
    area: "12,500 m²",
    span: "40m Clear Span",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "Manufactured and installed high-span insulated exhibition structures engineered with turnkey climate control and branding facades.",
    description: "A comprehensive agricultural exhibition setup providing climate-controlled indoor pavilions for international exhibitors, heavy machinery staging, and keynote conference halls.",
    challengeAndSolution: "The desert climate in Al Ain required extreme thermal insulation to protect sensitive agricultural exhibits. Deployed dual-layer 850g/m² blackout PVC combined with 1,000 tons of whisper-quiet package HVAC units.",
    specs: [
      { label: "Covered Floor Area", value: "12,500 sqm" },
      { label: "Main Frame Profile", value: "Aviation Aluminum Alloy 6061/T6" },
      { label: "Clear Span Width", value: "40 meters (Zero internal pillars)" },
      { label: "Assembly Period", value: "8 Days Turnkey Handover" },
      { label: "Wind Load Rating", value: "120 km/h Certified (DIN EN 13782)" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "Main Hall Entrance and Registration Portal", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", caption: "Insulated Conference Stage and Keynote Seating", type: "interior" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Aerial Overview of Interconnected Exhibition Pavilions", type: "drone" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },
    relatedProducts: [
      { name: "Revolution Tent", slug: "revolution-tent" },
      { name: "Polygon Tent", slug: "polygon-tent" }
    ]
  },
  {
    slug: "luxury-vip-hospitality-marquee",
    title: "Luxury VIP Hospitality Marquee",
    client: "Royal Protocol & Private Hospitality",
    category: "VIP & Royal Majlis",
    country: "UAE",
    city: "Dubai",
    year: "2026",
    area: "3,800 m²",
    span: "25m Curved Arch Span",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "Bespoke royal pavilion featuring customized architectural glass walling, automated luxury double doors, and premium interior drapery.",
    description: "An ultra-luxurious private marquee designed for state dignitaries and royal weddings, featuring panoramic glass facades, integrated parquet flooring, and crystal chandeliers.",
    challengeAndSolution: "Required 100% soundproof acoustic privacy and immediate luxury fit-out. Integrated acoustic insulated roof linings and custom cassette flooring with sub-floor cable ducting.",
    specs: [
      { label: "Usable Footprint", value: "3,800 sqm" },
      { label: "Wall System", value: "Double-Glazed Panoramic Glass Cassettes" },
      { label: "Ceiling Finish", value: "Acoustic Fire-Retardant Royal Sateen Drapery" },
      { label: "HVAC Temperature", value: "Constant 20°C with Concealed Diffusers" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", caption: "Panoramic Glass Facade Illuminated at Dusk", type: "exterior" },
      { url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80", caption: "Royal Majlis VIP Seating with Custom Lighting", type: "interior" }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    },
    relatedProducts: [
      { name: "Arabic Majlis Tent", slug: "arabic-majlis-tent" },
      { name: "Panoramic Tent", slug: "panoramic-tent" }
    ]
  },
  {
    slug: "fujairah-open-international-taekwondo-championship-g2",
    title: "Fujairah Open International Taekwondo Championship G2",
    client: "Fujairah Martial Arts Club / World Taekwondo",
    category: "Sports & Arenas",
    country: "UAE",
    city: "Fujairah",
    year: "2026",
    area: "8,200 m²",
    span: "35m High-Apex Polygon",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "Turnkey multi-span sports arena designed to accommodate heavy athletic equipment, high spectator capacity, and global broadcast lighting.",
    description: "An international-standard temporary sports venue housing 8 parallel competition courts, spectator grandstands, warm-up zones, and anti-doping medical lounges.",
    challengeAndSolution: "The international federation required a minimum of 8.5 meters vertical clearance and flicker-free 1,500 lux lighting for 4K global broadcast cameras without internal pillars.",
    specs: [
      { label: "Total Arena Space", value: "8,200 sqm" },
      { label: "Center Apex Height", value: "9.5 meters" },
      { label: "Spectator Capacity", value: "2,500 Seated Bleachers" },
      { label: "Lighting System", value: "1,500 Lux Broadcast-Grade LED Arrays" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", caption: "High-Clearance Arena Interior with Court Layouts", type: "interior" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "Exterior Athlete Arrival and Warm-up Annexes", type: "exterior" }
    ],
    relatedProducts: [
      { name: "Polygon Tent", slug: "polygon-tent" },
      { name: "Curve Tent", slug: "curve-tent" }
    ]
  },
  {
    slug: "world-health-expo-whx-dubai-2026",
    title: "World Health Expo (WHX) Dubai 2026",
    client: "Dubai Health Authority & Exhibition Partner",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Dubai Exhibition Centre",
    year: "2026",
    area: "22,000 m²",
    span: "50m Heavy Clear Span",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    summary: "Engineered ultra-clear span temporary pavilions meeting stringent medical sector sanitation and structural safety benchmarks.",
    description: "A massive medical healthcare exhibition complex featuring clean-room display halls, heavy diagnostic equipment demonstration bays, and international conference auditoriums.",
    challengeAndSolution: "Accommodating heavy multi-ton imaging machinery and delicate medical equipment with zero vibration and hospital-grade air filtration across a 22,000 sqm temporary venue.",
    specs: [
      { label: "Total Exhibition Space", value: "22,000 sqm (3 Connected Halls)" },
      { label: "Floor Load Capacity", value: "1,500 kg/sqm Reinforced Cassette Deck" },
      { label: "Clear Span Width", value: "50 meters" },
      { label: "Safety Compliance", value: "Medical Grade Clean Air & DIN 4102 B1" }
    ],
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", caption: "High-Bay Exhibition Hall with Heavy Duty Flooring", type: "interior" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Exterior Multi-Hall Exhibition Complex View", type: "exterior" }
    ],
    relatedProducts: [
      { name: "Revolution Tent", slug: "revolution-tent" },
      { name: "Double Decker Tent", slug: "double-decker-tent" }
    ]
  }
];