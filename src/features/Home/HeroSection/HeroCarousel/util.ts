import {
  EDIFICIO_PAIX_IMAGE_3,
  JARDIM_ATJ_IMAGE_6,
  JARDIM_FLV_IMAGE_8,
  PRADO_BAIRRO_CIDADE_IMAGE_3,
  SURFLAND_IMAGE_4,
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
    url: PRADO_BAIRRO_CIDADE_IMAGE_3,
    projectSlug: "prado-bairro-cidade",
    projectName: {
      pt: "Prado Bairro Cidade",
      en: "Prado Bairro Cidade",
      es: "Prado Bairro Cidade",
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
