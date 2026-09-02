import CertificateOfCraft from "@/components/quality-sourcing/CertificateOfCraft";
import { metadata as qualitySourcingMetadata } from "@/data/quality-sourcing";

export const metadata = qualitySourcingMetadata;

export default function QualitySourcingPage() {
  return (
    <div className="quality-sourcing-page w-full bg-hermes-cream text-hermes-dark">
      <CertificateOfCraft />
    </div>
  );
}
