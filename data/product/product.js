import { PLACEHOLDER_IMAGE, LOREM } from "@/lib/placeholder";

const BLACK_SUFFIXES = ["A", "B", "C", "D", "F", "G"];
const COLOR_SUFFIXES = ["A", "B", "C", "D"];

export function cdnImage() {
  return PLACEHOLDER_IMAGE;
}

export function isRemoteImage(src) {
  return typeof src === "string" && (src.startsWith("http://") || src.startsWith("https://"));
}

function placeholderGallery(count) {
  return Array.from({ length: count }, () => PLACEHOLDER_IMAGE);
}

export const colors = [
  {
    id: "1019",
    name: "Lorem black",
    sku: "844249V4SC01019",
    slug: "campana-black-844249V4SC01019",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(BLACK_SUFFIXES.length),
  },
  {
    id: "1653",
    name: "Lorem basalt",
    sku: "844249V4SC01653",
    slug: "campana-basalt-844249V4SC01653",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(COLOR_SUFFIXES.length),
  },
  {
    id: "2190",
    name: "Lorem fondant",
    sku: "844249V4SC02190",
    slug: "campana-fondant-844249V4SC02190",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(COLOR_SUFFIXES.length),
  },
  {
    id: "2387",
    name: "Lorem tannin",
    sku: "844249V4SC02387",
    slug: "campana-tannin-844249V4SC02387",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(COLOR_SUFFIXES.length),
  },
  {
    id: "4338",
    name: "Lorem midnight",
    sku: "844249V4SC04338",
    slug: "campana-midnight-844249V4SC04338",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(COLOR_SUFFIXES.length),
  },
  {
    id: "6147",
    name: "Lorem mahogany",
    sku: "844249V4SC06147",
    slug: "campana-deep-mahogany-844249V4SC06147",
    swatch: PLACEHOLDER_IMAGE,
    thumb: PLACEHOLDER_IMAGE,
    images: placeholderGallery(COLOR_SUFFIXES.length),
  },
];

export const product = {
  id: "844249V4SC01019",
  pid: "813976173",
  name: "Lorem product",
  fullName: "Women's Lorem product",
  brand: "Lorem",
  price: 4500,
  currency: "USD",
  description: LOREM.medium,
  longDescription: [LOREM.short, LOREM.short],
  shortDescription: [
    "Lining: Lorem ipsum",
    "Color: Lorem",
    "Hardware: Lorem finish",
  ],
  madeIn: "Lorem",
  material: "Lorem material",
  sizeAndFit: [
    'Height: 20 cm | 7.9"',
    'Width: 33 cm | 13"',
    'Depth: 16.5 cm | 6.5"',
    'Handle drop: 20 cm | 7.9"',
  ],
  productCare: `WEAR AND CARE\n\n${LOREM.long}\n\n${LOREM.medium}`,
  delivery: "Lorem ipsum delivery",
  inStock: true,
};

export function formatPrice(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getColorById(id) {
  return colors.find((color) => color.id === id) || colors[0];
}

export function getColorBySlug(slug) {
  return colors.find((color) => color.slug === slug) || colors[0];
}
