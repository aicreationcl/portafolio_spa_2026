import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Pie de página" className="border-border bg-surface border-t">
      <Container className="flex flex-col items-center gap-4 py-12 text-center md:flex-row md:justify-between md:text-left">
        <p className="label-mono text-foreground">
          {profile.name} <span className="text-muted mx-2">/</span>
          <span className="text-muted font-normal tracking-normal normal-case">
            {" "}
            Solution Architect &amp; Tech Lead
          </span>
        </p>

        <p className="text-muted text-sm">
          © {year} {profile.name}. Todos los derechos reservados.
        </p>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="label-mono text-muted hover:text-primary focus-visible:outline-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          LinkedIn
        </a>
      </Container>
    </footer>
  );
}
