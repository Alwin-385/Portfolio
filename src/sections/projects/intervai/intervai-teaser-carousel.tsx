"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useCallback, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import type { ProjectScreenshot } from "@/data/project-images";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { IntervaiBrowserMockup } from "./intervai-browser-mockup";

type IntervaiTeaserCarouselProps = {
  screenshots: ProjectScreenshot[];
  className?: string;
};

export function IntervaiTeaserCarousel({ screenshots, className }: IntervaiTeaserCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const active = screenshots[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
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
    <div className={cn("flex min-w-0 flex-col gap-4", className)}>
      <div className="min-w-0 overflow-hidden">
        <IntervaiBrowserMockup
          imageSrc={active.src}
          imageAlt={active.alt}
          direction={direction}
          interactive={false}
          priority={activeIndex === 0}
        />
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <p className="text-center text-sm font-medium text-foreground sm:text-left">
          {active.title}
        </p>

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }))}
          >
            <ChevronLeft className="size-5" />
          </button>

          <div
            className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1"
            role="tablist"
            aria-label="Screenshot navigation"
          >
            {screenshots.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={shot.title}
                onClick={() => goTo(index)}
                className="touch-target touch-manipulation inline-flex items-center justify-center rounded-full"
              >
                <span
                  className={cn(
                    "carousel-dot",
                    index === activeIndex ? "carousel-dot-active" : "carousel-dot-inactive",
                  )}
                  aria-hidden
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className={cn(buttonVariants({ variant: "secondary", size: "icon-sm" }))}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <m.p
            key={active.src}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-metadata text-muted-foreground tabular-nums"
          >
            {activeIndex + 1} / {screenshots.length}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
