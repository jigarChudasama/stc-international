import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "Sustainability at STC International | Responsible Leather Manufacturing",
  description:
    "Solar power, LWG certified leather sourcing and women's employment: how STC International manufactures leather goods responsibly in Kolkata.",
};

export const PAGE = {
  overline: "Doing our part",
  title: "Sustainability",
};

export const HERO = {
  posterDesktop: PLACEHOLDER_IMAGE,
  posterMobile: PLACEHOLDER_WIDE,
};

export const EDITORIAL = {
  title: "Sustainability we can actually back up",
  intro:
    "Every claim on this page happens inside our own factory walls, not somewhere we outsource and hope holds up.",
};

export const MEDIA_SECTIONS = [
  {
    title: "Responsible materials",
    image: PLACEHOLDER_IMAGE,
    paragraphs: [
      "About 15% of our production uses eco or 100% vegetable-tanned leather, and 70 to 80% of the leather we buy comes from an LWG certified, Silver-rated tannery. That's not a marketing line, it's how we source, order after order.",
      "Hardware comes from Hong Kong and China and meets REACH, Prop 65 and AFIRM standards, so it clears the bar most international markets expect.",
      "We also prioritize suppliers who use recycled materials and minimal packaging wherever we can.",
    ],
  },
  {
    title: "Cutting our footprint",
    image: PLACEHOLDER_WIDE,
    reverse: true,
    paragraphs: [
      "A 270 kWh solar installation on our factory roof cuts our grid electricity use by up to 60%, saving over 1,000,000 lbs of CO2 every year.",
      "LED lighting and energy-efficient equipment keep daily consumption down, and rainwater harvesting reduces how much water we pull from outside sources. We also run recycling programs for paper and plastics, and keep working to cut packaging waste.",
    ],
  },
  {
    title: "People and transport",
    image: PLACEHOLDER_IMAGE,
    paragraphs: [
      "We promote women's employment across our factory, giving as many women as possible a route into skilled, stable work. We also encourage carpooling, cycling, public transit and EVs among our team, including an electric vehicle we use to move leather in from our tanneries.",
    ],
  },
];
