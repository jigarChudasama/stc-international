"use client";

import { X } from "lucide-react";
import ContactDetails from "@/components/contact/ContactDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import { page } from "@/data/contact";

const drawerPadding = "px-5 sm:px-8 md:px-10";

export default function ContactDrawer({ isOpen, isActive, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close contact panel"
        onClick={onClose}
      />

      <aside
        id="contact-service"
        role="dialog"
        aria-modal="true"
        aria-label={page.title}
        data-lenis-prevent
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-brand-cream transition-transform duration-300 ease-out md:w-1/2 ${
          isActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`custom-scrollbar flex flex-1 flex-col overflow-y-auto pb-12 pt-10 md:pt-12 ${drawerPadding}`}
        >
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="mb-3 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
                {page.overline}
              </p>
              <h2 className="font-edito text-2xl font-normal leading-tight tracking-wide text-brand-dark">
                {page.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-dark">
                {page.intro}
              </p>
            </div>
            <button
              type="button"
              className="-mt-1 inline-flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-1 text-brand-dark transition-opacity hover:opacity-60"
              aria-label="Close"
              onClick={onClose}
            >
              <X size={20} strokeWidth={1.25} aria-hidden />
            </button>
          </div>

          <InquiryForm />

          <div className="mt-12">
            <ContactDetails />
          </div>
        </div>
      </aside>
    </div>
  );
}
