export const images = [
  "/images/projects/jardim-malu/foto-2.jpg",
  "/images/projects/jardim-svg/foto-5.jpg",
  "/images/projects/jardim-ltx/foto-8.jpg",
  "/images/projects/jardim-svg/foto-2.jpg",
  "/images/projects/jardim-svg/foto-4.jpg",
  "/images/projects/jardim-atj/foto-3.jpg",
  "/images/projects/jardim-atj/foto-1.jpg",
];

export const getProjectName = (imagePath: string): string => {
  const pathParts = imagePath.split("/");
  const projectFolder = pathParts.find((part) => part.startsWith("jardim-"));
  return projectFolder
    ? projectFolder.replace("jardim-", "Jardim ").toUpperCase()
    : "";
};

export const getProjectSlug = (imagePath: string): string => {
  const pathParts = imagePath.split("/");
  const projectFolder = pathParts.find((part) => part.startsWith("jardim-"));
  return projectFolder || "";
};

export const checkScreenSize = (): boolean => {
  return window.innerWidth < 768;
};
