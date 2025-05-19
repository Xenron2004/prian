"use client";

import React, { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      duration: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      gestureOrientation: "vertical",
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    } as Partial<LenisOptions>); // ensure typing compatibility

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
