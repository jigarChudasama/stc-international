import Link from "next/link";
import ProductCard from "@/components/collection/ProductCard";
import { ctaLink } from "@/lib/ui";

function CategorySectionHeader({ section }) {
  return (
    <header className="mx-auto max-w-[720px] px-4 py-16 text-center md:py-20 lg:py-24">
      <h2
        id={`${section.id}-heading`}
        className="mb-5 font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]"
      >
        {section.headline || section.title}
      </h2>
      {section.intro ? (
        <p className="mx-auto mb-6 max-w-[640px] text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
          {section.intro}
        </p>
      ) : null}
      {section.detailHref ? (
        <p>
          <Link
            href={section.detailHref}
            className={`${ctaLink} text-xs`}
          >
            {(section.ctaText || "Discover").toUpperCase()}
          </Link>
        </p>
      ) : null}
    </header>
  );
}

function CategoryProductSection({ section, eager = false }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={`scroll-mt-[70px] border-t border-brand-divider first:border-t-0 lg:scroll-mt-20 ${eager ? "" : "defer-paint"}`}
    >
      <CategorySectionHeader section={section} />

      <div id={`${section.id}-products`} className="scroll-mt-[70px] px-6 pb-12 lg:scroll-mt-20 lg:pb-16">
        <div className="hero-product grid-container mx-auto grid w-full max-w-[1920px] grid-cols-2 grid-flow-dense gap-1 lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:gap-4">
          {section.products.map((product, index) => (
            <div
              key={product.id}
              id={`grid-product-H${product.sku}`}
              className="product-grid-list-item"
            >
              <ProductCard product={product} priority={eager && index < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductGrid({ categorySections }) {
  return (
    <div className="w-full">
      {categorySections.map((section, sectionIndex) => (
        <CategoryProductSection
          key={section.id}
          section={section}
          eager={sectionIndex === 0}
        />
      ))}
    </div>
  );
}
