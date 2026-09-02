"use client";

import { useEffect, useState } from "react";

export function useHideOnScroll(enabled = true, offset = 8) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + offset) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - offset) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, offset]);

  return isVisible;
}
