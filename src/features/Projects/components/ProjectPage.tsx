"use client";

import { notFound } from "next/navigation";

import { useLanguage } from "@/context/LanguageProvider";
import { projects } from "@/features/Projects/projects";

import { cn } from "@/lib/utils";

import type { ProjectPageProps } from "../types";
import ImageGallery from "./ImageGallery";
import ProjectTexts from "./ProjectTexts";

export default function ProjectPage({ slug, className }: ProjectPageProps) {
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectTranslation =
    t.projects.items[slug as keyof typeof t.projects.items];

  const projectDetails = [
    {
      label: t.projectDetails.completionYear,
      value: projectTranslation?.date,
    },
    {
      label: t.projectDetails.location,
      value: projectTranslation?.place,
    },
    ...(projectTranslation && "architecture" in projectTranslation
      ? [
          {
            label: t.projectDetails.architecture,
            value: projectTranslation.architecture,
          },
        ]
      : []),
    ...(projectTranslation && "interior" in projectTranslation
      ? [
          {
            label: t.projectDetails.interior,
            value: projectTranslation.interior,
          },
        ]
      : []),
    {
      label: t.projectDetails.photography,
      value: projectTranslation?.photo,
    },
  ].filter((detail) => detail.value);

  return (
    <div className={cn("min-h-screen", className)}>
      <div className="max-w-8xl mx-auto px-6 md:px-10 pt-10">
        <ProjectTexts
          title={projectTranslation?.title}
          description={projectTranslation?.description}
          projectDetails={projectDetails}
        />
      </div>

      <ImageGallery
        images={project.images}
        projectTitle={projectTranslation?.title}
      />
    </div>
  );
}
