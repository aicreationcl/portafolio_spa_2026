import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GithubProjectCard } from "@/components/ui/GithubProjectCard";
import { projects } from "@/content/projects";
import { githubProjects } from "@/content/github-projects";

export function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="border-border border-b py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="proyectos-heading"
          eyebrow="Proyectos destacados"
          title="Casos de estudio de ingeniería aplicada"
          description="Migraciones, arquitecturas y automatizaciones reales en banca, salud y logística — con problema, decisiones técnicas y resultado."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={Math.min(index * 0.06, 0.24)}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {githubProjects.length > 0 ? (
          <div id="proyectos-github" className="mt-16 scroll-mt-24">
            <h3 id="proyectos-github-heading" className="label-mono text-muted">
              Repositorios
            </h3>
            <div
              role="region"
              aria-labelledby="proyectos-github-heading"
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {githubProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={Math.min(index * 0.06, 0.24)}>
                  <GithubProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
