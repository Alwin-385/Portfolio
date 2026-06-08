"use client";

import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";
import { useCallback, useState } from "react";

import { intervaiFadeUp } from "@/animations/intervai-variants";
import { SocialIcon } from "@/components/navigation/social-icon";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DescriptionText, HeroTitle } from "@/components/ui/typography";
import {
  intervaiMeta,
  intervaiScreens,
  type IntervaiScreenId,
} from "@/data/intervai";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { IntervaiBrowserMockup } from "./intervai-browser-mockup";

export function IntervaiHero() {
  const prefersReducedMotion = useReducedMotion();
  const [activeScreen, setActiveScreen] = useState<IntervaiScreenId>("landing");
  const [direction, setDirection] = useState(0);

  const handleScreenChange = useCallback(
    (id: IntervaiScreenId) => {
      const currentIndex = intervaiScreens.findIndex((s) => s.id === activeScreen);
      const nextIndex = intervaiScreens.findIndex((s) => s.id === id);
      setDirection(nextIndex > currentIndex ? 1 : -1);
      setActiveScreen(id);
    },
    [activeScreen],
  );

  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
      <m.div
        className="flex min-w-0 flex-col gap-6"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={intervaiFadeUp}
      >
        <div className="space-y-3">
          <HeroTitle as="h3" className="text-[clamp(2rem,4vw,3rem)] leading-none">
            {intervaiMeta.name}
          </HeroTitle>
          <p className="text-lg font-medium gradient-accent-text">
            {intervaiMeta.tagline}
          </p>
        </div>

        <DescriptionText className="max-w-xl text-left text-pretty text-base">
          {intervaiMeta.shortDescription}
        </DescriptionText>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <MagneticButton href={intervaiMeta.liveDemoUrl} variant="accent" external>
            Live Demo
            <ArrowUpRight className="size-4" aria-hidden />
          </MagneticButton>
          <MagneticButton href={intervaiMeta.githubUrl} variant="secondary" external>
            <SocialIcon name="github" />
            GitHub
          </MagneticButton>
        </div>

        {/* Screen tabs — mobile preview selector */}
        <div className="flex flex-wrap gap-2 lg:hidden">
          {intervaiScreens.slice(0, 4).map((screen) => (
            <button
              key={screen.id}
              type="button"
              onClick={() => handleScreenChange(screen.id)}
              className={`rounded-full border px-3 py-1 text-metadata transition-colors ${
                activeScreen === screen.id
                  ? "border-border-accent bg-accent-blue-muted text-accent-blue"
                  : "border-default bg-bg-secondary text-muted-foreground hover:border-border-strong"
              }`}
            >
              {screen.title}
            </button>
          ))}
        </div>
      </m.div>

      <m.div
        className="relative min-w-0"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={intervaiFadeUp}
      >
        <IntervaiBrowserMockup
          screenId={activeScreen}
          direction={direction}
          interactive
        />

        {/* Desktop screen picker */}
        <div className="mt-4 hidden flex-wrap justify-center gap-2 lg:flex">
          {intervaiScreens.map((screen) => (
            <button
              key={screen.id}
              type="button"
              onClick={() => handleScreenChange(screen.id)}
              className={`rounded-full border px-3 py-1.5 text-metadata transition-all duration-200 ${
                activeScreen === screen.id
                  ? "border-border-accent bg-accent-blue-muted text-accent-blue shadow-glow-accent"
                  : "border-default bg-bg-elevated text-muted-foreground hover:border-border-accent hover:text-foreground"
              }`}
            >
              {screen.title}
            </button>
          ))}
        </div>
      </m.div>
    </div>
  );
}
