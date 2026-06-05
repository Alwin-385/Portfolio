import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import {
  CardTitleText,
  DescriptionText,
  LabelText,
  MetadataText,
  SectionTitle,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { StatusVariant } from "@/lib/design-tokens";

type ShowcaseCardProps = {
  label?: string;
  title: string;
  description: string;
  status?: StatusVariant;
  children?: ReactNode;
  className?: string;
};

export function ShowcaseCard({
  label,
  title,
  description,
  status,
  children,
  className,
}: ShowcaseCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card-token)] p-xl",
        "gradient-border shadow-elevation-md",
        "transition-all duration-300 hover:shadow-elevation-lg hover:shadow-glow-accent",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[var(--gradient-glow)]"
        aria-hidden
      />

      <div className="relative flex flex-col gap-lg">
        <div className="flex items-center justify-between gap-md">
          {label ? <LabelText>{label}</LabelText> : <span />}
          {status ? (
            <Badge variant="status" status={status}>
              {status.replace("-", " ")}
            </Badge>
          ) : null}
        </div>

        <div className="space-y-sm">
          <SectionTitle as="h3" className="text-section-title max-w-xl">
            {title}
          </SectionTitle>
          <DescriptionText className="max-w-2xl">{description}</DescriptionText>
        </div>

        {children ? <div className="pt-md">{children}</div> : null}
      </div>
    </article>
  );
}

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  metadata?: string;
  className?: string;
};

export function InfoCard({
  icon,
  title,
  description,
  metadata,
  className,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-md rounded-[var(--radius-card-token)] border border-default",
        "bg-bg-secondary p-lg shadow-elevation-xs",
        "transition-all duration-200 hover:border-border-strong hover:shadow-elevation-sm",
        className,
      )}
    >
      {icon ? (
        <div className="flex size-10 items-center justify-center rounded-[var(--radius-button-token)] border border-subtle bg-bg-elevated text-accent-blue">
          {icon}
        </div>
      ) : null}

      <div className="space-y-xs">
        <div className="flex items-center justify-between gap-sm">
          <CardTitleText as="h4">{title}</CardTitleText>
          {metadata ? <MetadataText>{metadata}</MetadataText> : null}
        </div>
        <DescriptionText>{description}</DescriptionText>
      </div>
    </div>
  );
}
