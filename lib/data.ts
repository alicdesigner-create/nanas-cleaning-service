import {
  Sparkles,
  Building2,
  Home as HomeIcon,
  Wind,
  Paintbrush,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Leaf,
  Award,
  MapPin,
  Phone,
  Mail,
  Target,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Nana's Cleaning Service",
  owner: "Isis Noriega",
  tagline: "Professional Cleaning Services You Can Trust",
  city: "Greeley",
  state: "Colorado",
  region: "Northern Colorado",
  yearsInBusiness: 5,
  domain: "nanasclean.com",
  addressLine: "Greeley, Colorado",
  heroImage: "/images/hero-clean-home.jpg",
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
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    shortDescription:
      "Reliable, detail-oriented home cleaning that keeps every room fresh and welcoming.",
    longDescription:
      "Our Residential Cleaning in Greeley is built around your household's routine — weekly, bi-weekly, or one-time visits. We dust, sanitize, vacuum, and polish every room with the same care we'd give our own homes, using eco-friendly products that are safe for kids and pets.",
    icon: HomeIcon,
    keyword: "Residential Cleaning Greeley",
    image: "/images/service-residential-cleaning.jpg",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDescription:
      "Consistent, professional office and facility cleaning that keeps your business guest-ready.",
    longDescription:
      "From small offices to multi-suite facilities, our Commercial Cleaning Greeley programs are scheduled around your business hours so operations never skip a beat. Lobbies, restrooms, breakrooms, and workstations are cleaned to a consistent, professional standard every visit.",
    icon: Building2,
    keyword: "Commercial Cleaning Greeley",
    image: "/images/service-commercial-cleaning.jpg",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "A thorough, top-to-bottom reset for move-ins, move-outs, or seasonal refreshes.",
    longDescription:
      "Our Deep Cleaning Greeley service goes beyond routine upkeep — baseboards, vents, appliance interiors, grout, and every overlooked corner. It's the perfect choice before a big event, after a renovation, or as a seasonal reset for your home or business.",
    icon: Sparkles,
    keyword: "Deep Cleaning Greeley",
    image: "/images/service-deep-cleaning.jpg",
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    shortDescription:
      "Deep-extraction carpet and upholstery cleaning that lifts stains and refreshes fibers.",
    longDescription:
      "Carpet Cleaning Greeley homeowners and businesses trust to remove ground-in dirt, allergens, and stubborn stains. We use professional-grade equipment and eco-friendly solutions to restore carpets without leaving behind harsh chemical residue.",
    icon: Wind,
    keyword: "Carpet Cleaning Greeley",
    image: "/images/service-carpet-cleaning.jpg",
  },
  {
    slug: "interior-painting",
    title: "Interior Painting",
    shortDescription:
      "Clean, precise interior painting that gives your space a polished, updated finish.",
    longDescription:
      "Refresh any room with our Interior Painting service — careful prep, crisp lines, and a tidy job site from start to finish. Pair it with a Deep Cleaning for a complete space refresh.",
    icon: Paintbrush,
    keyword: "Interior Painting Greeley",
    image: "/images/service-interior-painting.jpg",
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
    title: "Licensed",
    description: "Fully licensed to operate throughout Northern Colorado.",
    icon: BadgeCheck,
  },
  {
    title: "Insured",
    description: "Comprehensive coverage for total peace of mind on every job.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable",
    description: "On time, every time — your schedule is our priority.",
    icon: Clock,
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe, sustainable cleaning products for your family, pets, and team.",
    icon: Leaf,
  },
  {
    title: "Experienced",
    description: "5 years of trusted service across Greeley and Northern Colorado.",
    icon: Award,
  },
  {
    title: "Locally Owned",
    description: "A Greeley-based business that knows and cares about this community.",
    icon: MapPin,
  },
];

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
    location: "Windsor, CO",
    rating: 5,
    quote:
      "We switched our office cleaning over to Nana's and the difference was immediate. Professional, consistent, and the team genuinely cares about doing a good job.",
  },
  {
    name: "Priya K.",
    location: "Evans, CO",
    rating: 5,
    quote:
      "The deep clean before we moved in was incredible — every vent, baseboard, and cabinet was spotless. Worth every penny.",
  },
  {
    name: "Marcus T.",
    location: "Greeley, CO",
    rating: 5,
    quote:
      "Booked them for carpet cleaning and interior painting in the same month. Both jobs were done with real attention to detail. Highly recommend Nana's.",
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
