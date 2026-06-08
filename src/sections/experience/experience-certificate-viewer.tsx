"use client";

import { Award, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { buttonVariants } from "@/components/ui/button";
import type { ExperienceCertificate } from "@/data/experience";
import { cn } from "@/lib/utils";

type ExperienceCertificateViewerProps = {
  certificate: ExperienceCertificate;
};

export function ExperienceCertificateViewer({
  certificate,
}: ExperienceCertificateViewerProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          buttonVariants({ variant: "accent", size: "default" }),
          "group/cert relative overflow-hidden shadow-elevation-sm",
          "hover:shadow-glow-accent hover:brightness-110",
        )}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100"
          aria-hidden
        />
        <Award className="size-4 transition-transform duration-200 group-hover/cert:scale-110" aria-hidden />
        View Certificate
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
              <button
                type="button"
                className="absolute inset-0 bg-bg-primary/92 backdrop-blur-md"
                onClick={close}
                aria-label="Close certificate viewer"
              />

              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className={cn(
                  "relative z-10 flex w-full max-w-5xl flex-col overflow-hidden",
                  "max-h-[min(96dvh,52rem)]",
                  "rounded-[var(--radius-card-token)] border border-default bg-bg-elevated shadow-elevation-lg",
                )}
              >
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-default px-4 py-2.5 sm:px-5">
                  <p id={titleId} className="text-sm font-medium text-foreground">
                    {certificate.title}
                  </p>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={close}
                    className={cn(
                      "touch-target inline-flex size-9 items-center justify-center rounded-[var(--radius-button-token)]",
                      "border border-default text-muted-foreground transition-colors",
                      "hover:bg-bg-secondary hover:text-foreground",
                      "focus-visible:ring-2 focus-visible:ring-accent-blue/40",
                    )}
                    aria-label="Close certificate"
                  >
                    <X className="size-4" aria-hidden />
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-bg-secondary/30 p-3 sm:p-5">
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.alt}
                    width={1600}
                    height={1200}
                    className="h-auto max-h-[calc(96dvh-5.5rem)] w-auto max-w-full object-contain"
                    sizes="(max-width: 768px) 92vw, 56rem"
                    priority
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
