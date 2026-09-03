import Image from "next/image";
import Link from "next/link";
import {
  copy,
  fullWidthImage,
  heroImages,
  products,
  SELECTION_URL,
} from "@/data/quality-sourcing";

function RemoteImage({ className, ...props }) {
  return <Image {...props} className={className} unoptimized />;
}

function TextBlock({ children, className = "", tight = false }) {
  return (
    <div
      className={`mx-auto w-full max-w-[600px] px-8 ${
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
      <h1 className="sr-only">{copy.title}</h1>

      <TextBlock>
        <h2 className="qs-heading">{copy.title}</h2>
        <p className="qs-copy mt-8 md:mt-10">{copy.intro}</p>
      </TextBlock>

      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          {heroImages.desktop.map((image, index) => (
            <div
              key={image.src}
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
              key={`mobile-${image.src}`}
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
        <p className="qs-copy-body">{copy.card}</p>
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
        <p className="qs-copy-body">{copy.care}</p>
        <p className="mt-8 text-left md:text-center">
          <Link href={SELECTION_URL} className="qs-text-link">
            <span className="md:hidden">{copy.ctaMobile}</span>
            <span className="hidden md:inline">{copy.ctaDesktop}</span>
          </Link>
        </p>
      </TextBlock>

      <section className="w-full pb-16 pt-4 md:pb-20">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-[9px]">
          {products.map((product) => (
            <ProductTile key={product.src} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
