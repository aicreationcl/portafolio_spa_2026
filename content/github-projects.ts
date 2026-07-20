import type { GithubProject } from "@/types/content";

export const githubProjects: GithubProject[] = [
  {
    id: "linear-clone-front",
    name: "linear_clone_front",
    description:
      "Clon funcional de Linear: tablero de issues con drag-and-drop, gestión de estado con Zustand y datos remotos con TanStack Query.",
    url: "https://github.com/aicreationcl/linear_clone_front",
    demoUrl: "https://linearclonefront-production.up.railway.app/",
    tech: ["React", "TanStack Query", "Zustand", "Tailwind CSS", "MongoDB"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
    imageUrl: "/projects/linear-clone-front.png",
    imageAlt: "Vista previa de linear_clone_front",
  },
  {
    id: "americo-market",
    name: "americo_market",
    description:
      "Demo de e-commerce para un minimarket: catálogo, carrito y checkout con formularios validados con Zod.",
    url: "",
    demoUrl: "https://americomarketfront-production.up.railway.app/",
    tech: ["React", "React Hook Form", "Zod", "Tailwind CSS", "MongoDB", "WebPay", "MercadoPago"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
    imageUrl: "/projects/americo-market.png",
    imageAlt: "Vista previa de americo_market",
  },
  {
    id: "club-master",
    name: "club_master",
    description:
      "Plataforma completa que revoluciona la gestión de clubes deportivos",
    url: "",
    demoUrl: "https://clubmaster-production.up.railway.app/",
    tech: ["Next", "Shadcn", "Tailwind CSS", "MongoDB", "MercadoPago", "WebSocket"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
    imageUrl: "/projects/club-master.png",
    imageAlt: "Vista previa de club_master",
  },
  {
    id: "ruta-car",
    name: "ruta_car",
   "description": "Landing page de alto rendimiento para servicios construcción de estructuras metalicas a medida para vehiculos de carga.",
    url: "https://github.com/aicreationcl/rutacar_landing_new",
    demoUrl: "https://rutacarlandingnew-production.up.railway.app/",
    tech: ["Next", "App Router", "Tailwind CSS", "SEO"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
    imageUrl: "/projects/landing.png",
    imageAlt: "Vista previa de ruta_car",
  },
  {
    id: "apolo-cafe",
    name: "apolo_cafe",
  "description": "SPA interactiva para una cafetería de especialidad y tostaduría, diseñada con animaciones fluidas y optimización SEO orientada a la conversión.",
    url: "https://github.com/aicreationcl/apolo_coffee_landing",
    demoUrl: "https://apolocoffeelanding-production.up.railway.app/",
    tech: ["Next", "SPA", "Framer Motion", "Tailwind CSS", "SEO"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
    imageUrl: "/projects/landing.png",
    imageAlt: "Vista previa de apolo_coffee",
  },
];
