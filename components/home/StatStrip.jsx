import { contentContainer } from "@/lib/ui";

export default function StatStrip({ items = [] }) {
  return (
    <section className={`${contentContainer} defer-paint border-t border-brand-divider py-14 lg:py-20`}>
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <li
            key={item.label}
            className="relative px-4 py-2 text-center lg:px-6"
          >
            {/* Thin vertical divider between items */}
            {i !== 0 && (
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-8 w-px -translate-y-1/2 bg-brand-divider"
              />
            )}

            <p
              className="font-edito font-normal leading-tight text-brand-navy"
              style={{ fontSize: "clamp(1.375rem, 2.8vw, 2.25rem)" }}
            >
              {item.value}
            </p>

            <p className="mt-2 text-[0.5625rem] uppercase tracking-[0.12em] text-brand-gold">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

