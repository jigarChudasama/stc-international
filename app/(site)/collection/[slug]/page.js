import ProductPage from "@/components/product/ProductPage";
import { colors, getColorBySlug, product } from "@/data/product";

export function generateStaticParams() {
  return colors.map((color) => ({ slug: color.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const color = getColorBySlug(slug);

  return {
    title: `Women's ${product.name} in ${color.name} | Lorem`,
    description: `Lorem ipsum Women's ${product.name} in ${color.name}. Shop online now.`,
  };
}

export default async function CollectionProductPage({ params }) {
  const { slug } = await params;
  const color = getColorBySlug(slug);

  return (
    <div className="collection-detail-page w-full bg-brand-cream">
      <ProductPage initialColorId={color.id} />
    </div>
  );
}
