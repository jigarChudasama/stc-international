import VideoHero from "@/components/VideoHero";
import CategoryPushRow from "@/components/CategoryPushRow";
import EditorialText from "@/components/EditorialText";
import HeroMedia from "@/components/HeroMedia";
import MerchandisingRow from "@/components/MerchandisingRow";
import { homeSections } from "@/data/home";

function renderSection(section, index) {
  switch (section.type) {
    case "categoryPush":
      return <CategoryPushRow key={`category-${index}`} />;
    case "editorial":
      return (
        <EditorialText
          key={`editorial-${index}`}
          title={section.title}
          intro={section.intro}
          ctaText={section.ctaText}
        />
      );
    case "heroMedia":
      return (
        <HeroMedia
          key={`hero-${index}`}
          desktopImage={section.desktopImage}
          mobileImage={section.mobileImage}
          alt={section.alt}
          link={section.link}
          alwaysShowControls={section.alwaysShowControls}
          videoLoopMuteAutoplay={section.videoLoopMuteAutoplay}
        />
      );
    case "merchandising":
      return (
        <MerchandisingRow
          key={`merchandising-${index}`}
          products={section.products}
        />
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
      <h1 className="sr-only">The official Hermes online store - Homepage</h1>
      <div className="[&>*]:scroll-mt-[50px] lg:[&>*]:scroll-mt-16">
        <VideoHero />
        {homeSections.map(renderSection)}
      </div>
    </>
  );
}
