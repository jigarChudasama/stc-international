import { PLACEHOLDER_IMAGE, LOREM } from "@/lib/placeholder";

const decades = [
  "1920S",
  "1930S",
  "1940S",
  "1950S",
  "1960S",
  "1970S",
  "1980S",
  "1990S",
  "2000S",
  "2020S",
];

export const TIMELINE_ITEMS = decades.map((decade, index) => ({
  decade,
  image: PLACEHOLDER_IMAGE,
  events: [
    { type: "p", text: LOREM.medium },
    {
      type: "h",
      year: String(1920 + index * 10),
      text: LOREM.short,
    },
    {
      type: "h",
      year: String(1924 + index * 10),
      text: LOREM.medium,
    },
  ],
}));
