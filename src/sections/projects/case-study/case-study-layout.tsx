import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { PageWrapper } from "@/components/layout/page-wrapper";
import {
  pageContainerClass,
  pageContainerStyles,
  pageMaxWidthClass,
} from "@/components/layout/page-wrapper";
import { SocialIcon } from "@/components/navigation/social-icon";
import { LiveDemoColdStartNote } from "@/components/ui/live-demo-cold-start-note";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardTitleText, DescriptionText, HeroTitle, LabelText } from "@/components/ui/typography";
import { NAV_HEIGHT } from "@/data/navigation";
import { projectHasRenderColdStart } from "@/data/project-deployment";
import type { ProjectCaseStudy } from "@/data/projects";
import { cn } from "@/lib/utils";
type CaseStudyHeroProps = {
  project: ProjectCaseStudy;
};

const statusLabels = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
} as const;

const statusVariants = {
  live: "active" as const,
  beta: "beta" as const,
  "coming-soon": "coming-soon" as const,
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="relative border-b border-default bg-bg-secondary/30">
      <div
        className={cn(pageContainerClass, pageMaxWidthClass, "min-w-0 max-w-4xl pb-10 pt-6 md:pb-14 md:pt-8")}
        style={{
          ...pageContainerStyles,
          paddingTop: `calc(${NAV_HEIGHT}px + env(safe-area-inset-top, 0px) + 1.5rem)`,
        }}
      >
        <Link
          href="/#featured-project"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "relative z-10 mb-8 inline-flex w-fit items-center gap-2 text-muted-foreground hover:text-foreground",
          )}
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden />
          <span>Back to portfolio</span>
        </Link>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <LabelText>Case Study</LabelText>
            <Badge variant="status" status={statusVariants[project.status]}>
              {statusLabels[project.status]}
            </Badge>
            {project.scopeLabel ? (
              <Badge variant="tech" className="border-accent-purple/30 text-accent-purple">
                {project.scopeLabel}
              </Badge>
            ) : null}
          </div>
          <HeroTitle as="h1" className="text-[clamp(2rem,4vw,3.25rem)]">
            {project.name}
          </HeroTitle>
          <p className="text-lg font-medium gradient-accent-text">{project.tagline}</p>
          <DescriptionText className="max-w-2xl text-base text-pretty">
            {project.overview}
          </DescriptionText>

          <div className="space-y-3 pt-2">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "accent" }), "mobile-full-width")}
                >
                  Live Demo
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "secondary" }), "mobile-full-width")}
                >
                  <SocialIcon name="github" />
                  {project.upstreamGithubUrl ? "My Fork" : "GitHub"}
                </a>
              ) : null}
              {project.upstreamGithubUrl ? (
                <a
                  href={project.upstreamGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "mobile-full-width")}
                >
                  <SocialIcon name="github" />
                  Main Project
                </a>
              ) : null}
            </div>
            {project.liveUrl && projectHasRenderColdStart(project.slug) ? (
              <LiveDemoColdStartNote />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

type CaseStudySectionProps = {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function CaseStudySection({
  label,
  title,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section className={cn("space-y-5", className)}>
      <div className="space-y-2">
        <div className="flex items-center gap-2.5">
          <span
            className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple"
            aria-hidden
          />
          <LabelText>{label}</LabelText>
        </div>
        <CardTitleText as="h2" className="text-section-title">
          {title}
        </CardTitleText>
      </div>
      {children}
    </section>
  );
}

export function CaseStudyPageShell({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <main id="main-content" className="relative flex flex-1 flex-col">
        {children}
      </main>
    </PageWrapper>
  );
}

export function CaseStudyContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        pageContainerClass,
        pageMaxWidthClass,
        "min-w-0 max-w-4xl space-y-14 py-12 md:space-y-16 md:py-16",
      )}
      style={pageContainerStyles}
    >
      {children}
    </div>
  );
}
