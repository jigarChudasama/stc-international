export default function QuoteSection({ title, subtitle }) {
  return (
    <section className="bg-hermes-dark px-5 py-20 text-hermes-cream md:py-28 lg:py-36">
      <div className="mx-auto max-w-container text-center">
        <p className="quote-title">{title}</p>
        <p className="quote-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
