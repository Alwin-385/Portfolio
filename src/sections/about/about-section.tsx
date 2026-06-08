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
      className="section-about relative overflow-hidden"
    >
      {/* Dot-grid overlay */}
      <div className="section-about-grid pointer-events-none absolute inset-0" aria-hidden />
      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[var(--gradient-glow)] opacity-50"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-10 md:gap-12">
        <AboutSectionHeader />
        <AboutIntro />

        {/* Divider */}
        <div className="section-divider-blue" aria-hidden />

        <AboutFocusAreas />

        {/* Divider */}
        <div className="section-divider-purple" aria-hidden />

        <AboutInterests />

        <AboutHighlights />
      </div>
    </SectionContainer>
  );
}
