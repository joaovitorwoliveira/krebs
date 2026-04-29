import type { Language } from "@/languages";

const localeMap: Record<Language, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export function formatBlogDate(iso: string, language: Language = "pt"): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(localeMap[language], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}
