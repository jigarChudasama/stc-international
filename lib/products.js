import siteData from "@/data/collection/site-data.json";
import { normalizeHermesImageUrl } from "@/lib/formatters";

export function getSiteData() {
  const products = siteData.products.map((product, index) => ({
    ...product,
    id: product.sku || `product-${index}`,
    imageDefault: normalizeHermesImageUrl(product.imageDefault),
    imageHover: product.imageHover
      ? normalizeHermesImageUrl(product.imageHover)
      : null,
  }));

  return {
    ...siteData,
    products,
  };
}
