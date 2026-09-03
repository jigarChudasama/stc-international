import CategoryHighlight from "@/components/collection/CategoryHighlight";
import EditorialText from "@/components/home/EditorialText";
import { ProductGrid } from "@/components/collection/ProductGrid";
import { metadata as collectionMetadata } from "@/data/collection";
import { getSiteData } from "@/lib/products";

export const metadata = collectionMetadata;

export default function CollectionPage() {
  const data = getSiteData();

  return (
    <div className="w-full">
      <CategoryHighlight items={data.highlightBanner} />
      <ProductGrid categorySections={data.categorySections} />
      <div className="mt-16 border-t border-brand-divider">
        <EditorialText
          title={data.edito.title}
          intro={data.edito.subtitle}
        />
      </div>
    </div>
  );
}
