import Image from "next/image";
import { HERO_VIDEO } from "@/data/about/content";
import YouTubeHero from "@/components/about/YouTubeHero";

export default function HeroSection({
  posterDesktop = HERO_VIDEO.posterDesktop,
  posterMobile = HERO_VIDEO.posterMobile,
  alt = "",
  youtubeId,
}) {
  const poster = posterDesktop || posterMobile;

  return (
    <section className="page-hero bg-brand-navy">
      {youtubeId ? (
        <YouTubeHero
          videoId={youtubeId}
          poster={poster}
          title={alt || "STC International factory video"}
        />
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      )}
    </section>
  );
}
