'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product, priority = false }) {
  const [hovered, setHovered] = useState(false);
  const [hoverFailed, setHoverFailed] = useState(false);
  const hasHover =
    Boolean(product.imageHover) &&
    product.imageHover !== product.imageDefault &&
    !hoverFailed;

  return (
    <div
      className="relative flex h-full grow flex-col text-left"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="order-2 flex text-left opacity-100">
        <div className="flex grow flex-col pt-2">
          {product.isNew && (
            <span className="mb-1 font-sans text-[0.625rem] font-bold uppercase leading-[14px] tracking-wide">
              New
            </span>
          )}
          <Link
            href={product.slug || '#'}
            className="after:absolute after:inset-0 after:z-20 after:content-['']"
            title={`${product.title}${product.color ? `, ${product.color}` : ''}`}
          >
            <span className="relative z-10 text-sm font-normal leading-[22px]">
              {product.title}
            </span>
          </Link>
          {product.color && (
            <span className="sr-only">Color: {product.color}</span>
          )}
          {product.price && (
            <div className="relative z-10 m-0 text-xs leading-5">
              <span className="notranslate">{product.price}</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative order-1 z-[1] block grow overflow-hidden">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.imageDefault}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`pointer-events-none object-cover transition-opacity duration-500 ease-in-out ${
              hasHover && hovered ? 'opacity-0' : 'opacity-100'
            } ${
              !hasHover
                ? 'transition-transform duration-[600ms] ease-in'
                : ''
            } ${!hasHover && hovered ? 'scale-[1.03]' : ''}`}
            priority={priority}
          />
          {hasHover && (
            <Image
              src={product.imageHover}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={`pointer-events-none absolute inset-0 z-10 object-cover transition-opacity duration-500 ease-in-out ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
              onError={() => setHoverFailed(true)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
}
