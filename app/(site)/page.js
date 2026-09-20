import VideoHero from "@/components/home/VideoHero";
import CategoryPushRow from "@/components/home/CategoryPushRow";
import EditorialText from "@/components/home/EditorialText";
import HeroMedia from "@/components/home/HeroMedia";
import MerchandisingRow from "@/components/home/MerchandisingRow";
import StatStrip from "@/components/home/StatStrip";
import { homeSections } from "@/data/home";

export const metadata = {
  title: "STC International | Leather Goods Manufacturer & Exporter Since 1992",
  description:
    "STC International manufactures and exports leather bags, wallets and small leather goods from Kolkata, India. Star Export House recognized, 30+ years in the trade, six core export markets.",
  openGraph: {
    title: "STC International | Leather Goods Manufacturer & Exporter Since 1992",
    description:
      "STC International manufactures and exports leather bags, wallets and small leather goods from Kolkata, India. Star Export House recognized, 30+ years in the trade, six core export markets.",
  },
};

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
          label={section.label}
          ctaText={section.ctaText}
          ctaHref={section.ctaHref}
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
          href={section.href}
        />
      );
    case "merchandising":
      return (
        <MerchandisingRow
          key={`merchandising-${index}`}
          items={section.items}
          products={section.products}
        />
      );
    case "stats":
      return <StatStrip key={`stats-${index}`} items={section.items} />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        STC International, Manufacturer & Exporter of Leather Goods, Homepage
      </h1>
      <div className="[&>*]:scroll-mt-[50px] lg:[&>*]:scroll-mt-16">
        <VideoHero />
        {homeSections.map(renderSection)}
      </div>
    </>
  );
}
