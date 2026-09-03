import SimpleContentPage from "@/components/legal/SimpleContentPage";
import { sustainabilityPage } from "@/data/legal/simple-pages";

export const metadata = sustainabilityPage.metadata;

export default function SustainabilityPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <SimpleContentPage {...sustainabilityPage} />
    </div>
  );
}
