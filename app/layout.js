import { Manrope, EB_Garamond, Overpass_Mono } from "next/font/google";
import ClientShell from "@/components/ClientShell";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-edito",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass-mono",
  display: "swap",
});

export const metadata = {
  title: "The official Hermes online store | Hermès USA",
  description:
    "Barénia Pleine Fleur reveals a new floral facet of the Hermès chypre and glows with a sunny radiance.",
  openGraph: {
    title: "Barénia Pleine fleur",
    description:
      "Barénia Pleine Fleur reveals a new floral facet of the Hermès chypre and glows with a sunny radiance.",
    url: "https://www.hermes.com/us/en/",
    siteName: "Hermès",
    images: [
      {
        url: "https://assets.hermes.com/is/image/hermesedito/VISUEL_PORTE_10_099-16-9%20%281%29",
        width: 1600,
        height: 700,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-us"
      className={`${manrope.variable} ${ebGaramond.variable} ${overpassMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head />
      <body
        className="flex min-h-full flex-col bg-hermes-cream text-hermes-dark antialiased"
        suppressHydrationWarning
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
