"use client";

import { useState } from "react";
import Link from "next/link";
import { customerService } from "@/data/contact";
import { footer } from "@/data/layout/footer";
import { HOME_ROUTE } from "@/lib/formatters";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const [openColumn, setOpenColumn] = useState(null);

  return (
    <footer id="page-footer" className="defer-paint mt-auto bg-brand-header" role="contentinfo">
      <div className="mx-auto flex max-w-[1920px] flex-col bg-brand-header lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="order-2 border-b border-brand-divider px-[15px] lg:order-none lg:basis-full lg:px-6">
          <div className="footer-nav-block grid md:grid-cols-2 lg:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.label} className="border-b border-brand-divider md:border-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:cursor-default"
                  onClick={() =>
                    setOpenColumn(openColumn === column.label ? null : column.label)
                  }
                  aria-expanded={openColumn === column.label || openColumn === null}
                >
                  <span
                    role="heading"
                    aria-level="2"
                    className="column-header text-[0.6875rem] font-bold uppercase tracking-[0.12em]"
                  >
                    {column.label}
                  </span>
                  <span className="md:hidden" aria-hidden="true">
                    {openColumn === column.label ? "−" : "+"}
                  </span>
                </button>
                <ul
                  className={`footer-links-group overflow-hidden transition-all duration-300 md:block md:pb-4 ${
                    openColumn === column.label ? "max-h-[600px] pb-4" : "max-h-0 md:max-h-none"
                  }`}
                  aria-hidden={openColumn !== column.label ? "true" : "false"}
                >
                  {column.items.map((item) => {
                    const isExternal = item.type === "externalLink";
                    const isContactDrawer = item.type === "contactDrawer";
                    const href = item.data || HOME_ROUTE;
                    const linkClass =
                      "text-xs text-brand-gray underline hover:no-underline";

                    return (
                      <li key={`${column.label}-${item.label}`} className="mb-2">
                        {isContactDrawer ? (
                          <button
                            type="button"
                            className={`${linkClass} cursor-pointer border-0 bg-transparent p-0 text-left`}
                            onClick={() => {
                              window.dispatchEvent(new CustomEvent("stc:open-contact"));
                            }}
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={href}
                            className={linkClass}
                            tabIndex={0}
                            {...(isExternal
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.label}
                            {isExternal ? (
                              <span className="sr-only">New tab</span>
                            ) : null}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="here-to-help-block order-1 border-b border-brand-divider px-[15px] py-[30px] pb-[15px] text-[0.75rem] leading-5 lg:order-none lg:flex lg:flex-1 lg:px-6 lg:py-6 lg:pl-6 lg:pr-12">
          <div>
            <span role="heading" aria-level="2" className="heading-4 mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em]">
              Direct contact
            </span>
            {customerService?.callingHours?.map((hours) => (
              <p key={hours.days} className="description-block mb-1 text-[0.75rem] text-brand-gray">
                {hours.days} {hours.openingHours} - {hours.closingHours} {hours.timezone} :
              </p>
            ))}
            <div className="call-us">
              <a href={`tel:${customerService?.phone?.replace(/[^\d+]/g, "")}`} className="text-[0.875rem] underline hover:no-underline">
                {customerService?.phone}
              </a>
            </div>
            <div className="email-us mt-2">
              <a
                href={`mailto:${customerService?.email}`}
                aria-label="Send an email to customer service"
                className="text-[0.75rem] underline hover:no-underline"
              >
                {customerService?.email}
              </a>
            </div>
          </div>
        </div>

        <div className="logo-block order-4 flex flex-col items-center justify-center gap-3 border-b border-brand-divider px-[15px] py-8 text-center lg:order-none lg:w-[340px] lg:border-b lg:py-6 xl:w-[440px]">
          <BrandLogo variant="footer" />
          <p className="text-[0.625rem] text-brand-gray">
            © STC International {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <div className="social-block order-3 border-b border-brand-divider px-[15px] py-[30px] lg:order-none lg:flex lg:flex-1 lg:justify-end lg:px-6 lg:py-6 lg:pl-12">
          <div>
            <span role="heading" aria-level="2" className="heading-4 mb-3 block text-[0.6875rem] font-bold uppercase tracking-[0.12em]">
              Follow us
            </span>
            <ul className="flex flex-wrap gap-4">
              {footer.socialNetworks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={HOME_ROUTE}
                    className="text-[0.6875rem] uppercase tracking-[0.08em] underline hover:no-underline"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
