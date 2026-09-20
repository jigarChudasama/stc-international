"use client";

import { useState } from "react";
import Image from "next/image";

const YT_ORIGIN = "https://www.youtube-nocookie.com";

function embedSrc(videoId) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    disablekb: "1",
    fs: "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    iv_load_policy: "3",
    cc_load_policy: "0",
  });
  return `${YT_ORIGIN}/embed/${videoId}?${params.toString()}`;
}

function thumbnailSrc(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export default function YouTubeHero({ videoId, poster, title }) {
  const [ready, setReady] = useState(false);
  const [imageSrc, setImageSrc] = useState(thumbnailSrc(videoId));

  return (
    <>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        onError={() => {
          if (poster && imageSrc !== poster) setImageSrc(poster);
        }}
        className={`youtube-hero-poster object-cover transition-opacity duration-500 ${
          ready ? "is-ready pointer-events-none opacity-0" : "opacity-100"
        }`}
      />

      <div className="youtube-hero-cover absolute inset-0" aria-hidden="true">
        <iframe
          src={embedSrc(videoId)}
          title={title}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          onLoad={() => {
            window.setTimeout(() => setReady(true), 600);
          }}
        />
      </div>
    </>
  );
}
