# Portafolio: Dvlpr_Chris

Portafolio profesional de una sola página (SPA) construido con Next.js App
Router, TypeScript, Tailwind CSS v4 y Framer Motion. Server Components por
defecto; el JavaScript de cliente queda acotado al menú móvil, el toggle de
tema y las animaciones de aparición al hacer scroll.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript en modo estricto
- Tailwind CSS v4 (tokens de color vía variables CSS, sin config JS)
- Framer Motion (solo en los componentes que lo necesitan)
- lucide-react para iconografía

## Estructura del proyecto

```
app/               Rutas de Next.js: layout, page, sitemap, robots, OG image
components/
  layout/          Header, Nav, MobileMenu, ThemeToggle, Footer, SkipLink
  sections/        Una sección de la página por archivo (Hero, AboutMe, ...)
  ui/              Piezas reutilizables: Card, Badge, Button, ProjectCard...
  icons/           Reexport curado de lucide-react
content/           Todo el texto y los datos del sitio, tipados
hooks/             useActiveSection (scroll-spy del nav)
lib/               Variantes de Framer Motion y utilidades (cn, formatDateRange)
types/             Los tipos de contenido (Profile, ExperienceItem, etc.)
```

## Cómo personalizar el contenido

El contenido vive separado de los componentes, en `content/`. Para cambiar
qué aparece en el sitio no hace falta tocar ningún componente:

- `profile.ts`: nombre, alias, rol, resumen, datos de contacto.
- `experience.ts`: historial laboral (se usa en la sección Experiencia).
- `projects.ts`: casos de estudio de proyectos profesionales.
- `github-projects.ts`: repos de GitHub destacados en la sección Proyectos.
- `skills.ts`: stack técnico agrupado (Frontend, Backend, DevOps, etc.).
- `certifications.ts` y `education.ts`: certificaciones y formación.
- `seo.ts`: título, descripción y palabras clave usadas en metadata y JSON-LD.

Cada archivo exporta un array o un objeto tipado según `types/content.ts`, así
que TypeScript avisa si falta un campo al agregar una entrada nueva.

## Instalación

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Comandos disponibles

```bash
npm run dev            # servidor de desarrollo
npm run build          # build de producción
npm run start          # sirve el build de producción
npm run lint           # ESLint
npm run format         # Prettier (escribe los cambios)
npm run format:check   # Prettier (solo verifica)
```

## Despliegue

El sitio está desplegado en Railway a partir de este mismo repositorio
(`main` dispara un build automático). Variables de entorno relevantes:

- `NEXT_PUBLIC_SITE_URL`: dominio público del sitio, usado en metadata,
  Open Graph, JSON-LD, `sitemap.xml` y `robots.txt`. Si no está definida, cae
  al dominio de Railway configurado en `content/seo.ts`. Al comprar un
  dominio propio, hay que setear esta variable en Railway con el nuevo valor.

## Checklist de calidad antes de hacer push

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run format:check`
4. `npm run build`
5. Revisión visual en light y dark mode, en mobile (360-390px) y desktop
   (1440px)
6. Navegación completa por teclado (skip link, foco visible, menú móvil con
   `Escape`)

## Recomendaciones futuras

- Agregar los repos de GitHub restantes en `content/github-projects.ts` (la
  grilla ya está pensada para 4).
- Sumar métricas de liderazgo propias en `content/experience.ts` (tamaño de
  equipo, sprints entregados, cumplimiento de plazos) para reforzar el
  posicionamiento como Team Lead / Agile Coach / Project Manager.
- Definir un dominio propio y actualizar `NEXT_PUBLIC_SITE_URL` en Railway.
- Reemplazar el favicon genérico de Next.js por uno con la marca del sitio.
