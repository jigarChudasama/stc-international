import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

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

export const products = Array.from({ length: 15 }, (_, index) => ({
  href: "/collection",
  src: PLACEHOLDER_IMAGE,
  alt: `Quality and sourcing at STC International ${index + 1}`,
}));
