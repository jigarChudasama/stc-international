"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_ROUTE, normalizeImageUrl, isVideoAsset } from "@/lib/formatters";
import { Pause, Play } from "lucide-react";
import { ctaLink } from "@/lib/ui";

const VIDEO_URL =
  "https://assets.hermes.com/is/image/hermesedito/VISUEL_PORTE_10_099-16-9%20%281%29";
const MOBILE_VIDEO_URL =
  "https://assets.hermes.com/is/image/hermesedito/EDITO_PE26_STILL-LIFE_T2_16-9_012_551-4";
const DESKTOP_IMAGE =
  "https://assets.hermes.com/is/image/hermesedito/VISUEL_PORTE_10_099-16-9%20%281%29";
const MOBILE_IMAGE =
  "https://assets.hermes.com/is/image/hermesedito/EDITO_PE26_STILL-LIFE_T2_16-9_012_551-4";

const desktopPoster = normalizeImageUrl(DESKTOP_IMAGE);
const mobilePoster = normalizeImageUrl(MOBILE_IMAGE);
const showVideo = isVideoAsset(VIDEO_URL) || isVideoAsset(MOBILE_VIDEO_URL);

export default function VideoHero() {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const [mobilePlaying, setMobilePlaying] = useState(true);
  const [desktopPlaying, setDesktopPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const toggleMobilePlay = () => {
    const video = mobileVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setMobilePlaying(true);
    } else {
      video.pause();
      setMobilePlaying(false);
    }
  };

  const toggleDesktopPlay = () => {
    const video = desktopVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setDesktopPlaying(true);
    } else {
      video.pause();
      setDesktopPlaying(false);
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-hermes-cream">
      <div className="relative h-[90dvh] w-full md:h-dvh">
        {showVideo && !videoFailed ? (
          <>
            <video
              ref={mobileVideoRef}
              className="absolute inset-0 h-full w-full object-cover md:hidden"
              poster={mobilePoster}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Barénia Pleine fleur"
              onError={() => setVideoFailed(true)}
            >
              <source src={`${MOBILE_VIDEO_URL}?fmt=mp4`} type="video/mp4" />
              <source src={MOBILE_VIDEO_URL} />
            </video>
            <video
              ref={desktopVideoRef}
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              poster={desktopPoster}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Barénia Pleine fleur"
              onError={() => setVideoFailed(true)}
            >
              <source src={`${VIDEO_URL}?fmt=mp4`} type="video/mp4" />
              <source src={VIDEO_URL} />
            </video>
            <button
              type="button"
              onClick={toggleMobilePlay}
              className="video-control absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-opacity hover:bg-black/50 md:hidden"
              aria-label={mobilePlaying ? "pause video" : "play video"}
            >
              {mobilePlaying ? (
                <Pause size={14} fill="currentColor" strokeWidth={1.25} aria-hidden />
              ) : (
                <Play size={14} fill="currentColor" strokeWidth={1.25} aria-hidden />
              )}
            </button>
            <button
              type="button"
              onClick={toggleDesktopPlay}
              className="video-control absolute bottom-4 left-4 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-opacity hover:bg-black/50 md:flex"
              aria-label={desktopPlaying ? "pause video" : "play video"}
            >
              {desktopPlaying ? (
                <Pause size={14} fill="currentColor" strokeWidth={1.25} aria-hidden />
              ) : (
                <Play size={14} fill="currentColor" strokeWidth={1.25} aria-hidden />
              )}
            </button>
          </>
        ) : (
          <>
            <Image
              src={mobilePoster}
              alt="Barénia Pleine fleur"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover md:hidden"
            />
            <Image
              src={desktopPoster}
              alt="Barénia Pleine fleur"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="hidden object-cover md:block"
            />
          </>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/55 via-black/10 to-transparent px-6 pb-10 pt-16 text-center text-white md:pb-14">
          <h2 className="mb-3 font-edito text-[1.5rem] font-normal md:text-[2rem] lg:text-[2.125rem]">
            <span>Barénia Pleine fleur</span>
          </h2>
          <p className="mb-5 max-w-[560px] text-xs leading-relaxed md:text-sm">
            <span>
              Barénia Pleine Fleur reveals a new floral facet of the Hermès chypre and glows with a sunny
              radiance.
            </span>
          </p>
          <Link href={HOME_ROUTE} className={`${ctaLink} text-xs text-white`}>
            Discover
          </Link>
        </div>
      </div>
    </section>
  );
}
