import imageCache from "@/common/data/image-cache.json";
import { projectMetadata } from "./project-metadata";
import { Project } from "./types";

type ImageCacheEntry = { number: number; url: string };
const cache = imageCache as Record<string, ImageCacheEntry[]>;

function resolveProjects(): Project[] {
  return projectMetadata.map((meta) => {
    const images = cache[meta.slug] || [];
    const imageUrls = images.map((img) => img.url);

    const coverImage = images.find(
      (img) => img.number === meta.coverPhotoIndex
    );

    return {
      slug: meta.slug,
      coverPhoto: coverImage?.url || imageUrls[0] || "",
      images: imageUrls,
      tags: meta.tags,
      conclusionDate: meta.conclusionDate,
    };
  });
}

export const projects = resolveProjects();
