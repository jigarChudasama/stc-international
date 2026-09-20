import { Manrope, EB_Garamond } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  preload: true,
});

const ebGaramond = EB_Garamond({
  variable: "--font-edito",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "STC International",
  description:
    "STC International manufactures and exports leather bags, wallets and small leather goods from Kolkata, India. Star Export House recognized, 30+ years in the trade, six core export markets.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "STC International",
    description:
      "STC International manufactures and exports leather bags, wallets and small leather goods from Kolkata, India. Star Export House recognized, 30+ years in the trade, six core export markets.",
    url: "/",
    siteName: "STC International",
    images: [
      {
        url: "/images/stc-logo.png",
        width: 256,
        height: 256,
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
      className={`${manrope.variable} ${ebGaramond.variable} h-full`}
      suppressHydrationWarning
    >
      <head />
      <body
        className="flex min-h-full flex-col bg-brand-cream text-brand-dark antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SmoothScroll />
      </body>
    </html>
  );
}
