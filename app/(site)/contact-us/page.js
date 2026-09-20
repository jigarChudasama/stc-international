import EditorialText from "@/components/home/EditorialText";
import HeroSection from "@/components/about/HeroSection";
import MediaTextSection from "@/components/about/MediaTextSection";
import InquiryForm from "@/components/contact/InquiryForm";
import {
  EDITORIAL,
  HERO,
  MEDIA_SECTIONS,
  factoryMap,
  metadata as contactMetadata,
} from "@/data/contact";

export const metadata = contactMetadata;

export default function ContactUsPage() {
  return (
    <div className="about-us-page w-full">
      <HeroSection
        posterDesktop={HERO.posterDesktop}
        posterMobile={HERO.posterMobile}
        alt="Contact STC International"
      />

      {MEDIA_SECTIONS.map((section) => (
        <MediaTextSection key={section.title} {...section} />
      ))}

      <div className="mt-16 border-t border-brand-divider bg-brand-cream">
        <EditorialText title={EDITORIAL.title} intro={EDITORIAL.intro} />
        <div className="mx-auto w-full max-w-[640px] px-8 pb-16 md:pb-20">
          <InquiryForm />
        </div>
      </div>

      <section className="w-full bg-brand-cream">
        <div className="relative aspect-[1440/714] min-h-[320px] w-full overflow-hidden">
          <iframe
            title={factoryMap.title}
            src={factoryMap.embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <p className="px-5 py-6 text-center text-xs text-brand-gray md:px-10">
          <a
            href={factoryMap.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Open factory location in Google Maps
          </a>
        </p>
      </section>
    </div>
  );
}
