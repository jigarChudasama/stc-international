import EditorialText from "@/components/home/EditorialText";
import HeroSection from "@/components/about/HeroSection";
import MediaTextSection from "@/components/about/MediaTextSection";
import QuoteSection from "@/components/about/QuoteSection";
import TimelineSection from "@/components/about/TimelineSection";
import {
  EDITORIAL,
  HERO_VIDEO,
  MEDIA_SECTIONS,
  metadata as aboutMetadata,
  QUOTE,
} from "@/data/about";

export const metadata = aboutMetadata;

export default function AboutUsPage() {
  return (
    <div className="about-us-page w-full">
      <HeroSection
        posterDesktop={HERO_VIDEO.posterDesktop}
        posterMobile={HERO_VIDEO.posterMobile}
        alt="About STC International"
        title={HERO_VIDEO.title}
        description={HERO_VIDEO.description}
        ctaText={HERO_VIDEO.ctaText}
        ctaHref={HERO_VIDEO.ctaHref}
      />
      {MEDIA_SECTIONS.map((section) => (
        <MediaTextSection key={section.title} {...section} />
      ))}
      <QuoteSection {...QUOTE} />
      <TimelineSection />
      <div className="mt-16 border-t border-brand-divider bg-brand-cream">
        <EditorialText title={EDITORIAL.title} intro={EDITORIAL.intro} />
      </div>
    </div>
  );
}
