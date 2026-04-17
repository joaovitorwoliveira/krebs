import imageCache from "@/common/data/image-cache.json";

type ImageCacheEntry = { number: number; url: string };
const cache = imageCache as Record<string, ImageCacheEntry[]>;

export interface HeroImage {
  url: string;
  projectSlug: string;
  projectName: {
    pt: string;
    en: string;
    es: string;
  };
}

interface HeroConfig {
  projectSlug: string;
  imageIndex: number;
  projectName: { pt: string; en: string; es: string };
}

const heroConfig: HeroConfig[] = [
  {
    projectSlug: "jardim-flv",
    imageIndex: 8,
    projectName: { pt: "Jardim FLV", en: "FLV Garden", es: "Jardim FLV" },
  },
  {
    projectSlug: "the-garden",
    imageIndex: 28,
    projectName: { pt: "The Garden", en: "The Garden", es: "The Garden" },
  },
  {
    projectSlug: "unisinos",
    imageIndex: 1,
    projectName: { pt: "Unisinos", en: "Unisinos", es: "Unisinos" },
  },
  {
    projectSlug: "jardim-atj",
    imageIndex: 6,
    projectName: { pt: "Jardim ATJ", en: "ATJ Garden", es: "Jardim ATJ" },
  },
  {
    projectSlug: "surfland",
    imageIndex: 4,
    projectName: { pt: "Surfland", en: "Surfland", es: "Surfland" },
  },
  {
    projectSlug: "edificio-paix",
    imageIndex: 3,
    projectName: {
      pt: "Edifício Paix",
      en: "Paix Building",
      es: "Edifício Paix",
    },
  },
];

function resolveHeroImage(config: HeroConfig): string {
  const images = cache[config.projectSlug] || [];
  const match = images.find((img) => img.number === config.imageIndex);
  return match?.url || images[0]?.url || "";
}

export const heroImages: HeroImage[] = heroConfig.map((config) => ({
  url: resolveHeroImage(config),
  projectSlug: config.projectSlug,
  projectName: config.projectName,
}));

export { heroImages as images };

export const getProjectName = (
  heroImage: HeroImage,
  currentLanguage: "pt" | "en" | "es"
): string => {
  return heroImage.projectName[currentLanguage] || heroImage.projectName.pt;
};

export const getProjectSlug = (heroImage: HeroImage): string => {
  return heroImage.projectSlug;
};

export const checkScreenSize = (): boolean => {
  return window.innerWidth < 768;
};
