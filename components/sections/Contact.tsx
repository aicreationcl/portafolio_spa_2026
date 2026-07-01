import { Mail, Phone, Linkedin, ArrowUpRight } from "@/components/icons";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email directo",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kris-sandoval",
    href: profile.linkedin,
  },
];

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="label-mono text-primary mb-3">Contacto</p>
            <h2
              id="contacto-heading"
              className="text-foreground font-serif text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Hablemos de tu próximo desafío técnico.
            </h2>
            <p className="text-muted mt-6 max-w-md">
              Disponible para roles de arquitectura de soluciones, liderazgo técnico o consultoría
              en proyectos de banca, seguros, salud y logística.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ul className="space-y-6">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group border-border hover:border-primary/40 focus-visible:outline-primary flex items-center gap-4 rounded-md border p-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <span className="border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-11 w-11 shrink-0 items-center justify-center border transition-colors">
                      <link.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="label-mono text-muted block">{link.label}</span>
                      <span className="text-foreground block">{link.value}</span>
                    </span>
                    <ArrowUpRight
                      className="text-muted group-hover:text-primary h-4 w-4 transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
