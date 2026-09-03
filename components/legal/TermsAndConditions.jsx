import { page, sections } from "@/data/legal/terms-and-conditions";

export default function TermsAndConditions() {
  return (
    <article className="terms-page mx-auto w-full max-w-[1100px] px-[15px] pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:px-12 lg:pt-20">
      <header className="mb-10 border-b border-brand-divider pb-8 md:mb-14 md:pb-10">
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {page.title}
        </h1>
        <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
          {page.lastUpdated}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
          {page.intro}
        </p>
      </header>

      <div className="space-y-10 md:space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <h2 className="mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark md:text-xs">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.id}-${index}`}
                  className="text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
