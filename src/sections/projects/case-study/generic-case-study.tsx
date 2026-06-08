import { Badge } from "@/components/ui/badge";
import { DescriptionText } from "@/components/ui/typography";
import type { ProjectCaseStudy } from "@/data/projects";

import {
  CaseStudyContent,
  CaseStudyHero,
  CaseStudyPageShell,
  CaseStudySection,
} from "./case-study-layout";
import { ProjectScreenshotGallery } from "../project-screenshot-gallery";

type GenericCaseStudyProps = {
  project: ProjectCaseStudy;
};

export function GenericCaseStudy({ project }: GenericCaseStudyProps) {
  return (
    <CaseStudyPageShell>
      <CaseStudyHero project={project} />
      <CaseStudyContent>
        <CaseStudySection label="Story" title="Project background">
          <div className="space-y-4">
            {project.story.map((paragraph, index) => (
              <DescriptionText key={index} className="text-left text-pretty text-base">
                {paragraph}
              </DescriptionText>
            ))}
          </div>
        </CaseStudySection>

        {project.roleSummary ? (
          <CaseStudySection
            label="Role"
            title={project.roleSectionTitle ?? "Solo full-stack ownership"}
          >
            <DescriptionText className="text-left text-pretty text-base">
              {project.roleSummary}
            </DescriptionText>
          </CaseStudySection>
        ) : null}

        {project.platformContext ? (
          <CaseStudySection label="Platform" title="Broader product context">
            <DescriptionText className="text-left text-pretty text-base">
              {project.platformContext}
            </DescriptionText>
          </CaseStudySection>
        ) : null}

        <CaseStudySection label="Features" title="What it does">
          <ul className="grid list-none gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-[var(--radius-card-token)] border border-default bg-bg-elevated p-4"
              >
                <p className="font-heading text-base font-medium text-foreground">
                  {feature.title}
                </p>
                <DescriptionText className="mt-1.5 text-sm">{feature.description}</DescriptionText>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection label="Technology" title="Stack & tools">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </CaseStudySection>

        <ProjectScreenshotGallery slug={project.slug} />

        {project.challenges.length > 0 ? (
          <CaseStudySection label="Challenges" title="Problems solved">
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 rounded-[var(--radius-button-token)] border border-default bg-bg-secondary/50 px-4 py-3"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-blue" />
                  <DescriptionText className="text-left text-pretty">{challenge}</DescriptionText>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}

        {project.learnings.length > 0 ? (
          <CaseStudySection label="Learnings" title="Key takeaways">
            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="flex gap-3 rounded-[var(--radius-button-token)] border border-default bg-bg-secondary/50 px-4 py-3"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-purple" />
                  <DescriptionText className="text-left text-pretty">{learning}</DescriptionText>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}
        {project.roadmapItems && project.roadmapItems.length > 0 ? (
          <CaseStudySection label="Roadmap" title="What's next">
            <ul className="space-y-3">
              {project.roadmapItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-[var(--radius-button-token)] border border-default bg-bg-secondary/50 px-4 py-3"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-purple" />
                  <DescriptionText className="text-left text-pretty">{item}</DescriptionText>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}
      </CaseStudyContent>
    </CaseStudyPageShell>
  );
}
