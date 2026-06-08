import { PageWrapper } from "@/components/layout/page-wrapper";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { IntervaiTeaserSection } from "@/sections/projects/intervai/intervai-teaser-section";
import { OtherProjectsSection } from "@/sections/projects/other-projects-section";
import { SkillsSection } from "@/sections/skills";
import { CurrentFocusSection } from "@/sections/current-focus/current-focus-section";
import { ExperienceSection } from "@/sections/experience/experience-section";
import { ResumeSection } from "@/sections/resume/resume-section";
import { ContactSection } from "@/sections/contact/contact-section";

export default function HomePage() {
  return (
    <PageWrapper>
      <main id="main-content" className="relative flex min-w-0 flex-1 flex-col overflow-x-clip">
        <HeroSection />

        <AboutSection />

        <IntervaiTeaserSection />

        <OtherProjectsSection />

        <ExperienceSection />

        <SkillsSection />

        <CurrentFocusSection />

        <ResumeSection />

        <ContactSection />
      </main>
    </PageWrapper>
  );
}
