import {
  Sparkles,
  Building2,
  Wind,
  Droplets,
  UserCheck,
  Paintbrush,
  SprayCan,
  HardHat,
  ShieldCheck,
  Mountain,
  BadgeCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Target,
  Zap,
  Rocket,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Nana's Cleaning Service",
  owner: "Isis Noriega",
  tagline: "Professional Cleaning Services You Can Trust",
  city: "Greeley",
  state: "Colorado",
  region: "Colorado, including the Denver Metro Area and Fort Collins",
  serviceAreas: ["Greeley", "Fort Collins", "Denver Metro Area"],
  yearsInBusiness: 5,
  domain: "nanasclean.com",
  addressLine: "Greeley, Colorado",
  heroImages: [
    "/images/hero-clean-home.jpg",
    "/images/hero-commercial-team.jpg",
    "/images/hero-commercial-vacuum.jpg",
  ],
  aboutImage: "/images/about-cleaning-team.jpg",
};

export const contacts = {
  owner: {
    name: "Isis Noriega",
    role: "Owner",
    phone: "(505) 489-8050",
    phoneHref: "tel:5054898050",
  },
  sales: {
    name: "Valeria Molinar",
    role: "Sales",
    phone: "(505) 582-3622",
    phoneHref: "tel:5055823622",
  },
  email: "info@nanasclean.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  keyword: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "commercial-residential-cleaning",
    title: "Commercial & Residential Cleaning",
    shortDescription:
      "Reliable, professional cleaning for offices, facilities, and homes across the Front Range.",
    longDescription:
      "Whether it's a multi-suite commercial property or a family home, our Commercial & Residential Cleaning combines consistent scheduling with meticulous attention to detail. We work around your hours — business or personal — so lobbies, workstations, kitchens, and bedrooms are always guest-ready.",
    icon: Building2,
    keyword: "Commercial & Residential Cleaning Colorado",
    image: "/images/service-commercial-cleaning.jpg",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "A thorough, top-to-bottom reset for move-ins, move-outs, or seasonal refreshes.",
    longDescription:
      "Our Deep Cleaning service goes beyond routine upkeep — baseboards, vents, appliance interiors, grout, and every overlooked corner. It's the perfect choice before a big event, after a renovation, or as a seasonal reset for your home or business.",
    icon: Sparkles,
    keyword: "Deep Cleaning Colorado",
    image: "/images/service-deep-cleaning.jpg",
  },
  {
    slug: "high-dusting",
    title: "High Dusting",
    shortDescription:
      "Specialized high-reach dusting for rafters, vents, beams, and elevated surfaces standard cleaning can't touch.",
    longDescription:
      "Our High Dusting service targets the areas routine cleaning misses — ceiling vents, light fixtures, exposed beams, rafters, and high shelving. Using extension tools and safe access equipment, we clear dust and allergens from warehouses, gyms, offices, and industrial spaces to keep air quality and appearance up to standard.",
    icon: Wind,
    keyword: "High Dusting Colorado",
    image: "/images/service-high-dusting.jpg",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    shortDescription:
      "High-powered exterior washing that restores sidewalks, facades, and parking areas.",
    longDescription:
      "From building exteriors to sidewalks, dumpster pads, and parking structures, our Pressure Washing service lifts dirt, grime, gum, and stains that standard cleaning can't reach. It's a fast, effective way to refresh curb appeal and maintain a safe, professional exterior.",
    icon: Droplets,
    keyword: "Pressure Washing Colorado",
    image: "/images/service-pressure-washing.jpg",
  },
  {
    slug: "day-porter-services",
    title: "Day Porter Services",
    shortDescription:
      "On-site daytime staff keeping high-traffic spaces clean, stocked, and presentable all day long.",
    longDescription:
      "Our Day Porter Services place a dedicated team member on-site during business hours to handle restroom checks, spill response, lobby upkeep, and general tidiness in real time — ideal for busy offices, retail spaces, and facilities that can't wait for an after-hours visit.",
    icon: UserCheck,
    keyword: "Day Porter Services Colorado",
    image: "/images/service-day-porter.jpg",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    shortDescription:
      "Clean, precise interior and exterior painting that gives any space a polished, updated finish.",
    longDescription:
      "Refresh any space with our Painting Services — careful prep, crisp lines, and a tidy job site from start to finish. Pair it with a Deep Cleaning or Construction Cleaning for a complete space refresh.",
    icon: Paintbrush,
    keyword: "Painting Services Colorado",
    image: "/images/service-interior-painting.jpg",
  },
  {
    slug: "graffiti-removal",
    title: "Graffiti Removal",
    shortDescription:
      "Fast, thorough graffiti removal that protects your property's appearance and reputation.",
    longDescription:
      "Graffiti left unaddressed invites more of the same. Our Graffiti Removal service responds quickly to clear tagging from walls, doors, and exterior surfaces, restoring a clean, professional look and helping deter repeat vandalism.",
    icon: SprayCan,
    keyword: "Graffiti Removal Colorado",
    image: "/images/service-graffiti-removal.jpg",
  },
  {
    slug: "construction-cleaning",
    title: "Construction Cleaning",
    shortDescription:
      "Post-construction and renovation cleanup that gets a space ready for move-in or turnover.",
    longDescription:
      "From final-phase debris removal to detailed dust cleanup, our Construction Cleaning prepares newly built or renovated spaces for occupancy. We clear dust from every surface, vent, and fixture so the finished space is truly move-in ready.",
    icon: HardHat,
    keyword: "Construction Cleaning Colorado",
    image: "/images/service-construction-cleaning.jpg",
  },
];

export type BrandPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const brandPillars: BrandPillar[] = [
  {
    title: "Reliability",
    description:
      "We show up on time, every time, so you can build your schedule around us with confidence.",
    icon: Clock,
  },
  {
    title: "Professionalism",
    description:
      "Trained, courteous teams who treat your home or business with respect on every visit.",
    icon: BadgeCheck,
  },
  {
    title: "Eco-Friendly Products",
    description:
      "Sustainable, non-toxic cleaning products that are safe for your family, pets, and employees.",
    icon: Leaf,
  },
  {
    title: "Attention to Detail",
    description:
      "From baseboards to light fixtures, we notice the small things that make a space truly clean.",
    icon: Target,
  },
  {
    title: "Exceptional Customer Service",
    description:
      "Responsive, friendly communication before, during, and after every appointment.",
    icon: HeartHandshake,
  },
];

export const whyChooseUsImage = "/images/why-choose-eco-products.jpg";

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Guaranteed Quality",
    description:
      "Every job is backed by our satisfaction guarantee — if it's not right, we make it right.",
    icon: BadgeCheck,
  },
  {
    title: "Sense of Urgency",
    description:
      "We respond quickly and get to work fast, because we know your space can't wait.",
    icon: Zap,
  },
  {
    title: "Express Services",
    description:
      "Rush and emergency cleaning available when you need a fast turnaround.",
    icon: Rocket,
  },
];

export type Founder = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const founder: Founder = {
  name: "Isis Noriega",
  title: "Founder",
  bio: "Founder Isis Noriega built Nana's Cleaning Service out of a genuine passion for helping her community. Recognizing the need for cleaner, healthier environments free from contamination, she decided to start her own business and begin offering professional janitorial services — a mission that has driven Nana's Cleaning Service for over 5 years.",
  image: "/images/founder-isis-noriega.png",
};

export type Certification = {
  label: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    label: "OSHA-Certified Safety Training — Construction Cleaning",
    icon: ShieldCheck,
  },
  {
    label: "Height & Fall Safety Certified",
    icon: Mountain,
  },
];

export const serviceAreaCities = [
  "Denver",
  "Westminster",
  "Lakewood",
  "Louisville",
  "Boulder",
  "Longmont",
  "Loveland",
  "Fort Collins",
  "Greeley",
  "Windsor",
  "Frederick",
  "Broomfield",
  "Dacono",
];

export const industriesServed =
  "We proudly serve offices, schools, government buildings, and construction companies across the Front Range — while also offering residential cleaning wherever it's needed.";

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Greeley, CO",
    rating: 5,
    quote:
      "Nana's Cleaning Service has been cleaning our home for over a year now. They're always on time, thorough, and so easy to communicate with. It's the first cleaning service we've actually stuck with.",
  },
  {
    name: "David R.",
    location: "Fort Collins, CO",
    rating: 5,
    quote:
      "We switched our office cleaning over to Nana's and the difference was immediate. Professional, consistent, and the team genuinely cares about doing a good job.",
  },
  {
    name: "Priya K.",
    location: "Denver, CO",
    rating: 5,
    quote:
      "The deep clean before we moved in was incredible — every vent, baseboard, and cabinet was spotless. Worth every penny. Glad they cover the whole Denver Metro Area.",
  },
  {
    name: "Marcus T.",
    location: "Longmont, CO",
    rating: 5,
    quote:
      "Booked them for pressure washing and painting services in the same month. Both jobs were done with real attention to detail. Highly recommend Nana's.",
  },
];

export type GalleryPair = {
  title: string;
  beforeSrc: string;
  afterSrc: string;
};

export const galleryPairs: GalleryPair[] = [
  {
    title: "Living Room Deep Clean",
    beforeSrc: "/images/gallery-1-before-living-room.jpg",
    afterSrc: "/images/gallery-1-after-living-room.jpg",
  },
  {
    title: "Kitchen Refresh",
    beforeSrc: "/images/gallery-2-before-kitchen.jpg",
    afterSrc: "/images/gallery-2-after-kitchen.jpg",
  },
  {
    title: "Carpet Restoration",
    beforeSrc: "/images/gallery-3-before-carpet.jpg",
    afterSrc: "/images/gallery-3-after-carpet.jpg",
  },
  {
    title: "Office Common Area",
    beforeSrc: "/images/gallery-4-before-office.jpg",
    afterSrc: "/images/gallery-4-after-office.jpg",
  },
];

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Google", href: "#" },
];

export const contactIcons = { Phone, Mail, MapPin };
