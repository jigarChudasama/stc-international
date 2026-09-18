import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_URL,
  copy,
  fullWidthImage,
  heroImages,
  products,
} from "@/data/quality-sourcing";
import { ctaLink } from "@/lib/ui";

function RemoteImage({ className, ...props }) {
  return <Image {...props} className={className} unoptimized />;
}

function TextBlock({ children, className = "", tight = false }) {
  return (
    <div
      className={`mx-auto w-full max-w-[640px] px-8 ${
        tight ? "py-10 md:py-12" : "py-16 md:py-20 lg:py-[88px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ProductTile({ product }) {
  const image = (
    <div className="relative aspect-[281/336] w-full overflow-hidden bg-brand-divider">
      <RemoteImage
        src={product.src}
        alt={product.alt}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover"
      />
    </div>
  );

  if (product.href) {
    return (
      <Link href={product.href} className="group block">
        <div className="transition-opacity duration-300 group-hover:opacity-80">{image}</div>
      </Link>
    );
  }

  return image;
}

export default function CertificateOfCraft() {
  return (
    <div id="certificate-of-craft" className="w-full overflow-x-hidden">
      <TextBlock className="text-center">
        <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
          {copy.overline}
        </p>
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {copy.title}
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
          {copy.intro}
        </p>
      </TextBlock>

      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          {heroImages.desktop.map((image, index) => (
            <div
              key={`desktop-${index}`}
              className={`relative aspect-square w-full overflow-hidden ${
                index === 0 ? "hidden md:block" : ""
              }`}
            >
              <RemoteImage
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
          {heroImages.mobile.map((image, index) => (
            <div
              key={`mobile-${index}`}
              className={`relative aspect-[4/5] w-full overflow-hidden md:hidden ${
                index > 0 ? "mt-3" : ""
              }`}
            >
              <RemoteImage
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <TextBlock tight>
        <h2 className="mb-6 text-center font-edito text-xl font-normal tracking-wide text-brand-navy md:text-[1.375rem]">
          {copy.materials.title}
        </h2>
        <ul className="space-y-4">
          {copy.materials.items.map((item) => (
            <li key={item.label} className="flex gap-3.5 text-left">
              <span
                aria-hidden="true"
                className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
              />
              <p className="text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
                <span className="font-bold text-brand-dark">{item.label}: </span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </TextBlock>

      <section className="w-full">
        <div className="relative aspect-[1440/714] w-full overflow-hidden">
          <RemoteImage
            src={fullWidthImage.src}
            alt={fullWidthImage.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <TextBlock tight>
        <h2 className="mb-6 text-center font-edito text-xl font-normal tracking-wide text-brand-navy md:text-[1.375rem]">
          {copy.quality.title}
        </h2>
        <div className="space-y-4">
          {copy.quality.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </TextBlock>

      <section className="w-full pt-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-[9px]">
          {products.map((product, index) => (
            <ProductTile key={`${product.src}-${index}`} product={product} />
          ))}
        </div>
      </section>

      <TextBlock className="text-center">
        <h2 className="mb-5 font-edito text-xl font-normal tracking-wide text-brand-navy md:text-[1.375rem]">
          {copy.closing.title}
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
          {copy.closing.body}
        </p>
        <p>
          <Link href={CONTACT_URL} className={`${ctaLink} text-xs`}>
            {copy.closing.cta}
          </Link>
        </p>
      </TextBlock>
    </div>
  );
}
