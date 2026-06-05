import { cn } from "@/lib/utils";
import { SECTION_SPACING } from "@/lib/constants";
import {
  pageContainerClass,
  pageContainerStyles,
  pageMaxWidthClass,
} from "@/components/layout/page-wrapper";
import type { SectionContainerProps } from "@/types";

export function SectionContainer({
  id,
  label,
  description,
  className,
  containerClassName,
  as: Component = "section",
  children,
}: SectionContainerProps) {
  const labelledBy = label && id ? `${id}-heading` : undefined;

  return (
    <Component
      id={id}
      aria-labelledby={labelledBy}
      aria-label={!labelledBy && label ? label : undefined}
      className={cn(
        "relative w-full",
        SECTION_SPACING.y.mobile,
        SECTION_SPACING.y.tablet,
        SECTION_SPACING.y.desktop,
        className,
      )}
    >
      <div
        className={cn(pageContainerClass, pageMaxWidthClass, containerClassName)}
        style={pageContainerStyles}
      >
        {label ? (
          <header className="sr-only">
            <h2 id={labelledBy}>{label}</h2>
            {description ? <p>{description}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </Component>
  );
}
