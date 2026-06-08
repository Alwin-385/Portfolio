import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GenericCaseStudy } from "@/sections/projects/case-study/generic-case-study";
import { IntervaiCaseStudy } from "@/sections/projects/case-study/intervai-case-study";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata("Project Not Found");
  }

  return createPageMetadata(`${project.name} — Case Study`, project.description);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (slug === "intervai") {
    return <IntervaiCaseStudy />;
  }

  return <GenericCaseStudy project={project} />;
}
