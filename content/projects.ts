import type { ProjectCaseStudy } from "@/types/content";

export const projects: ProjectCaseStudy[] = [
  {
    id: "helios-salud-migracion",
    title: "Migración de plataforma — Helios Salud",
    category: "Salud / Arquitectura de soluciones",
    problem:
      "Helios Salud (Argentina) operaba procesos críticos sobre una plataforma InterSystems IRIS heredada, con riesgo de continuidad y limitaciones para escalar la integración con nuevos sistemas clínicos y administrativos.",
    solution:
      "Diseño de una arquitectura de migración end-to-end, incluyendo el mapeo de dependencias del sistema heredado, la definición de fases de corte controlado y la coordinación directa con los equipos técnicos del cliente en Argentina.",
    decisions: [
      "Migración por fases en lugar de un corte total, para reducir el riesgo operativo en un entorno de salud donde la continuidad del servicio es crítica.",
      "Documentación de la arquitectura objetivo antes de iniciar la migración, para alinear expectativas técnicas entre ambos países.",
    ],
    challenges: [
      "Coordinación remota con un cliente internacional en un sector regulado, con ventanas de mantenimiento limitadas.",
      "Preservar la integridad de datos clínicos e integraciones existentes durante cada fase de transición.",
    ],
    impact: [
      "Arquitectura de migración aprobada y en ejecución para un cliente internacional del sector salud.",
    ],
    results:
      "Rol de arquitecto líder en una migración internacional de alta exigencia regulatoria, sentando las bases técnicas para la continuidad operativa de Helios Salud.",
    tech: ["InterSystems IRIS", "Arquitectura de soluciones", ".NET", "React"],
  },
  {
    id: "banco-ripley-tef",
    title: "TEF Programadas — Banco Ripley",
    category: "Banca / Microservicios",
    problem:
      "El banco necesitaba un módulo de transferencias electrónicas programadas desacoplado del monolito bancario existente, capaz de escalar de forma independiente y comunicarse de forma confiable con los sistemas core.",
    solution:
      "Arquitectura de microservicios en Golang para el procesamiento de transferencias programadas, integrada con un frontend Angular vía APIs REST, con un pipeline de CI/CD para despliegues controlados en producción.",
    decisions: [
      "Golang como lenguaje del servicio por su rendimiento y bajo consumo de recursos en operaciones de alta concurrencia.",
      "Separación clara de responsabilidades entre el servicio de programación de transferencias y los sistemas core bancarios, comunicados solo vía contratos REST versionados.",
    ],
    challenges: [
      "Garantizar consistencia transaccional en un dominio bancario donde cada transferencia programada debe ejecutarse exactamente una vez.",
      "Despliegues en producción sobre infraestructura bancaria con controles de cambio estrictos.",
    ],
    impact: [
      "Pipeline CI/CD implementado para despliegues controlados y repetibles en producción.",
    ],
    results:
      "Liderazgo técnico exitoso del proyecto, entregando un módulo de transferencias programadas desacoplado y alineado con los estándares de seguridad y disponibilidad exigidos por la banca.",
    tech: ["Golang", "Angular", "Microservicios", "APIs REST", "CI/CD"],
  },
  {
    id: "cerveros-devops-automation",
    title: "Automatización de flujos DevOps internos",
    category: "DevOps / Eficiencia operativa",
    problem:
      "Los equipos internos de CERVEROS coordinaban despliegues y tareas operativas de forma manual, generando fricción, tiempos muertos y una tasa de incidencias evitables en producción.",
    solution:
      "Rediseño de los flujos operativos end-to-end junto con la implementación de prácticas DevOps (CI/CD, versionamiento estandarizado) sobre infraestructura AWS, para el stack Angular 13+ / Node.js (NestJS) / MongoDB del equipo.",
    decisions: [
      "Priorizar la estandarización del flujo de versionamiento antes de automatizar el pipeline, para evitar automatizar procesos inconsistentes.",
      "Adopción incremental de CI/CD por equipo, en lugar de una migración forzada simultánea, para sostener la adopción real de las nuevas prácticas.",
    ],
    challenges: [
      "Cambiar hábitos de coordinación manual arraigados en equipos multidisciplinarios.",
      "Mantener la continuidad de las entregas mientras se migraban los flujos operativos en producción.",
    ],
    impact: [
      "Reducción de aproximadamente 30% en los tiempos de coordinación operativa.",
      "Menor tasa de incidencias en producción gracias a la estandarización de CI/CD y versionamiento.",
    ],
    results:
      "Los flujos y prácticas DevOps implementados siguen en uso activo por el equipo, consolidándose como el estándar de trabajo interno.",
    tech: ["Angular 13+", "Node.js", "NestJS", "MongoDB", "AWS", "CI/CD"],
  },
  {
    id: "ots-logistica",
    title: "Plataforma de logística de última milla — OTS Chile",
    category: "Logística / Frontend",
    problem:
      "OTS Chile requería una plataforma web moderna para la operación de logística de última milla, con foco en rendimiento y una experiencia fluida para los equipos de operación.",
    solution:
      "Colaboración en el desarrollo frontend de la plataforma con React y Next.js, integrando la lógica de negocio de seguimiento y asignación de envíos con los servicios backend existentes.",
    decisions: [
      "Next.js como base del frontend para aprovechar renderizado eficiente y una arquitectura de componentes mantenible a medida que crecía la plataforma.",
    ],
    challenges: [
      "Integrar flujos operativos de logística en tiempo real dentro de una interfaz clara para usuarios no técnicos.",
    ],
    impact: ["Contribución directa a una plataforma de logística de última milla en producción."],
    results:
      "Participación activa en la evolución de una plataforma crítica para la operación logística diaria de OTS Chile.",
    tech: ["React", "Next.js"],
  },
];
