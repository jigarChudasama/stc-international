import HeroSection from "@/components/about/HeroSection";
import ContactDetails from "@/components/contact/ContactDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import {
  HERO,
  factoryMap,
  metadata as contactMetadata,
  page,
} from "@/data/contact";

export const metadata = contactMetadata;

export default function ContactUsPage() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <HeroSection
        posterDesktop={HERO.posterDesktop}
        posterMobile={HERO.posterMobile}
        alt="Contact STC International"
        title={HERO.title}
        description={HERO.description}
        ctaText={HERO.ctaText}
        ctaHref={HERO.ctaHref}
      />

      {/* ── Content + Form ── */}
      <section id="contact-form" className="bg-brand-cream">
        <div className="mx-auto max-w-[1920px] px-5 py-14 md:px-10 lg:py-20">

          {/* Two columns — left: heading + details | right: form */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

            {/* Left — heading + contact details */}
            <div>
              <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-gold">
                {page.overline}
              </p>
              <h1 className="mb-4 text-3xl font-medium leading-tight text-brand-dark md:text-4xl lg:text-5xl">
                {page.title}
              </h1>
              <p className="mb-10 text-sm leading-relaxed text-brand-gray md:text-base">
                {page.intro}
              </p>
              <ContactDetails />
            </div>

            {/* Right — inquiry form */}
            <div>
              <p className="mb-6 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-gold">
                Send an inquiry
              </p>
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Full-width Map ── */}
      <section className="w-full" aria-label="Factory location map">
        <div className="relative min-h-[400px] w-full overflow-hidden md:min-h-[520px] lg:min-h-[600px]">
          <iframe
            title={factoryMap.title}
            src={factoryMap.embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="bg-brand-cream px-5 py-5 text-center md:px-10">
          <a
            href={factoryMap.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-gray underline underline-offset-4 hover:no-underline"
          >
            Open factory location in Google Maps
          </a>
        </div>
      </section>

    </div>
  );
}
