"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "contacto", label: "Contacto" },
] as const;

interface NavProps {
  className?: string;
  onNavigate?: () => void;
}

export function Nav({ className, onNavigate }: NavProps) {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <nav aria-label="Navegación principal" className={className}>
      <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={onNavigate}
                className={cn(
                  "label-mono text-foreground/70 hover:text-foreground focus-visible:outline-primary relative inline-block pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  isActive && "text-foreground",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "bg-primary absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300",
                    isActive && "scale-x-100",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
