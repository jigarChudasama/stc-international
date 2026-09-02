import EditorialText from "@/components/EditorialText";
import HeroSection from "@/components/about-us/HeroSection";
import MediaTextSection from "@/components/about-us/MediaTextSection";
import QuoteSection from "@/components/about-us/QuoteSection";
import TimelineSection from "@/components/about-us/TimelineSection";
import {
  EDITORIAL,
  MEDIA_SECTIONS,
  metadata as aboutMetadata,
  QUOTE,
} from "@/data/about-us";

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
      <div className="mt-16 border-t border-hermes-divider bg-hermes-cream">
        <EditorialText title={EDITORIAL.title} intro={EDITORIAL.intro} />
      </div>
    </div>
  );
}
