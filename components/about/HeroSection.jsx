import Image from "next/image";
import { HERO_VIDEO } from "@/data/about/content";

export default function HeroSection({
  posterDesktop = HERO_VIDEO.posterDesktop,
  posterMobile = HERO_VIDEO.posterMobile,
  alt = "",
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-brand-navy md:h-screen">
      <Image
        src={posterDesktop || posterMobile}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
