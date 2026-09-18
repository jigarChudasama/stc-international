import EditorialText from "@/components/home/EditorialText";
import HeroSection from "@/components/about/HeroSection";
import MediaTextSection from "@/components/about/MediaTextSection";
import {
  EDITORIAL,
  HERO,
  MEDIA_SECTIONS,
  PAGE,
  metadata as pageMetadata,
} from "@/data/infrastructure";

export const metadata = pageMetadata;

export default function InfrastructurePage() {
  return (
    <div className="about-us-page w-full">
      <HeroSection posterDesktop={HERO.posterDesktop} posterMobile={HERO.posterMobile} />
      <header className="mx-auto w-full max-w-[860px] bg-brand-cream px-[15px] py-12 text-center md:px-8 md:py-16 lg:py-20">
        <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
          {PAGE.overline}
        </p>
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {PAGE.title}
        </h1>
      </header>
      {MEDIA_SECTIONS.map((section) => (
        <MediaTextSection key={section.title} {...section} />
      ))}
      <div className="mt-16 border-t border-brand-divider bg-brand-cream">
        <EditorialText title={EDITORIAL.title} intro={EDITORIAL.intro} />
      </div>
    </div>
  );
}
