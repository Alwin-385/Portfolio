"use client";

import { AnimatePresence, m } from "motion/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { NavActions } from "@/components/navigation/nav-actions";
import { NavLink } from "@/components/navigation/nav-link";
import { NavLogo } from "@/components/navigation/nav-logo";
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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
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
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className={cn(
              "fixed inset-0 z-50 flex flex-col lg:hidden",
              "bg-bg-primary/95 backdrop-blur-xl",
            )}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-default px-6 py-4">
              <NavLogo onNavigate={onClose} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-default text-foreground transition-colors",
                  "hover:bg-bg-secondary focus-visible:ring-2 focus-visible:ring-accent-blue/40",
                )}
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-8"
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
        "inline-flex size-10 items-center justify-center rounded-[var(--radius-button-token)] lg:hidden",
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
