import type { Project } from "@/types/project";

export const contactDetails = {
  phonePrimary: "+91 83094 75836",
  phoneSecondary: "+91 99498 36096",
  email: "sales@rudhraconstructions.com",
  address:
    "RUDHRA HOUSE, 3rd and 4th Floors, Plot No. 8&9, Bachupally, Kakatiya Hills, Anand Naidu Nagar, Pragathi Nagar, Hyderabad, Telangana 500090",
  mapUrl:
    "https://www.google.com/maps?q=RUDHRA%20HOUSE%20Pragathi%20Nagar%20Hyderabad&output=embed"
};

// Migrated from old PHP project pages and project listing templates.
// Text is reused for project names, descriptions, locations, status, and contact context only.
export const projects: Project[] = [
  {
    slug: "royal-village-2",
    name: "Royal Village 2",
    location: "Gandi Maisamma, Hyderabad",
    type: "Villa Community",
    status: "ongoing",
    summary: "99 majestic triplex villas across 7.29 acres with generous open spaces.",
    description:
      "Royal Village 2 is an exclusive villa community crafted for families seeking distinction, privacy, and long-term value. Set in Gandi Maisamma near the Outer Ring Road, the project combines quiet surroundings with easy connectivity. Spread across 7.29 acres, it features 99 triplex villas, landscaped green pockets, a clubhouse, and thoughtfully planned amenities.",
    image: "/images/projects/royal-village-2.jpg",
    gallery: [
      "/images/projects/royal-village-2.jpg",
      "/images/projects/royal-village-2-view.webp",
      "/images/projects/royal-village-2-layout.webp"
    ],
    amenities: ["Clubhouse", "Landscaped gardens", "Open spaces", "Security", "Community amenities"],
    highlights: ["7.29 acres", "99 triplex villas", "65% open space", "Near ORR"]
  },
  {
    slug: "park-avenue",
    name: "Park Avenue",
    location: "Bowrampet, Hyderabad",
    type: "Villa Community",
    status: "ongoing",
    summary: "A premium triplex villa address in Bowrampet with 265 villas.",
    description:
      "Park Avenue by Ashoka Rudhra Projects is planned as a complete villa address in Bowrampet. With 265 villas across 17 acres, the community brings together spacious triplex homes, elegant streetscapes, landscaped open areas, a Central Park, clubhouse, and 50+ amenities.",
    image: "/images/projects/park-avenue.jpg",
    gallery: [
      "/images/projects/park-avenue.jpg",
      "/images/projects/park-avenue-top-view.jpg",
      "/images/projects/park-avenue-garden.jpg"
    ],
    amenities: ["Central Park", "Clubhouse", "50+ amenities", "Landscaped streets", "Play zones"],
    highlights: ["17 acres", "265 villas", "Triplex villas", "Bowrampet growth corridor"]
  },
  {
    slug: "rudhra-estates",
    name: "Rudhra Estates",
    location: "Bowrampet, Hyderabad",
    type: "Apartment",
    status: "ongoing",
    summary: "Premium 2 and 3 BHK apartments with open spaces and a clubhouse.",
    description:
      "Rudhra Estates is a premium residential community designed for families who value space, serenity, and modern planning. The project features premium 2 and 3 BHK apartments, expansive open spaces, Vaastu-compliant homes, skyline views, and an 8,700 sq. ft. clubhouse for recreation and community life.",
    image: "/images/projects/rudhra-estates.jpg",
    gallery: [
      "/images/projects/rudhra-estates.jpg",
      "/images/projects/rudhra-estates-gate.webp",
      "/images/projects/rudhra-estates-clubhouse.webp"
    ],
    amenities: ["Clubhouse", "Swimming pool", "Pickleball court", "Open spaces", "Vaastu-compliant homes"],
    highlights: ["2 and 3 BHK", "8,700 sq. ft. clubhouse", "Open spaces", "Modern vertical living"]
  },
  {
    slug: "empire",
    name: "Empire",
    location: "Bachupally, Hyderabad",
    type: "Commercial",
    status: "ongoing",
    summary: "A commercial complex in Bachupally designed for business visibility.",
    description:
      "Empire is planned as a commercial complex in Bachupally, designed to give growing businesses visibility, access, and identity. With future-ready infrastructure and practical planning, it offers a professional setting for offices, retail, and service ventures.",
    image: "/images/projects/empire.jpg",
    gallery: ["/images/projects/empire.jpg"],
    amenities: ["Commercial frontage", "Parking", "Business access", "Professional infrastructure"],
    highlights: ["Bachupally location", "Commercial spaces", "Growth-oriented planning"]
  },
  {
    slug: "rudhras-bhuvi",
    name: "Rudhra's Bhuvi",
    location: "Pragathi Nagar, Hyderabad",
    type: "Apartment",
    status: "completed",
    summary: "A residential tower with 2 and 3 BHK flats in Pragathi Nagar.",
    description:
      "Rudhra's Bhuvi blends contemporary design and urban convenience in Pragathi Nagar. The residential tower offers carefully planned 2 and 3 BHK flats with practical layouts, comfort-focused details, and access to daily essentials.",
    image: "/images/projects/bhuvi.jpg",
    gallery: ["/images/projects/bhuvi.jpg", "/images/projects/bhuvi-night.jpg"],
    amenities: ["Parking", "Urban connectivity", "Ventilated homes", "Family-friendly planning"],
    highlights: ["2 and 3 BHK", "Pragathi Nagar", "Residential tower"]
  },
  {
    slug: "hasthina",
    name: "Hasthina",
    location: "Pragathi Nagar, Hyderabad",
    type: "Apartment",
    status: "completed",
    summary: "2 and 3 BHK apartments near daily conveniences and key services.",
    description:
      "Hasthina brings modern apartment living to Pragathi Nagar with thoughtfully designed 2 and 3 BHK homes. The project was planned for families seeking comfort, connectivity, and a complete residential lifestyle near schools, healthcare, and employment hubs.",
    image: "/images/projects/hasthina.jpg",
    gallery: ["/images/projects/hasthina.jpg", "/images/projects/hasthina-banner.jpg"],
    amenities: ["Parking", "Connectivity", "Residential amenities", "Family-friendly layouts"],
    highlights: ["2 and 3 BHK", "Pragathi Nagar", "120 units"]
  },
  {
    slug: "bommarillu",
    name: "Bommarillu",
    location: "Bodhan, Telangana",
    type: "Apartment",
    status: "completed",
    summary: "A calm residential community in Bodhan with clubhouse facilities.",
    description:
      "Bommarillu in Bodhan was designed as a calm residential community with practical homes, community-focused planning, and clubhouse facilities. It combines comfort, accessibility, and a peaceful setting for everyday living.",
    image: "/images/projects/bommarillu.jpg",
    gallery: ["/images/projects/bommarillu.jpg", "/images/projects/bommarillu-view.jpg"],
    amenities: ["Clubhouse", "Community spaces", "Parking", "Peaceful surroundings"],
    highlights: ["150 units", "2 blocks", "Bodhan location"]
  },
  {
    slug: "green-lands",
    name: "Green Lands",
    location: "Bodhan, Telangana",
    type: "Villa Community",
    status: "completed",
    summary: "Villa living in Bodhan with calm surroundings and family comfort.",
    description:
      "Green Lands offers villa living in Bodhan with a focus on open surroundings, comfort, and everyday convenience. The project was planned for families looking for independent homes with a calm residential environment.",
    image: "/images/projects/green-lands.jpg",
    gallery: ["/images/projects/green-lands.jpg"],
    amenities: ["Open surroundings", "Villa planning", "Green environment", "Residential access"],
    highlights: ["Villa community", "Bodhan", "Family-oriented planning"]
  },
  {
    slug: "white-fields",
    name: "White Fields",
    location: "Bodhan, Telangana",
    type: "Villa Community",
    status: "completed",
    summary: "Simplex and duplex villa living designed for privacy and comfort.",
    description:
      "White Fields presents simplex and duplex villa living in Bodhan, designed for privacy, comfort, and a refined family lifestyle. The project reflects independent-home living with practical planning and a peaceful neighborhood feel.",
    image: "/images/projects/white-fields.jpg",
    gallery: ["/images/projects/white-fields.jpg"],
    amenities: ["Simplex villas", "Duplex villas", "Private living", "Calm neighborhood"],
    highlights: ["Villa homes", "Bodhan", "Privacy-focused planning"]
  },
  {
    slug: "raagam-taanam",
    name: "Raagam & Taanam",
    location: "Pragathi Nagar, Hyderabad",
    type: "Apartment",
    status: "completed",
    summary: "A premium residential project with thoughtful recreation spaces.",
    description:
      "Raagam & Taanam is a premium residential project in Pragathi Nagar, designed with modern comfort, thoughtful planning, children's play areas, and recreational spaces including a badminton court.",
    image: "/images/projects/raagam-taanam.jpg",
    gallery: ["/images/projects/raagam-taanam.jpg"],
    amenities: ["Children's play area", "Badminton court", "Parking", "Urban access"],
    highlights: ["Pragathi Nagar", "Premium homes", "Recreation spaces"]
  },
  {
    slug: "soudhamini",
    name: "Soudhamini",
    location: "Hyderabad",
    type: "Apartment",
    status: "completed",
    summary: "2 and 3 bedroom homes designed around comfort and fit.",
    description:
      "Soudhamini is a residential enclave by Rudhra Constructions that blends modern living with comfort and style. The project offers 2 and 3 bedroom homes across thoughtfully planned blocks and floor layouts.",
    image: "/images/projects/soudhamini.jpg",
    gallery: ["/images/projects/soudhamini.jpg"],
    amenities: ["Parking", "Efficient layouts", "Residential planning", "Family homes"],
    highlights: ["2 and 3 bedrooms", "15 units", "Comfort-led planning"]
  },
  {
    slug: "rudhras-medha",
    name: "Rudhra's Medha",
    location: "Pragathi Nagar, Hyderabad",
    type: "Apartment",
    status: "completed",
    summary: "A rare collection of 10 carefully designed 3 BHK flats.",
    description:
      "Rudhra's Medha offers a rare collection of 10 well-appointed 3 BHK flats in Pragathi Nagar. The project is designed for privacy, natural light, premium finishes, and urban convenience.",
    image: "/images/projects/medha.jpg",
    gallery: ["/images/projects/medha.jpg"],
    amenities: ["Low-density community", "Premium finishes", "Parking", "Urban access"],
    highlights: ["10 flats", "3 BHK", "Pragathi Nagar"]
  },
  {
    slug: "malwa",
    name: "Malwa",
    location: "Hyderabad",
    type: "Apartment",
    status: "upcoming",
    summary: "An upcoming Rudhra community planned around comfort and connection.",
    description:
      "Malwa is listed among Rudhra Constructions' upcoming communities. It is planned with the same focus on quality, comfort, and long-term family value.",
    image: "/images/projects/malwa.jpg",
    gallery: ["/images/projects/malwa.jpg"],
    amenities: ["Planned amenities", "Family-focused homes", "Connectivity"],
    highlights: ["Upcoming", "Residential planning"]
  },
  {
    slug: "ujjaaini",
    name: "Ujjaaini",
    location: "Hyderabad",
    type: "Apartment",
    status: "upcoming",
    summary: "An upcoming project with thoughtful residential planning.",
    description:
      "Ujjaaini is part of Rudhra Constructions' upcoming project pipeline, envisioned with thoughtful planning and practical family living.",
    image: "/images/projects/ujjaaini.jpg",
    gallery: ["/images/projects/ujjaaini.jpg"],
    amenities: ["Planned amenities", "Community spaces", "Family homes"],
    highlights: ["Upcoming", "Residential community"]
  },
  {
    slug: "magadha",
    name: "Magadha",
    location: "Hyderabad",
    type: "Apartment",
    status: "upcoming",
    summary: "An upcoming home community designed for modern families.",
    description:
      "Magadha is an upcoming Rudhra project planned for families seeking trust, comfort, and a future-ready residential address.",
    image: "/images/projects/magadha.jpg",
    gallery: ["/images/projects/magadha.jpg"],
    amenities: ["Planned amenities", "Family planning", "Residential access"],
    highlights: ["Upcoming", "Future-ready homes"]
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const projectsByStatus = (status: Project["status"]) =>
  projects.filter((project) => project.status === status);
