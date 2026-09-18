import LegalDocument from "@/components/legal/LegalDocument";
import { privacyPage } from "@/data/legal/simple-pages";

export const metadata = privacyPage.metadata;

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-brand-cream text-brand-dark">
      <LegalDocument
        title={privacyPage.title}
        lastUpdated={privacyPage.lastUpdated}
        intro={privacyPage.intro}
        sections={privacyPage.sections}
      />
    </div>
  );
}
