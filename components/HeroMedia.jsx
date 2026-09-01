"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl, HOME_ROUTE, isVideoAsset } from "@/lib/formatters";
import { contentContainerPadded } from "@/lib/ui";

export default function HeroMedia({
  desktopImage,
  mobileImage,
  alt = "Editorial media",
  link = false,
  videoUrl,
  mobileVideoUrl,
  alwaysShowControls = false,
  videoLoopMuteAutoplay = false,
}) {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const [mobilePlaying, setMobilePlaying] = useState(true);
  const [desktopPlaying, setDesktopPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const mobilePoster = normalizeImageUrl(mobileImage);
  const desktopPoster = normalizeImageUrl(desktopImage);
  const showVideo =
    videoLoopMuteAutoplay &&
    !videoFailed &&
    (isVideoAsset(videoUrl) || isVideoAsset(mobileVideoUrl));

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

  const content = (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-hermes-cream md:aspect-video">
      {showVideo ? (
        <>
          {mobileVideoUrl && isVideoAsset(mobileVideoUrl) && (
            <video
              ref={mobileVideoRef}
              className="absolute inset-0 h-full w-full object-cover md:hidden"
              poster={mobilePoster}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
            >
              <source src={`${mobileVideoUrl}?fmt=mp4`} type="video/mp4" />
              <source src={mobileVideoUrl} />
            </video>
          )}
          {videoUrl && isVideoAsset(videoUrl) && (
            <video
              ref={desktopVideoRef}
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              poster={desktopPoster}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
            >
              <source src={`${videoUrl}?fmt=mp4`} type="video/mp4" />
              <source src={videoUrl} />
            </video>
          )}
          {alwaysShowControls && (
            <>
              <button
                type="button"
                onClick={toggleMobilePlay}
                className="video-control absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm md:hidden"
                aria-label={mobilePlaying ? "Pause video" : "Play video"}
              >
                {mobilePlaying ? "❚❚" : "▶"}
              </button>
              <button
                type="button"
                onClick={toggleDesktopPlay}
                className="video-control absolute bottom-4 left-4 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm md:flex"
                aria-label={desktopPlaying ? "Pause video" : "Play video"}
              >
                {desktopPlaying ? "❚❚" : "▶"}
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <Image
            src={mobilePoster}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.01] md:hidden"
          />
          <Image
            src={desktopPoster}
            alt={alt}
            fill
            sizes="100vw"
            className="hidden object-cover transition-transform duration-700 hover:scale-[1.01] md:block"
          />
        </>
      )}
    </div>
  );

  return (
    <section className={contentContainerPadded}>
      {link ? (
        <Link href={HOME_ROUTE} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </section>
  );
}
