import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/content/experience";
import { formatDateRange } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="border-border border-b py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="experiencia-heading"
          eyebrow="Experiencia"
          title="Seis años construyendo y liderando"
          description="De desarrollador IRIS y .NET a Arquitecto de Soluciones, en banca, seguros, salud y logística."
        />

        <div className="mt-12 space-y-12 md:pl-4">
          {experience.map((item, index) => (
            <RevealOnScroll key={item.id} delay={Math.min(index * 0.05, 0.3)}>
              <TimelineItem
                dateLabel={formatDateRange(item.range)}
                title={item.role}
                subtitle={`${item.company}${item.client ? ` — ${item.client}` : ""} · ${item.location}`}
              >
                <p className="text-muted mt-4 text-sm">{item.summary}</p>

                <ul className="text-muted mt-4 space-y-2 text-sm">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </TimelineItem>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
