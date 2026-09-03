import SimpleContentPage from "@/components/legal/SimpleContentPage";
import { privacyPage } from "@/data/legal/simple-pages";

export const metadata = privacyPage.metadata;

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <SimpleContentPage {...privacyPage} />
    </div>
  );
}
