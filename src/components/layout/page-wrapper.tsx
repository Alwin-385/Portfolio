import type { CSSProperties } from "react";

import { Navbar } from "@/components/navigation";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
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
      <ScrollProgressBar />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Navbar />
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
