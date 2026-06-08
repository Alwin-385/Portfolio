"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { CardTitleText, LabelText } from "@/components/ui/typography";
import type { ProjectScreenshot } from "@/data/project-images";
import { getProjectScreenshotGroups } from "@/data/project-images";
import type { ProjectSlug } from "@/data/projects";
import {
  projectImageSrc,
  screenshotGalleryAspectClass,
  screenshotFrameClass,
  screenshotImageClass,
  screenshotThumbClass,
} from "@/lib/screenshot-display";
import { cn } from "@/lib/utils";

type ProjectScreenshotGalleryProps = {
  slug: ProjectSlug;
  className?: string;
};

type GalleryPanelProps = {
  screenshots: ProjectScreenshot[];
  groupLabel?: string;
};

function GalleryPanel({ screenshots, groupLabel }: GalleryPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screenshots[activeIndex];

  if (!active || screenshots.length === 0) return null;

  return (
    <div className="space-y-4">
      {groupLabel ? (
        <p className="text-sm font-medium text-accent-blue">{groupLabel}</p>
      ) : null}

      <div
        className={cn(
          screenshotGalleryAspectClass,
          screenshotFrameClass,
          "rounded-[var(--radius-card-token)] border border-default shadow-elevation-md",
        )}
      >
        <ScreenshotImage src={active.src} alt={active.alt} priority={activeIndex === 0} />
      </div>

      <p className="text-center text-sm font-medium text-foreground">{active.title}</p>

      {screenshots.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={shot.title}
              className={cn(
                "relative h-24 w-32 shrink-0 overflow-hidden rounded-md border bg-bg-secondary transition-all sm:h-28 sm:w-36",
                index === activeIndex
                  ? "border-border-accent ring-2 ring-accent-blue/20"
                  : "border-default opacity-70 hover:border-border-strong hover:opacity-100",
              )}
            >
              <ScreenshotImage src={shot.src} alt={shot.alt} thumbnail />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ProjectScreenshotGallery({ slug, className }: ProjectScreenshotGalleryProps) {
  const groups = useMemo(() => getProjectScreenshotGroups(slug), [slug]);
  const [activeGroup, setActiveGroup] = useState(0);

  if (groups.length === 0) return null;

  const hasMultiplePortals = groups.length > 1;
  const current = groups[activeGroup];

  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <div className="flex items-center gap-2.5">
          <span
            className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple"
            aria-hidden
          />
          <LabelText>Screenshots</LabelText>
        </div>
        <CardTitleText as="h3" className="text-section-title">
          {hasMultiplePortals ? "Dual-portal product walkthrough" : "Product preview"}
        </CardTitleText>
      </div>

      {hasMultiplePortals ? (
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Portal selection"
        >
          {groups.map(({ group }, index) => (
            <button
              key={group}
              type="button"
              role="tab"
              aria-selected={index === activeGroup}
              onClick={() => setActiveGroup(index)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                index === activeGroup
                  ? "border-border-accent bg-accent-blue-muted text-accent-blue shadow-glow-accent"
                  : "border-default bg-bg-secondary text-muted-foreground hover:border-border-strong hover:text-foreground",
              )}
            >
              {group}
            </button>
          ))}
        </div>
      ) : null}

      {current ? (
        <GalleryPanel
          key={current.group}
          screenshots={current.screenshots}
          groupLabel={hasMultiplePortals ? undefined : current.group}
        />
      ) : null}
    </div>
  );
}

function ScreenshotImage({
  src,
  alt,
  priority = false,
  thumbnail = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  thumbnail?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-bg-secondary text-metadata text-muted-foreground">
        Screenshot unavailable
      </div>
    );
  }

  return (
    <Image
      src={projectImageSrc(src)}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={thumbnail ? screenshotThumbClass : screenshotImageClass}
      sizes={thumbnail ? "144px" : "(max-width: 768px) 100vw, 900px"}
      onError={() => setFailed(true)}
    />
  );
}

/** Flat gallery for simple screenshot lists (no portal groups) */
export function ProjectScreenshotList({
  screenshots,
  className,
}: {
  screenshots: ProjectScreenshot[];
  className?: string;
}) {
  return (
    <div className={className}>
      <GalleryPanel screenshots={screenshots} />
    </div>
  );
}
