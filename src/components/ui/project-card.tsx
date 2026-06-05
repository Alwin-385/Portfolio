import Link from "next/link";
import Image from "next/image";

import { CardTitleText, DescriptionText, MetadataText } from "@/components/ui/typography";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  metadata?: string;
  className?: string;
};

const cardClassName = cn(
  "group relative flex flex-col overflow-hidden rounded-[var(--radius-card-token)]",
  "border border-default bg-bg-elevated shadow-elevation-xs",
  "transition-all duration-300",
  "hover:border-border-accent hover:shadow-elevation-md hover:shadow-glow-accent",
);

export function ProjectCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  tags = [],
  metadata,
  className,
}: ProjectCardProps) {
  const content = (
    <>
      {imageSrc ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-subtle bg-bg-secondary">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-elevated/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-subtle gradient-accent-subtle">
          <div className="absolute inset-0 bg-[var(--gradient-glow)]" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-2">
          <CardTitleText className="transition-colors group-hover:text-accent-blue">
            {title}
          </CardTitleText>
          {metadata ? <MetadataText>{metadata}</MetadataText> : null}
        </div>

        <DescriptionText className="line-clamp-2">{description}</DescriptionText>

        {tags.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Tag key={tag} accent="blue">
                {tag}
              </Tag>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(cardClassName, "cursor-pointer", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn(cardClassName, className)}>{content}</div>;
}
