"use client";

import { m } from "motion/react";
import { useCallback, useState } from "react";

import {
  MobileMenu,
  MobileMenuToggle,
} from "@/components/navigation/mobile-menu";
import { NavActions } from "@/components/navigation/nav-actions";
import { NavLink } from "@/components/navigation/nav-link";
import { NavLogo } from "@/components/navigation/nav-logo";
import {
  pageContainerClass,
  pageContainerStyles,
  pageMaxWidthClass,
} from "@/components/layout/page-wrapper";
import { NAV_LINKS } from "@/data/navigation";
import { motionNavReveal } from "@/animations/motion-variants";
import { MOTION_EASE } from "@/animations/motion-tokens";
import { useActiveSection } from "@/hooks/use-active-section";
import { useNavScrollState } from "@/hooks/use-nav-scroll-state";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const { isScrolled, isVisible } = useNavScrollState();

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);
  const toggleMobile = useCallback(
    () => setIsMobileOpen((prev) => !prev),
    [],
  );

  return (
    <>
      <m.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 safe-area-top",
          "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          isScrolled
            ? "border-b border-default bg-bg-primary/70 shadow-elevation-sm backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
        initial={{ y: -24, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: 1,
        }}
        transition={{
          y: motionNavReveal,
          opacity: { duration: 0.4, ease: MOTION_EASE.out },
        }}
      >
        <div
          className={cn(pageContainerClass, pageMaxWidthClass, "mx-auto")}
          style={pageContainerStyles}
        >
          <nav
            className="flex h-[72px] min-w-0 items-center justify-between gap-2 sm:gap-4"
            aria-label="Main navigation"
          >
            <NavLogo onNavigate={closeMobile} />

            <ul className="hidden list-none items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={
                    activeSection === item.href.replace("#", "")
                  }
                  onNavigate={closeMobile}
                />
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <NavActions filter="email" className="flex gap-0.5 sm:hidden" />
              <NavActions className="hidden gap-0.5 sm:flex lg:gap-1" />
              <MobileMenuToggle
                isOpen={isMobileOpen}
                onToggle={toggleMobile}
              />
            </div>
          </nav>
        </div>
      </m.header>

      <MobileMenu isOpen={isMobileOpen} onClose={closeMobile} />
    </>
  );
}
