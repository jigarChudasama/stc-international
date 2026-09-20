import { PLACEHOLDER_IMAGE, PLACEHOLDER_WIDE } from "@/lib/placeholder";

export const metadata = {
  title: "Contact STC International | Leather Goods Manufacturer, Kolkata",
  description:
    "Get in touch with STC International for B2B leather goods inquiries. Factory in Bantala, Kolkata, India, exporting to six core markets.",
};

export const page = {
  overline: "Let's work together",
  title: "Get in Touch",
  intro:
    "Whether you're exploring a first order or scaling up an existing one, tell us what you need and we'll get back to you.",
};

export const HERO = {
  posterDesktop: PLACEHOLDER_WIDE,
  posterMobile: PLACEHOLDER_IMAGE,
};

export const MEDIA_SECTIONS = [
  {
    title: "Get in Touch",
    image: PLACEHOLDER_WIDE,
    paragraphs: [
      "Whether you're exploring a first order or scaling up an existing one, tell us what you need and we'll get back to you.",
      "Questions about production, sampling, or a factory visit can be sent through the inquiry form, or directly to our office.",
    ],
  },
  {
    title: "Where to find us",
    image: PLACEHOLDER_IMAGE,
    reverse: true,
    paragraphs: [
      "Registered Office: 41-B, Syed Amir Ali Avenue, Kolkata – 700019, West Bengal, India.",
      "Factory: Plot # 595A, Zone-8, Calcutta Leather Complex, Karaidanga, Bantala, 24 Parganas(s), Pin – 743502, West Bengal, India.",
      "Email: info@stcinternational.in. Phone: +91 98300 20344.",
    ],
  },
];

export const EDITORIAL = {
  title: "Send an inquiry",
  intro:
    "Share your company, country, and product category of interest. We'll take it from there.",
};

export const productCategoryOptions = [
  "Men's Bags",
  "Women's Handbags",
  "Travelling Bags & Backpacks",
  "Purses",
  "Wallets",
  // "Small Leather Goods",
  "Other",
];

export const form = {
  submitLabel: "Send Inquiry",
  successMessage: "Thank you. Your inquiry has been sent.",
  fields: {
    name: "Name",
    company: "Company",
    email: "Email",
    country: "Country",
    category: "Product category of interest",
    message: "Message",
  },
};

export const locations = [
  {
    title: "Registered Office",
    lines: [
      "41-B, Syed Amir Ali Avenue",
      "Kolkata – 700019",
      "West Bengal, India",
    ],
  },
  {
    title: "Factory",
    lines: [
      "Plot # 595A, Zone-8, Calcutta Leather Complex",
      "Karaidanga, Bantala, 24 Parganas(s)",
      "Pin – 743502, West Bengal, India",
    ],
  },
];

export const directContact = {
  title: "Direct contact",
  email: "info@stcinternational.in",
  phone: "+91 98300 20344",
  phoneHref: "tel:+919830020344",
};

export const factoryMap = {
  title: "Factory location",
  address:
    "Plot 595A, Zone-8, Calcutta Leather Complex, Karaidanga, Bantala, West Bengal 743502, India",
  embedSrc:
    "https://maps.google.com/maps?q=Plot%20595A%2C%20Zone-8%2C%20Calcutta%20Leather%20Complex%2C%20Karaidanga%2C%20Bantala%2C%20West%20Bengal%20743502%2C%20India&z=15&output=embed",
  externalHref:
    "https://maps.google.com/?q=Plot%20595A%2C%20Zone-8%2C%20Calcutta%20Leather%20Complex%2C%20Karaidanga%2C%20Bantala%2C%20West%20Bengal%20743502%2C%20India",
};

export const customerService = {
  phone: directContact.phone,
  email: directContact.email,
  address: locations[0].lines,
};
