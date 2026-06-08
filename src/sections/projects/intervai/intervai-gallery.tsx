"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useCallback, useRef, useState } from "react";

import { intervaiSlideReveal } from "@/animations/intervai-variants";
import { buttonVariants } from "@/components/ui/button";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import { getProjectScreenshots } from "@/data/project-images";
import { screenshotThumbClass } from "@/lib/screenshot-display";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { IntervaiBrowserMockup } from "./intervai-browser-mockup";

export function IntervaiGallery() {
  const prefersReducedMotion = useReducedMotion();
  const screenshots = getProjectScreenshots("intervai");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  const active = screenshots[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);

      const thumb = thumbRef.current?.children[index] as HTMLElement | undefined;
      thumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    },
    [activeIndex],
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex === 0 ? screenshots.length - 1 : activeIndex - 1);
  }, [activeIndex, goTo, screenshots.length]);

  const goNext = useCallback(() => {
    goTo(activeIndex === screenshots.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, goTo, screenshots.length]);

  if (!active) return null;

  return (
    <div className="w-full min-w-0 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span
              className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple"
              aria-hidden
            />
            <LabelText>Screenshots</LabelText>
          </div>
          <CardTitleText as="h3" className="text-section-title">
            Product walkthrough
          </CardTitleText>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }))}
          >
            <ChevronLeft className="size-5" />
          </button>
          <span className="min-w-[4rem] text-center text-metadata text-muted-foreground tabular-nums">
            {activeIndex + 1} / {screenshots.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }))}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="relative mx-auto min-w-0 w-full max-w-5xl overflow-hidden">
        <IntervaiBrowserMockup
          imageSrc={active.src}
          imageAlt={active.alt}
          direction={direction}
          interactive={false}
          priority={activeIndex === 0}
          fit="contain"
        />

        <AnimatePresence mode="wait">
          <m.div
            key={active.src}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center"
          >
            <p className="font-medium text-foreground">{active.title}</p>
          </m.div>
        </AnimatePresence>
      </div>

      <div
        ref={thumbRef}
        className="intervai-gallery-scroll flex gap-3 overflow-x-auto pb-2 md:justify-center"
        role="tablist"
        aria-label="Screenshot gallery"
      >
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={shot.title}
            onClick={() => goTo(index)}
            className={cn(
              "group relative shrink-0 overflow-hidden rounded-lg border transition-all duration-200",
              "w-[168px] sm:w-[200px] md:w-[220px]",
              index === activeIndex
                ? "border-border-accent shadow-glow-accent ring-2 ring-accent-blue/20"
                : "border-default opacity-70 hover:border-border-strong hover:opacity-100",
            )}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-secondary">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className={screenshotThumbClass}
                sizes="220px"
              />
            </div>
            <div className="border-t border-default bg-bg-elevated px-2 py-1.5">
              <p className="truncate text-metadata font-medium text-foreground">{shot.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
