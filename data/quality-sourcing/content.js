import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE, LOREM } from "@/lib/placeholder";

export const heroImages = {
  desktop: [
    { src: PLACEHOLDER_IMAGE, alt: LOREM.short },
    { src: PLACEHOLDER_IMAGE, alt: LOREM.short },
  ],
  mobile: [
    { src: PLACEHOLDER_IMAGE, alt: LOREM.short },
    { src: PLACEHOLDER_IMAGE, alt: LOREM.short },
  ],
};

export const fullWidthImage = {
  src: PLACEHOLDER_WIDE,
  alt: LOREM.short,
};

export const products = Array.from({ length: 15 }, (_, index) => ({
  href: "/collection",
  src: PLACEHOLDER_IMAGE,
  alt: `${LOREM.product} ${index + 1}`,
}));
