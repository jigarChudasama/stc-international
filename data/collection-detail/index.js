export const metadata = {
  title: "Women's Campana in Black | Hermès",
  description: "Hermès® Women's Campana in Black. Shop online now.",
};

export const popins = {
  gift: {
    title: "Gift packaging",
    text: "All Hermès orders are elegantly packaged in our signature orange box. Gift messages can be added at checkout.",
  },
  certificate: {
    title: "Certificate of Craft",
    text: "This item is eligible for the Certificate of Craft, a complimentary care service offering the possibility of benefiting from reparation services.",
  },
  store: {
    title: "Discover in store",
    text: "Discover this item in your nearest Hermès boutique.",
  },
};

export const accordionItems = [
  { id: "details", label: "Product details" },
  { id: "gift", label: "Gift packaging" },
  { id: "certificate", label: "This bag is eligible for the Certificate of Craft" },
  { id: "store", label: "Discover in store" },
];

export {
  colors,
  product,
  cdnImage,
  formatPrice,
  getColorById,
  getColorBySlug,
  isRemoteImage,
} from "./product";
