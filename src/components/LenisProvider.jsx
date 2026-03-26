"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // higher = smoother
      easing: (t) => 1 - Math.pow(1 - t, 4), 
      smoothWheel: true,
      smoothTouch: false, 
      wheelMultiplier: 0.9, 
      touchMultiplier: 1.5,
      lerp: 0.08, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: sync with resize
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return children;
}
