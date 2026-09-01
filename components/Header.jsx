"use client";

import { useEffect } from "react";
import { HOME_ROUTE } from "@/lib/formatters";
import { useDrawerTransition } from "@/lib/useDrawerTransition";
import HermesLogo from "./HermesLogo";
import LoadingBar from "./LoadingBar";
import ContactDrawer from "./ContactDrawer";
import MenuDrawer from "./MenuDrawer";
import { Menu } from "lucide-react";

const DRAWER_DURATION = 300;

const drawerActionClass =
  "inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 font-inherit text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-hermes-dark transition-opacity hover:opacity-60";

export default function Header() {
  const menu = useDrawerTransition(DRAWER_DURATION);
  const contact = useDrawerTransition(DRAWER_DURATION);

  const closeMenu = () => {
    menu.close();
  };

  const openMenu = () => {
    contact.forceClose();
    menu.open();
  };

  const openContactFromMenu = () => {
    menu.close(() => contact.open());
  };

  const openContact = () => {
    if (menu.isOpen) {
      openContactFromMenu();
      return;
    }

    contact.open();
  };

  useEffect(() => {
    const root = document.documentElement;

    if (!menu.isOpen && !contact.isOpen) {
      root.classList.remove("drawer-open");
      root.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (contact.isOpen) contact.close();
        else closeMenu();
      }
    };

    root.classList.add("drawer-open");
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.classList.remove("drawer-open");
      root.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menu.isOpen, contact.isOpen]);

  const isDrawerVisible = menu.isOpen || contact.isOpen;
  const isDrawerActive =
    (menu.isOpen && menu.isActive) || (contact.isOpen && contact.isActive);

  return (
    <>
      <header
        className={`sticky top-0 z-[100] bg-hermes-header ${isDrawerVisible ? "relative" : ""}`}
        role="banner"
      >
        {isDrawerVisible ? (
          <div
            className={`pointer-events-none absolute inset-0 z-10 bg-black/50 transition-opacity duration-300 ease-out ${
              isDrawerActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        ) : null}

        <div className={isDrawerVisible ? "relative z-0 pointer-events-none" : undefined}>
        <LoadingBar />

        <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:left-0 focus-within:top-0 focus-within:z-[9999] focus-within:bg-hermes-cream focus-within:p-2">
          <a href="#main-content" className="mr-3 inline-block text-xs font-bold underline">
            Go to main content
          </a>
          <a href="#product-browsing" className="mr-3 inline-block text-xs font-bold underline">
            Go to product browsing
          </a>
          <a href={HOME_ROUTE} className="inline-block text-xs font-bold underline">
            Accessibility
          </a>
        </div>

        <div className="border-b border-hermes-divider bg-hermes-header px-[15px] lg:px-6">
          <div className="relative grid min-h-[50px] w-full grid-cols-[1fr_auto_1fr] items-center lg:min-h-16">
            <div className="flex items-center justify-self-start">
              <button
                type="button"
                className={drawerActionClass}
                aria-label="Menu"
                aria-expanded={menu.isOpen}
                aria-haspopup="dialog"
                aria-controls="product-browsing"
                onClick={() => (menu.isOpen ? closeMenu() : openMenu())}
              >
                <Menu size={20} strokeWidth={1.25} aria-hidden />
                <span>Menu</span>
              </button>
            </div>

            <div className="z-[2] flex min-w-[5.25rem] items-center justify-center justify-self-center">
              <h1 className="sr-only">The official Hermes online store - Homepage</h1>
              <HermesLogo />
            </div>

            <div className="flex items-center justify-self-end">
              <button
                type="button"
                className="cursor-pointer border-0 bg-transparent p-0 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-hermes-dark transition-opacity hover:opacity-60"
                aria-expanded={contact.isOpen}
                aria-haspopup="dialog"
                aria-controls="contact-service"
                onClick={openContact}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>

      <MenuDrawer
        isOpen={menu.isOpen}
        isActive={menu.isActive}
        onClose={closeMenu}
        onOpenContact={openContactFromMenu}
      />

      <ContactDrawer
        isOpen={contact.isOpen}
        isActive={contact.isActive}
        onClose={contact.close}
      />
    </>
  );
}
