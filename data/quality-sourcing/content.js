import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

export const heroImages = {
  desktop: [
    {
      src: "/images/Certificate-of-Craft-1.png",
      alt: "Certificate of Craft - STC International",
    },
    {
      src: "/images/Certificate-of-Craft-2.png",
      alt: "Certificate of Craft - Handcrafted Leather Bag",
    },
  ],
  mobile: [
    {
      src: "/images/Certificate-of-Craft-1.png",
      alt: "Certificate of Craft - STC International",
    },
    {
      src: "/images/Certificate-of-Craft-2.png",
      alt: "Certificate of Craft - Handcrafted Leather Bag",
    },
  ],
};

export const fullWidthImage = {
  src: "/images/Certificate-of-Craft-3.png",
  alt: "Certificate of Craft - Handcrafted Leather Wallets & Cardholders",
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
