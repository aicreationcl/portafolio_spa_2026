import { ArrowDown } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="grid-dot-bg border-border relative flex min-h-[90svh] items-center border-b pt-16"
    >
      <Container className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-9">
          <p className="label-mono animate-fade-in-up text-primary mb-6 [animation-delay:0ms]">
            {profile.role}
          </p>
          <h1 className="animate-fade-in-up text-foreground font-serif text-4xl leading-[1.1] font-semibold tracking-tight [animation-delay:120ms] sm:text-5xl md:text-6xl">
            Desarrollo de software integral, liderazgo técnico y coaching ágil en cada proyecto que
            lidero.
          </h1>
          <p className="animate-fade-in-up text-muted mt-6 max-w-2xl text-lg [animation-delay:240ms]">
            {profile.summary}
          </p>
          <div className="animate-fade-in-up mt-10 flex flex-wrap gap-4 [animation-delay:360ms]">
            <ButtonLink href="#proyectos">
              Ver proyectos <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contacto" variant="ghost">
              Hablemos
            </ButtonLink>
          </div>
        </div>

        <div className="hidden md:col-span-3 md:flex md:justify-center" aria-hidden="true">
          <div className="animate-fade-in-up flex flex-col items-center gap-6 [animation-delay:480ms]">
            <span className="bg-border h-16 w-px" />
            <span className="label-mono text-accent [writing-mode:vertical-rl]">
              33.4489° S — 70.6693° W
            </span>
            <span className="bg-border h-16 w-px" />
          </div>
        </div>
      </Container>
    </section>
  );
}
