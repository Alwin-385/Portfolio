import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import { CONTAINER_WIDTH, SECTION_SPACING } from "@/lib/constants";
import type { PageWrapperProps } from "@/types";

export function PageWrapper({ className, children }: PageWrapperProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-dvh w-full flex-col overflow-x-clip bg-background text-foreground",
        className,
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      {children}
    </div>
  );
}

export const pageContainerClass = cn(
  "mx-auto w-full",
  SECTION_SPACING.x.mobile,
  SECTION_SPACING.x.tablet,
  SECTION_SPACING.x.desktop,
);

export const pageMaxWidthClass = cn(
  "max-w-[var(--container-max)]",
);

export const pageContainerStyles = {
  "--container-max": CONTAINER_WIDTH["2xl"],
} as CSSProperties;
