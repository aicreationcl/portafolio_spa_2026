import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "frontend",
    items: [
      "React / Next.js",
      "Angular 13+",
      "TypeScript / JavaScript ES6+",
      "Tailwind / SCSS / CSS Grid",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "backend",
    items: ["Node.js / NestJS", ".NET Core / C#", "Golang", "InterSystems IRIS (Ensemble)"],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: "devops",
    items: ["AWS", "Azure", "CI/CD", "Versionamiento y despliegues controlados"],
  },
  {
    id: "arquitectura",
    label: "Arquitectura & Liderazgo",
    icon: "architecture",
    items: [
      "Arquitectura de soluciones",
      "Migración de plataformas",
      "Agile Coach / Scrum Master",
      "OKR / Liderazgo de equipos",
    ],
  },
];
