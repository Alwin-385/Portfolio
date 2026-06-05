import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TypographyProps = {
  className?: string;
  children: ReactNode;
  as?: ElementType;
};

export function HeroTitle({
  className,
  children,
  as: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-hero text-balance text-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({
  className,
  children,
  as: Component = "h2",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-section-title text-balance text-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function CardTitleText({
  className,
  children,
  as: Component = "h3",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading text-card-title text-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function BodyText({
  className,
  children,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-body text-foreground", className)}>
      {children}
    </Component>
  );
}

export function DescriptionText({
  className,
  children,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-description", className)}>
      {children}
    </Component>
  );
}

export function MetadataText({
  className,
  children,
  as: Component = "span",
}: TypographyProps) {
  return (
    <Component className={cn("text-metadata", className)}>
      {children}
    </Component>
  );
}

export function LabelText({
  className,
  children,
  as: Component = "span",
}: TypographyProps) {
  return (
    <Component className={cn("text-label", className)}>
      {children}
    </Component>
  );
}
