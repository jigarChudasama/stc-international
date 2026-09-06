import { LOREM } from "@/lib/placeholder";

/** Shared simple legal/info page content. */
export function createSimplePage(title) {
  return {
    metadata: {
      title: `${title} | Lorem ipsum`,
      description: LOREM.medium,
    },
    title,
    intro: LOREM.medium,
    sections: [
      {
        heading: "1. Lorem ipsum",
        paragraphs: [LOREM.long, LOREM.medium],
      },
      {
        heading: "2. Dolor sit amet",
        paragraphs: [LOREM.long],
      },
      {
        heading: "3. Consectetur adipiscing",
        paragraphs: [LOREM.medium, LOREM.short],
      },
    ],
  };
}

export const faqsPage = createSimplePage("FAQs");
export const privacyPage = createSimplePage("Privacy Policies");
