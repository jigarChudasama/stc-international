const CDN_BASE =
  "https://bottega-veneta.dam.kering.com/asset/fa4f37d6-5cc6-4e7d-a22a-7623faf63d03/eCom";

const BLACK_SUFFIXES = ["A", "B", "C", "D", "F", "G"];
const COLOR_SUFFIXES = ["A", "B", "C", "D"];

export function cdnImage(sku, suffix = "") {
  const name = suffix ? `${sku}_${suffix}.jpg` : `${sku}.jpg`;
  return `${CDN_BASE}/${name}?v=4`;
}

function buildLocalImages(sku, suffixes) {
  return suffixes.map((suffix) => `/images/${sku}_${suffix}.jpg`);
}

function buildCdnImages(sku, suffixes) {
  return suffixes.map((suffix) => cdnImage(sku, suffix));
}

export function isRemoteImage(src) {
  return typeof src === "string" && (src.startsWith("http://") || src.startsWith("https://"));
}

export const colors = [
  {
    id: "1019",
    name: "Black",
    sku: "844249V4SC01019",
    slug: "campana-black-844249V4SC01019",
    swatch: "/images/844249V4SC01019.jpg",
    thumb: "/images/844249V4SC01019.jpg",
    images: buildLocalImages("844249V4SC01019", BLACK_SUFFIXES),
  },
  {
    id: "1653",
    name: "Basalt",
    sku: "844249V4SC01653",
    slug: "campana-basalt-844249V4SC01653",
    swatch: cdnImage("844249V4SC01653"),
    thumb: cdnImage("844249V4SC01653"),
    images: buildCdnImages("844249V4SC01653", COLOR_SUFFIXES),
  },
  {
    id: "2190",
    name: "Fondant",
    sku: "844249V4SC02190",
    slug: "campana-fondant-844249V4SC02190",
    swatch: cdnImage("844249V4SC02190"),
    thumb: cdnImage("844249V4SC02190"),
    images: buildCdnImages("844249V4SC02190", COLOR_SUFFIXES),
  },
  {
    id: "2387",
    name: "Tannin",
    sku: "844249V4SC02387",
    slug: "campana-tannin-844249V4SC02387",
    swatch: cdnImage("844249V4SC02387"),
    thumb: cdnImage("844249V4SC02387"),
    images: buildCdnImages("844249V4SC02387", COLOR_SUFFIXES),
  },
  {
    id: "4338",
    name: "Midnight",
    sku: "844249V4SC04338",
    slug: "campana-midnight-844249V4SC04338",
    swatch: cdnImage("844249V4SC04338"),
    thumb: cdnImage("844249V4SC04338"),
    images: buildCdnImages("844249V4SC04338", COLOR_SUFFIXES),
  },
  {
    id: "6147",
    name: "Deep mahogany",
    sku: "844249V4SC06147",
    slug: "campana-deep-mahogany-844249V4SC06147",
    swatch: cdnImage("844249V4SC06147"),
    thumb: cdnImage("844249V4SC06147"),
    images: buildCdnImages("844249V4SC06147", COLOR_SUFFIXES),
  },
];

export const product = {
  id: "844249V4SC01019",
  pid: "813976173",
  name: "Campana",
  fullName: "Women's Campana in Black",
  brand: "Hermès",
  price: 4500,
  currency: "USD",
  description:
    "Shoulder bag with archival silhouette in supple Intrecciato leather with tie closure.",
  longDescription: [
    "Intrecciato leather shoulder bag",
    "Leather tie closure with hidden magnet",
  ],
  shortDescription: [
    "Lining: Unlined",
    "Color: Black",
    "Hardware: Brass finish",
  ],
  madeIn: "Italy",
  material: "Lambskin",
  sizeAndFit: [
    'Height: 20 cm | 7.9"',
    'Width: 33 cm | 13"',
    'Depth: 16.5 cm | 6.5"',
    'Handle drop: 20 cm | 7.9"',
  ],
  productCare:
    "WEAR AND CARE\n\nThis is the product of Italian craftsmanship made in a natural leather. Any variations, veining, marks, or irregularities are unique characteristics we embrace.\n\nStore and handle with care. Avoid contact with any liquids, creams, oils, make-up, perfumes, direct sunlight, heat and abrasive surfaces.",
  delivery: "Free express delivery",
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
  return colors.find((c) => c.id === id) ?? colors[0];
}

export function getColorBySlug(slug) {
  return colors.find((c) => c.slug === slug) ?? colors[0];
}
