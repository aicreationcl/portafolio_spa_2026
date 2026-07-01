import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span className={cn(className)}>
      Dvlpr<span className="text-accent">_Chris</span>
    </span>
  );
}
