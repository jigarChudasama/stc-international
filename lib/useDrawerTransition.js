import { useCallback, useEffect, useRef, useState } from "react";

export function useDrawerTransition(duration = 300) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const closeTimerRef = useRef(null);

  const open = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsOpen(true);
    requestAnimationFrame(() => setIsActive(true));
  }, []);

  const close = useCallback((onComplete) => {
    setIsActive(false);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
      onComplete?.();
    }, duration);
  }, [duration]);

  const forceClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsActive(false);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsActive(false);
      return;
    }

    const frame = requestAnimationFrame(() => setIsActive(true));
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    []
  );

  return { isOpen, isActive, open, close, forceClose };
}
