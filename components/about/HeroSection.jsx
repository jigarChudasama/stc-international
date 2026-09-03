import Image from "next/image";
import { HERO_VIDEO } from "@/data/about/content";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-brand-navy md:h-screen">
      <Image
        src={HERO_VIDEO.posterDesktop || HERO_VIDEO.posterMobile}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
