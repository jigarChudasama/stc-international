"use client";

import { customerService } from "./footer-data";
import { HOME_ROUTE } from "@/lib/formatters";
import { Mail, MessageCircle, MessageSquare, Phone, X } from "lucide-react";

const phone = customerService?.phone ?? "800-441-4488";
const hours = customerService?.callingHours?.[0];

const contactOptions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    active: true,
    href: HOME_ROUTE,
  },
  {
    id: "email",
    label: "Send us an e-mail",
    icon: Mail,
    active: true,
    href: HOME_ROUTE,
  },
  {
    id: "phone",
    label: `Call us ${phone}`,
    icon: Phone,
    active: false,
    offlineLabel: `Call us ${phone} (Offline)`,
  },
  {
    id: "chat",
    label: "Live Chat (Offline)",
    icon: MessageSquare,
    active: false,
  },
];

const drawerPadding = "px-10 md:px-12";

function ContactOption({ option }) {
  const Icon = option.icon;
  const baseClass =
    "flex min-h-[52px] w-full items-center justify-between border border-[#d9d9d9] px-6 py-[18px] text-left text-[0.9375rem] font-normal leading-snug";

  if (!option.active) {
    return (
      <div className={`${baseClass} cursor-default text-[#b0b0b0]`} aria-disabled="true">
        <span>{option.offlineLabel ?? option.label}</span>
        <Icon className="shrink-0 text-[#b0b0b0]" size={20} strokeWidth={1.25} aria-hidden />
      </div>
    );
  }

  return (
    <a
      href={option.href}
      className={`${baseClass} text-black no-underline transition-opacity hover:opacity-70`}
    >
      <span>{option.label}</span>
      <Icon className="shrink-0 text-black" size={20} strokeWidth={1.25} aria-hidden />
    </a>
  );
}

export default function ContactDrawer({ isOpen, isActive, onClose }) {
  if (!isOpen) return null;

  const footerText = hours
    ? `You can call us from ${hours.days} ${hours.openingHours} - ${hours.closingHours} ${hours.timezone} at ${phone} or send us an e-mail.`
    : `You can call us at ${phone} or send us an e-mail.`;

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
        aria-label="Customer service"
        data-lenis-prevent
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-white transition-transform duration-300 ease-out md:w-1/2 ${
          isActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`custom-scrollbar flex flex-1 flex-col overflow-y-auto pb-12 pt-10 md:pt-12 ${drawerPadding}`}>
          <div className="mb-10 flex items-start justify-between gap-6">
            <h2 className="text-2xl font-bold leading-tight text-black">Customer Service</h2>
            <button
              type="button"
              className="-mt-1 inline-flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-1 text-black transition-opacity hover:opacity-60"
              aria-label="Close"
              onClick={onClose}
            >
              <X size={20} strokeWidth={1.25} aria-hidden />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {contactOptions.map((option) => (
              <ContactOption key={option.id} option={option} />
            ))}
          </div>

          <p className="mt-12 max-w-[36ch] text-[0.8125rem] leading-[1.65] text-hermes-gray">{footerText}</p>
        </div>
      </aside>
    </div>
  );
}
