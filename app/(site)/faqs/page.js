import FaqAccordion from "@/components/legal/FaqAccordion";
import { faqsPage } from "@/data/legal/simple-pages";

export const metadata = faqsPage.metadata;

export default function FaqsPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <article className="mx-auto w-full max-w-[860px] px-[15px] pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:pt-20">
        <header className="mb-10 pb-2 md:mb-12">
          <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
            Help
          </p>
          <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
            {faqsPage.title}
          </h1>
          <p className="mt-6 max-w-[640px] text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
            {faqsPage.intro}
          </p>
        </header>

        <FaqAccordion items={faqsPage.items} />
      </article>
    </div>
  );
}
