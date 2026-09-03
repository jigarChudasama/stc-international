import CertificateOfCraft from "@/components/quality-sourcing/CertificateOfCraft";
import { metadata as qualitySourcingMetadata } from "@/data/quality-sourcing";

export const metadata = qualitySourcingMetadata;

export default function QualitySourcingPage() {
  return (
    <div className="quality-sourcing-page w-full bg-brand-cream text-brand-dark">
      <CertificateOfCraft />
    </div>
  );
}
