"use client";

import { ExternalLink, FileText } from "lucide-react";
import { m } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { resumePreviewMeta } from "@/data/resume";
import { cn } from "@/lib/utils";

type ResumePreviewCardProps = {
  fileUrl: string;
  /** Page-1 export — sharpest preview; falls back to live PDF embed if missing */
  previewImage?: string;
  className?: string;
};

export function ResumePreviewCard({
  fileUrl,
  previewImage,
  className,
}: ResumePreviewCardProps) {
  return (
    <m.a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default bg-bg-elevated shadow-elevation-md",
        "transition-all duration-400",
        "hover:border-border-accent hover:shadow-elevation-xl hover:shadow-glow-accent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
        className,
      )}
      aria-label="View resume PDF"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.68 0.16 250 / 12%) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative p-5 sm:p-6 md:p-8">
        {/* Browser-style frame */}
        <div
          className={cn(
            "relative mx-auto w-full max-w-[320px] overflow-hidden rounded-lg",
            "border border-default bg-bg-primary shadow-elevation-sm",
            "transition-transform duration-500 group-hover:scale-[1.02]",
          )}
        >
          <div className="flex items-center justify-between border-b border-default bg-bg-secondary px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-accent-blue/60" aria-hidden />
              <span className="size-2 rounded-full bg-accent-purple/60" aria-hidden />
              <span className="size-2 rounded-full bg-border-strong" aria-hidden />
            </div>
            <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
              <FileText className="size-3 text-accent-blue" aria-hidden />
              PDF
            </span>
          </div>

          <div className="relative aspect-[8.5/11] w-full bg-white dark:bg-zinc-100">
            <ResumePreviewContent fileUrl={fileUrl} previewImage={previewImage} />
          </div>
        </div>

        <div className="mt-5 space-y-1 text-center">
          <p className="font-heading text-lg font-semibold text-foreground">
            {resumePreviewMeta.title}
          </p>
          <p className="text-sm text-muted-foreground">{resumePreviewMeta.subtitle}</p>
          <p className="inline-flex items-center justify-center gap-1 pt-1 text-xs font-medium text-accent-blue opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            <ExternalLink className="size-3" aria-hidden />
            Click to open full PDF
          </p>
        </div>
      </div>
    </m.a>
  );
}

function ResumePreviewContent({
  fileUrl,
  previewImage,
}: {
  fileUrl: string;
  previewImage?: string;
}) {
  const [coverMissing, setCoverMissing] = useState(false);

  if (previewImage && !coverMissing) {
    return (
      <Image
        src={previewImage}
        alt="Resume first page preview"
        fill
        className="object-contain object-top"
        sizes="(max-width: 768px) 280px, 320px"
        loading="lazy"
        onError={() => setCoverMissing(true)}
      />
    );
  }

  return <ResumePdfEmbed fileUrl={fileUrl} />;
}

function ResumePdfEmbed({ fileUrl }: { fileUrl: string }) {
  const embedSrc = `${fileUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <>
      <iframe
        src={embedSrc}
        title="Resume preview"
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
        tabIndex={-1}
      />
      {/* Soft fade at bottom so PDF viewer chrome feels cropped */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/90 to-transparent dark:from-zinc-100/90"
        aria-hidden
      />
    </>
  );
}
