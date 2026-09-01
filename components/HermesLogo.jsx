import Link from "next/link";

export default function HermesLogo({ variant = "header" }) {
  const isHeader = variant === "header";

  return (
    <div itemScope itemType="http://schema.org/Organization">
      <Link
        href="/"
        className="inline-flex items-center justify-center leading-none"
        aria-label="Homepage Hermès Paris"
        itemProp="url"
      >
        {isHeader ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hermes-logo-small.svg"
              alt=""
              className="block h-9 w-[3.75rem] lg:hidden"
              aria-hidden="true"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hermes-logo-full.svg"
              alt=""
              className="hidden h-12 w-[5.25rem] lg:block"
              aria-hidden="true"
            />
          </>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/images/hermes-logo-small.svg"
            alt=""
            className="block h-[3.21875rem] w-[5.625rem]"
            aria-hidden="true"
          />
        )}
        <span id="logo-accessibility" className="sr-only">
          Homepage Hermès Paris
        </span>
      </Link>
    </div>
  );
}
