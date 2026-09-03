import SimpleContentPage from "@/components/legal/SimpleContentPage";
import { faqsPage } from "@/data/legal/simple-pages";

export const metadata = faqsPage.metadata;

export default function FaqsPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <SimpleContentPage {...faqsPage} />
    </div>
  );
}
