import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { profile } from "@/content/profile";

export function Skills() {
  return (
    <section
      id="habilidades"
      aria-labelledby="habilidades-heading"
      className="border-border bg-surface border-b py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="habilidades-heading"
          eyebrow="Habilidades"
          title="Dónde aporto más valor"
          description="Las aptitudes que sostienen cada decisión técnica y de liderazgo en los proyectos que lidero."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.coreSkills.map((skill, index) => (
            <RevealOnScroll key={skill} delay={index * 0.08}>
              <Card className="h-full">
                <span className="label-mono text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground mt-4 font-medium">{skill}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
