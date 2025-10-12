import {
  JARDIM_MALU_IMAGE_1,
  JARDIM_MALU_IMAGE_2,
  JARDIM_SVG_IMAGE_6,
  VARANDA_FEK_IMAGE_1,
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
    url: VARANDA_FEK_IMAGE_1,
    projectSlug: "varanda-fek",
    projectName: {
      pt: "Varanda FEK",
      en: "FEK Veranda",
      es: "Varanda FEK",
    },
  },
  {
    url: JARDIM_SVG_IMAGE_6,
    projectSlug: "jardim-svg",
    projectName: {
      pt: "Jardim SVG",
      en: "SVG Garden",
      es: "Jardín SVG",
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
