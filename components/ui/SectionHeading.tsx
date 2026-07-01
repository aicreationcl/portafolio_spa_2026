import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "right";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "right" && "ml-auto text-right")}>
      {eyebrow ? <p className="label-mono text-primary mb-3">{eyebrow}</p> : null}
      <h2
        id={id}
        className="text-foreground font-serif text-3xl font-semibold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      {description ? <p className="text-muted mt-4 text-base md:text-lg">{description}</p> : null}
    </div>
  );
}
