import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

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
      </Container>
    </section>
  );
}
