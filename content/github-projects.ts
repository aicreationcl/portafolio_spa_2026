import type { GithubProject } from "@/types/content";

export const githubProjects: GithubProject[] = [
  {
    id: "linear-clone-front",
    name: "linear_clone_front",
    description:
      "Clon funcional de Linear: tablero de issues con drag-and-drop, gestión de estado con Zustand y datos remotos con TanStack Query.",
    url: "https://github.com/aicreationcl/linear_clone_front",
    demoUrl: "https://linearclonefront-production.up.railway.app/",
    tech: ["React","TanStack Query", "Zustand", "Tailwind CSS", "MongoDB"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
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
  },
  {
    id: "club-master",
    name: "club_master",
    description:
      "Plataforma completa que revoluciona la gestión de clubes deportivos",
    url: "",
    demoUrl: "https://clubmaster-production.up.railway.app/",
    tech: ["Next", "Shadcn", "Tailwind CSS","MongoDB", "MercadoPago","WebSocket"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
  },
];
