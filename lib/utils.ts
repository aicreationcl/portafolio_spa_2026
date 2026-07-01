import type { DateRange } from "@/types/content";

type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

const MONTHS_ES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

function formatYearMonth(value: string): string {
  const [year, month] = value.split("-");
  const monthIndex = Number(month) - 1;
  return `${MONTHS_ES[monthIndex]} ${year}`;
}

export function formatDateRange(range: DateRange): string {
  const start = formatYearMonth(range.start);
  const end = range.end === "present" ? "Presente" : formatYearMonth(range.end);
  return `${start} — ${end}`;
}
