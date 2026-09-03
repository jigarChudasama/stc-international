import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE, LOREM } from "@/lib/placeholder";

const product = (n) => ({
  title: `${LOREM.product} ${String(n).padStart(2, "0")}`,
  sku: `SKU-${n}`,
  price: 1000 + n * 100,
  image: PLACEHOLDER_IMAGE,
});

export const homeSections = [
  { type: "categoryPush" },
  {
    type: "editorial",
    title: LOREM.title,
    intro: LOREM.medium,
    ctaText: LOREM.cta,
  },
  {
    type: "heroMedia",
    desktopImage: PLACEHOLDER_WIDE,
    mobileImage: PLACEHOLDER_IMAGE,
    alt: LOREM.short,
    link: true,
  },
  {
    type: "merchandising",
    products: [product(1), product(2), product(3), product(4)],
  },
  {
    type: "editorial",
    title: "Lorem ipsum amet",
    intro: LOREM.long,
    ctaText: LOREM.cta,
  },
  {
    type: "heroMedia",
    desktopImage: PLACEHOLDER_WIDE,
    mobileImage: PLACEHOLDER_IMAGE,
    alt: LOREM.short,
    link: true,
  },
  {
    type: "merchandising",
    products: [product(5), product(6), product(7), product(8)],
  },
  {
    type: "editorial",
    title: "Dolor sit amet",
    intro: LOREM.medium,
    ctaText: LOREM.cta,
  },
  {
    type: "heroMedia",
    desktopImage: PLACEHOLDER_WIDE,
    mobileImage: PLACEHOLDER_IMAGE,
    alt: LOREM.short,
    alwaysShowControls: true,
    videoLoopMuteAutoplay: true,
  },
  {
    type: "merchandising",
    products: [product(9), product(10), product(11), product(12)],
  },
];
