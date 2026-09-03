import { PRODUCT_CATEGORIES } from "@/data/collection/categories";

function link(label, href, type = "internalLink") {
  return { label, type, data: href };
}

export const footer = {
  columns: [
    {
      label: "Category / Collection",
      opened: true,
      items: PRODUCT_CATEGORIES.map((category) =>
        link(category.title, category.href),
      ),
    },
    {
      label: "Explore",
      opened: false,
      items: [
        link("Home / Landing Page", "/"),
        link("About Us", "/about-us"),
        link("Quality & Sourcing", "/quality-sourcing"),
        link("Sustainability", "/sustainability"),
        link("Infrastructure", "/infrastructure"),
        {
          label: "Contact Us",
          type: "contactDrawer",
          data: "#contact",
        },
      ],
    },
    {
      label: "Other Pages & Legals",
      opened: false,
      items: [
        link("FAQs", "/faqs"),
        link("Terms & Conditions", "/terms-and-conditions"),
        link("Privacy Policies", "/privacy-policy"),
      ],
    },
  ],
  socialNetworks: [
    {
      label: "Facebook",
      iconName: "facebook",
      data: "https://example.com",
    },
    {
      label: "Instagram",
      iconName: "instagram",
      data: "https://example.com",
    },
    {
      label: "Youtube",
      iconName: "youtube",
      data: "https://example.com",
    },
  ],
};

export const customerService = {
  phone: "000-000-0000",
  email: "hello@example.com",
  address: [
    "123 Lorem Street",
    "Ipsum District",
    "Dolor City, 00000",
  ],
  callingHours: [
    {
      closingHours: "9pm",
      days: "Monday to Saturday",
      openingHours: "10am",
      timezone: "EST",
    },
  ],
};
