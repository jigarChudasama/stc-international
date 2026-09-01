"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-[100] border-b border-hermes-divider bg-hermes-header" aria-hidden="true">
      <div className="min-h-[50px] lg:min-h-16" />
    </header>
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function ClientShell({ children }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
