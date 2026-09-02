"use client";

import { useState } from "react";

export function Popin({ open, onClose, title, children, variant = "default" }) {
  if (!open) return null;

  const isDrawer = variant === "drawer";

  return (
    <div
      className="popin"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popin-title"
      onClick={onClose}
    >
      <div
        className={`popin__panel ${isDrawer ? "popin__panel--drawer" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popin__head">
          <div className="popin__title" id="popin-title">
            {title}
          </div>
          <button type="button" className="popin__close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="popin__body">{children}</div>
      </div>
    </div>
  );
}

export function ProductDetailsDrawer({ open, onClose, product, selectedColorName }) {
  return (
    <Popin open={open} onClose={onClose} title="Product details" variant="drawer">
      <h3 className="popin-detail__lead">{product.description}</h3>

      <p className="popin-detail__list">
        {product.longDescription.map((line) => (
          <span key={line}>
            • {line}
            <br />
          </span>
        ))}
      </p>

      <p className="popin-detail__muted">
        {product.shortDescription.map((line) => (
          <span key={line}>
            • {line.replace("Color: Black", `Color: ${selectedColorName}`)}
            <br />
          </span>
        ))}
      </p>

      <p className="popin-detail__line">
        <span>• Made in: </span>
        <span>{product.madeIn}</span>
      </p>

      <p className="popin-detail__code">
        • Product code: <span>{product.id}</span>
      </p>

      <div className="popin-detail__accordions">
        <AccordionItem title="Material" content={`• Material: ${product.material}`} />
        <AccordionItem
          title="Size & fit"
          content={product.sizeAndFit.map((l) => `• ${l}`).join("\n")}
        />
        <AccordionItem title="Product care" content={product.productCare} />
      </div>
    </Popin>
  );
}

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="popin-expander">
      <button type="button" className="popin-expander__btn" onClick={() => setOpen(!open)}>
        <h3 className="popin-expander__label">
          {title} {open ? "↑" : "↓"}
        </h3>
      </button>
      {open && <div className="popin-expander__panel">{content}</div>}
    </div>
  );
}
