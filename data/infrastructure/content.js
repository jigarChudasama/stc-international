import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "Our Factory | STC International Leather Manufacturing, Bantala Kolkata",
  description:
    "Inside STC International's 120,000 sq. ft. leather goods factory in the Calcutta Leather Complex, Bantala: three production floors and machinery from five countries.",
};

export const PAGE = {
  overline: "Where we make it",
  title: "Infrastructure",
};

export const HERO = {
  posterDesktop: PLACEHOLDER_WIDE,
  posterMobile: PLACEHOLDER_WIDE,
  youtubeId: "2fxLXH2vNXk",
};

export const EDITORIAL = {
  title: "Capacity built for the long run",
  intro:
    "Three floors, five countries of machinery, one factory. Everything a buyer needs to check on a factory audit is under this one roof.",
};

export const MEDIA_SECTIONS = [
  {
    title: "Our factory",
    image: PLACEHOLDER_WIDE,
    paragraphs: [
      "We set up our factory in the Calcutta Leather Complex, Bantala, in 2012, and it's been running ever since. It's a 120,000 sq. ft. (12,000 sq. m.) facility fitted with machinery imported from Italy, Germany, Japan, South Korea and China.",
      "We keep reinvesting in newer production technology, because the standard our partners expect doesn't stay still, and neither do we.",
    ],
    stats: [
      { icon: "building", label: "120,000 sq. ft. facility" },
      { icon: "calendar", label: "Established 2012" },
      { icon: "globe", label: "Machinery from 5 countries" },
      { icon: "layers", label: "3 production floors" },
    ],
  },
  {
    title: "Inside the factory",
    image: PLACEHOLDER_IMAGE,
    reverse: true,
    paragraphs: [
      "Production runs across three floors, with departments dedicated to each stage: leather cutting, sample development, stitching, and cleaning & checking.",
      "Equipment includes automatic stitching machines, laser cutting machines, die-less cutting machines and reinforcement cutting machines, plus a dedicated packing department.",
      "We produce around 25,000 to 30,000 handbags and about 20,000 small leather goods every month.",
    ],
  },
];
