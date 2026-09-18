import LinkedCopy from "@/components/legal/LinkedCopy";

export default function LegalDocument({ title, lastUpdated, intro, sections }) {
  return (
    <article className="legal-document mx-auto w-full max-w-[860px] px-[15px] pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:pt-20">
      <header className="mb-12 border-b border-brand-divider pb-8 md:mb-16 md:pb-10">
        {lastUpdated ? (
          <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
            {lastUpdated}
          </p>
        ) : null}
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-[640px] text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
            {intro}
          </p>
        ) : null}
      </header>

      <div className="space-y-10 md:space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <p className="mb-2 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brand-gold">
              {section.number}
            </p>
            <h2 className="mb-5 font-edito text-xl font-normal tracking-wide text-brand-navy md:text-[1.375rem]">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                  />
                  <span className="text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
                    <LinkedCopy text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
