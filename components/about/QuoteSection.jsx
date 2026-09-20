export default function QuoteSection({ title, subtitle }) {
  return (
    <section className="bg-brand-navy px-5 py-20 text-brand-cream md:py-28 lg:py-36">
      <div className="mx-auto max-w-container text-center">
        <p className="quote-title">{title}</p>
        {subtitle ? <p className="quote-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
