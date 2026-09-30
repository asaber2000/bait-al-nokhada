export interface ProjectItemEn {
  slug: string;
  title: string;
  client: string;
  category: "Exhibitions & Summits" | "Sports & Arenas" | "VIP & Royal Majlis" | "Warehouses & Logistics" | "Sales Gallery";
  country: "UAE" | "KSA" | "Qatar" | "International";
  city: string;
  year: string;
  area: string;
  span: string;
  coverImage: string;
  videoUrl: string;
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
    slug: "DRIFTx-Event-2026",
    title: "DRIFTx Event 2026",
    client: "WORLDWIDE EVENTS",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Abu Dhabi",
    year: "2025",
    area: "10000 m²",
    span: "40m Clear Span",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/drift-x-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/DriftX.webm",
    summary: "For DRIFTx 2026 in Abu Dhabi, Bait Al Nokhada delivered a large-scale event environment supporting a technology and mobility-focused experience. The project brought together multiple tent solutions to create a functional and engaging environment for a complex event setting.",
    description: "For DRIFTx 2026 in Abu Dhabi, Bait Al Nokhada delivered a large-scale event environment supporting a technology and mobility-focused experience. The project brought together multiple tent solutions to create a functional and engaging environment for a complex event setting",
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
    slug: "Amaal-sales-gallery",
    title: "Amaal × Mansory",
    client: "SALES GALLERY",
    category: "Sales Gallery",
    country: "UAE",
    city: "Dubai",
    year: "2026",
    area: "2,500 m²",
    span: "25m Curved Arch Span",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/Ammal-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Amaal.webm",
    summary: "For Amaal × Mansory, Bait Al Nokhada delivered a purpose-built environment designed to support a premium sales and customer experience. The structure provided a prominent branded space tailored to the needs of the development and its visitors.",
    description: "For Amaal × Mansory, Bait Al Nokhada delivered a purpose-built environment designed to support a premium sales and customer experience. The structure provided a prominent branded space tailored to the needs of the development and its visitors.",
    challengeAndSolution: "Required 100% soundproof acoustic privacy and immediate luxury fit-out. Integrated acoustic insulated roof linings and custom cassette flooring with sub-floor cable ducting.",
    specs: [
      { label: "Usable Footprint", value: "2,500 sqm" },
      { label: "Wall System", value: "Double-Glazed Panoramic Glass Cassettes" },
      { label: "Ceiling Finish", value: "Acoustic Fire-Retardant Royal Sateen Drapery" },
      { label: "HVAC Temperature", value: "Constant 20°C with Concealed Diffusers" }
    ],
    galleryImages: [
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+2.webp", caption: "Panoramic Glass Facade Illuminated at Dusk", type: "exterior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+3.webp", caption: "Royal Majlis VIP Seating with Custom Lighting", type: "exterior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Amaal-Inrtior2.webp", caption: "Panoramic Glass Facade Illuminated at Dusk", type: "interior" },
      { url: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-interior1.webp", caption: "Panoramic Glass Facade Illuminated at Dusk", type: "interior" },
    ],
    beforeAfter: {
      before: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      after: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/Amaal-Sales-Gallery.webp"
    },
    relatedProducts: [
      { name: "Arabic Majlis Tent", slug: "arabic-majlis-tent" },
      { name: "Panoramic Tent", slug: "panoramic-tent" }
    ]
  },
  {
    slug: "adipec-exhibition-2025",
    title: "ADIPEC Exhibition 2025",
    client: "ADNEC Centre",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Abu Dhabi",
    year: "2025",
    area: "4,200 m²",
    span: "35m High-Apex Arch",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/Adipec-thambnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Adipec-2025.webm",
    summary: "Bait Al Nokhada proudly manufactured and installed the full tent structure for the prestigious ADIPEC 2025 event. We delivered a high-quality Exhibition Tent solution, specializing in Event tent and Tent Rental services.",
    description: "Bait Al Nokhada proudly manufactured and installed the full tent structure for the prestigious ADIPEC 2025 event. We delivered a high-quality Exhibition Tent solution, specializing in Event tent and Tent Rental services.",
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
    slug: "north-star-2025",
    title: "North Star 2025",
    client: "Trade Center World",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Dubai",
    year: "2025",
    area: "5,000 m²",
    span: "50m Heavy Clear Span",
    coverImage: "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Thambnails-images/North-star-thambnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/North-Star.webm",
    summary: "Bait Al Nokhada proudly manufactured and installed a stunning tent structure for the prestigious North Star 2025 event. As a leading Tent Manufacturer, we deliver top-quality Tents for event solutions.",
    description: "Bait Al Nokhada proudly manufactured and installed a stunning tent structure for the prestigious North Star 2025 event. As a leading Tent Manufacturer, we deliver top-quality Tents for event solutions.",
    challengeAndSolution: "Accommodating heavy multi-ton imaging machinery and delicate medical equipment with zero vibration and hospital-grade air filtration across a 22,000 sqm temporary venue.",
    specs: [
      { label: "Total Exhibition Space", value: "5,000 sqm" },
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