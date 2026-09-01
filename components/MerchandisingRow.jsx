"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, normalizeImageUrl, HOME_ROUTE } from "@/lib/formatters";
import { contentContainer, horizontalScrollRow } from "@/lib/ui";

export default function MerchandisingRow({ products = [] }) {
  return (
    <section className={`${contentContainer} py-6 lg:py-8`}>
      <div
        className={`${horizontalScrollRow} pb-2 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:pb-0`}
      >
        {products.map((product) => (
          <article key={product.sku} className="group min-w-[44vw] shrink-0 snap-start md:min-w-0">
            <Link href={HOME_ROUTE} className="block">
              <div className="relative mb-3 aspect-square overflow-hidden bg-hermes-cream">
                <Image
                  src={normalizeImageUrl(product.image, 767)}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 44vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mb-1 text-xs leading-snug">{product.title}</h3>
              <p className="text-xs text-hermes-gray group-hover:text-hermes-dark">
                Price {formatPrice(product.price)}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
