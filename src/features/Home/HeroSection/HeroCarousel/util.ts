import {
  JARDIM_MALU_IMAGE_1,
  JARDIM_MALU_IMAGE_2,
  JARDIM_MALU_IMAGE_3,
  JARDIM_MALU_IMAGE_4,
  JARDIM_MALU_IMAGE_5,
  JARDIM_MALU_IMAGE_6,
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
    url: JARDIM_MALU_IMAGE_1,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
    },
  },
  {
    url: JARDIM_MALU_IMAGE_2,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
    },
  },
  {
    url: JARDIM_MALU_IMAGE_3,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
    },
  },
  {
    url: JARDIM_MALU_IMAGE_4,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
    },
  },
  {
    url: JARDIM_MALU_IMAGE_5,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
    },
  },
  {
    url: JARDIM_MALU_IMAGE_6,
    projectSlug: "jardim-malu",
    projectName: {
      pt: "Jardim MALU",
      en: "MALU Garden",
      es: "Jardín MALU",
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
