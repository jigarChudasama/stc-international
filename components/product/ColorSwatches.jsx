"use client";

import Image from "next/image";
import { isRemoteImage } from "@/data/product/product";

export default function ColorSwatches({ colors, selectedColorId, onSelect, selectedName }) {
  return (
    <div>
      <p className="pdp-color-label">Color: {selectedName}</p>
      <fieldset>
        <legend className="sr-only">Select color</legend>
        <div className="pdp-swatches">
          {colors.map((color) => (
            <label
              key={color.id}
              className={`pdp-swatch ${color.id === selectedColorId ? "is-selected" : ""}`}
            >
              <span className="sr-only">{color.name}</span>
              <input
                type="radio"
                name="color"
                checked={color.id === selectedColorId}
                onChange={() => onSelect(color.id)}
                className="sr-only"
              />
              <Image
                src={color.swatch}
                alt={color.name}
                width={60}
                height={60}
                sizes="40px"
                unoptimized={isRemoteImage(color.swatch)}
                className="pdp-swatch__img"
              />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
