"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainMenu, aboutMenu } from "@/data/layout/header";
import { HOME_ROUTE, normalizeImageUrl } from "@/lib/formatters";
import { ChevronDown, Phone, X } from "lucide-react";

const drawerActionClass =
  "inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 font-inherit text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-brand-dark transition-opacity hover:opacity-60";

const drawerNavItemClass =
  "block w-full text-left text-[0.9375rem] font-bold leading-none text-brand-dark no-underline transition-opacity hover:opacity-60";

const drawerPadding = "px-10 sm:px-12";

function buildNavItems() {
  const aboutItems = (aboutMenu || []).map((entry) => ({
    name: entry.label,
    path: entry.path,
    categoryPath: entry.path,
    subcategories: (entry.items || []).map((item) => ({
      name: item.label,
      categoryPath: item.path,
      path: item.path,
      type: item.type,
      visibility: true,
      subcategories: [],
    })),
  }));

  return [...mainMenu, ...aboutItems];
}

function AccordionPanel({ open, children }) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

export default function MenuDrawer({ isOpen, isActive, onClose, onOpenContact }) {
  const [expandedKey, setExpandedKey] = useState(null);
  const navItems = buildNavItems();

  useEffect(() => {
    if (!isOpen) setExpandedKey(null);
  }, [isOpen]);

  const handleClose = () => {
    setExpandedKey(null);
    onClose();
  };

  const toggleExpanded = (key) => {
    setExpandedKey((current) => (current === key ? null : key));
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
        className={`absolute inset-y-0 left-0 flex w-[65%] max-w-[420px] flex-col bg-brand-cream transition-transform duration-300 ease-out ${
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
          className={`min-h-0 flex-1 overflow-y-auto pt-10 ${drawerPadding}`}
          aria-label="Shop categories"
        >
          <ul className="m-0 flex list-none flex-col gap-8 p-0 pb-10">
            {navItems.map((item) => {
              const hasChildren = (item.subcategories?.length ?? 0) > 0;
              const isExpanded = expandedKey === item.name;

              return (
                <li key={item.name}>
                  {hasChildren ? (
                    <div>
                      <button
                        type="button"
                        className={`${drawerNavItemClass} flex items-center justify-between border-0 bg-transparent p-0`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleExpanded(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden
                          className={`text-brand-gray/60 transition-transform duration-300 ease-out ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <AccordionPanel open={isExpanded}>
                        <ul className="m-0 flex list-none flex-col gap-5 pt-5 pl-0">
                          {item.subcategories.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.path || sub.categoryPath || HOME_ROUTE}
                                className={`${drawerNavItemClass} flex items-center gap-3 text-[0.875rem] font-medium text-brand-gray hover:text-brand-dark`}
                                onClick={handleClose}
                                {...(sub.type === "externalLink"
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                              >
                                {sub.image ? (
                                  <span className="relative h-9 w-9 shrink-0 overflow-hidden bg-brand-header">
                                    <Image
                                      src={normalizeImageUrl(sub.image, 96)}
                                      alt=""
                                      fill
                                      className="object-cover"
                                      sizes="36px"
                                    />
                                  </span>
                                ) : null}
                                <span>{sub.name || sub.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionPanel>
                    </div>
                  ) : (
                    <Link
                      href={item.path || item.categoryPath || HOME_ROUTE}
                      className={drawerNavItemClass}
                      onClick={handleClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}

            <li>
              <button
                type="button"
                className={`${drawerNavItemClass} flex items-center gap-3 border-0 bg-transparent p-0`}
                onClick={onOpenContact}
              >
                <Phone size={18} strokeWidth={1.25} aria-hidden />
                <span>Contact us</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
