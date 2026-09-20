import Image from "next/image";
import { Building2, CalendarDays, Globe, Layers } from "lucide-react";

const STAT_ICONS = {
  building: Building2,
  calendar: CalendarDays,
  globe: Globe,
  layers: Layers,
};

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
              <ul className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 md:mt-10">
                {stats.map((stat) => {
                  const label = typeof stat === "string" ? stat : stat.label;
                  const Icon = typeof stat === "string" ? null : STAT_ICONS[stat.icon];

                  return (
                    <li key={label} className="flex items-start gap-3">
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="mt-0.5 size-5 shrink-0 text-brand-gold"
                        />
                      ) : null}
                      <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
