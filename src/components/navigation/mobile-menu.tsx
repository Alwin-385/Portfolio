"use client";

import { AnimatePresence, m } from "motion/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { NavActions } from "@/components/navigation/nav-actions";
import { NavLink } from "@/components/navigation/nav-link";
import { NavLogo } from "@/components/navigation/nav-logo";
import {
  pageContainerClass,
  pageContainerStyles,
} from "@/components/layout/page-wrapper";
import { NAV_LINKS } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenuPanel({
  isOpen,
  onClose,
  activeSection,
}: MobileMenuProps & { activeSection: string }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("main-content");

    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <m.div
            className="fixed inset-0 z-40 bg-bg-primary/80 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />

          <m.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className={cn(
              "fixed inset-0 z-50 flex flex-col lg:hidden",
              "bg-bg-primary/95 backdrop-blur-xl safe-area-top safe-area-x",
            )}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={cn(
                pageContainerClass,
                "flex items-center justify-between border-b border-default py-3",
              )}
              style={pageContainerStyles}
            >
              <NavLogo onNavigate={onClose} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={cn(
                  "touch-target touch-manipulation inline-flex items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-default text-foreground transition-colors",
                  "hover:bg-bg-secondary focus-visible:ring-2 focus-visible:ring-accent-blue/40",
                )}
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav
              className={cn(
                pageContainerClass,
                "flex flex-1 flex-col justify-between overflow-y-auto py-6 safe-area-bottom",
              )}
              style={pageContainerStyles}
              aria-label="Mobile primary navigation"
            >
              <ul className="flex list-none flex-col gap-1">
                {NAV_LINKS.map((item: NavItem, index) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    isActive={activeSection === item.href.replace("#", "")}
                    onNavigate={onClose}
                    layout="vertical"
                    index={index}
                  />
                ))}
              </ul>

              <div className="mt-8 border-t border-default pt-8">
                <p className="mb-4 text-label">Connect</p>
                <NavActions layout="vertical" />
              </div>
            </nav>
          </m.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

type MobileMenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "touch-target touch-manipulation inline-flex items-center justify-center rounded-[var(--radius-button-token)] lg:hidden",
        "border border-default text-foreground transition-colors",
        "hover:bg-bg-secondary focus-visible:ring-2 focus-visible:ring-accent-blue/40",
      )}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <m.span
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X className="size-5" aria-hidden />
          </m.span>
        ) : (
          <m.span
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="size-5" aria-hidden />
          </m.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const activeSection = useActiveSection();

  return (
    <MobileMenuPanel
      isOpen={isOpen}
      onClose={onClose}
      activeSection={activeSection}
    />
  );
}

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
