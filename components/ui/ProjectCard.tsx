import { ChevronDown } from "lucide-react";
import type { ProjectCaseStudy } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <span className="label-mono border-primary/30 text-primary border px-2 py-0.5">
          {project.category}
        </span>
      </div>

      <h3 className="text-foreground font-serif text-xl font-semibold">{project.title}</h3>

      <div className="text-muted space-y-3 text-sm">
        <p>
          <span className="label-mono text-foreground">Problema — </span>
          {project.problem}
        </p>
        <p>
          <span className="label-mono text-foreground">Solución — </span>
          {project.solution}
        </p>
      </div>

      <details className="group border-border text-muted border-t pt-4 text-sm">
        <summary className="label-mono text-foreground flex cursor-pointer list-none items-center justify-between marker:content-none">
          Decisiones, desafíos y resultados
          <ChevronDown
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <p className="label-mono text-foreground mb-2">Decisiones técnicas</p>
            <ul className="space-y-1.5">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono text-foreground mb-2">Desafíos</p>
            <ul className="space-y-1.5">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono text-foreground mb-2">Impacto</p>
            <ul className="space-y-1.5">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            <span className="label-mono text-foreground">Resultado — </span>
            {project.results}
          </p>
        </div>
      </details>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {project.links?.length ? (
        <div className="border-border flex flex-wrap gap-2 border-t pt-4">
          {project.links.map((link) => (
            <ButtonLink
              key={link.href}
              href={link.href}
              variant="accent"
              className="px-4 py-2 text-[11px]"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
