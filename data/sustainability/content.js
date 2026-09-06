import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "Sustainability | STC International",
  description:
    "How STC International sources leather, reduces waste, and builds products meant to last.",
};

export const HERO = {
  posterDesktop: PLACEHOLDER_IMAGE,
  posterMobile: PLACEHOLDER_WIDE,
};

export const EDITORIAL = {
  title: "Made with tomorrow in mind",
  intro:
    "From responsible sourcing to repairable design, every decision aims to lower impact while keeping leather goods in use longer.",
};

export const MEDIA_SECTIONS = [
  {
    title: "RESPONSIBLE MATERIALS",
    image: PLACEHOLDER_IMAGE,
    paragraphs: [
      "Sustainability starts with what we choose. We prioritize leathers from partners who document traceability, reduce chemical load, and meet clear environmental standards.",
      "Offcuts are sorted for smaller goods and sample programs so less material leaves the workshop unused.",
      "Packaging follows the same rule: fewer layers, recyclable wraps, and no single-use plastic fillers.",
    ],
  },
  {
    title: "BUILT TO LAST",
    image: PLACEHOLDER_WIDE,
    reverse: true,
    paragraphs: [
      "The most sustainable product is the one that stays in use. Reinforced stress points, replaceable hardware options, and repair-friendly construction extend each piece’s life.",
      "We design for repair first — seams that can be reopened, linings that can be renewed, and finishes that age instead of peel.",
    ],
  },
];
