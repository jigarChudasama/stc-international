"use client";

import { X } from "lucide-react";
import ContactDetails from "@/components/contact/ContactDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import { page } from "@/data/contact";

const drawerPadding = "px-5 sm:px-8 md:px-10";

export default function ContactDrawer({ isOpen, isActive, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[280]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close contact panel"
        onClick={() => onClose()}
      />

      <aside
        id="contact-service"
        role="dialog"
        aria-modal="true"
        aria-label={page.title}
        data-lenis-prevent
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-brand-cream shadow-[-8px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out md:w-1/2 ${
          isActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`flex shrink-0 items-start justify-between gap-6 border-b border-brand-divider pt-5 pb-4 md:pt-6 ${drawerPadding}`}
        >
          <div>
            <p className="mb-2 text-[0.6875rem] uppercase tracking-[0.12em] text-brand-gold">
              {page.overline}
            </p>
            <h2 className="font-edito text-2xl font-normal leading-tight tracking-wide text-brand-dark">
              {page.title}
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-1 text-brand-dark transition-opacity hover:opacity-60"
            aria-label="Close"
            onClick={() => onClose()}
          >
            <X size={20} strokeWidth={1.25} aria-hidden />
          </button>
        </div>

        <div className={`custom-scrollbar flex-1 overflow-y-auto pb-12 pt-6 ${drawerPadding}`}>
          <p className="mb-8 text-sm leading-relaxed text-brand-dark">
            {page.intro}
          </p>

          <InquiryForm />

          <div className="mt-12">
            <ContactDetails />
          </div>
        </div>
      </aside>
    </div>
  );
}
