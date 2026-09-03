import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE, LOREM } from "@/lib/placeholder";

export const metadata = {
  title: "About us | Lorem ipsum",
  description: LOREM.long,
};

export const EDITORIAL = {
  title: LOREM.title,
  intro: LOREM.medium,
};

export const HERO_VIDEO = {
  desktop: "",
  mobile: "",
  posterDesktop: PLACEHOLDER_WIDE,
  posterMobile: PLACEHOLDER_IMAGE,
};

export const MEDIA_SECTIONS = [
  {
    title: "LOREM IPSUM",
    image: PLACEHOLDER_WIDE,
    paragraphs: [LOREM.long, LOREM.medium, LOREM.short],
  },
  {
    title: "DOLOR SIT AMET",
    image: PLACEHOLDER_IMAGE,
    reverse: true,
    paragraphs: [LOREM.long, LOREM.medium],
  },
];

export const QUOTE = {
  title: LOREM.long,
  subtitle: "LOREM IPSUM DOLOR SIT AMET",
};
