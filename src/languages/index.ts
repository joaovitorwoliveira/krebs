import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

export type Language = "pt" | "en" | "es";

export const languages = {
  pt,
  en,
  es,
};

export const defaultLanguage: Language = "pt";

export const languageLabels = {
  pt: "Português",
  en: "English",
  es: "Español",
} as const;

export type TranslationKeys = typeof pt;