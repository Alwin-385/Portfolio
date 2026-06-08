"use client";

import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { SocialIcon } from "@/components/navigation/social-icon";
import { LabelText } from "@/components/ui/typography";
import { pageContainerClass, pageContainerStyles } from "@/components/layout/page-wrapper";
import { aboutIntro } from "@/data/about";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroContentProps = {
  className?: string;
};

const STAGGER_DELAY = 0.1;

/** Cinema-style stagger item — blur + lift entrance */
const cinemaItem = (i: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1] as const,
    delay: 0.1 + i * STAGGER_DELAY,
  },
});

export function HeroContent({ className }: HeroContentProps) {
  const prefersReducedMotion = useReducedMotion();

  const item = (i: number) =>
    prefersReducedMotion ? {} : cinemaItem(i);

  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full min-w-0 max-w-4xl",
        pageContainerClass,
        className,
      )}
      style={pageContainerStyles}
    >
      <div className="flex w-full flex-col items-center gap-0 text-center">

        {/* ── 1. Status badge ── */}
        <m.div className="mb-8" {...item(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-default bg-bg-elevated/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex size-2">
              {!prefersReducedMotion ? (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-blue opacity-40" />
              ) : null}
              <span className="relative inline-flex size-2 rounded-full bg-accent-blue" />
            </span>
            <LabelText className="normal-case tracking-wide text-foreground/80">
              {aboutIntro.available}
            </LabelText>
          </span>
        </m.div>

        {/* ── 2. Name — gradient, dominant size ── */}
        <m.h1
          className="mb-5 font-heading text-hero font-semibold leading-[0.95] tracking-[-0.04em] gradient-accent-text"
          {...item(1)}
        >
          {siteConfig.name}
        </m.h1>

        {/* ── 3. Role · Tagline ── */}
        <m.p
          className="mb-10 text-[clamp(1.125rem,2vw+0.375rem,1.5rem)] font-medium leading-snug"
          {...item(2)}
        >
          <span className="text-muted-foreground">{siteConfig.role}</span>
          <span className="mx-3 text-border-strong" aria-hidden>·</span>
          <span className="text-foreground/90">{siteConfig.tagline}</span>
        </m.p>

        {/* ── 4. Description ── */}
        <m.p
          className="mb-12 w-full max-w-[56ch] text-pretty text-center text-base leading-[1.8] text-muted-foreground sm:text-[1.0625rem]"
          {...item(3)}
        >
          {siteConfig.heroDescription}
        </m.p>

        {/* ── 5. CTAs ── */}
        <m.div
          className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          {...item(4)}
        >
          <MagneticButton href="#featured-project" variant="accent" className="mobile-full-width">
            View Projects
            <ArrowUpRight className="size-4" aria-hidden />
          </MagneticButton>
          <MagneticButton href="#resume" variant="secondary" className="mobile-full-width">
            View Resume
          </MagneticButton>
          <MagneticButton
            href={siteConfig.author.github ?? "https://github.com"}
            variant="ghost"
            external
            className="mobile-full-width gap-2.5"
          >
            <SocialIcon name="github" />
            GitHub
          </MagneticButton>
        </m.div>
      </div>

      {/* ── Scroll hint ── */}
      {!prefersReducedMotion ? (
        <m.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-metadata text-muted-foreground/50">scroll</span>
            <m.span
              className="block h-12 w-px bg-gradient-to-b from-accent-blue/70 to-transparent"
              animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          </div>
        </m.div>
      ) : null}
    </div>
  );
}
