"use client";

import { useParams } from "next/navigation";

import { ProjectPage } from "@/features/Projects";

export default function Project() {
  const params = useParams();
  const slug = params.slug as string;

  return <ProjectPage slug={slug} />;
}
