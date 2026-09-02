import { HERO_VIDEO } from "@/data/about-us/content";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-hermes-dark md:h-screen">
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_VIDEO.posterDesktop}
      >
        <source src={HERO_VIDEO.desktop} type="video/mp4" />
      </video>
      <video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_VIDEO.posterMobile}
      >
        <source src={HERO_VIDEO.mobile} type="video/mp4" />
      </video>
    </section>
  );
}
