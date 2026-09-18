import LegalDocument from "@/components/legal/LegalDocument";
import { page, sections } from "@/data/legal/terms-and-conditions";

export default function TermsAndConditions() {
  return <LegalDocument title={page.title} lastUpdated={page.lastUpdated} sections={sections} />;
}
