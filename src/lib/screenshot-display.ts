/** Bump when replacing files in public/projects/ to bust Next.js image cache */
export const PROJECT_IMAGE_VERSION = "20260608";

export function projectImageSrc(path: string): string {
  const base = path.split("?")[0]!;
  return `${base}?v=${PROJECT_IMAGE_VERSION}`;
}

/** Shared frame — screenshots sit inside without clipping */
export const screenshotFrameClass =
  "relative overflow-hidden bg-bg-secondary";

/** Case studies & project galleries — show the full screenshot */
export const screenshotImageClass =
  "size-full object-contain object-center";

/** Thumbnail strip — full preview, no crop */
export const screenshotThumbClass =
  "size-full object-contain object-center p-0.5";

/** IntervAI browser mockup — edge-to-edge fill (app UI screenshots) */
export const screenshotCoverClass =
  "size-full object-cover object-top";

export const screenshotAspectClass = "aspect-[16/10] w-full";

/** Taller frame for mixed mobile/desktop screenshots (case study main view) */
export const screenshotGalleryAspectClass =
  "aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px]";
