"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TIMELINE_ITEMS } from "@/data/about-us/timeline";
import { debounce, getOffsetTop } from "@/lib/domUtils";

const SCROLL_VH_PER_SLIDE = 55;

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
      <div className="relative h-[55vh] min-h-[320px] w-full shrink-0 overflow-hidden bg-hermes-divider md:h-[790px] md:w-[540px]">
        <Image
          src={item.image}
          alt={`Belstaff ${item.decade}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 92vw, 540px"
          onLoad={onImageReady}
        />
      </div>
    </article>
  );
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

      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setOffset(0);
        return;
      }

      const trackMax = Math.max(0, track.scrollWidth - viewport.clientWidth);
      if (trackMax <= 0) {
        setOffset(0);
        return;
      }

      const progress = (window.scrollY - getOffsetTop(section)) / scrollable;
      setOffset(Math.min(1, Math.max(0, progress)) * trackMax);
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

    const onResize = debounce(update, 150);
    const resizeObserver = new ResizeObserver(update);

    resizeObserver.observe(sectionRef.current);
    resizeObserver.observe(trackRef.current);
    resizeObserver.observe(viewportRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    update();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-hermes-cream"
      style={{ height: `calc(100vh + ${TIMELINE_ITEMS.length * SCROLL_VH_PER_SLIDE}vh)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="shrink-0 px-5 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20 lg:px-16">
          <h2 className="section-heading">Our History</h2>
        </div>
        <div ref={viewportRef} className="relative min-h-0 flex-1 overflow-hidden">
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
