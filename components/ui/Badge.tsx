interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="label-mono border-border bg-surface-high text-foreground border px-2 py-1">
      {children}
    </span>
  );
}
