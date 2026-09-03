import SimpleContentPage from "@/components/legal/SimpleContentPage";
import { infrastructurePage } from "@/data/legal/simple-pages";

export const metadata = infrastructurePage.metadata;

export default function InfrastructurePage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <SimpleContentPage {...infrastructurePage} />
    </div>
  );
}
