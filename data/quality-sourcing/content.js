import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

export const heroImages = {
  desktop: [
    { src: PLACEHOLDER_IMAGE, alt: "Quality and sourcing at STC International" },
    { src: PLACEHOLDER_IMAGE, alt: "Quality and sourcing at STC International" },
  ],
  mobile: [
    { src: PLACEHOLDER_IMAGE, alt: "Quality and sourcing at STC International" },
    { src: PLACEHOLDER_IMAGE, alt: "Quality and sourcing at STC International" },
  ],
};

export const fullWidthImage = {
  src: PLACEHOLDER_WIDE,
  alt: "Quality and sourcing at STC International",
};

function shuffle(list) {
  const items = [...list];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

export function getQualityProducts() {
  const products = PRODUCT_CATEGORIES.flatMap((category) =>
    (category.items || [])
      .filter((item) => item.image !== "/images/mans-bags/Mensbag2.png")
      .map((item) => ({
        href: category.href || "/collection",
        src: item.image,
        alt: item.title,
      }))
  );

  return shuffle(products);
}
