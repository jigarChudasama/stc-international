import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "Infrastructure | STC International",
  description:
    "Production floors, quality labs, and logistics that support STC International leather goods.",
};

export const HERO = {
  posterDesktop: PLACEHOLDER_WIDE,
  posterMobile: PLACEHOLDER_WIDE,
};

export const EDITORIAL = {
  title: "Capacity built for craft",
  intro:
    "Production lines, quality labs, and logistics work as one system — so every piece leaves with the same standard of finish and care.",
};

export const MEDIA_SECTIONS = [
  {
    title: "PRODUCTION FLOOR",
    image: PLACEHOLDER_WIDE,
    paragraphs: [
      "Our infrastructure is organized around controlled flow: cutting rooms, stitching lines, finishing benches, and dedicated QC stations under one coordinated system.",
      "Climate-managed storage keeps leather stable before cutting, while digital cutting plans reduce variance across production runs.",
      "Skilled teams work in defined stations so every bag moves through the same checkpoints before it ships.",
    ],
  },
  {
    title: "QUALITY & LOGISTICS",
    image: PLACEHOLDER_IMAGE,
    reverse: true,
    paragraphs: [
      "A separate quality lab checks stitch density, hardware torque, colorfastness, and structural load before release.",
      "Finished goods move through barcode tracking from packing to dispatch, keeping inventory and delivery timelines visible across warehouses.",
    ],
  },
];
