import CategoryHighlight from "@/components/collection/CategoryHighlight";
import EditorialText from "@/components/EditorialText";
import { ProductGrid } from "@/components/collection/ProductGrid";
import { metadata as collectionMetadata } from "@/data/collection";
import { getSiteData } from "@/lib/products";

export const metadata = collectionMetadata;

export default function CollectionPage() {
  const data = getSiteData();

  return (
    <div className="w-full">
      <CategoryHighlight items={data.highlightBanner} />
      <ProductGrid products={data.products} edito={data.edito} />
      <div className="mt-16 border-t border-hermes-divider">
        <EditorialText
          title={data.edito.title}
          intro={data.edito.subtitle}
        />
      </div>
    </div>
  );
}
