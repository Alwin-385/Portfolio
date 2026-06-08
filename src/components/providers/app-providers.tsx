"use client";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { MotionProvider } from "@/components/providers/motion-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionProvider>
      <LenisProvider>{children}</LenisProvider>
    </MotionProvider>
  );
}
