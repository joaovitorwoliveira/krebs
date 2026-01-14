import {
  EDIFICIO_PAIX_IMAGE_3,
  PRADO_BAIRRO_CIDADE_IMAGE_1,
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
    url: EDIFICIO_PAIX_IMAGE_3,
    projectSlug: "edificio-paix",
    projectName: {
      pt: "Edifício Paix",
      en: "Paix Building",
      es: "Edificio Paix",
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
    url: PRADO_BAIRRO_CIDADE_IMAGE_1,
    projectSlug: "prado-bairro-cidade",
    projectName: {
      pt: "Prado Bairro Cidade",
      en: "Prado Bairro Cidade",
      es: "Prado Bairro Cidade",
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
