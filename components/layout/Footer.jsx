"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footer, customerService } from "@/data/layout/footer";
import { HOME_ROUTE } from "@/lib/formatters";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const [openColumn, setOpenColumn] = useState(null);

  return (
    <footer id="page-footer" className="defer-paint mt-auto bg-brand-cream" role="contentinfo">
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
              Lorem service
            </span>
            {customerService?.callingHours?.map((hours) => (
              <p key={hours.days} className="description-block mb-1 text-[0.75rem] text-brand-gray">
                {hours.days} {hours.openingHours} - {hours.closingHours} {hours.timezone} :
              </p>
            ))}
            <div className="call-us">
              <a href={`tel:${customerService?.phone?.replace(/-/g, "")}`} className="text-[0.875rem] underline hover:no-underline">
                {customerService?.phone}
              </a>
            </div>
            <div className="email-us mt-2">
              <Link
                href={HOME_ROUTE}
                aria-label="Send an email to customer service"
                className="text-[0.75rem] underline hover:no-underline"
              >
                Email us
              </Link>
            </div>
          </div>
        </div>

        <div className="newsletter-subscribe-block order-4 border-b border-brand-divider px-[15px] py-5 lg:order-none lg:w-[340px] lg:border-b lg:py-6 xl:w-[440px]">
          <span role="heading" aria-level="2" className="heading-4 mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em]">
            Newsletter
          </span>
          <p className="mb-4 text-[0.75rem] text-brand-gray">
            Receive our newsletter and discover our stories, collections, and surprises.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="border border-brand-border bg-brand-cream px-4 py-3 text-xs outline-none focus:border-brand-navy"
            />
            <button
              type="submit"
              className="border border-brand-navy bg-brand-navy px-6 py-3 text-[0.6875rem] uppercase tracking-[0.08em] text-brand-cream transition-opacity hover:opacity-80"
            >
              Subscribe to the Newsletter
            </button>
          </form>
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

        <div className="logo-block mx-auto my-6 block h-[3.21875rem] w-[5.625rem] lg:hidden">
          <BrandLogo variant="footer" />
        </div>
      </div>

      <div className="sub-footer mx-auto max-w-[1920px] lg:flex lg:flex-row lg:justify-between">
        <div className="country-selector-block border-b border-brand-divider px-[15px] py-5 lg:border-b-0 lg:px-6 lg:py-5">
          <button
            type="button"
            className="country-selector flex flex-col items-start gap-1 text-left text-[0.6875rem] uppercase tracking-[0.08em]"
          >
            <span className="flex items-center gap-2">
              <Image src="/images/placeholder.jpg" alt="" width={20} height={14} sizes="20px" aria-hidden="true" className="object-cover" />
              United States
            </span>
            <span className="text-[0.625rem] normal-case tracking-normal text-brand-gray">
              Ship to : United States, <span className="underline">Change your location</span>
            </span>
          </button>
        </div>

        <p className="copyright-block px-[15px] py-5 text-[0.625rem] text-brand-gray lg:px-6">
          © Lorem {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
