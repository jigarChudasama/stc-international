"use client";

import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const start = () => {
      setVisible(true);
      setProgress(20);
      const timer = setInterval(() => {
        setProgress((p) => (p >= 90 ? p : p + 12));
      }, 120);
      window.__hermesLoadingTimer = timer;
    };

    const finish = () => {
      clearInterval(window.__hermesLoadingTimer);
      setProgress(100);
      setTimeout(() => setVisible(false), 250);
    };

    window.addEventListener("hermes:navigate-start", start);
    window.addEventListener("hermes:navigate-end", finish);
    return () => {
      window.removeEventListener("hermes:navigate-start", start);
      window.removeEventListener("hermes:navigate-end", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full" aria-hidden="true">
      <div
        className="h-full bg-hermes-dark shadow-[0_0_8px_rgba(68,68,68,0.35)] transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
