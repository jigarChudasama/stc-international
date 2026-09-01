"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainMenu, aboutMenu } from "./header-data";
import { HOME_ROUTE, normalizeImageUrl } from "@/lib/formatters";
import { ChevronRight, Phone, X } from "lucide-react";

const drawerActionClass =
  "inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 font-inherit text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-hermes-dark transition-opacity hover:opacity-60";

const drawerNavItemClass =
  "block w-full text-left text-[0.9375rem] font-bold leading-none text-hermes-dark no-underline transition-opacity hover:opacity-60";

const drawerPadding = "px-10 sm:px-12";

function buildNavItems() {
  const aboutItem = aboutMenu?.[0]
    ? {
        name: aboutMenu[0].label,
        subcategories: aboutMenu[0].items.map((item) => ({
          name: item.label,
          categoryPath: item.type === "internalLink" ? item.data : undefined,
          path: item.data,
          type: item.type,
          visibility: true,
          subcategories: [],
        })),
      }
    : null;

  return aboutItem ? [...mainMenu, aboutItem] : mainMenu;
}

export default function MenuDrawer({ isOpen, isActive, onClose, onOpenContact }) {
  const [mobileCategory, setMobileCategory] = useState(null);
  const navItems = buildNavItems();

  useEffect(() => {
    if (!isOpen) setMobileCategory(null);
  }, [isOpen]);

  const handleClose = () => {
    setMobileCategory(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close menu"
        onClick={handleClose}
      />

      <aside
        id="product-browsing"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        data-lenis-prevent
        className={`absolute inset-y-0 left-0 flex w-[65%] max-w-[420px] flex-col bg-white transition-transform duration-300 ease-out ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className={`flex items-center pt-7 pb-2 ${drawerPadding}`}>
          <button type="button" className={drawerActionClass} onClick={handleClose}>
            <X size={20} strokeWidth={1.25} aria-hidden />
            <span>Close</span>
          </button>
        </div>

        <nav
          className={`flex-1 overflow-y-auto pt-10 pb-8 ${drawerPadding}`}
          aria-label="Shop categories"
        >
          {!mobileCategory ? (
            <ul className="m-0 flex list-none flex-col gap-8 p-0">
              {navItems.map((item) => {
                const hasChildren = (item.subcategories?.length ?? 0) > 0;

                return (
                  <li key={item.name}>
                    {hasChildren ? (
                      <button
                        type="button"
                        className={`${drawerNavItemClass} flex items-center justify-between border-0 bg-transparent p-0`}
                        onClick={() => setMobileCategory(item)}
                      >
                        <span>{item.name}</span>
                        <span className="text-hermes-gray/50">
                            <ChevronRight size={12} strokeWidth={1.25} aria-hidden />
                        </span>
                      </button>
                    ) : (
                      <Link href={HOME_ROUTE} className={drawerNavItemClass} onClick={handleClose}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>
              <button
                type="button"
                className={`${drawerActionClass} mb-10`}
                onClick={() => setMobileCategory(null)}
              >
                ← Back
              </button>

              <p className="mb-8 text-[0.9375rem] font-bold leading-none text-hermes-dark">
                {mobileCategory.name}
              </p>

              {mobileCategory.image && (
                <div className="relative mb-8 aspect-[4/5] w-full max-w-[220px] overflow-hidden">
                  <Image
                    src={normalizeImageUrl(mobileCategory.image, 767)}
                    alt={mobileCategory.title || mobileCategory.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <ul className="m-0 flex list-none flex-col gap-7 p-0">
                {(mobileCategory.subcategories || []).slice(0, 12).map((sub) => (
                  <li key={sub.name}>
                    <Link
                      href={HOME_ROUTE}
                      className={`${drawerNavItemClass} text-hermes-gray hover:text-hermes-dark`}
                      onClick={handleClose}
                    >
                      {sub.name || sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className={`mt-auto pb-10 pt-4 ${drawerPadding}`}>
          <button
            type="button"
            className={`${drawerNavItemClass} mb-7 flex items-center gap-3 border-0 bg-transparent p-0`}
            onClick={onOpenContact}
          >
            <Phone size={18} strokeWidth={1.25} aria-hidden />
            <span>Contact us</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
