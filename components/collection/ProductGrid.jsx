import Link from "next/link";
import ProductCard from "@/components/collection/ProductCard";
import { ctaLink } from "@/lib/ui";
import { LOREM } from "@/lib/placeholder";

function CategorySectionHeader({ section }) {
  return (
    <header className="mx-auto max-w-[720px] px-4 py-10 text-center lg:py-14">
      <h2
        id={`${section.id}-heading`}
        className="mb-4 font-edito text-[1.375rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[1.75rem] lg:text-[2rem]"
      >
        {section.headline || LOREM.title}
      </h2>
      <p className="mx-auto mb-6 max-w-[640px] text-xs leading-relaxed text-brand-gray md:text-sm">
        {section.intro || LOREM.medium}
      </p>
      <p>
        <Link
          href={section.detailHref || section.products?.[0]?.href || "/collection"}
          className={`${ctaLink} text-xs`}
        >
          {(section.ctaText || "Discover").toUpperCase()}
        </Link>
      </p>
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

      <div id={`${section.id}-products`} className="scroll-mt-[70px] px-6 pb-4 lg:scroll-mt-20">
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
