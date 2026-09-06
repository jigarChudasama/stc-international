import { PLACEHOLDER_IMAGE } from "@/lib/placeholder";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

export const mainMenu = [
  {
    type: "group",
    name: "Categories",
    title: "Categories",
    path: "/collection",
    categoryPath: "/collection",
    visibility: true,
    subcategories: PRODUCT_CATEGORIES.map((category, index) => ({
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
    })),
  },
];

export const aboutMenu = [
  {
    label: "About us",
    path: "/about-us",
    items: [],
  },
  {
    label: "Quality & Sourcing",
    path: "/quality-sourcing",
    items: [],
  },
  {
    label: "Sustainability",
    path: "/sustainability",
    items: [],
  },
  {
    label: "Infrastructure",
    path: "/infrastructure",
    items: [],
  },
];
