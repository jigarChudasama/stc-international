"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import LinkedCopy from "@/components/legal/LinkedCopy";

export default function FaqAccordion({ items }) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState(() => new Set());

  const toggle = (id) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="faq-accordion border-t border-brand-divider">
      {items.map((item) => {
        const open = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}`;

        return (
          <div key={item.id} className="border-b border-brand-divider">
            <h2 className="m-0">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-5 text-left outline-none transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:ring-brand-gold md:py-6"
              >
                <span
                  className={`font-edito text-[1.0625rem] font-normal leading-snug tracking-wide transition-colors duration-300 md:text-xl ${
                    open ? "text-brand-navy" : "text-brand-dark"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border text-brand-gold transition-colors duration-300 ${
                    open ? "border-brand-gold bg-brand-header" : "border-brand-border bg-transparent"
                  }`}
                >
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className={`transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </button>
            </h2>
            <div
              className={`grid motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              style={{
                transitionProperty: "grid-template-rows",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  id={panelId}
                  role="region"
                  className="max-w-[640px] pb-6 pr-14 text-sm leading-relaxed text-brand-gray md:pb-8 md:text-[0.9375rem] md:leading-7"
                >
                  <LinkedCopy text={item.answer} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
