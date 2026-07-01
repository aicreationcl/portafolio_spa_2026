import { profile } from "@/content/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kris-sandoval.dev";

export const siteTitle = `${profile.name} — ${profile.role}`;

export const siteDescription =
  "Solution Architect & Tech Lead con 6+ años liderando arquitectura y equipos en banca, seguros, salud y logística. Especialista en MERN Stack, .NET y AWS.";

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
      "DevOps",
    ],
  },
};
