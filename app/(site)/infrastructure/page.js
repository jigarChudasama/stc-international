import EditorialText from "@/components/home/EditorialText";
import HeroSection from "@/components/about/HeroSection";
import MediaTextSection from "@/components/about/MediaTextSection";
import {
  EDITORIAL,
  HERO,
  MEDIA_SECTIONS,
  metadata as pageMetadata,
} from "@/data/infrastructure";

export const metadata = pageMetadata;

export default function InfrastructurePage() {
  return (
    <div className="about-us-page w-full">
      <HeroSection posterDesktop={HERO.posterDesktop} posterMobile={HERO.posterMobile} />
      {MEDIA_SECTIONS.map((section) => (
        <MediaTextSection key={section.title} {...section} />
      ))}
      <div className="mt-16 border-t border-brand-divider bg-brand-cream">
        <EditorialText title={EDITORIAL.title} intro={EDITORIAL.intro} />
      </div>
    </div>
  );
}
