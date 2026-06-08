"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SocialIcon } from "@/components/navigation/social-icon";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardTitleText, DescriptionText, MetadataText } from "@/components/ui/typography";
import { Tag } from "@/components/ui/tag";
import type { ProjectCaseStudy } from "@/data/projects";
import { PROJECT_ROUTES } from "@/data/projects";
import { cn } from "@/lib/utils";

type CompactProjectCardProps = {
  project?: ProjectCaseStudy;
  comingSoon?: boolean;
  className?: string;
};

export function CompactProjectCard({
  project,
  comingSoon = false,
  className,
}: CompactProjectCardProps) {
  if (comingSoon || !project) {
    return (
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-[var(--radius-card-token)]",
          "border border-dashed border-default bg-bg-secondary/40",
          className,
        )}
      >
        <div className="relative aspect-[16/10] gradient-accent-subtle">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-label text-muted-foreground">Coming soon</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <CardTitleText className="text-muted-foreground">Future Project</CardTitleText>
          <DescriptionText className="text-sm">
            Next build in progress — AI-powered developer tool with a focus on workflow automation.
          </DescriptionText>
          <Badge variant="status" status="coming-soon" className="mt-auto w-fit">
            In development
          </Badge>
        </div>
      </article>
    );
  }

  const caseStudyHref = PROJECT_ROUTES[project.slug];
  const statusMap = {
    live: "active" as const,
    beta: "beta" as const,
    "coming-soon": "coming-soon" as const,
  };

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default bg-bg-elevated shadow-elevation-xs",
        "transition-all duration-300 hover:border-border-accent hover:shadow-elevation-md hover:shadow-glow-accent",
        className,
      )}
    >
      <Link href={caseStudyHref} className="relative aspect-[16/10] overflow-hidden border-b border-subtle">
        <div className="absolute inset-0 gradient-accent-subtle transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-[var(--gradient-glow)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <MetadataText className="text-foreground/50">{project.name}</MetadataText>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <Link href={caseStudyHref}>
            <CardTitleText className="transition-colors group-hover:text-accent-blue">
              {project.name}
            </CardTitleText>
          </Link>
          <Badge variant="status" status={statusMap[project.status]}>
            {project.status === "live" ? "Live" : project.status === "beta" ? "Beta" : "Soon"}
          </Badge>
        </div>

        <DescriptionText className="line-clamp-2 text-sm">{project.description}</DescriptionText>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Tag key={tech} accent="blue">
              {tech}
            </Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
            >
              Live
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              <SocialIcon name="github" className="size-3.5" />
              GitHub
            </a>
          ) : null}
          <Link
            href={caseStudyHref}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "ml-auto text-accent-blue hover:text-accent-blue",
            )}
          >
            Case Study →
          </Link>
        </div>
      </div>
    </article>
  );
}
