import ContactDetails from "@/components/contact/ContactDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import { metadata as contactMetadata, page } from "@/data/contact";

export const metadata = contactMetadata;

export default function ContactUsPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <article className="mx-auto w-full max-w-[1100px] px-[15px] pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:px-12 lg:pt-20">
        <header className="mb-10 border-b border-brand-divider pb-8 md:mb-14 md:pb-10">
          <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
            {page.overline}
          </p>
          <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-[640px] text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
            {page.intro}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <InquiryForm />
          <ContactDetails showMap />
        </div>
      </article>
    </div>
  );
}
