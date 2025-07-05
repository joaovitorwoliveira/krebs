import { projects } from "../projects";
import { notFound } from "next/navigation";
import ImageGallery from "../../../components/Project/ImageGallery";
import { ProjectDetail } from "../../../components/Project/ProjectDetails";

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
      <div className="max-w-8xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl text-dark font-semibold mb-6">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <p className="text-dark font-light text-sm leading-relaxed">
              {project.texto}
            </p>
          </div>

          <div className="space-y-3">
            {projectDetails.map((detail) => (
              <ProjectDetail
                key={detail.label}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
        </div>
      </div>

      <ImageGallery images={project.images} projectTitle={project.title} />
    </div>
  );
}
