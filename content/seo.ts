import { profile } from "@/content/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafoliospa2026-production.up.railway.app";

export const siteTitle = `${profile.name} — ${profile.role}`;

export const siteDescription =
  "Tech Lead y Agile Coach con 6+ años liderando equipos y proyectos ágiles en banca, seguros, salud y logística. Desarrollador full stack en MERN, .NET y AWS.";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressCountry: "CL" },
    url: siteUrl,
    sameAs: [profile.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "MERN Stack",
      ".NET",
      "AWS",
      "Azure",
      "Arquitectura de Software",
      "Scrum",
      "Scrum Master",
      "DevOps",
      "Agile Coaching",
      "Project Management",
      "Team Leadership",
    ],
  },
};
