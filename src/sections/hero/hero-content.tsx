"use client";

import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";

import {
  heroFadeIn,
  heroStaggerContainer,
  heroStaggerItem,
} from "@/animations/hero-variants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SocialIcon } from "@/components/navigation/social-icon";
import { LabelText } from "@/components/ui/typography";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroContentProps = {
  className?: string;
};

export function HeroContent({ className }: HeroContentProps) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: heroStaggerContainer,
      };

  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <m.div
        className="flex w-full flex-col items-stretch gap-6 md:gap-8"
        {...motionProps}
      >
        {/* Status badge */}
        <m.div
          className="flex justify-center"
          variants={prefersReducedMotion ? undefined : heroStaggerItem}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-default bg-bg-elevated/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-blue opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-blue" />
            </span>
            <LabelText className="normal-case tracking-wide text-foreground/80">
              Available for opportunities
            </LabelText>
          </span>
        </m.div>

        {/* Headline */}
        <m.div
          className="w-full text-center"
          variants={prefersReducedMotion ? undefined : heroStaggerItem}
        >
          <h1 className="font-heading text-hero text-balance tracking-tight">
            <span className="block text-foreground">{siteConfig.name}</span>
            <span className="mt-2 block gradient-accent-text">
              {siteConfig.role}
            </span>
          </h1>
        </m.div>

        {/* Tagline + Description */}
        <m.div
          className="mx-auto w-full max-w-2xl space-y-5"
          variants={prefersReducedMotion ? undefined : heroStaggerItem}
        >
          <div
            className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-accent-blue/60 to-transparent"
            aria-hidden
          />

          <p className="hero-tagline text-center text-pretty">
            {siteConfig.tagline}
          </p>

          <div className="hero-description-panel">
            <p className="hero-description text-center text-pretty">
              {siteConfig.heroDescription}
            </p>
          </div>
        </m.div>

        {/* CTAs */}
        <m.div
          className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap"
          variants={prefersReducedMotion ? undefined : heroStaggerItem}
        >
          <MagneticButton href="#projects" variant="accent">
            View Projects
            <ArrowUpRight className="size-4" aria-hidden />
          </MagneticButton>
          <MagneticButton href="#resume" variant="secondary">
            View Resume
          </MagneticButton>
          <MagneticButton
            href={siteConfig.author.github ?? "https://github.com"}
            variant="ghost"
            external
            className="gap-2.5"
          >
            <SocialIcon name="github" />
            GitHub
          </MagneticButton>
        </m.div>
      </m.div>

      {/* Scroll hint */}
      {!prefersReducedMotion ? (
        <m.div
          className="mt-12 flex justify-center md:mt-16"
          variants={heroFadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center gap-2 text-metadata text-muted-foreground">
            <span>Scroll to explore</span>
            <m.span
              className="block h-8 w-px bg-gradient-to-b from-accent-blue/60 to-transparent"
              animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            />
          </div>
        </m.div>
      ) : null}
    </div>
  );
}
