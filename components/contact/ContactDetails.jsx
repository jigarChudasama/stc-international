import { directContact, locations } from "@/data/contact";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">

      {/* Locations */}
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        {locations.map((location) => (
          <div key={location.title}>
            <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-brand-gold">
              {location.title}
            </p>
            <address className="not-italic">
              {location.lines.map((line) => (
                <p
                  key={line}
                  className="text-[0.9375rem] leading-7 text-brand-dark"
                >
                  {line}
                </p>
              ))}
            </address>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px w-12 bg-brand-gold" aria-hidden="true" />

      {/* Direct contact */}
      <div>
        <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-brand-gold">
          {directContact.title}
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${directContact.email}`}
            className="text-[0.9375rem] leading-7 text-brand-dark underline decoration-brand-gold underline-offset-4 hover:no-underline"
          >
            {directContact.email}
          </a>
          <a
            href={directContact.phoneHref}
            className="text-[0.9375rem] leading-7 text-brand-dark underline decoration-brand-gold underline-offset-4 hover:no-underline"
          >
            {directContact.phone}
          </a>
        </div>
      </div>

    </div>
  );
}
