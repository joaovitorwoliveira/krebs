import { ProjectPage } from "@/features/Projects";
import { projects } from "@/features/Projects/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Project({ params }: PageProps) {
  const { slug } = await params;

  return <ProjectPage slug={slug} />;
}
