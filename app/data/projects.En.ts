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
  sectionTitle?: string;            // <--- أضف هذا السطر
  challengeTitle?: string;          // <--- أضف هذا السطر
  deliveryHighlights?: string[];
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
    coverImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Thambnails-images/drift-x-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/DriftX.webm",
    sectionTitle: "High-Span Exhibition Arenas & Smart Mobility Pavilions",
    summary: "For DRIFTx at Yas Marina Circuit, Abu Dhabi, Bait Al Nokhada deployed over 10,000 m² of specialized 40m clear-span exhibition pavilions engineered for autonomous mobility showcases and global tech summits.",
    description: "For DRIFTx in Abu Dhabi, Bait Al Nokhada delivered a large-scale, high-technology event environment dedicated to smart, autonomous, and urban air mobility. Deployed adjacent to the iconic Yas Marina Circuit, the project featured unobstructed 40-meter clear-span polygonal structures engineered to house electric air taxis (eVTOL), autonomous vehicles, live robotics demonstrations, and international keynote summits.",

    // Challenge & Engineering Solution
    challengeTitle: "Engineering Challenge & Field Solution",
    challengeAndSolution: "Hosting live indoor demonstrations of next-generation autonomous drones and heavy electric vehicles on the paved paddocks of Yas Marina Circuit required zero internal obstructions and heavy load-bearing floors without drilling into the circuit grounds. Bait Al Nokhada deployed 40m clear-span Revolution and Polygon aluminum frameworks integrated with heavy-duty cassette ballast flooring. To maintain strict climate stability for sensitive avionics and international delegates, our team installed 1,000 tons of high-efficiency package HVAC paired with dual-layer thermal blackout PVC roofing.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "Erected 10,000 m² of 40m clear-span exhibition halls on Yas Marina paddocks without asphalt surface penetration.",
      "Integrated heavy-payload reinforced cassette flooring certified for autonomous road vehicles and flight mockups.",
      "Engineered multi-zone industrial HVAC delivering continuous 20°C cooling amidst coastal Abu Dhabi heat.",
      "Delivered full setup ahead of schedule in full compliance with Abu Dhabi Civil Defense safety standards."
    ],

    // Verified Technical Specifications
    specs: [
      { label: "Covered Floor Area", value: "10,000 sqm" },
      { label: "Main Frame Profile", value: "Aviation Aluminum Alloy 6061/T6" },
      { label: "Clear Span Width", value: "40 meters (Zero internal pillars)" },
      { label: "Assembly Period", value: "8 Days Fast-Track Handover" },
      { label: "Wind Load Rating", value: "120 km/h Certified (DIN EN 13782)" }
    ],
    galleryImages: [
      { url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/DRIFT-X9.webp", caption: "Main Hall Entrance and Registration Portal", type: "exterior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/DriftX/Exhibition-tent-2026.webp", caption: "Insulated Conference Stage and Keynote Seating", type: "interior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/DriftX/Event-Tent-Providers-for-Corporate-Events+%E2%80%93+UAE.webp", caption: "Aerial Overview of Interconnected Exhibition Pavilions", type: "drone" }
    ],
    beforeAfter: {
      before: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/DriftX/Event-Tent-Providers-for-Corporate-Events+%E2%80%93+UAE.webp",
      after: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/DriftX/DraftX.webp"
    },
    relatedProducts: [
      { name: "Revolution Tent", slug: "revolution-tent" },
      { name: "Polygon Tent", slug: "polygon-tent" }
    ]
  },
  {
    slug: "Amaal-sales-gallery",
    title: "Amaal × Mansory",
    client: "Amaal Real Estate Development",
    category: "Sales Gallery",
    country: "UAE",
    city: "Dubai",
    year: "2026",
    area: "2,500 m²",
    span: "25m Curved Arch Span",
    coverImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Thambnails-images/Ammal-thumbnail.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Amaal.webm",
    sectionTitle: "Bespoke Sales Pavilion & Luxury Vehicle Gallery",
    summary: "Bait Al Nokhada engineered and delivered a 2,500 m² luxury sales gallery and branded showcase pavilion for the Amaal × Mansory Residences launch in Dubai.",
    description: "For the landmark collaboration between Amaal Real Estate and luxury automotive couturier Mansory, Bait Al Nokhada fabricated an architectural sales center and experience gallery in Dubai. Spanning 2,500 m² with a 25m unobstructed curved span, the pavilion was engineered to showcase physical masterplan models, high-end bespoke Mansory vehicles, and private closing suites within an ultra-luxurious setting.",

    // Engineering Challenge & Field Solution
    challengeTitle: "Engineering Challenge & Field Solution",
    challengeAndSolution: "The project required an ultra-luxury commercial environment capable of housing multi-ton modified supercar showcases while delivering total acoustic privacy and 20°C climate control along open roadways in Dubai. Bait Al Nokhada deployed 25m curved arch aluminum frames wrapped in floor-to-ceiling double-glazed panoramic glass facades and high-density acoustic insulated ceiling drapery. Heavy-duty sub-floor cassette platforms were engineered to seamlessly conceal all electrical wiring and HVAC ducting while supporting rolling vehicle displays.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "Installed 2,500 m² of clear-span luxury pavilions featuring floor-to-ceiling double-glazed panoramic glass curtain walls.",
      "Engineered heavy-load reinforced flooring capable of supporting heavy customized supercar exhibits and large architectural models.",
      "Concealed high-capacity ducted HVAC network maintaining a constant 20°C indoor climate with zero draft noise.",
      "Integrated acoustic fire-retardant interior linings and executive VIP majlis zones for confidential investor negotiations."
    ],

    // Verified Technical Specifications (البيانات الموثقة والموجودة بالصورة)
    specs: [
      { label: "Usable Footprint", value: "2,500 sqm" },
      { label: "Wall System", value: "Double-Glazed Panoramic Glass Cassettes" },
      { label: "Ceiling Finish", value: "Acoustic Fire-Retardant Royal Sateen Drapery" },
      { label: "HVAC Temperature", value: "Constant 20°C with Concealed Diffusers" },
      { label: "Clear Span Width", value: "25m Curved Arch Span (No Internal Columns)" }
    ],

    galleryImages: [
      { url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AMAAL+2.webp", caption: "Panoramic Glass Facade Illuminated at Dusk", type: "exterior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AMAAL+3.webp", caption: "Royal Majlis VIP Seating with Custom Lighting", type: "exterior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Amaal-Inrtior2.webp", caption: "Luxury Experience Center & Vehicle Display Hall", type: "interior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AMAAL-interior1.webp", caption: "Private VIP Investor Negotiation Suites", type: "interior" }
    ],

    beforeAfter: {
      before: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/AMAAL-6.webp",
      after: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Events/Amaal-Sales-Gallery.webp"
    },

    relatedProducts: [
      { name: "Sales Center Tents", slug: "sales-center-tent" },
    ]
  },
  {
    slug: "gulfood-dubai-2026",
    title: "Gulfood 2026",
    client: "Dubai World Trade Centre (DWTC)",
    category: "Exhibitions & Summits",
    country: "UAE",
    city: "Dubai",
    year: "2026",
    area: "35,000 m²",
    span: "40m – 50m Clear Span",
    coverImage: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/gulfood-poster.webp",
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Gulfood.webm",

    // Scopes & Section Headers
    sectionTitle: "Mega Modular Exhibition Arenas & International Pavilions",
    summary: "For Gulfood 2026, Bait Al Nokhada deployed 35,000 m² of high-span modular exhibition arenas and country pavilions at Dubai World Trade Centre.",
    description: "As the trusted manufacturing partner for Dubai World Trade Centre, Bait Al Nokhada engineered and delivered 35,000 m² of interconnected, high-capacity exhibition structures for Gulfood 2026—the world's largest food and hospitality event. The sprawling temporary complex expanded DWTC's concourses to accommodate major national country pavilions, live culinary staging, the World Food Economy Summit, and over a hundred thousand visiting trade professionals.",

    // Challenge & Engineering Solution
    challengeTitle: "Engineering Challenge & Field Solution",
    challengeAndSolution: "Erecting 35,000 square meters of high-density exhibition space within an active commercial trade hub demanded tight multi-zone logistical precision. The structure had to support heavy commercial refrigeration loads, live cooking demonstrations, and continuous three-phase power routing while complying with municipal food safety and Dubai Civil Defense codes. Bait Al Nokhada deployed massive 40m and 50m clear-span aluminum frameworks fitted with heavy-load cassette flooring to house sub-floor drainage and electrical lines. To combat thermal heat gain from commercial kitchen equipment, our team installed 3,500 tons of high-efficiency package HVAC paired with dual-layer insulated blackout PVC roofing.",

    // Project Delivery Highlights
    deliveryHighlights: [
      "Erected 35,000 m² of clear-span exhibition arenas across DWTC outdoor concourses without structural downtime.",
      "Integrated sub-floor utility channels for heavy commercial refrigeration, power distribution, and food-grade drainage.",
      "Maintained continuous 21°C climate control across all culinary and hospitality zones using multi-zone industrial HVAC packages.",
      "Engineered dedicated high-flow ventilation corridors to exhaust live cooking emissions in full accordance with civil safety codes."
    ],

    // Verified Technical Specifications
    specs: [
      { label: "Covered Floor Area", value: "35,000 sqm" },
      { label: "Structural Framing", value: "Hard-Pressed Extruded Aluminum Alloy (6061/T6)" },
      { label: "Clear Span Width", value: "40m – 50m Unobstructed Spans" },
      { label: "HVAC Capacity", value: "3,500 Tons Industrial Package Climate System" },
      { label: "Wall & Door Enclosures", value: "Rigid Insulated Wall Panels & Automated Sensor Glass Entrances" }
    ],

    galleryImages: [
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/Gulfood+-2026.webp", caption: "Aerial View of 35,000 m² Temporary Exhibition Complex at DWTC", type: "drone" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/Exhibition-Tent-Rental.webp", caption: "Unobstructed Multi-Country Pavilion Aisles and Exhibition Staging", type: "interior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/CAPSULE+(1).webp", caption: "World Food Economy Summit Keynote Auditorium", type: "interior" },
      { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/88.webp", caption: "Night View of Main Concourse Entrances and Double Glazed Facades", type: "exterior" }
    ],

    beforeAfter: {
      before: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/Exhibition-Tent-Rental.webp",
      after: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Gulfood-2026/Gulfood+-2026.webp"
    },

    relatedProducts: [
      { name: "Polygon Tent", slug: "polygon-tent" },
      { name: "Arcum Tent", slug: "arcum-tent" },
      { name: "Double Decker Tent", slug: "double-decker-tent" }
    ]
  },
  {
  slug: "netflix-stranger-things-experience",
  title: "Netflix: Stranger Things The Experience",
  client: "Miral Destination",
  category: "Exhibitions & Summits",
  country: "UAE",
  city: "Abu Dhabi",
  year: "2025",
  area: "5000 m²",
  span: "30m – 40m Clear Span",
  coverImage: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/netflix-poster.webp",
  videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Netflix.webm",

  // Scopes & Section Headers
  sectionTitle: "Immersive Blackout Arena & Cinematic Entertainment Pavilion",
  summary: "Bait Al Nokhada engineered and deployed a 5,000 m² total-blackout modular pavilion for Netflix's Stranger Things: The Experience on Yas Island, Abu Dhabi.",
  description: "Commissioned by Miral Destination, Bait Al Nokhada delivered a specialized 5,000 m² immersive entertainment structure for the Middle East debut of Netflix's 'Stranger Things: The Experience' on Yas Island, Abu Dhabi. The structure was engineered to create a self-contained cinematic universe featuring interactive multimedia sets, retail zones, themed food hubs, and dynamic audiovisual staging.",

  // Challenge & Engineering Solution
  challengeTitle: "Engineering Challenge & Field Solution",
  challengeAndSolution: "Creating an indoor cinematic experience in Abu Dhabi required 100% light elimination in broad daylight, rigorous acoustic dampening for high-output surround audio, and immense overhead load capacity to hang multi-ton lighting rigs, stage props, and scenic sets. Bait Al Nokhada engineered a customized clear-span polygonal framework clad with opaque, dual-layer blackout PVC membranes and rigid insulated acoustic wall panels. To offset intense heat generated by high-density audiovisual hardware and continuous visitor queues, our engineering team integrated 800 tons of whisper-quiet package HVAC units maintaining an uninterrupted 20°C interior.",

  // Project Delivery Highlights
  deliveryHighlights: [
    "Erected 5,000 m² of column-free modular space customized for complex scenic sets and interactive visitor routes.",
    "Integrated 100% lightproof blackout roofing membranes and acoustic wall linings certified for cinematic audiovisual performance.",
    "Engineered heavy-load overhead truss points supporting multi-ton specialized lighting rigs, projectors, and suspended decor.",
    "Maintained strict 20°C climate control using silent industrial HVAC to safeguard sensitive electronics and high-capacity visitor flows."
  ],

  // Verified Technical Specifications
  specs: [
    { label: "Covered Area", value: "5,000 sqm" },
    { label: "Roof Enclosure", value: "Dual-Layer 100% Lightproof Blackout PVC Membrane" },
    { label: "Acoustic Wall System", value: "Rigid Insulated Sandwich Panels with Sound Dampening Liners" },
    { label: "HVAC Capacity", value: "800 Tons Whisper-Quiet Industrial Package Units" },
    { label: "Internal Clearance", value: "8.0m Eave Height for Heavy Theatrical Rigging" }
  ],

  galleryImages: [
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/netflix-event.webp", caption: "Exterior View of 5,000 m² Immersive Blackout Arena on Yas Island", type: "exterior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/Large-Scale-Event-Tent-Providers.webp", caption: "Themed Retail and Surfer Boy Pizza Set Inside the Arena", type: "interior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/Big-Events-for-Stranger-things.webp", caption: "Interactive Upside Down Multimedia Zone with Suspended Rigging", type: "interior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/24.webp", caption: "Branded Entrance Portals and Controlled Queue Concourse", type: "exterior" }
  ],

  beforeAfter: {
    before: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/Large-Scale-Event-Tent-Providers.webp",
    after: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Netflix-Stranger-Things-The-Experience/netflix-event.webp"
  },

  relatedProducts: [
    { name: "Polygon Tent", slug: "polygon-tent" },
    { name: "Arcum Tent", slug: "arcum-tent" },
    { name: "Dome Tent", slug: "dome-tent" }
  ]
},
{
  slug: "dubai-airshow-2025",
  title: "Dubai Airshow 2025",
  client: "GOVERNMENT SECTOR",
  category: "Exhibitions & Summits",
  country: "UAE",
  city: "Dubai",
  year: "2026",
  area: "15,000 m²",
  span: "30m – 40m Clear Span",
  coverImage: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/airshow-poster.webp",
  videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Airshow.webm",

  // Scopes & Section Headers
  sectionTitle: "High-Security Aviation Pavilions & Defence Exhibition Arenas",
  summary: "Bait Al Nokhada engineered and erected 15,000 m² of specialized aviation exhibition chalets and official state pavilions at Dubai World Central for Dubai Airshow.",
  description: "Operating within the high-security airfield parameters of Dubai World Central (DWC), Bait Al Nokhada fabricated and assembled 15,000 m² of clear-span exhibition structures and international country pavilions for Dubai Airshow. The project provided mission-critical environments for global aerospace contractors, national defense delegations, and bilateral contract signing suites directly adjacent to the static aircraft flight lines.",

  // Challenge & Engineering Solution
  challengeTitle: "Engineering Challenge & Field Solution",
  challengeAndSolution: "Constructing massive exhibition pavilions on an active international flight line required adherence to strict aviation security, zero FOD (Foreign Object Debris) regulations, and rigorous wind-load resistance against jet blast vortexes from operating aircraft. Bait Al Nokhada deployed high-tensile 6061/T6 aluminum frames anchored with certified ballast systems to protect airfield tarmac integrity. To shield high-level diplomatic delegations and sophisticated avionics from runway thermal reflection, our engineering teams incorporated 1,500 tons of whisper-quiet package HVAC units, insulated sandwich side panels, and acoustic ceiling treatments.",

  // Project Delivery Highlights
  deliveryHighlights: [
    "Assembled 15,000 m² of clear-span structural pavilions along the DWC flight line under strict civil aviation protocols.",
    "Integrated certified non-penetrating ballast foundation systems to preserve active airport runway and taxiway tarmac.",
    "Engineered sound-isolated VIP executive chalets and bilateral signing lounges for international defence and aerospace delegations.",
    "Maintained continuous 20°C interior conditions against severe runway tarmac heat absorption using multi-zone industrial HVAC."
  ],

  // Verified Technical Specifications
  specs: [
    { label: "Covered Floor Area", value: "15,000 sqm" },
    { label: "Wind Load Certification", value: "Certified up to 130 km/h (Runway Jet Blast Resistant)" },
    { label: "Wall Enclosure", value: "Insulated Acoustic Sandwich Panels & Tempered Glass Facades" },
    { label: "Roof Finish", value: "Dual-Layer Flame-Retardant Thermal Insulated PVC" },
    { label: "HVAC Capacity", value: "1,500 Tons Industrial Package Air Conditioning" }
  ],

  galleryImages: [
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/event-tent-for-air-show-dubai.webp", caption: "National Country Pavilions and Chalets on DWC Static Display Concourse", type: "exterior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/exhibition-tent-2026.webp", caption: "Interior Layout with Suspended Avionics and Defense Aircraft Displays", type: "interior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/exhibition-tent-rental.webp", caption: "Executive Meeting Rooms and Bilateral Deal Signing Lounges", type: "interior" },
    { url: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/Air-Show-Project-2026.webp", caption: "Direct Flightline View from Panoramic Double-Glazed Frontages", type: "exterior" }
  ],

  beforeAfter: {
    before: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/Tent-Supplier.webp",
    after: "https://d3g07f5oxrfvni.cloudfront.net/Projects-image/Airshow/event-tent-for-air-show-dubai.webp"
  },

  relatedProducts: [
    { name: "Polygon Tent", slug: "polygon-tent" },
    { name: "Arcum Tent", slug: "arcum-tent" },
    { name: "Double Decker Tent", slug: "double-decker-tent" }
  ]
},
];