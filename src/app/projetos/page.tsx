import { projects } from "./projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4  md:mx-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projetos/${project.slug}`}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={project.coverPhoto}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-101"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-2">
              <h3 className="text-dark text-xs font-light text-center">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
