import type { ReactNode } from "react";

interface TimelineItemProps {
  dateLabel: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function TimelineItem({ dateLabel, title, subtitle, children }: TimelineItemProps) {
  return (
    <div className="border-border relative border-l pl-6">
      <span
        className="bg-accent absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-sm"
        aria-hidden="true"
      />
      <p className="label-mono text-accent">{dateLabel}</p>
      <h3 className="text-foreground mt-1 font-semibold">{title}</h3>
      <p className="text-muted text-sm">{subtitle}</p>
      {children}
    </div>
  );
}
