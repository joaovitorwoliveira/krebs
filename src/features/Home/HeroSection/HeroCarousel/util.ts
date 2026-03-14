import {
  EDIFICIO_PAIX_IMAGE_3,
  JARDIM_ATJ_IMAGE_6,
  JARDIM_FLV_IMAGE_8,
  SURFLAND_IMAGE_4,
  THE_GARDEN_IMAGE_32,
  UNISINOS_IMAGE_1,
} from "@/common/constants/db-images";

export interface HeroImage {
  url: string;
  projectSlug: string;
  projectName: {
    pt: string;
    en: string;
    es: string;
  };
}

export const heroImages: HeroImage[] = [
  {
    url: JARDIM_FLV_IMAGE_8,
    projectSlug: "jardim-flv",
    projectName: {
      pt: "Jardim FLV",
      en: "FLV Garden",
      es: "Jardim FLV",
    },
  },
  {
    url: UNISINOS_IMAGE_1,
    projectSlug: "unisinos",
    projectName: {
      pt: "Unisinos",
      en: "Unisinos",
      es: "Unisinos",
    },
  },
  {
    url: JARDIM_ATJ_IMAGE_6,
    projectSlug: "jardim-atj",
    projectName: {
      pt: "Jardim ATJ",
      en: "ATJ Garden",
      es: "Jardim ATJ",
    },
  },
  {
    url: THE_GARDEN_IMAGE_32,
    projectSlug: "the-garden",
    projectName: {
      pt: "The Garden",
      en: "The Garden",
      es: "The Garden",
    },
  },
  {
    url: SURFLAND_IMAGE_4,
    projectSlug: "surfland",
    projectName: {
      pt: "Surfland",
      en: "Surfland",
      es: "Surfland",
    },
  },
  {
    url: EDIFICIO_PAIX_IMAGE_3,
    projectSlug: "edificio-paix",
    projectName: {
      pt: "Edifício Paix",
      en: "Paix Building",
      es: "Edifício Paix",
    },
  },
];

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
