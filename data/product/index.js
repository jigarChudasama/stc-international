import { LOREM } from "@/lib/placeholder";

export const metadata = {
  title: "Women's Lorem product | Lorem ipsum",
  description: LOREM.medium,
};

export const popins = {
  gift: {
    title: "Lorem gift packaging",
    text: LOREM.medium,
  },
  certificate: {
    title: "Lorem certificate",
    text: LOREM.medium,
  },
  store: {
    title: "Lorem store",
    text: LOREM.short,
  },
};

export const accordionItems = [
  { id: "details", label: "Lorem product details" },
  { id: "gift", label: "Lorem gift packaging" },
  { id: "certificate", label: "Lorem certificate of craft" },
  { id: "store", label: "Lorem discover in store" },
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
