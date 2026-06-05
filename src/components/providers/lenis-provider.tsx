"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { LENIS_CONFIG } from "@/lib/constants";
import { NAV_SCROLL_OFFSET } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ScrollToOptions = {
  offset?: number;
  immediate?: boolean;
};

type LenisContextValue = {
  scrollY: number;
  scrollDirection: 1 | -1;
  scrollTo: (target: string | HTMLElement, options?: ScrollToOptions) => void;
};

const LenisContext = createContext<LenisContextValue | null>(null);

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<1 | -1>(1);

  const updateScrollState = useCallback((y: number) => {
    setScrollDirection(y > lastScrollY.current ? 1 : -1);
    lastScrollY.current = y;
    setScrollY(y);
  }, []);

  const scrollTo = useCallback(
    (target: string | HTMLElement, options?: ScrollToOptions) => {
      const offset = options?.offset ?? NAV_SCROLL_OFFSET;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset,
          immediate: options?.immediate ?? prefersReducedMotion,
        });
        return;
      }

      const element =
        typeof target === "string"
          ? document.querySelector<HTMLElement>(target)
          : target;

      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      const handleScroll = () => updateScrollState(window.scrollY);

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const lenis = new Lenis({
      duration: LENIS_CONFIG.duration,
      lerp: LENIS_CONFIG.lerp,
      smoothWheel: LENIS_CONFIG.smoothWheel,
      touchMultiplier: LENIS_CONFIG.touchMultiplier,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ({ scroll, direction }) => {
      lastScrollY.current = scroll;
      setScrollY(scroll);
      if (direction !== 0) {
        setScrollDirection(direction);
      }
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion, updateScrollState]);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );

      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      scrollTo(hash);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [scrollTo]);

  return (
    <LenisContext.Provider
      value={{
        scrollY,
        scrollDirection,
        scrollTo,
      }}
    >
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis(): LenisContextValue {
  const context = useContext(LenisContext);

  if (!context) {
    throw new Error("useLenis must be used within LenisProvider");
  }

  return context;
}
