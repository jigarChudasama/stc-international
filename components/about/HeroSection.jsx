import Image from "next/image";
import Link from "next/link";
import { HERO_VIDEO } from "@/data/about/content";
import YouTubeHero from "@/components/about/YouTubeHero";
import { ctaLink } from "@/lib/ui";

export default function HeroSection({
  posterDesktop = HERO_VIDEO.posterDesktop,
  posterMobile = HERO_VIDEO.posterMobile,
  alt = "",
  youtubeId,
  unoptimized = true,
  title,
  description,
  ctaText,
  ctaHref,
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
          unoptimized={unoptimized}
          className="object-cover"
        />
      )}

      {(title || description || ctaText) && (
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/55 via-black/10 to-transparent px-6 pb-10 pt-16 text-center text-white md:pb-14">
          {title && (
            <h2 className="mb-3 font-edito text-[1.5rem] font-normal md:text-[2rem] lg:text-[2.125rem]">
              <span>{title}</span>
            </h2>
          )}
          {description && (
            <p className="mb-5 max-w-[560px] text-xs leading-relaxed md:text-sm">
              <span>{description}</span>
            </p>
          )}
          {ctaText && ctaHref && (
            <Link href={ctaHref} className={`${ctaLink} text-xs text-white`}>
              {ctaText}
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
