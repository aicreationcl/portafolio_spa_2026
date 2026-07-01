import type { GithubProject } from "@/types/content";

export const githubProjects: GithubProject[] = [
  {
    id: "linear-clone-front",
    name: "linear_clone_front",
    description:
      "Clon funcional de Linear: tablero de issues con drag-and-drop, gestión de estado con Zustand y datos remotos con TanStack Query.",
    url: "https://github.com/aicreationcl/linear_clone_front",
    demoUrl: "https://linearclonefront-production.up.railway.app/",
    tech: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
  },
  {
    id: "americo-market-front",
    name: "americo_market_front",
    description:
      "Demo de e-commerce para un minimarket: catálogo, carrito y checkout con formularios validados con Zod.",
    url: "https://github.com/aicreationcl/americo_market_front",
    demoUrl: "https://americomarketfront-production.up.railway.app/",
    tech: ["React", "TypeScript", "React Hook Form", "Zod", "Tailwind CSS"],
    language: { name: "TypeScript", colorClass: "bg-primary" },
  },
];
