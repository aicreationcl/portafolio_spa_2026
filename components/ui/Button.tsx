import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "label-mono inline-flex items-center justify-center gap-2 px-6 py-3 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  ghost: "border border-border text-foreground hover:bg-surface-high",
  accent: "bg-accent text-accent-foreground hover:brightness-110",
} as const;

type Variant = keyof typeof variants;

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
}

export function ButtonLink({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a href={href} className={cn(baseClasses, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseClasses, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
