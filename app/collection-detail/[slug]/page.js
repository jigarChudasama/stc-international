import ProductPage from "@/components/collection-detail/ProductPage";
import { colors, getColorBySlug, product } from "@/data/collection-detail";

export function generateStaticParams() {
  return colors.map((color) => ({ slug: color.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const color = getColorBySlug(slug);

  return {
    title: `Women's ${product.name} in ${color.name} | Hermès`,
    description: `Hermès® Women's ${product.name} in ${color.name}. Shop online now.`,
  };
}

export default async function CollectionDetailPage({ params }) {
  const { slug } = await params;
  const color = getColorBySlug(slug);

  return (
    <div className="collection-detail-page w-full bg-hermes-cream">
      <ProductPage initialColorId={color.id} />
    </div>
  );
}
