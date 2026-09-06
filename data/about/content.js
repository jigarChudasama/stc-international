import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "About us | STC International",
  description:
    "STC International crafts leather goods with heritage techniques and a modern design language.",
};

export const EDITORIAL = {
  title: "Crafted for every journey",
  intro:
    "From atelier sketches to finished leather goods, our house story is built on patience, material honesty, and lasting form.",
};

export const HERO_VIDEO = {
  desktop: "",
  mobile: "",
  posterDesktop: PLACEHOLDER_WIDE,
  posterMobile: PLACEHOLDER_IMAGE,
};

export const MEDIA_SECTIONS = [
  {
    title: "OUR HOUSE",
    image: PLACEHOLDER_WIDE,
    paragraphs: [
      "STC International began as a workshop dedicated to precise leather craft. Each piece is shaped by hand, measured for balance, and finished to travel well across seasons.",
      "We work with selected tanneries and makers who share our pace — careful cutting, clean seams, and hardware chosen for longevity rather than trend.",
      "The result is a quiet wardrobe of bags and small leather goods designed to feel familiar from the first wear.",
    ],
  },
  {
    title: "THE ATELIER",
    image: PLACEHOLDER_IMAGE,
    reverse: true,
    paragraphs: [
      "Inside the atelier, patterns are refined over years. Silhouettes stay intentional: soft structure, generous capacity, and details that reward daily use.",
      "Every collection returns to the same principles — honest materials, considered proportion, and a finish that ages with character.",
    ],
  },
];

export const QUOTE = {
  title:
    "We believe leather should feel lived-in, not disposable — made once, carried often, and kept for years.",
  subtitle: "A HOUSE OF LASTING LEATHER",
};
