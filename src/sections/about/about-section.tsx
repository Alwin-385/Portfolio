import { SectionContainer } from "@/components/layout/section-container";
import { AboutFocusAreas } from "@/sections/about/about-focus";
import { AboutHighlights } from "@/sections/about/about-highlights";
import { AboutIntro, AboutSectionHeader } from "@/sections/about/about-intro";
import { AboutInterests } from "@/sections/about/about-interests";

export function AboutSection() {
  return (
    <SectionContainer
      id="about"
      label="About"
      description="Learn about Alwin Baby — background, focus areas, and highlights"
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[var(--gradient-glow)] opacity-40"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-12 md:gap-16 lg:gap-20">
        <AboutSectionHeader />
        <AboutIntro />
        <AboutFocusAreas />
        <AboutInterests />
        <AboutHighlights />
      </div>
    </SectionContainer>
  );
}
