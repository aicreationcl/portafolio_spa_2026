import Image from "next/image";
import { Github, ExternalLink, Globe } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import type { GithubProject } from "@/types/content";

interface GithubProjectCardProps {
  project: GithubProject;
}

export function GithubProjectCard({ project }: GithubProjectCardProps) {
  return (
    <div className="group border-border bg-surface hover:border-primary/40 flex h-full flex-col overflow-hidden rounded-md border transition-colors duration-300">
      {/* {project.imageUrl ? (
        <div className="border-border bg-surface-high relative aspect-video overflow-hidden border-b">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt ?? `Vista previa de ${project.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
      ) : null} */}

      <div className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group/link focus-visible:outline-primary flex min-w-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Github className="text-muted h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="label-mono text-foreground group-hover/link:text-primary truncate transition-colors">
              {project.name}
            </span>
            <ExternalLink
              className="text-muted group-hover/link:text-primary h-3.5 w-3.5 shrink-0 transition-colors"
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="text-muted line-clamp-2 text-sm">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          {project.language ? (
            <span className="label-mono text-muted flex items-center gap-1.5 whitespace-nowrap">
              <span
                className={`h-2 w-2 rounded-full ${project.language.colorClass}`}
                aria-hidden="true"
              />
              {project.language.name}
            </span>
          ) : null}
        </div>

        {project.demoUrl ? (
          <ButtonLink
            href={project.demoUrl}
            variant="accent"
            className="w-full justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            Ver demo
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
