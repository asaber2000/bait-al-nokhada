export interface SolutionItemEn {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  overviewTitle?: string;
  catalogImage?: string;
  heroImage: string;
  gallery?: string[];
  videoUrl: string;
  overview: string;
  whyChooseText: string;
  industryApplications: string[];
  keyBenefits: { title: string; desc: string }[];
  technicalSpecs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export const solutionsDatabase: SolutionItemEn[] = [
  {
    id: "1",
    slug: "warehouse-tent",
    name: "Warehouse Tents",
    tagline: "Heavy-duty modular warehouse tents engineered for rapid logistics and industrial storage.",
    badge: "Industrial Storage • Fast Deployment",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/warehouse.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/Warehouse-uae.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/Storage-tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/warehouse-inside1.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/tent-manufacturer.jpg",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/warehouse-tent-supplier.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/warehouse/Storage.webp",
    ],
    videoUrl: "https://youtu.be/JTNHkF3j6DU?si=FBJqCoxU75NeC7vj",
    overviewTitle: "Why Choose Bait Al Nokhada Warehouse Tents?",
    overview: "A warehouse tent is a large clear-span structure engineered with high-strength aluminum frames and heavy-duty PVC covers to provide immediate, secure, weather-resistant storage in open or undeveloped areas. Unlike permanent civil buildings, it offers operational flexibility, rapid installation, and cost efficiency without compromising durability or structural safety.",
    whyChooseText: "At Bait Al Nokhada, our warehouse tents are custom-built for demanding industrial environments and extreme Middle Eastern climates across the UAE and Saudi Arabia. Featuring modular clear-span profiles, they can be swiftly expanded or relocated, and fully customized with high-speed motorized roller doors, insulated sandwich panels, industrial HVAC systems, and heavy-duty load-bearing flooring.",
    industryApplications: [
      "Supply Chain & Third-Party Logistics (3PL) Hubs",
      "Construction Site Material & Heavy Equipment Storage",
      "Manufacturing Plants, Industrial Yards & Workshops",
      "Agricultural Storage, Grain Preservation & Cold Storage",
      "Rapid Emergency Relief Staging & Distribution Centers"
    ],
    keyBenefits: [
      {
        title: "100% Usable Clear Span Space",
        desc: "Wide column-free interior allowing uninterrupted forklift traffic and high-bay vertical pallet racking."
      },
      {
        title: "Rapid Deployment & Operational Speed",
        desc: "Certified direct ground anchoring on standard asphalt or compacted soil without lengthy concrete foundation delays."
      },
      {
        title: "Thermal Insulation & Weather Durability",
        desc: "Engineered to withstand intense solar heat, desert sandstorms, and rain with fully certified flame-retardant materials."
      },
      {
        title: "Modular Relocatable Architecture",
        desc: "Interlocking modular bays that allow straightforward expansion in length, partial reconfiguration, or complete relocation."
      }
    ],
    technicalSpecs: [
      { label: "Clear Span Widths", value: "10m, 15m, 20m, 25m, 30m, 40m, up to 60m (Infinite Length)" },
      { label: "Eave Clear Heights", value: "4.0m, 6.0m, 8.0m, up to 10.0m (Full clearance for container trucks)" },
      { label: "Wall Enclosures", value: "Insulated Sandwich Panels, Corrugated Steel Sheets, or Heavy PVC" },
      { label: "Access Systems", value: "Electric High-Speed Roller Doors, Sliding Gates, and Emergency Exits" }
    ],
    faqs: [
      {
        q: "Can warehouse tents be anchored directly onto asphalt without concrete slabs?",
        a: "Yes, our certified expandable steel anchoring pin systems secure the structure directly into standard asphalt or compacted subgrade, eliminating extensive civil site works."
      },
      {
        q: "Are climate and temperature control systems available for stored goods?",
        a: "Yes, we integrate high-density insulated sandwich wall panels, double-layer insulated roof covers, and ducted industrial HVAC units to maintain controlled temperatures."
      },
      {
        q: "Are warehouse tents available for short-term rental as well as direct purchase?",
        a: "Yes, Bait Al Nokhada provides scalable short-term and long-term rental agreements for temporary project phases, alongside direct factory manufacturing for permanent facilities."
      }
    ]
  },
  {
    id: "2",
    slug: "wedding-tent",
    name: "Wedding Tents",
    tagline: "Custom luxury wedding tent supplier delivering elegant clear-span ballrooms across the GCC.",
    badge: "Bespoke Royal Luxury • Clear Span",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/wedding.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-Tents-Tent-Manufacturer.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tent-rental.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/outdoor-tent-rentals-for-your-wedding.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-Tent-Rental-in-KSA-UAE.JPG",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Wedding-tents-supplier.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Wedding/Affordable-Wedding-tent.webp",
    ],
    videoUrl: "https://youtu.be/Pi7cO-l0Qso?si=ovAs-ZV8t0BhUiGP",
    overviewTitle: "Why Choose Bait Al Nokhada Wedding Tents?",
    overview: "Our wedding tents are elegant, spacious, and fully customizable structures engineered to create stunning venues for celebrations of any scale. Built with high-grade aluminum frames and fire-retardant, waterproof PVC covers, they offer column-free clear-span interiors and seamless climate control to ensure absolute comfort across all Gulf weather conditions.",
    whyChooseText: "Backed by over 30 years of manufacturing excellence, Bait Al Nokhada delivers bespoke wedding structures for private estates, beachfronts, and royal celebrations across the UAE and Saudi Arabia[cite: 38]. Every detail is engineered for grandeur—from panoramic glass facades and crystal-clear ceilings to whisper-quiet ducted HVAC systems and royal chandeliers.",
    industryApplications: [
      "Royal & VIP Private Celebrations",
      "Luxury Beachfront Wedding Banquets",
      "Private Estate & Villa Garden Receptions",
      "Multi-Day Traditional Bridal Festivals"
    ],
    keyBenefits: [
      {
        title: "100% Unobstructed Usable Space",
        desc: "Clear-span architectural frames providing complete layout flexibility for royal stages, dining tables, and grand dance floors."
      },
      {
        title: "Silent High-Tonnage HVAC Systems",
        desc: "Whisper-quiet climate control keeping interior temperatures at a steady 20°C even during peak summer heat."
      },
      {
        title: "Panoramic Glass Curtain Walls",
        desc: "Double-glazed acoustic glass walls that combine natural outdoor views with complete sound and temperature insulation."
      },
      {
        title: "Luxury Interior Fit-Out & Staging",
        desc: "Engineered integration for grand crystal chandeliers, luxury carpets, heavy-duty cassette flooring, and custom wall linings."
      }
    ],
    technicalSpecs: [
      { label: "Structure Types", value: "Curved Arch, Polygon High-Peak, Double Decker, Geodesic Dome" },
      { label: "Capacity Scale", value: "From 100 to over 3,000 guests in a single clear-span hall" },
      { label: "Wall Options", value: "Panoramic Double-Glazed Glass, Insulated Solid Panels, or White PVC" },
      { label: "Climate Control", value: "Ducted Air-Conditioning with Concealed Overhead or Under-Floor Airflow" }
    ],
    faqs: [
      {
        q: "Can wedding tents be installed on private beaches, gardens, or uneven ground?",
        a: "Yes, our heavy-duty modular cassette flooring system levels out uneven sandy or garden ground perfectly, creating a solid ballroom base without site damage."
      },
      {
        q: "How quiet are the air conditioning units during wedding ceremonies?",
        a: "We utilize external silent-chiller units connected via concealed acoustic ducting, ensuring powerful 20°C cooling without distracting mechanical noise."
      },
      {
        q: "Are your wedding tents available for short-term rental in Dubai and Riyadh?",
        a: "Yes, Bait Al Nokhada provides rapid delivery, luxury installation, on-site technical standby, and post-event removal across the UAE and KSA."
      }
    ]
  },
  {
    id: "3",
    slug: "event-tent",
    name: "Event Tents",
    tagline: "Premier event tent supplier delivering clear-span pavilions for global summits and mega expos.",
    badge: "Mega Venues • Heavy Rigging",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/EVENT.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tent-Providers-for-Corporate-Events.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/24.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Big-Events-for-Stranger-things.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Conference-tents-in-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Luxury-Tents-for-Events.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/High-Quality-event-tents-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Tent-Supplier-in-Sharjah.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/FIFA+WORLD+CUP.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/FIFA-WORLD-CUP3.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/event-tent-Dubai.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/event-2/Event-Tents-for-Rent-in-Dubai.webp",
    ],
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Netflix.webm",
    overviewTitle: "Why Choose Bait Al Nokhada Event Tents?",
    overview: "Bait Al Nokhada event tents transform open spaces into world-class venues for conferences, exhibitions, product launches, and grand corporate gatherings. Combining architectural beauty with advanced structural engineering, our clear-span pavilions eliminate internal columns to provide fully customizable, weather-resistant environments built to impress and endure across all GCC conditions.",
    whyChooseText: "Backed by over 30 years of manufacturing excellence, Bait Al Nokhada is the trusted partner for government entities and multinational enterprises across the UAE and Saudi Arabia. Our modular structures are engineered in-house to accommodate high-resolution corporate branding facades, broadcast-grade acoustic insulation, and heavy-payload roof trusses for giant LED screens and stage lighting.",
    industryApplications: [
      "Government Summits, Global Forums & Diplomatic Conventions",
      "Corporate Product Launches & Automotive Exhibitions",
      "International Trade Shows, Expos & Cultural Festivals",
      "VIP Hospitality Lounges & Live Media Broadcast Centers"
    ],
    keyBenefits: [
      {
        title: "Heavy-Payload Overhead Rigging",
        desc: "Engineered aluminum roof profiles designed to safely support multi-ton LED video walls, stage lighting, and professional line-array sound systems."
      },
      {
        title: "100% Column-Free Clear Span Space",
        desc: "Unobstructed modular floor plans offering total flexibility for tiered audience seating, stages, exhibitor booths, and media suites."
      },
      {
        title: "Architectural Exterior Branding",
        desc: "Precision integration for custom corporate graphics, branded signage zones, and luxury glass facade wrapping to maximize sponsor visibility."
      },
      {
        title: "Acoustic Insulation & High-Tonnage HVAC",
        desc: "Engineered wall paneling and whisper-quiet climate systems providing a sound-controlled, 20°C interior ideal for live media broadcasting."
      }
    ],
    technicalSpecs: [
      { label: "Clear Span Widths", value: "10m to 60m infinite modular length (expandable in 5m bays)" },
      { label: "Wind & Climate Stability", value: "Engineered and certified to withstand wind speeds up to 120 km/h" },
      { label: "Wall & Facade Systems", value: "Double-glazed glass curtain walls, hard ABS panels, or premium PVC" },
      { label: "Staging & Riser Integration", value: "Fully compatible with raised VIP tribunes, heavy staging, and tech pits" }
    ],
    faqs: [
      {
        q: "Can the roof structure support heavy LED screens and stage production rigs?",
        a: "Yes, our certified truss systems are engineered with calculated load-bearing points specifically designed to hang multi-ton LED displays, audio equipment, and theatrical lighting safely."
      },
      {
        q: "Can raised VIP tribunes and tiered seating be built inside the tent?",
        a: "Yes, our column-free clear-span design seamlessly accommodates modular multi-tier riser seating, executive lounges, and elevated media commentary boxes with complete line-of-sight."
      },
      {
        q: "Are event tents available for rental with full on-site technical support?",
        a: "Yes, Bait Al Nokhada provides complete event rental services across the UAE and KSA, including rapid deployment, 24/7 on-site engineering standby, and post-event removal."
      }
    ]
  },
  {
    id: "4",
    slug: "exhibition-tent",
    name: "Exhibition Tents",
    tagline: "Custom exhibition tent supplier delivering multi-bay clear-span venues for global trade fairs.",
    badge: "Trade Expos • Mega Spans",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/exhbition.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/adipac-project-2026.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/DRIFT-X9.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/83.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-2026.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Exhibition-tent-gulfood.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/ADIPEC-AI-Exhibition-Tent.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Event-Tent-Dubai-Chamber.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Adipac-Project-Inside.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/85.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/High-Quality-Tent-Rentals-Abu-Dhabi.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Exhibitions/Festival-tents-in-UAE.webp",
    ],
    videoUrl: "https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/North-Star.webm",
    overviewTitle: "Why Choose Bait Al Nokhada Exhibition Tents?",
    overview: "Make an unforgettable impression at trade shows, defense expos, and corporate showcases with high-performance exhibition tents from Bait Al Nokhada. Engineered with modular aluminum framing and flame-retardant covers, our structures deliver unmatched clear-span space, maximum brand visibility, and structural reliability whether for outdoor trade fairs in Dubai or international conventions in Riyadh.",
    whyChooseText: "With over 30 years of manufacturing excellence, Bait Al Nokhada is the trusted tent supplier for government agencies, defense airshows, and global expos. Proven across major international showcases including GITEX, ADIPEC, and Gulfood, our multi-bay structures accommodate heavy display machinery, standardized 3x3m booth grid zoning, automated entry sensor doors, and high-capacity central cooling.",
    industryApplications: [
      "International Trade Shows, Industrial Expos & B2B Conventions",
      "Defense Expositions, Aviation Summits & Maritime Airshows",
      "Consumer Expos, Book Fairs & Cultural Exhibitions",
      "Automotive Showcases, Heavy Machinery Displays & Roadshows"
    ],
    keyBenefits: [
      {
        title: "Automated Sensor Glass Doors",
        desc: "Double-glazed automated sliding doors engineered for high visitor footfall, emergency egress, and interior climate preservation."
      },
      {
        title: "Modular Exhibitor Booth Layouts",
        desc: "Optimized column-free grid dimensions allowing rapid setup of standard 3x3m shells, custom double-decker stands, and main sponsor pavilions."
      },
      {
        title: "Heavy Load-Bearing Cassette Floors",
        desc: "Reinforced flooring platforms engineered to withstand direct automotive driving, heavy machinery displays, and dense visitor traffic."
      },
      {
        title: "Multi-Zone Industrial Climate Control",
        desc: "Ducted high-capacity HVAC networks delivering continuous temperature stability across interconnected halls during peak summer events."
      }
    ],
    technicalSpecs: [
      { label: "Covered Area Capacity", value: "Scalable modular clear-span complexes from 1,000 m² up to 50,000+ m²" },
      { label: "Clear Span Widths", value: "Standard widths of 15m, 20m, 30m, 40m, and 50m with unlimited expandable length" },
      { label: "Structural Framing", value: "High-grade extruded aluminum profile with hot-dip galvanized steel connections" },
      { label: "Wall Configurations", value: "Panoramic double-glazed curtain glass, rigid ABS solid walls, or white PVC" }
    ],
    faqs: [
      {
        q: "Can heavy vehicles and machinery drive into the exhibition tent?",
        a: "Yes, we install reinforced heavy-duty cassette flooring systems specifically rated to accommodate direct vehicle access, armored exhibits, and industrial machinery displays."
      },
      {
        q: "Can multiple exhibition halls be linked together seamlessly?",
        a: "Yes, our modular engineering allows interconnected multi-hall complexes with climate-controlled connecting corridors, VIP registration lounges, and logistics bays."
      },
      {
        q: "Are exhibition tents available for temporary rental with on-site maintenance?",
        a: "Yes, Bait Al Nokhada provides turnkey rental programs with complete rapid assembly, round-the-clock technical supervision during the expo, and safe dismantling across the UAE and KSA."
      }
    ]
  },
  {
    id: "5",
    slug: "sports-tent",
    name: "Sports Tents",
    tagline: "Custom sports tent manufacturer delivering high-apex covered courts for padel, tennis & pools.",
    badge: "Sports Arenas • High Apex",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/spots.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/best-sports-tent-rental-services-Dubai.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/50.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/sports-tent-in-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/Sports-tents.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/FIFA+WORLD+CUP4.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/FIFA-WORLD-CUP3.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Sports/Sports-tent.webp",
    ],
    videoUrl: "https://youtu.be/Y6zek9hRfv8?si=2wERo_gbcLK_wp3Y",
    overviewTitle: "Why Choose Bait Al Nokhada Sports Tents?",
    overview: "Sports tents from Bait Al Nokhada provide year-round, climate-controlled environments engineered to protect athletic facilities from extreme sun, rain, and high winds. Built with high-strength structural aluminum profiles and heavy-duty insulated PVC membranes, these column-free clear-span halls deliver high-apex vertical clearances for sports clubs and recreation complexes without civil building delays.",
    whyChooseText: "With over 30 years of manufacturing excellence across the UAE and Saudi Arabia, Bait Al Nokhada delivers specialized indoor sports structures for private clubs, schools, and tournament operators. Fully compliant with international sports federation regulations, our arenas seamlessly integrate whisper-quiet high-capacity HVAC, anti-glare natural lighting, certified acoustic insulation, and heavy spectator seating.",
    industryApplications: [
      "Padel & Tennis Club Enclosures & Covered Courts",
      "Semi-Olympic Swimming Pool Covers & Aquatic Centers",
      "School & University Multi-Purpose Sports Halls",
      "Indoor Football Arenas, Basketball Courts & Gymnasiums"
    ],
    keyBenefits: [
      {
        title: "Regulation Height Clearances",
        desc: "Vaulted polygonal profiles delivering up to 14 meters of unobstructed vertical clearance, fully compliant with international padel and tennis standards."
      },
      {
        title: "Anti-Glare Translucent Roofs",
        desc: "Engineered membranes that filter harsh sunlight to provide bright, glare-free daytime illumination, significantly reducing facility operating costs."
      },
      {
        title: "Silent Climate & Airflow Control",
        desc: "Ducted industrial cooling systems engineered to maintain steady tournament temperatures without creating disruptive air drafts during play."
      },
      {
        title: "Acoustic Dampening Insulation",
        desc: "Specialized sound-absorbing internal liner layers designed to dampen echo and ball impacts, ensuring an immersive playing environment."
      }
    ],
    technicalSpecs: [
      { label: "Apex Clear Heights", value: "Up to 14 meters clear height at center ridge (customizable)" },
      { label: "Clear Span Widths", value: "Modular unobstructed widths from 15m to 50m with unlimited bay extension" },
      { label: "Structural Framing", value: "Hard-pressed extruded structural aluminum with anti-corrosion galvanized steel" },
      { label: "Sidewall Options", value: "Insulated sandwich panels, retractable sliding PVC walls, or tempered glass" }
    ],
    faqs: [
      {
        q: "Does the structure provide acoustic dampening to reduce echo and ball noise?",
        a: "Yes, we integrate specialized acoustic insulation liners engineered to absorb ball rebounds and crowd noise, maintaining clear acoustic clarity for tournament play."
      },
      {
        q: "Do the apex dimensions meet official international padel standards?",
        a: "Yes, our sports structures are engineered to exceed the International Padel Federation (FIP) regulations, providing over 8 to 14 meters of completely clear overhead play space."
      },
      {
        q: "Can the side walls be opened during milder winter months?",
        a: "Yes, we offer motorized roll-up systems and retractable sidewalls that allow natural open-air ventilation in winter and hermetic climate-sealed cooling throughout summer."
      }
    ]
  },
  {
    id: "6",
    slug: "ramadan-tent",
    name: "Ramadan Tents",
    tagline: "Premier Ramadan tent manufacturer delivering luxury Iftar venues and traditional majlis halls.",
    badge: "Arabic Hospitality • Rapid Setup",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/ramadan.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Ramadan-tent-rental.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/large-ramadan-tents-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Tent-Rental-in-AbuDhabi.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Ramadan-tent-Supplier-AbuDhabi.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Ramadan-tents-in-DUBAI.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Ramadan-tent-rental-UAE.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Ramadan/Ramadan-Tents-for-sale-Jumerah.webp",
    ],
    videoUrl: "https://youtu.be/xk9xCpVU4R0?si=49ZVMAmvo5ZsAjEq",
    overviewTitle: "Why Choose Bait Al Nokhada Ramadan Tents?",
    overview: "Ramadan tents from Bait Al Nokhada blend rich Arabian heritage with modern engineering to create immersive, climate-controlled venues for Iftar and Suhoor hospitality. Designed for cultural charm and guest comfort, our structures combine clear-span modular aluminum frames with authentic decorative linings, delivering prestigious dining pavilions for luxury hotels and community gatherings across the UAE and Saudi Arabia.",
    whyChooseText: "As a trusted tent manufacturer in the UAE since 1997, Bait Al Nokhada fuses Islamic geometric styling with certified structural engineering. Trusted by luxury 5-star hotels, government entities, and royal estates, our Ramadan pavilions feature dedicated commercial buffet zones, silent high-capacity AC systems, customized Arabic lantern lighting, and fire-certified interior paneling.",
    industryApplications: [
      "5-Star Hotel & Resort Iftar & Suhoor Dining Venues",
      "Government & Diplomatic Ramadan Pavilions & Councils",
      "Charity Iftar Centers & Community Ramadan Majlis",
      "Corporate Brand Activations & Private Villa Gatherings"
    ],
    keyBenefits: [
      {
        title: "Authentic Arabic Sadu Linings",
        desc: "Traditional geometric interior wall and ceiling patterns engineered with certified fire-retardant safety standards."
      },
      {
        title: "Catering & Live Kitchen Annexes",
        desc: "Dedicated hygienic utility tunnels, food prep corridors, and exhaust-ready zones built for live cooking stations."
      },
      {
        title: "Silent High-Capacity Climate Control",
        desc: "External ducted chillers providing continuous cooling to keep dining halls pleasant and comfortable during warm spring evenings."
      },
      {
        title: "Integrated Ambient Lantern Lighting",
        desc: "Custom overhead rigging ready for traditional brass lanterns, ornamental chandeliers, and warm indirect mood lighting."
      }
    ],
    technicalSpecs: [
      { label: "Available Dimensions", value: "Modular spans from 5x5m up to 30x50m+ (infinite expandable length)" },
      { label: "Structural Framing", value: "Hard-pressed extruded aluminum profiles or traditional pole-supported setups" },
      { label: "Climate & Insulation", value: "Industrial HVAC ready with insulated multi-layer roofs and thermal sidewalls" },
      { label: "Turnaround Deployment", value: "Pre-engineered components manufactured and delivered ahead of the Holy Month" }
    ],
    faqs: [
      {
        q: "Are grease and smoke extraction systems supported for live cooking buffets?",
        a: "Yes, our hospitality setups integrate dedicated kitchen annexes equipped with certified extractor hood ventilation and fire-rated safety zones."
      },
      {
        q: "Can the interior be custom-branded for hotel hospitality sponsors?",
        a: "Yes, we provide custom-tailored entrance arches, sponsor display zones, and bespoke Arabian majlis seating arrangements matching your brand guidelines."
      },
      {
        q: "Are Ramadan tents available on seasonal rental across UAE and KSA?",
        a: "Yes, Bait Al Nokhada delivers complete seasonal rental packages covering pre-Ramadan installation, full electrical fit-out, on-call maintenance, and post-Eid dismantling."
      }
    ]
  },
  {
    id: "7",
    slug: "aircraft-hangar-tent",
    name: "Aircraft Hangar Tents",
    tagline: "Heavy-duty aircraft hangar manufacturer delivering high-clearance structures for fleet maintenance.",
    badge: "Aviation Hangars • Certified Maintenance",
    catalogImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Solutions/aircraft.webp",
    heroImage: "https://d3g07f5oxrfvni.cloudfront.net/media-images/Aircraft-hanger-tent/Aircraft-Hanger-Tent-Rental.webp",
    gallery: [
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Aircraft-hanger-tent/Aircraft-Hanger-Tent-in-UAE-EMIRATES-FLIGHT.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Aircraft-hanger-tent/Aircraft-Hanger-Tent-EMIRATES-FLIGHT.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Aircraft-hanger-tent/ezgif.com-gif-maker-44-600x325.webp",
      "https://d3g07f5oxrfvni.cloudfront.net/media-images/Aircraft-hanger-tent/Aircraft-Hanger-Tents-EMIRATES-FLIGHT.webp",
    ],
    videoUrl: "https://youtu.be/JNPXGLXav4M?si=ho1jVLZ59BRQRAPo",
    overviewTitle: "Why Choose Bait Al Nokhada Aircraft Hangar Tents?",
  overview: "Aircraft hangar tents from Bait Al Nokhada are large clear-span structures engineered for military, commercial, and private aviation maintenance operations. Built with high-strength extruded aluminum frames and weather-resistant PVC covers, they provide secure environments for fixed-wing airplanes, helicopters, and unmanned aerial vehicles (UAVs) across desert and coastal climates in the UAE and Saudi Arabia.",
  whyChooseText: "Backed by over 30 years of manufacturing excellence, Bait Al Nokhada delivers field-proven hangar installations across the GCC. Designed to meet the demanding requirements of military bases, airport expansions, and Maintenance, Repair & Overhaul (MRO) centers, our structures feature massive bi-folding electric doors, tailored tail-notch openings, and column-free interiors that enable unrestricted maneuvering for ground support vehicles and gantry cranes.",
  industryApplications: [
    "Airport Maintenance, Repair & Overhaul (MRO) Stations",
    "Commercial & Military Helicopter Base Camps",
    "Executive Business Jet Storage & Private Hangars",
    "Unmanned Aerial Vehicle (UAV) Operations & Field Depots"
  ],
  keyBenefits: [
    {
      title: "Electric Multi-Part Hangar Doors",
      desc: "Full-width sliding and bi-folding automated door systems spanning up to 40 meters to accommodate wide aircraft wingspans."
    },
    {
      title: "Heavy Ground Equipment Compatibility",
      desc: "Clear-span interiors with zero interior columns, fully compatible with mobile gantry cranes, pushback tugs, and tool staging."
    },
    {
      title: "Extreme Desert Wind Stability",
      desc: "Aerodynamic curved roof profiles calculated and certified to withstand severe sandstorms and wind speeds up to 130 km/h."
    },
    {
      title: "Climate Control & Thermal Protection",
      desc: "Insulated sandwich paneling and high-output HVAC integration to safeguard sensitive avionics and create comfortable maintenance bays."
    }
  ],
  technicalSpecs: [
    { label: "Wind & Climate Rating", value: "Engineered and certified for high wind loads up to 130 km/h" },
    { label: "Door Configurations", value: "Tailored eave and center-tail clearances for varied aircraft models" },
    { label: "Clear Span Widths", value: "Unobstructed clear spans from 20m to 70m with infinite expandable lengths" },
    { label: "Foundation Systems", value: "Heavy-duty steel base plates and ground anchors for concrete or tarmac" }
  ],
  faqs: [
    {
      q: "Can this structure serve as a certified permanent aviation hangar?",
      a: "Yes, our engineering calculations conform to permanent building standards and Civil Defense codes, while retaining the flexibility for modular relocation if needed."
    },
    {
      q: "How does the hangar accommodate aircraft with tall vertical stabilizers?",
      a: "We engineer dedicated vertical tail doors that open independently above the main entrance, allowing high-tail aircraft to enter without raising the entire roofline."
    },
    {
      q: "Are aircraft hangar tents available for both rental and direct purchase?",
      a: "Yes, Bait Al Nokhada offers direct manufacturing for permanent installations as well as scalable long-term rental agreements for tactical deployments and temporary MRO contracts."
    }
  ]
},
];