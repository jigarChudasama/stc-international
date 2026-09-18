import CategoryHighlight from "@/components/collection/CategoryHighlight";
import { ProductGrid } from "@/components/collection/ProductGrid";
import { metadata as collectionMetadata, page } from "@/data/collection";
import { getSiteData } from "@/lib/products";

export const metadata = collectionMetadata;

export default function CollectionPage() {
  const data = getSiteData();

  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <header className="mx-auto w-full max-w-[860px] px-[15px] pb-8 pt-12 text-center md:px-8 md:pb-10 md:pt-16 lg:pt-20">
        <p className="mb-4 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
          {page.overline}
        </p>
        <h1 className="font-edito text-[1.75rem] font-normal leading-tight tracking-wide text-brand-dark md:text-[2.25rem] lg:text-[2.5rem]">
          {page.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-brand-gray md:text-[0.9375rem] md:leading-7">
          {page.intro}
        </p>
      </header>

      <CategoryHighlight items={data.highlightBanner} />
      <ProductGrid categorySections={data.categorySections} />
    </div>
  );
}
