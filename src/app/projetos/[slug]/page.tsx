import { notFound } from "next/navigation";

import ImageGallery from "../../../components/Project/ImageGallery";
import ProjectTexts from "../../../components/Project/ProjectTexts";
import { projects } from "../projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectDetails = [
    { label: "Ano de conclusão", value: project.date },
    { label: "Local", value: project.place },
    { label: "Arquitetura", value: project.architecture },
    { label: "Fotografia", value: project.photo },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-6 pt-10">
        <ProjectTexts
          title={project.title}
          description={project.texto}
          projectDetails={projectDetails}
        />
      </div>

      <ImageGallery images={project.images} projectTitle={project.title} />
    </div>
  );
}
