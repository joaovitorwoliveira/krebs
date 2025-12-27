"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";
import { projects } from "@/features/Projects/projects";

import { cn } from "@/lib/utils";

const featuredProjects = ["jardim-flv", "jardim-svg", "shopping-iguatemi"];

export default function ProjectsHome() {
  const { t } = useLanguage();

  const featuredProjectsData = featuredProjects
    .map((slug) => {
      const project = projects.find((p) => p.slug === slug);
      if (!project) return null;
      return {
        ...project,
        title:
          t.projects.items[slug as keyof typeof t.projects.items]?.title ||
          slug,
      };
    })
    .filter(
      (project): project is NonNullable<typeof project> => project !== null
    );

  return (
    <div className="relative z-40 bg-white">
      <div className="flex flex-col gap-6 py-10 px-6 lg:px-10 lg:py-20 2xl:px-20">
        <h2
          className={cn(
            "text-dark font-semibold leading-tight uppercase max-w-4xl",
            "text-3xl md:text-5xl",
            "lg:text-6xl 2xl:text-7xl"
          )}
        >
          {t.home.projectsHome.title}
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-6 w-full pt-4 max-w-[1400px]",
            "md:grid-cols-3 md:mx-auto",
            "lg:gap-12",
            "2xl:pt-16"
          )}
        >
          {featuredProjectsData.map((project) => {
            const imageCover = project.coverPhoto;
            return (
              <div key={project.slug} className="flex flex-col gap-4">
                <Link
                  href={`/projetos/${project.slug}`}
                  className="relative group cursor-pointer block"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={imageCover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-101"
                    />
                  </div>
                </Link>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-dark text-base font-inter-semibold uppercase flex-1">
                    {project.title}
                  </h3>
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="flex-shrink-0"
                  >
                    <Button
                      variant="icon"
                      text={t.home.seeProject}
                      className="text-sm md:text-base"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
