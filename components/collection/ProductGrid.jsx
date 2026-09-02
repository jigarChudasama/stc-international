import Image from 'next/image';
import ProductCard from '@/components/collection/ProductCard';

function GridEdito({ edito }) {
  return (
    <div id="grid-result-edito-0" className="grid-result-edito">
      <section aria-label="Editorial content" className="py-8 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative mx-auto mb-8 aspect-[3/4] w-full max-w-sm overflow-hidden">
            <Image
              src={edito.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </div>
          <h2 className="font-serif text-[1.875rem] font-normal italic leading-normal">
            {edito.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-base italic leading-relaxed text-neutral-700 lg:text-lg">
            {edito.subtitle}
          </p>
        </div>
      </section>
    </div>
  );
}

export function ProductGrid({ products, edito }) {
  return (
    <section className="px-6 pt-6">
      <div className="hero-product grid-container mx-auto grid w-full max-w-[1920px] grid-cols-2 grid-flow-dense gap-1 lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            id={`grid-product-H${product.sku}`}
            className="product-grid-list-item"
          >
            <ProductCard product={product} priority={index < 4} />
          </div>
        ))}
        {edito && <GridEdito edito={edito} />}
      </div>
    </section>
  );
}
