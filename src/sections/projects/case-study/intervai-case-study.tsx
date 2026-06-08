import {
  CaseStudyContent,
  CaseStudyHero,
  CaseStudyPageShell,
  CaseStudySection,
} from "@/sections/projects/case-study/case-study-layout";
import { IntervaiArchitecture } from "@/sections/projects/intervai/intervai-architecture";
import { IntervaiFeatures } from "@/sections/projects/intervai/intervai-features";
import { IntervaiGallery } from "@/sections/projects/intervai/intervai-gallery";
import { IntervaiTechStack } from "@/sections/projects/intervai/intervai-tech-stack";
import { DescriptionText } from "@/components/ui/typography";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export function IntervaiCaseStudy() {
  const project = getProjectBySlug("intervai");
  if (!project) notFound();

  return (
    <CaseStudyPageShell>
      <CaseStudyHero project={project} />
      <CaseStudyContent>
        <CaseStudySection label="Story" title="From idea to production">
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

        <IntervaiFeatures />
        <IntervaiTechStack />
        <IntervaiArchitecture />
        <IntervaiGallery />

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
      </CaseStudyContent>
    </CaseStudyPageShell>
  );
}
