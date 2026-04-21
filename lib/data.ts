export type ProjectCategory = "living-room" | "bedroom" | "kitchen" | "office";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  year: string;
  area: string;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

/* ─── Projects ──────────────────────────────────── */
export const projects: Project[] = [
  {
    id: "1",
    title: "The Meridian Residence",
    category: "living-room",
    image: "/images/project-living.png",
    description:
      "A contemporary luxury residence in Bali designed to blend organic materials with modern architecture. Warm tones and natural textures create an inviting atmosphere.",
    year: "2024",
    area: "420 sqm",
    location: "Bali, Indonesia",
  },
  {
    id: "2",
    title: "Verdant Rest Suite",
    category: "bedroom",
    image: "/images/project-bedroom.png",
    description:
      "A serene bedroom suite designed around the concept of restorative rest. Deep forest green accents, natural linen textiles, and curated lighting create the perfect sleep environment.",
    year: "2024",
    area: "85 sqm",
    location: "Bali, Indonesia",
  },
  {
    id: "3",
    title: "Obsidian Kitchen",
    category: "kitchen",
    image: "/images/project-kitchen.png",
    description:
      "A professional-grade kitchen with a dramatic aesthetic. Dark matte cabinetry, marble countertops with warm veining, and precise brass hardware create a space that is both functional and visually striking.",
    year: "2023",
    area: "65 sqm",
    location: "Singapore",
  },
  {
    id: "4",
    title: "Executive Sanctuary",
    category: "office",
    image: "/images/project-office.png",
    description:
      "A premium home office designed for maximum productivity and inspiration. Dark walnut wood with floor-to-ceiling bookshelves and architectural lighting create a commanding workspace.",
    year: "2023",
    area: "55 sqm",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    id: "5",
    title: "The Haven Lounge",
    category: "living-room",
    image: "/images/about-1.png",
    description:
      "A sophisticated lounge space drawing inspiration from mid-century modern aesthetics while incorporating contemporary luxury materials. Every detail is considered for both visual impact and tactile pleasure.",
    year: "2024",
    area: "180 sqm",
    location: "Bali, Indonesia",
  },
  {
    id: "6",
    title: "Nomad Studio Loft",
    category: "office",
    image: "/images/about-2.png",
    description:
      "An open-plan creative studio that challenges conventional workspace design. Natural light, biophilic elements, and flexible furniture systems create an environment that inspires innovation.",
    year: "2023",
    area: "220 sqm",
    location: "Surabaya, Indonesia",
  },
  {
    id: "7",
    title: "Terra Kitchen",
    category: "kitchen",
    image: "/images/blog-2.png",
    description:
      "An earthy, material-rich kitchen that celebrates natural surfaces. Terracotta, raw stone, and aged brass come together in a space that is deeply personal and warmly functional.",
    year: "2024",
    area: "72 sqm",
    location: "Sydney, Australia",
  },
  {
    id: "8",
    title: "Forest Retreat Bedroom",
    category: "bedroom",
    image: "/images/blog-3.png",
    description:
      "Inspired by forest retreats, this bedroom creates an immersive connection with nature. Organic forms, earthy tones, and biophilic elements craft a true sanctuary for rest.",
    year: "2023",
    area: "95 sqm",
    location: "Ubud, Bali",
  },
];

/* ─── Team ──────────────────────────────────────── */
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Amara Weiss",
    role: "Principal Designer",
    image: "/images/team-1.png",
  },
  {
    id: "2",
    name: "Rafael Chen",
    role: "Lead Architect",
    image: "/images/team-2.png",
  },
  {
    id: "3",
    name: "Isabelle Morgan",
    role: "Interior Stylist",
    image: "/images/team-3.png",
  },
  {
    id: "4",
    name: "Dominic Aurelio",
    role: "Project Manager",
    image: "/images/team-4.png",
  },
];

/* ─── Blog ──────────────────────────────────────── */
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Layering Light in Modern Interiors",
    excerpt:
      "Lighting is arguably the most transformative element in interior design. Master the three layers of light to create spaces that feel alive at any hour.",
    image: "/images/blog-1.png",
    date: "April 12, 2024",
    readTime: "5 min read",
    category: "Design Tips",
  },
  {
    id: "2",
    title: "Material Stories: Why Texture Transforms Your Space",
    excerpt:
      "Beyond color and layout, the tactile quality of materials defines how a space feels. Discover how to curate textures that tell a cohesive design story.",
    image: "/images/blog-2.png",
    date: "March 28, 2024",
    readTime: "4 min read",
    category: "Materials",
  },
  {
    id: "3",
    title: "Biophilic Design: Bringing Nature Inside",
    excerpt:
      "Integrating natural elements goes beyond placing a plant in a corner. Explore how biophilic principles can profoundly impact wellbeing and aesthetics.",
    image: "/images/blog-3.png",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Trends",
  },
];

/* ─── Services ──────────────────────────────────── */
export const services: Service[] = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "We create harmonious luxury living environments in Bali that reflect your unique personality. From concept to completion, our Bali-based team guides you through spatial planning and material selection.",
    features: ["Space Planning", "Mood Boards", "Material Selection", "Furniture Curation"],
  },
  {
    number: "02",
    title: "Furniture Design",
    description:
      "Custom furniture pieces crafted to perfection. Our design team creates bespoke solutions that maximize both aesthetic appeal and functional utility — using the finest materials sourced globally.",
    features: ["Custom Fabrication", "Material Sourcing", "3D Visualization", "Installation"],
  },
  {
    number: "03",
    title: "Landscape Design",
    description:
      "We extend your living space outdoors with thoughtful landscape designs — creating seamless transitions between interior and exterior environments that are both beautiful and liveable year-round.",
    features: ["Garden Planning", "Outdoor Furniture", "Lighting Design", "Water Features"],
  },
];

/* ─── Stats ─────────────────────────────────────── */
export const stats = [
  { value: "21K+", label: "Projects Done", sub: "Across 30+ countries" },
  { value: "20+", label: "Design Teams", sub: "Expert professionals" },
  { value: "300+", label: "Global Clients", sub: "Trusted partnerships" },
];
