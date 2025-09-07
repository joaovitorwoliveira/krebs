"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import { useLanguage } from "@/context/LanguageProvider";

import ImageGallery from "../../../components/Project/ImageGallery";
import ProjectTexts from "../../../components/Project/ProjectTexts";
import { projects } from "../projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }


  const projectTranslation = t.projects.items[slug as keyof typeof t.projects.items];
  
  const projectDetails = [
    { label: t.projectDetails.completionYear, value: projectTranslation?.date || project.date },
    { label: t.projectDetails.location, value: projectTranslation?.place || project.place },
    ...(project.architecture ? [{ label: t.projectDetails.architecture, value: (projectTranslation as any)?.architecture || project.architecture }] : []),
    { label: t.projectDetails.photography, value: projectTranslation?.photo || project.photo },
  ].filter(detail => detail.value); 

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10 pt-10">
        <ProjectTexts
          title={projectTranslation?.title || project.title}
          description={projectTranslation?.description || project.texto}
          projectDetails={projectDetails}
        />
      </div>

      <ImageGallery images={project.images} projectTitle={projectTranslation?.title || project.title} />
    </div>
  );
}
