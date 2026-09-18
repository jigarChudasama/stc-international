const CONTACT_EMAIL = "info@stcinternational.in";

export default function LinkedCopy({ text }) {
  if (!text.includes(CONTACT_EMAIL)) {
    return text;
  }

  const [before, after] = text.split(CONTACT_EMAIL);

  return (
    <>
      {before}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-brand-navy underline decoration-brand-gold underline-offset-4 transition-opacity hover:opacity-70"
      >
        {CONTACT_EMAIL}
      </a>
      {after}
    </>
  );
}
