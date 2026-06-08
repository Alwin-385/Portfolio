"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { m } from "motion/react";

import { intervaiFadeUp } from "@/animations/intervai-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/navigation/social-icon";
import { LiveDemoColdStartNote } from "@/components/ui/live-demo-cold-start-note";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CardTitleText, DescriptionText } from "@/components/ui/typography";
import { featuredProject, PROJECT_ROUTES } from "@/data/projects";
import { intervaiTeaserImages } from "@/data/project-images";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { IntervaiTeaserCarousel } from "./intervai-teaser-carousel";

export function IntervaiTeaserSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="featured-project"
      label="Featured Project"
      description="IntervAI — flagship AI interview platform"
      className="intervai-showcase relative overflow-hidden"
      containerClassName="max-w-[1200px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[var(--intervai-glow)]"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-8 md:gap-10">
        <SectionHeading
          index="02"
          eyebrow="Featured Project"
          title="IntervAI"
          description="Solo-built, production-deployed AI platform — mock interviews, resume intelligence, analytics, and personalized roadmaps."
          titleId="featured-project-heading"
        />

        <m.div
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-card-token)] border border-default",
            "bg-bg-secondary/50 p-4 shadow-elevation-lg sm:p-5 md:p-7 lg:p-8",
          )}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={intervaiFadeUp}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[var(--gradient-glow)] opacity-60"
            aria-hidden
          />

          {/* Frame header */}
          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-default pb-5">
            <p className="text-label">Product overview</p>
            <Badge variant="status" status="active">
              Live Product
            </Badge>
          </div>

          <div className="relative grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left — overview, features, stack, CTAs */}
            <div className="flex min-w-0 flex-col gap-6">
              <DescriptionText className="text-left text-pretty text-base">
                {featuredProject.overview}
              </DescriptionText>

              <div className="space-y-3">
                <p className="text-label">Key features</p>
                <ul className="grid list-none gap-2 md:grid-cols-2">
                  {featuredProject.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="rounded-[var(--radius-button-token)] border border-default bg-bg-elevated/80 px-3 py-2.5"
                    >
                      <CardTitleText as="h4">
                        {feature.title}
                      </CardTitleText>
                      <p className="mt-0.5 text-metadata leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-label">Tech stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.techStack.slice(0, 8).map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                {featuredProject.liveUrl ? (
                  <MagneticButton
                    href={featuredProject.liveUrl}
                    variant="accent"
                    external
                    className="mobile-full-width"
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" aria-hidden />
                  </MagneticButton>
                ) : null}
                {featuredProject.githubUrl ? (
                  <MagneticButton
                    href={featuredProject.githubUrl}
                    variant="secondary"
                    external
                    className="mobile-full-width"
                  >
                    <SocialIcon name="github" />
                    GitHub
                  </MagneticButton>
                ) : null}
                <Link
                  href={PROJECT_ROUTES.intervai}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mobile-full-width",
                  )}
                >
                  View Full Case Study
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                </div>
                {featuredProject.liveUrl ? <LiveDemoColdStartNote /> : null}
              </div>
            </div>

            {/* Right — screenshot carousel */}
            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <IntervaiTeaserCarousel screenshots={intervaiTeaserImages} />
            </div>
          </div>
        </m.div>
      </div>
    </SectionContainer>
  );
}
