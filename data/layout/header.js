import { PLACEHOLDER_IMAGE } from "@/lib/placeholder";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

export const mainMenu = PRODUCT_CATEGORIES.map((category, index) => ({
  type: "push",
  pimCode: `CAT_${index + 1}`,
  name: category.title,
  originalName: category.title,
  categoryPath: category.href,
  path: category.href,
  title: category.title,
  image: category.image || PLACEHOLDER_IMAGE,
  visibility: true,
  subcategories: [],
}));

export const aboutMenu = [
  {
    label: "About us",
    path: "/about-us",
    items: [],
  },
];
