import { contentContainer } from "@/lib/ui";

export default function StatStrip({ items = [] }) {
  return (
    <section className={`${contentContainer} defer-paint py-10 lg:py-14`}>
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {items.map((item) => (
          <li key={item.label} className="text-center">
            <p className="font-edito text-xl font-normal tracking-wide text-brand-navy md:text-[1.75rem]">
              {item.value}
            </p>
            <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
