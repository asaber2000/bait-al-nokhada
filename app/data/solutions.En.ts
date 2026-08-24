export interface SolutionItemEn {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  heroImage: string;
  youtubeVideoId: string;
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
    name: "Industrial Warehouse & Storage Tents",
    tagline: "Rapid-Deploy Heavy-Duty Logistics Hubs & On-Site Storage in UAE & KSA",
    badge: "Industrial Grade • Fast Assembly",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "A warehouse tent is a large clear-span structure engineered with high-strength aluminum frames and heavy-duty PVC membrane. Designed to provide immediate secure, weather-resistant storage without the long lead times and high capex of permanent civil buildings.",
    whyChooseText: "Built for harsh desert sun, high humidity, sandstorms, and seasonal rain. Fully customizable with high-clearance electric roller doors, industrial grade ventilation, thermal sandwich panel walling, and heavy forklift-rated flooring.",
    industryApplications: [
      "Supply Chain & Third-Party Logistics (3PL) Hubs",
      "Construction Site Material & Equipment Warehouses",
      "Agricultural & Cold Storage Facilities",
      "Temporary Relief Aid Staging & Distribution Centers"
    ],
    keyBenefits: [
      { title: "100% Usable Clear Span", desc: "No internal support poles, allowing seamless forklift navigation and high-bay pallet racking." },
      { title: "Rapid Turnkey Deployment", desc: "Can be fully erected and operational on standard asphalt or compacted ground within days." },
      { title: "Fire & Weather Certified", desc: "Conforms to DIN 4102 B1 fire resistance and engineered for 120 km/h wind loads." },
      { title: "Modular & Relocatable", desc: "Easily extended in 5-meter bay increments or dismantled and relocated to a new job site." }
    ],
    technicalSpecs: [
      { label: "Clear Span Widths", value: "10m, 15m, 20m, 25m, 30m, 40m, up to 60m" },
      { label: "Eave Clear Heights", value: "4.0m, 6.0m, 8.0m, 10.0m (High clearance for container trucks)" },
      { label: "Wall Options", value: "Industrial Corrugated Steel Sheets, Insulated Sandwich Panels, or 850g/m² PVC" },
      { label: "Door Systems", value: "Electric High-Speed Roll-Up Doors, Sliding Steel Gates, Emergency Exit Doors" }
    ],
    faqs: [
      {
        q: "Can warehouse tents be installed on asphalt without concrete foundations?",
        a: "Yes, our expandable steel anchor pin systems allow certified direct installation on asphalt or compacted gravel."
      },
      {
        q: "Are warehouse tents compliant with UAE Civil Defense approvals?",
        a: "All materials conform to UAE Civil Defense fire retardation benchmarks (DIN 4102 B1)."
      }
    ]
  },
  {
    id: "2",
    slug: "wedding-tent",
    name: "Luxury Royal Wedding Tents",
    tagline: "Turnkey Bespoke Ballrooms & Clear-Span Bridal Marquees across the GCC",
    badge: "Bespoke Royal Luxury • VIP Fit-Out",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Bait Al Nokhada delivers bespoke wedding tent rental and construction across Dubai, Abu Dhabi, and Riyadh. Transforming open desert or private estates into palace-level climate-controlled ballrooms.",
    whyChooseText: "From crystal clear panoramic ceilings and integrated mood lighting to soundproof VIP lounges and royal interior fabric linings, every detail is engineered for elegance.",
    industryApplications: [
      "Royal & VIP Private Celebrations",
      "Luxury Beachfront Wedding Banquets",
      "Garden Receptions & Private Estates",
      "Multi-Day Bridal Celebrations"
    ],
    keyBenefits: [
      { title: "Turnkey Interior Fit-Out", desc: "Complete integration of royal chandeliers, VIP carpeting, staging, and custom draping." },
      { title: "Silent High-Tonnage HVAC", desc: "Whisper-quiet ducted cooling keeping interior temperature at 20°C in mid-summer." },
      { title: "Glass Facade Options", desc: "Panoramic double-glazed window walls offering uninterrupted landscape views." }
    ],
    technicalSpecs: [
      { label: "Structure Types", value: "Curved Arch, Polygon High-Peak, Double Decker, Geodesic Dome" },
      { label: "Capacity Scale", value: "From 100 to over 3,000 guests in a single clear-span hall" }
    ],
    faqs: [
      { q: "Do you supply the full interior flooring and decor?", a: "Yes, we provide heavy-duty cassette flooring with marble or carpet finishes and luxury draping." }
    ]
  },
  {
    id: "3",
    slug: "event-tent",
    name: "Corporate Event & Conference Tents",
    tagline: "High-Profile Brand Activations, Summits & Temporary Corporate Arenas",
    badge: "Corporate Turnkey • Heavy Rigging",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Engineered temporary conference centers and corporate event pavilions equipped for extensive AV truss rigging, branding skins, and media broadcasting.",
    whyChooseText: "Trusted by government entities, international brand launches, and global summits across the UAE and Saudi Arabia.",
    industryApplications: ["Corporate Product Launches", "Government Summits & Forums", "VIP Hospitality Lounges", "Live Media Broadcast Centers"],
    keyBenefits: [
      { title: "Extensive AV Payload", desc: "Engineered roof profiles capable of hanging multi-ton LED video walls and stage lighting." },
      { title: "Exterior Architectural Branding", desc: "High-resolution graphic wrapping on PVC and glass facades." }
    ],
    technicalSpecs: [
      { label: "Spans", value: "10m to 60m infinite modular length" },
      { label: "Wind Stability", value: "Up to 120 km/h certified" }
    ],
    faqs: [
      { q: "Can we install raised executive VIP tribunes?", a: "Yes, modular multi-tier riser systems can be integrated into the layout." }
    ]
  },
  {
    id: "4",
    slug: "exhibition-tent",
    name: "Mega Exhibition & Trade Show Tents",
    tagline: "Modular Multi-Bay Arenas for International Defense & Trade Expos",
    badge: "Mega Clear-Span • High Traffic",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Massive clear-span exhibition structures engineered to accommodate heavy display machinery, high visitor flow, and custom exhibitor booth partitions.",
    whyChooseText: "Proven track record delivering temporary expo centers for defense airshows, maritime festivals, and commercial conventions.",
    industryApplications: ["International Trade Fairs", "Defense & Aviation Airshows", "Consumer Expos & Book Fairs"],
    keyBenefits: [
      { title: "High-Traffic Sensor Doors", desc: "Automated double-glazed doors for smooth visitor flow and cooling preservation." },
      { title: "Modular Exhibitor Layouts", desc: "Standard grid spacing for standard 3x3m and custom builder stands." }
    ],
    technicalSpecs: [
      { label: "Covered Area Capacity", value: "From 1,000 m² up to 50,000 m² connected complex" }
    ],
    faqs: [
      { q: "Can heavy vehicles enter the tent?", a: "Yes, reinforced flooring options allow full truck and vehicle display drives." }
    ]
  },
  {
    id: "5",
    slug: "sports-tent",
    name: "Indoor Sports & Padel Arena Tents",
    tagline: "All-Weather High-Apex Covered Arenas for Tennis, Padel & Multi-Sport Courts",
    badge: "High-Apex Clearance • Acoustic Liners",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "High-clearance structures providing year-round climate-controlled environments for padel courts, football fields, tennis courts, and swimming pool enclosures.",
    whyChooseText: "Ensures sports clubs and private resorts can operate uninterrupted through extreme desert summer months.",
    industryApplications: ["Padel & Tennis Club Enclosures", "School Multi-Purpose Sports Halls", "Semi-Olympic Swimming Pool Covers"],
    keyBenefits: [
      { title: "Regulation Height Clearance", desc: "Vaulted polygonal roof providing unobstructed ball clearance." },
      { title: "Glare-Free Membrane", desc: "Translucent roof fabric providing natural daytime illumination without glare." }
    ],
    technicalSpecs: [
      { label: "Apex Heights", value: "Up to 14 meters center clearance" }
    ],
    faqs: [
      { q: "Does the structure have echo dampening?", a: "Yes, specialized perforated acoustic fabric liners are available." }
    ]
  },
  {
    id: "6",
    slug: "ramadan-tent",
    name: "Ramadan Iftar & Suhoor Hospitality Tents",
    tagline: "Authentic Arabic Hospitality Shelters Engineered with Modern Luxury Finishes",
    badge: "Heritage Styling • Turnkey Catering Ready",
    heroImage: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Specialized temporary Ramadan structures engineered for luxury hotels, government councils, and private estates for Iftar and Suhoor dining.",
    whyChooseText: "Blends authentic Arabian heritage details with industrial strength AC systems and custom buffet/kitchen service areas.",
    industryApplications: ["5-Star Hotel Ramadan Venues", "Government Charity Iftar Centers", "Private Family Majlis Gathering"],
    keyBenefits: [
      { title: "Sadu & Arabic Linings", desc: "Traditional geometric fabrics blended with modern fire-retardant safety." },
      { title: "Catering & Kitchen Annexes", desc: "Dedicated hygienic utility tunnels for kitchen and service staff." }
    ],
    technicalSpecs: [
      { label: "Turnaround Deployment", value: "Pre-assembled and delivered before the Holy Month" }
    ],
    faqs: [
      { q: "Are grease/smoke safety systems included for live cooking?", a: "Yes, dedicated extractor hoods and safety zones are integrated." }
    ]
  },
  {
    id: "7",
    slug: "aircraft-hangar-tent",
    name: "Temporary Aircraft Hangar & MRO Tents",
    tagline: "High-Clearance TFS Curve Structures for Aviation Maintenance & Storage",
    badge: "Aviation TFS • 130 km/h Wind Load",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Tactical curved roof (TFS) hangars engineered for executive business jets, military aircraft, and commercial helicopter maintenance operations.",
    whyChooseText: "Extreme wind stability, massive door clearance, and zero center columns ensure seamless towing and tool access.",
    industryApplications: ["Airport Maintenance, Repair & Overhaul (MRO)", "Helicopter Base Camps", "Military Tactical Deployments"],
    keyBenefits: [
      { title: "Electric Hangar Doors", desc: "Bi-folding and multi-part sliding doors spanning up to 40 meters width." },
      { title: "Heavy Crane Integration", desc: "Compatible with mobile gantry cranes and heavy ground support equipment." }
    ],
    technicalSpecs: [
      { label: "Wind Rating", value: "130 km/h high wind resistance" },
      { label: "Door Clearances", value: "Tailored to aircraft tail heights" }
    ],
    faqs: [
      { q: "Can this serve as a permanent aviation hangar?", a: "Yes, with structural engineering anchor plates it meets permanent building codes." }
    ]
  },
  {
    id: "8",
    slug: "premium-royal-tent",
    name: "Bespoke Royal & Diplomatic Protocol Tents",
    tagline: "VVIP Dignitary Lounges Engineered for Royal Protocol & Heads of State",
    badge: "VVIP Protocol • Maximum Security",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80",
    youtubeVideoId: "dQw4w9WgXcQ",
    overview: "Ultra-luxury modular structures designed strictly for government summits, bilateral state banquets, and royal delegation hospitality.",
    whyChooseText: "Guaranteed privacy, armored panel options, discrete security perimeters, and master-crafted interior suites.",
    industryApplications: ["State Summits & Diplomatic Forums", "Royal Protocol Banquets", "National Day Dignitary Stages"],
    keyBenefits: [
      { title: "Maximum Acoustic Privacy", desc: "Multi-layered sound insulation preventing audio leakage." },
      { title: "Integrated VIP Amenities", desc: "En-suite luxury restrooms, private holding rooms, and discrete security exits." }
    ],
    technicalSpecs: [
      { label: "Security", value: "Access-controlled automated entryways & camera cable conduits" }
    ],
    faqs: [
      { q: "Is rapid emergency installation available?", a: "Yes, our priority deployment crews operate 24/7 across the GCC." }
    ]
  }
];