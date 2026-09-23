import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";
import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

const categoryImage = (title) =>
  PRODUCT_CATEGORIES.find((category) => category.title === title)?.image ||
  PLACEHOLDER_IMAGE;

const tile = (title, href) => ({
  title,
  image: categoryImage(title),
  href,
});

export const homeSections = [
  { type: "categoryPush" },
  {
    type: "editorial",
    title: "What we make",
    intro:
      "Five categories, one factory. Men's bags, women's handbags, travel bags and backpacks, purses and wallets, all cut and stitched under one roof in Bantala.",
    label: "Explore the full collection",
    ctaText: "Discover",
    ctaHref: "/collection",
  },
  {
    type: "heroMedia",
    desktopImage: "/images/home/what-we-make-editorial-v2.png",
    mobileImage: "/images/home/what-we-make-editorial-v2.png",
    alt: "STC International leather goods collection",
    link: true,
    href: "/collection",
  },
  {
    type: "merchandising",
    items: [
      tile("Men's Bags", "/collection#mens-bags"),
      tile("Women's Handbags", "/collection#womens-handbags"),
      tile("Travelling Bags & Backpacks", "/collection#travelling-bags-backpacks"),
      tile("Wallets", "/collection#wallets"),
      // tile("Small Leather Goods", "/collection#small-leather-goods"),
    ],
  },
  {
    type: "editorial",
    title: "Built in-house, checked by hand",
    intro:
      "Every order runs through our own factory. Leather sourced from Kolkata and Italy, hardware that meets REACH and AFIRM standards, and an in-house QC team that checks every piece before it ships.",
    label: "See how we work",
    ctaText: "Discover",
    ctaHref: "/quality-sourcing",
  },
  {
    type: "heroMedia",
    desktopImage: "/images/home/Built-in-house.png",
    mobileImage: "/images/home/Built-in-house.png",
    alt: "In-house leather production and quality checks",
    link: true,
    href: "/quality-sourcing",
  },
  {
    type: "merchandising",
    items: [
      { title: "Leather Cutting", image: "/images/home/Leather Cutting.png", href: "/quality-sourcing" },
      { title: "Sample Development", image: "/images/home/Sample Development.png", href: "/quality-sourcing" },
      { title: "Stitching", image: "/images/home/Stiching.png", href: "/quality-sourcing" },
      { title: "Quality Check", image: "/images/home/Quality Check.png", href: "/quality-sourcing" },
    ],
  },
  {
    type: "editorial",
    title: "Exporting since 1992",
    intro:
      "Every order goes through our very own factory with leather sourced from the best tanneries in Bengal and an in house QC team checking every piece before shipping.",
    label: "Meet our markets",
    ctaText: "Discover",
    ctaHref: "/about-us",
  },
  {
    type: "heroMedia",
    desktopImage: "/images/home/hero-media-bag.png",
    mobileImage: "/images/home/hero-media-bag.png",
    alt: "STC International leather bag",
    href: "/about-us",
    alwaysShowControls: true,
    videoLoopMuteAutoplay: true,
  },
  {
    type: "stats",
    items: [
      { value: "1992", label: "Year established" },
      { value: "30+", label: "Years of experience" },
      { value: "6+", label: "Export markets" },
      { value: "Star Export House", label: "Govt. of India recognized" },
    ],
  },
];
