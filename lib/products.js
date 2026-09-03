import siteData from "@/data/collection/site-data.json";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";
import { colors } from "@/data/product";
import { normalizeAssetUrl } from "@/lib/formatters";

export function getCollectionDetailHref(index = 0) {
  const color = colors[index % colors.length] || colors[0];
  return `/collection/${color.slug}`;
}

function normalizeProduct(product, index) {
  return {
    ...product,
    id: product.sku || `product-${index}`,
    imageDefault: normalizeAssetUrl(product.imageDefault),
    imageHover: product.imageHover
      ? normalizeAssetUrl(product.imageHover)
      : null,
    href: getCollectionDetailHref(index),
    slug: getCollectionDetailHref(index),
  };
}

/** Split products evenly across the 6 shop categories. */
function groupProductsByCategory(products) {
  const groups = PRODUCT_CATEGORIES.map((category) => ({
    ...category,
    products: [],
  }));

  products.forEach((product, index) => {
    groups[index % groups.length].products.push(product);
  });

  return groups.map((group, groupIndex) => ({
    ...group,
    count: `${group.products.length} items`,
    detailHref:
      group.products[0]?.href || getCollectionDetailHref(groupIndex),
  }));
}

export function getSiteData() {
  const products = siteData.products.map(normalizeProduct);
  const categorySections = groupProductsByCategory(products);

  const highlightBanner = categorySections.map((section) => ({
    id: section.id,
    label: section.title,
    count: section.count,
    href: `#${section.id}`,
    image: section.image || "/images/placeholder.jpg",
  }));

  return {
    ...siteData,
    products,
    highlightBanner,
    categorySections,
  };
}
