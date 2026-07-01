import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { profile } from "@/content/profile";

const STATS = [
  { value: "6+", label: "Años de experiencia" },
  { value: "4", label: "Industrias: banca, seguros, salud, logística" },
  { value: "9", label: "Certificaciones profesionales" },
];

export function AboutMe() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-heading"
      className="border-border border-b py-20 md:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
          <RevealOnScroll>
            <div className="border-border border p-10">
              <p className="label-mono text-primary">{profile.handle}</p>
              <p className="text-foreground mt-4 font-serif text-6xl font-semibold">Kris Sandoval</p>
              <div className="border-border mt-10 space-y-6 border-t pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-4">
                    <span className="text-primary font-serif text-2xl font-semibold">
                      {stat.value}
                    </span>
                    <span className="text-muted text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-8">
            <div>
              <p className="label-mono text-primary mb-3">Perfil</p>
              <h2
                id="sobre-mi-heading"
                className="text-foreground font-serif text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Elevando la ingeniería de software
              </h2>
              <p className="text-muted mt-6 leading-relaxed">
                Mi enfoque técnico no se limita a escribir código, sino a diseñar estructuras que
                perduren. Como Arquitecto de Soluciones, entiendo que la simplicidad es el nivel
                máximo de sofisticación: mi misión es transformar problemas de negocio complejos en
                soluciones técnicas elegantes y mantenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="label-mono text-primary mb-2">Filosofía</h3>
                <p className="text-muted text-sm">
                  Priorizo la escalabilidad y la deuda técnica controlada sobre las tendencias
                  efímeras.
                </p>
              </Card>
              <Card>
                <h3 className="label-mono text-primary mb-2">Liderazgo</h3>
                <p className="text-muted text-sm">
                  Liderazgo técnico en equipos multidisciplinarios bajo metodologías ágiles y Clean
                  Code.
                </p>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
