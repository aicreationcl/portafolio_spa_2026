import { Globe2, Server, Cloud, Network } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { skillGroups } from "@/content/skills";
import type { SkillGroup } from "@/types/content";

const ICONS: Record<SkillGroup["icon"], typeof Globe2> = {
  frontend: Globe2,
  backend: Server,
  devops: Cloud,
  architecture: Network,
};

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-heading"
      className="border-border bg-surface border-b py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-end">
          <p className="label-mono text-muted/70">Stack · 2026</p>
          <SectionHeading
            id="tecnologias-heading"
            eyebrow="Stack tecnológico"
            title="Herramientas que domino a escala enterprise"
            align="right"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = ICONS[group.icon];
            return (
              <RevealOnScroll key={group.id} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="border-border text-primary flex h-10 w-10 items-center justify-center border">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="label-mono text-primary mt-6">{group.label}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted flex items-center justify-between text-sm"
                      >
                        {item}
                        <span className="bg-primary/40 h-1.5 w-1.5" aria-hidden="true" />
                      </li>
                    ))}
                  </ul>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
