import siteData from "@/data/collection/site-data.json";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";
import { colors } from "@/data/product";
import { normalizeAssetUrl } from "@/lib/formatters";
import { PLACEHOLDER_IMAGE } from "@/lib/placeholder";

export const SHOW_PRODUCT_DETAIL = false;

export function getCollectionDetailHref(index = 0) {
  if (!SHOW_PRODUCT_DETAIL) return null;
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
    slug: getCollectionDetailHref(index) || product.slug,
  };
}

function groupProductsByCategory(products) {
  const groups = PRODUCT_CATEGORIES.map((category) => ({
    ...category,
    products: [],
  }));

  products.forEach((product, index) => {
    groups[index % groups.length].products.push(product);
  });

  return groups.map((group, groupIndex) => {
    const products = Array.isArray(group.items) && group.items.length
      ? group.items.map((item, itemIndex) => ({
          ...(group.products[itemIndex] || {
            id: `${group.id}-${itemIndex}`,
            sku: `${group.id}-${itemIndex}`,
            href: null,
          }),
          title: item.title,
          imageDefault: item.image,
          imageHover: item.imageHover || item.image,
        }))
      : group.products.map((product, productIndex) =>
          productIndex === 0 &&
          group.image &&
          group.image !== PLACEHOLDER_IMAGE
            ? { ...product, imageDefault: group.image, imageHover: group.image }
            : product
        );

    return {
      ...group,
      products,
      count: `${products.length} items`,
      detailHref:
        products[0]?.href || getCollectionDetailHref(groupIndex),
    };
  });
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
