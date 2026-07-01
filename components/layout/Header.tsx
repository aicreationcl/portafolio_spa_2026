import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/layout/Nav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BrandMark } from "@/components/ui/BrandMark";

export function Header() {
  return (
    <header className="border-border/60 bg-background/90 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container className="relative flex h-16 items-center justify-between">
        <a href="#hero" className="label-mono text-foreground flex items-center gap-2">
          <span className="bg-primary h-2 w-2" aria-hidden="true" />
          <BrandMark />
        </a>

        <Nav className="hidden md:block" />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
