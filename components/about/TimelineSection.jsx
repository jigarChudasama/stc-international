"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TIMELINE_HEADING, TIMELINE_ITEMS } from "@/data/about/timeline";
import { debounce } from "@/lib/domUtils";

const MIN_VH_PER_SLIDE = 55;

function TimelineEvent({ event, isFirstIntro }) {
  if (event.type === "p") {
    return (
      <p className={`timeline-intro ${isFirstIntro ? "timeline-intro-first" : "timeline-event"}`}>
        {event.text}
      </p>
    );
  }

  return (
    <div className="timeline-event">
      <h3 className="timeline-year">{event.year}</h3>
      <p className="timeline-year-text">{event.text}</p>
    </div>
  );
}

function TimelineSlide({ item, onImageReady }) {
  const firstIntroIndex = item.events.findIndex((event) => event.type === "p");

  return (
    <article className="flex w-[92vw] shrink-0 flex-col gap-12 pr-12 md:w-auto md:flex-row md:items-center md:gap-[160px] md:pr-[160px] lg:gap-[180px] lg:pr-[180px]">
      <div className="flex w-full flex-col justify-center md:w-[440px] md:shrink-0">
        <h2 className="timeline-decade">{item.decade}</h2>
        {item.events.map((event, index) => (
          <TimelineEvent
            key={`${item.decade}-${event.year || index}`}
            event={event}
            isFirstIntro={event.type === "p" && index === firstIntroIndex}
          />
        ))}
      </div>
      <div className="relative h-[55vh] min-h-[320px] w-full shrink-0 overflow-hidden bg-brand-divider md:h-[790px] md:w-[540px]">
        <Image
          src={item.image}
          alt={`${item.decade} at STC International`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 92vw, 540px"
          onLoad={onImageReady}
        />
      </div>
    </article>
  );
}

function getScrollY() {
  const lenis = window.__stcLenis;
  if (lenis && typeof lenis.scroll === "number") {
    return lenis.scroll;
  }
  return window.scrollY || document.documentElement.scrollTop || 0;
}

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const updateRef = useRef(() => {});
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!section || !track || !viewport) return;

      const viewportH = window.innerHeight;
      const trackMax = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const minExtra = (TIMELINE_ITEMS.length * MIN_VH_PER_SLIDE * viewportH) / 100;
      const extra = Math.max(trackMax, minExtra);
      const nextHeight = viewportH + extra;

      if (Math.abs(section.offsetHeight - nextHeight) > 4) {
        section.style.height = `${nextHeight}px`;
      }

      const scrollable = section.offsetHeight - viewportH;
      if (scrollable <= 0 || trackMax <= 0) {
        setOffset(0);
        return;
      }

      const scrolled = -section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollable));
      setOffset(progress * trackMax);
    };

    updateRef.current = update;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    const onWheel = (event) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      if (absX <= absY || absX < 1) return;

      event.preventDefault();
      const lenis = window.__stcLenis;
      if (lenis) {
        lenis.scrollTo(getScrollY() + event.deltaX, { immediate: true });
      } else {
        window.scrollBy(0, event.deltaX);
      }
    };

    const onResize = debounce(update, 150);
    const resizeObserver = new ResizeObserver(onScroll);

    if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    viewportRef.current?.addEventListener("wheel", onWheel, { passive: false });

    let lenis = window.__stcLenis;
    lenis?.on?.("scroll", onScroll);

    const onLenisReady = () => {
      lenis?.off?.("scroll", onScroll);
      lenis = window.__stcLenis;
      lenis?.on?.("scroll", onScroll);
      update();
    };

    window.addEventListener("stc:lenis-ready", onLenisReady);

    update();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("stc:lenis-ready", onLenisReady);
      viewportRef.current?.removeEventListener("wheel", onWheel);
      lenis?.off?.("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-brand-cream">
      <div className="sticky top-0 flex h-dvh flex-col overflow-hidden">
        <div className="shrink-0 px-5 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20 lg:px-16">
          <h2 className="section-heading">{TIMELINE_HEADING}</h2>
        </div>
        <div
          ref={viewportRef}
          className="relative min-h-0 flex-1 touch-pan-y overflow-hidden"
        >
          <div
            ref={trackRef}
            className="inline-flex h-full min-w-max items-center pl-5 will-change-transform md:pl-10 lg:pl-16"
            style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
          >
            {TIMELINE_ITEMS.map((item) => (
              <TimelineSlide
                key={item.decade}
                item={item}
                onImageReady={() => updateRef.current()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
