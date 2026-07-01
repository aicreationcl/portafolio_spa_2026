import { BadgeCheck, GraduationCap } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { education } from "@/content/education";
import { certifications } from "@/content/certifications";
import { formatDateRange } from "@/lib/utils";

export function Trajectory() {
  return (
    <section
      id="trayectoria"
      aria-labelledby="trayectoria-heading"
      className="border-border bg-surface border-b py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="trayectoria-heading"
          eyebrow="Trayectoria"
          title="Formación y certificaciones"
        />

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <h3 className="label-mono text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary h-4 w-4" aria-hidden="true" />
              Formación académica
            </h3>
            <div className="space-y-8">
              {education.map((item) => (
                <TimelineItem
                  key={item.id}
                  dateLabel={formatDateRange(item.range)}
                  title={item.program}
                  subtitle={item.institution}
                />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="label-mono text-foreground mb-8 flex items-center gap-2">
              <BadgeCheck className="text-accent h-4 w-4" aria-hidden="true" />
              Certificaciones
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="flex items-center gap-4">
                  <BadgeCheck className="text-accent h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-foreground text-sm font-medium">{cert.name}</p>
                    <p className="label-mono text-muted mt-1">{cert.issuer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
