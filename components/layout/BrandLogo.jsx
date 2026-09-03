import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({ variant = "header" }) {
  const isHeader = variant === "header";
  const size = isHeader ? 96 : 80;

  return (
    <div itemScope itemType="http://schema.org/Organization">
      <Link
        href="/"
        className="inline-flex items-center justify-center leading-none"
        aria-label="STC International homepage"
        itemProp="url"
      >
        <Image
          src="/images/stc-logo.png"
          alt="STC International"
          width={size}
          height={size}
          sizes={isHeader ? "(max-width: 1023px) 76px, 96px" : "80px"}
          className={
            isHeader
              ? "block h-[76px] w-[76px] object-contain lg:h-24 lg:w-24"
              : "block h-20 w-20 object-contain"
          }
        />
        <span id="logo-accessibility" className="sr-only">
          STC International
        </span>
      </Link>
    </div>
  );
}
