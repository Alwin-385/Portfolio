"use client";

import { useMemo } from "react";

import { useLenis } from "@/components/providers/lenis-provider";

const SCROLL_THRESHOLD = 80;
const TOP_THRESHOLD = 24;

export function useNavScrollState() {
  const { scrollY, scrollDirection } = useLenis();

  return useMemo(() => {
    const isScrolled = scrollY > TOP_THRESHOLD;
    const isVisible =
      scrollY <= SCROLL_THRESHOLD || scrollDirection === -1;

    return { isScrolled, isVisible, scrollY };
  }, [scrollY, scrollDirection]);
}
