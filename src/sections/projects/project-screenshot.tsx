"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProjectTheme } from "@/data/projects";
import {
  projectImageSrc,
  screenshotFrameClass,
  screenshotGalleryAspectClass,
  screenshotImageClass,
} from "@/lib/screenshot-display";
import { cn } from "@/lib/utils";

import { ProjectPreviewMockup } from "./project-preview-mockup";

type ProjectScreenshotProps = {
  src?: string;
  alt: string;
  projectName: string;
  theme?: ProjectTheme;
  priority?: boolean;
  className?: string;
  frame?: boolean;
};

export function ProjectScreenshot({
  src,
  alt,
  projectName,
  theme = "civic",
  priority = false,
  className,
  frame = true,
}: ProjectScreenshotProps) {
  const [failed, setFailed] = useState(false);

  const showFallback = !src || failed;

  if (showFallback) {
    return (
      <ProjectPreviewMockup
        theme={theme}
        projectName={projectName}
        className={className}
      />
    );
  }

  const image = (
    <Image
      src={projectImageSrc(src)}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={screenshotImageClass}
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setFailed(true)}
    />
  );

  if (!frame) {
    return (
      <div
        className={cn(
          screenshotGalleryAspectClass,
          screenshotFrameClass,
          "rounded-[var(--radius-card-token)] border border-default shadow-elevation-md",
          className,
        )}
      >
        {image}
      </div>
    );
  }

  return (
    <div
      className={cn(
        screenshotGalleryAspectClass,
        screenshotFrameClass,
        "rounded-[var(--radius-card-token)] border border-default shadow-elevation-md",
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-default bg-bg-elevated/95 px-3 py-2 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-500/70" />
          <span className="size-2 rounded-full bg-yellow-500/70" />
          <span className="size-2 rounded-full bg-green-500/70" />
        </div>
      </div>
      <div className="absolute inset-0 top-8">{image}</div>
    </div>
  );
}
