import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface hover:border-primary/40 rounded-md border p-6 transition-colors duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
