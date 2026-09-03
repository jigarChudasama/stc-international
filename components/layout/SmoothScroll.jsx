"use client";

import { useEffect } from "react";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    let cancelled = false;
    let lenis;
    let idleId;
    let timeoutId;

    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        autoRaf: true,
        autoToggle: true,
        anchors: {
          offset: -56,
        },
        lerp: 0.1,
        smoothWheel: true,
        respectReducedMotion: true,
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start);
    } else {
      timeoutId = window.setTimeout(start, 1);
    }

    return () => {
      cancelled = true;
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) window.clearTimeout(timeoutId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
