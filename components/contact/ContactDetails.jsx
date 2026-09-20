import { directContact, factoryMap, locations } from "@/data/contact";

const headingClass =
  "mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-gold";

const bodyClass =
  "not-italic text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7";

export default function ContactDetails({ showMap = false }) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        {locations.map((location, index) => (
          <section
            key={location.title}
            className={`px-2 sm:px-6 ${
              index === 0 ? "border-r border-brand-divider pr-5 sm:pr-8" : "pl-5 sm:pl-8"
            }`}
          >
            <h2 className={headingClass}>{location.title}</h2>
            <address className={bodyClass}>
              {location.lines.map((line) => (
                <p key={line} className="m-0">
                  {line}
                </p>
              ))}
            </address>
          </section>
        ))}
      </div>

      <div className="my-10 flex items-center gap-4" aria-hidden="true">
        <span className="h-px flex-1 bg-brand-divider" />
        <span className="h-1 w-1 rounded-full bg-brand-gold" />
        <span className="h-px flex-1 bg-brand-divider" />
      </div>

      <section className="text-center">
        <h2 className={headingClass}>{directContact.title}</h2>
        <p className={`m-0 ${bodyClass}`}>
          <a
            href={`mailto:${directContact.email}`}
            className="text-brand-dark underline decoration-brand-gold underline-offset-4 hover:no-underline"
          >
            {directContact.email}
          </a>
          <span className="mx-3 text-brand-divider" aria-hidden="true">
            |
          </span>
          <a
            href={directContact.phoneHref}
            className="text-brand-dark underline decoration-brand-gold underline-offset-4 hover:no-underline"
          >
            {directContact.phone}
          </a>
        </p>
      </section>

      {showMap ? (
        <section className="mt-10 border-t border-brand-divider pt-10">
          <h2 className={headingClass}>{factoryMap.title}</h2>
          <div className="overflow-hidden border border-brand-border">
            <iframe
              title={factoryMap.title}
              src={factoryMap.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full border-0 md:h-[360px]"
            />
          </div>
          <p className={`mt-3 ${bodyClass}`}>
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
      ) : null}
    </div>
  );
}
