import { directContact, factoryMap, locations } from "@/data/contact";

const headingClass =
  "mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark";

export default function ContactDetails({ showMap = false }) {
  return (
    <div className="flex flex-col gap-10">
      {locations.map((location) => (
        <section key={location.title}>
          <h2 className={headingClass}>{location.title}</h2>
          <address className="not-italic text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
            {location.lines.map((line) => (
              <p key={line} className="m-0">
                {line}
              </p>
            ))}
          </address>
        </section>
      ))}

      <section>
        <h2 className={headingClass}>{directContact.title}</h2>
        <p className="m-0 text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
          Email:{" "}
          <a
            href={`mailto:${directContact.email}`}
            className="underline hover:no-underline"
          >
            {directContact.email}
          </a>
        </p>
        <p className="m-0 text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
          Phone:{" "}
          <a href={directContact.phoneHref} className="underline hover:no-underline">
            {directContact.phone}
          </a>
        </p>
      </section>

      {showMap ? (
        <section>
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
          <p className="mt-3 text-sm leading-relaxed text-brand-dark md:text-[0.9375rem] md:leading-7">
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
