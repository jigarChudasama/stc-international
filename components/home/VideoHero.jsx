import Image from "next/image";
import Link from "next/link";
import { HOME_ROUTE, normalizeImageUrl } from "@/lib/formatters";
import { videoHero } from "@/data/home/videoHero";
import { ctaLink } from "@/lib/ui";

const {
  desktopImage: DESKTOP_IMAGE,
  ariaLabel,
  title,
  description,
  ctaText,
} = videoHero;

const desktopPoster = normalizeImageUrl(DESKTOP_IMAGE);

export default function VideoHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-brand-cream">
      <div className="relative h-[90dvh] w-full md:h-dvh">
        <Image
          src={desktopPoster}
          alt={ariaLabel}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/55 via-black/10 to-transparent px-6 pb-10 pt-16 text-center text-white md:pb-14">
          <h2 className="mb-3 font-edito text-[1.5rem] font-normal md:text-[2rem] lg:text-[2.125rem]">
            <span>{title}</span>
          </h2>
          <p className="mb-5 max-w-[560px] text-xs leading-relaxed md:text-sm">
            <span>{description}</span>
          </p>
          <Link href={HOME_ROUTE} className={`${ctaLink} text-xs text-white`}>
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
