import Image from "next/image";

export default function MediaTextSection({ title, image, paragraphs, stats, reverse = false }) {
  return (
    <section className="media-split-section">
      <div className="media-split-grid">
        <div className={`media-split-media ${reverse ? "md:order-2" : ""}`}>
          <div className="media-split-media-sticky">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <div className="relative min-h-[55vh] md:hidden">
            <Image src={image} alt={title} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
        <div className={`media-split-text-track ${reverse ? "md:order-1" : ""}`}>
          <div className="media-split-text-spacer" aria-hidden="true" />
          <div className={reverse ? "media-split-text-reverse" : "media-split-text"}>
            <h2 className="section-heading">{title}</h2>
            <div className="mt-8 max-w-xl space-y-6 md:mt-10">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="media-split-body">
                  {p}
                </p>
              ))}
            </div>
            {stats?.length ? (
              <ul className="mt-8 flex max-w-xl flex-wrap gap-x-6 gap-y-3 md:mt-10">
                {stats.map((stat) => (
                  <li
                    key={stat}
                    className="text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold"
                  >
                    {stat}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
