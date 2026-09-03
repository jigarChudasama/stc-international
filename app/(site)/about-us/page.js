import EditorialText from "@/components/home/EditorialText";
import HeroSection from "@/components/about/HeroSection";
import MediaTextSection from "@/components/about/MediaTextSection";
import QuoteSection from "@/components/about/QuoteSection";
import TimelineSection from "@/components/about/TimelineSection";
import {
  EDITORIAL,
  MEDIA_SECTIONS,
  metadata as aboutMetadata,
  QUOTE,
} from "@/data/about";

export const metadata = aboutMetadata;

export default function AboutUsPage() {
  return (
    <div className="about-us-page w-full">
      <HeroSection />
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
