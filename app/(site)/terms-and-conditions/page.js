import TermsAndConditions from "@/components/legal/TermsAndConditions";
import { metadata as termsMetadata } from "@/data/legal/terms-and-conditions";

export const metadata = termsMetadata;

export default function TermsAndConditionsPage() {
  return (
    <div className="terms-and-conditions-page w-full bg-brand-cream text-brand-dark">
      <TermsAndConditions />
    </div>
  );
}
