export default function SimpleContentPage({ title, intro, sections }) {
  return (
    <article className="mx-auto w-full max-w-[1100px] px-[15px] pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:px-12 lg:pt-20">
      <header className="mb-10 border-b border-brand-divider pb-8 md:mb-14 md:pb-10">
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
            {intro}
          </p>
        ) : null}
      </header>

      <div className="space-y-10 md:space-y-12">
        {sections.map((section) => (
          <section key={section.heading} id={section.heading} className="scroll-mt-20">
            <h2 className="mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark md:text-xs">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.heading}-${index}`}
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
