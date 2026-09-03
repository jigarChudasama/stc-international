"use client";

import { useState } from "react";
import { customerService } from "@/data/layout/footer";
import { X } from "lucide-react";

const drawerPadding = "px-5 sm:px-8 md:px-10";

const fieldClass =
  "w-full border border-brand-border bg-brand-cream px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-gray focus:border-brand-navy";

const labelClass =
  "mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-dark";

export default function ContactDrawer({ isOpen, isActive, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const hours = customerService?.callingHours?.[0];
  const addressLines = customerService?.address || [];
  const phone = customerService?.phone;
  const contactEmail = customerService?.email;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

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
        aria-label="Contact us"
        data-lenis-prevent
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-brand-cream transition-transform duration-300 ease-out md:w-1/2 ${
          isActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`custom-scrollbar flex flex-1 flex-col overflow-y-auto pb-12 pt-10 md:pt-12 ${drawerPadding}`}
        >
          <div className="mb-8 flex items-start justify-between gap-6">
            <h2 className="text-2xl font-bold leading-tight text-brand-dark">Contact us</h2>
            <button
              type="button"
              className="-mt-1 inline-flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-1 text-brand-dark transition-opacity hover:opacity-60"
              aria-label="Close"
              onClick={onClose}
            >
              <X size={20} strokeWidth={1.25} aria-hidden />
            </button>
          </div>

          <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="w-full">
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={fieldClass}
                placeholder="Your name"
              />
            </div>

            <div className="w-full">
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>

            <div className="w-full">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${fieldClass} min-h-[140px] resize-y`}
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full border border-brand-navy bg-brand-navy px-6 py-3.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-brand-cream transition-opacity hover:opacity-85"
            >
              Send message
            </button>

            {submitted ? (
              <p className="text-sm text-brand-navy" role="status">
                Thank you. Your message has been sent.
              </p>
            ) : null}
          </form>

          <address className="mt-12 w-full not-italic text-[0.8125rem] leading-[1.7] text-brand-gray">
            {addressLines.map((line) => (
              <p key={line} className="m-0">
                {line}
              </p>
            ))}
            {phone ? (
              <p className="mt-3 m-0">
                <a href={`tel:${phone.replace(/-/g, "")}`} className="underline hover:no-underline">
                  {phone}
                </a>
              </p>
            ) : null}
            {contactEmail ? (
              <p className="m-0">
                <a href={`mailto:${contactEmail}`} className="underline hover:no-underline">
                  {contactEmail}
                </a>
              </p>
            ) : null}
            {hours ? (
              <p className="mt-3 m-0">
                {hours.days} {hours.openingHours} – {hours.closingHours} {hours.timezone}
              </p>
            ) : null}
          </address>
        </div>
      </aside>
    </div>
  );
}
