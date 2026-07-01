import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    id: "cerveros-arquitecto",
    company: "CERVEROS",
    role: "Arquitecto de Soluciones",
    location: "Chile",
    range: { start: "2026-01", end: "present" },
    summary:
      "Diseño y liderazgo de migraciones de plataforma InterSystems IRIS para clientes enterprise en Chile y Argentina.",
    highlights: [
      "Arquitecto líder de la migración end-to-end para Helios Salud (Argentina): rediseño de arquitectura y estrategia de migración para un cliente internacional del sector salud.",
      "Colaboración en la migración de plataforma InterSystems IRIS para BCI Seguros: levantamiento de requerimientos técnicos y coordinación del equipo de transición.",
      "Define la arquitectura de solución y las fases de implementación en coordinación directa con el cliente.",
    ],
    tech: [
      "Arquitectura de soluciones",
      "Migración de plataformas",
      ".NET",
      "React",
      "InterSystems IRIS",
    ],
  },
  {
    id: "cerveros-devops",
    company: "CERVEROS",
    role: "Operation Controller & DevOps",
    location: "Gran Santiago, Chile",
    range: { start: "2023-01", end: "present" },
    summary:
      "Liderazgo técnico y operativo de flujos de desarrollo e implementación para las áreas internas de la empresa.",
    highlights: [
      "Rediseñó e implementó flujos operativos end-to-end, reduciendo los tiempos de coordinación operativa en aprox. 30%.",
      "Implementó prácticas DevOps (CI/CD, versionamiento) que agilizaron los despliegues del equipo de desarrollo y redujeron incidencias en producción.",
      "Lideró el desarrollo de aplicaciones con stack Angular 13+, Node.js (NestJS) y MongoDB sobre infraestructura AWS.",
    ],
    tech: ["Angular 13+", "Node.js", "NestJS", "MongoDB", "AWS", "CI/CD"],
  },
  {
    id: "cerveros-bci-netcore",
    company: "CERVEROS",
    role: ".NetCore Developer & Team Leader",
    client: "BCI Seguros",
    location: "Chile",
    range: { start: "2022-08", end: "2022-12" },
    summary:
      "Desarrollador Full Stack con énfasis en frontend Angular en proyectos críticos para BCI Seguros, liderando técnicamente al equipo de desarrollo.",
    highlights: [
      'Lideró el desarrollo frontend Angular (SCSS/CSS Grid) en los proyectos "Internalización" y "Full RDA", implementando layouts complejos y responsivos.',
      "Integró APIs de terceros y coordinó con equipos multidisciplinarios (diseño + backend) para alinear UI/UX con la lógica de negocio del cliente.",
      "Ejerció el rol de Team Leader técnico: revisión de código, decisiones de arquitectura frontend y coordinación de entregas con el Product Owner.",
    ],
    tech: [".NET Core", "Angular", "SCSS", "CSS Grid", "APIs REST", "Team Leadership"],
  },
  {
    id: "banco-ripley-techlead",
    company: "Banco Ripley",
    role: "Tech Lead",
    location: "Chile",
    range: { start: "2022-02", end: "2022-08" },
    summary:
      'Liderazgo técnico del proyecto "TEF Programadas", módulo de transferencias electrónicas programadas dentro de la plataforma bancaria.',
    highlights: [
      "Definió la arquitectura de microservicios en Golang para garantizar escalabilidad y separación de responsabilidades.",
      "Integró backend Golang con frontend Angular, asegurando comunicación eficiente vía APIs REST con los sistemas core.",
      "Implementó pipeline CI/CD para despliegues controlados en producción.",
    ],
    tech: ["Golang", "Angular", "Microservicios", "APIs REST", "CI/CD"],
  },
  {
    id: "cerveros-bci-scrum",
    company: "CERVEROS",
    role: "Desarrollador → .Net Developer & Scrum Master",
    client: "BCI Seguros",
    location: "Chile",
    range: { start: "2020-03", end: "2022-07" },
    summary:
      "Más de 2 años en proyectos para BCI Seguros, evolucionando de desarrollador backend a un rol dual técnico-ágil con responsabilidades de gestión.",
    highlights: [
      'Desarrolló soluciones en InterSystems IRIS (Ensemble) para los proyectos "Líneas Comerciales" y "Cargas Generales".',
      'Transicionó al stack .NET Core para "Líneas Comerciales" y "PCI", asegurando calidad y cumplimiento de plazos en un entorno de alta exigencia regulatoria (PCI DSS).',
      "Facilitó ceremonias Scrum (planificación, retrospectivas, reviews) para equipos mixtos frontend/backend y gestionó el backlog con el Product Owner del cliente.",
    ],
    tech: ["InterSystems IRIS (Ensemble)", ".NET Core", "Angular", "Scrum", "Gestión de backlog"],
  },
  {
    id: "socius-afc-core",
    company: "SOCIUS / SONDA",
    role: "Desarrollador Full Stack",
    client: "Proyecto AFC CORE",
    location: "Región Metropolitana, Chile",
    range: { start: "2024-05", end: "2025-10" },
    summary:
      "Desarrollo, mantenimiento y evolución de sistemas críticos de negocio para el cliente SONDA en el proyecto AFC CORE.",
    highlights: [
      "Desarrolló aplicaciones web y servicios backend en C# y VB.NET para sistemas enterprise de alta disponibilidad.",
      "Implementó, optimizó y mantuvo bases de datos Oracle PL/SQL, asegurando rendimiento y consistencia en consultas críticas.",
      "Referente técnico en ceremonias Agile, aportando criterio de aceptación en el refinamiento del backlog.",
    ],
    tech: ["C#", "VB.NET", "Oracle PL/SQL", "Backend", "Agile", "Scrum"],
  },
  {
    id: "pegasus-net",
    company: "The Pegasus Group Company S.A.",
    role: "Consultor TI / Desarrollador Web .NET",
    location: "Chile",
    range: { start: "2018-08", end: "2020-02" },
    summary:
      "Primeros años de carrera como desarrollador .NET en proyectos para el sector público chileno.",
    highlights: [
      "Participó en el desarrollo del sistema SenaInfo 2019 para el Servicio Nacional de Menores (SENAME), desde el diseño hasta la implementación y mantenimiento del software.",
      "Colaboró en el ciclo completo de desarrollo de software: análisis de requerimientos, diseño de solución, desarrollo y soporte post-entrega.",
    ],
    tech: [".NET", "Desarrollo Web", "JavaScript", "SQL Server", "Git"],
  },
];
