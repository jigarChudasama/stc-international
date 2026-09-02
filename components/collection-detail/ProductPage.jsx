"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  accordionItems,
  colors,
  getColorById,
  isRemoteImage,
  popins,
  product,
} from "@/data/collection-detail";
import ColorSwatches from "@/components/collection-detail/ColorSwatches";
import { ProductDetailsDrawer, Popin } from "@/components/collection-detail/Popins";

export default function ProductPage({ initialColorId = "1019" }) {
  const [selectedColorId, setSelectedColorId] = useState(initialColorId);
  const [zoomSrc, setZoomSrc] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [cocOpen, setCocOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);

  const selectedColor = useMemo(() => getColorById(selectedColorId), [selectedColorId]);
  const images = selectedColor.images;
  const heroImages = images.slice(0, 2);
  const galleryImages = images.slice(2, 6);
  const altBase = `Women's ${product.name} in ${selectedColor.name}`;

  useEffect(() => {
    setSelectedColorId(initialColorId);
  }, [initialColorId]);

  const popinActions = {
    details: () => setDetailsOpen(true),
    gift: () => setGiftOpen(true),
    certificate: () => setCocOpen(true),
    store: () => setStoreOpen(true),
  };

  return (
    <div className="pdp">
      <section className="pdp-hero">
        {heroImages.map((src, index) => (
          <button
            key={src}
            type="button"
            className="pdp-hero__cell"
            onClick={() => setZoomSrc(src)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${altBase} - Image ${index + 1}`}
              width={720}
              height={900}
              priority={index === 0}
              unoptimized={isRemoteImage(src)}
              className="pdp-image"
            />
          </button>
        ))}
      </section>

      <section className="pdp-config">
        <p className="pdp-description">{product.description}</p>

        <div className="pdp-accordions">
          {accordionItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="pdp-accordion"
              onClick={popinActions[item.id]}
            >
              <span className="pdp-accordion__label">{item.label}</span>
              <span className="pdp-accordion__chevron" aria-hidden="true">
                ›
              </span>
            </button>
          ))}
        </div>

        <div className="pdp-meta">
          <h1 className="pdp-title">{product.name}</h1>

          <ColorSwatches
            colors={colors}
            selectedColorId={selectedColorId}
            onSelect={setSelectedColorId}
            selectedName={selectedColor.name}
          />
        </div>
      </section>

      <section className="pdp-gallery">
        {galleryImages.map((src, index) => (
          <button
            key={src}
            type="button"
            className="pdp-gallery__cell"
            onClick={() => setZoomSrc(src)}
            aria-label={`View image ${index + 3}`}
          >
            <Image
              src={src}
              alt={`${altBase} - Image ${index + 3}`}
              width={720}
              height={900}
              unoptimized={isRemoteImage(src)}
              className="pdp-image"
            />
          </button>
        ))}
      </section>

      {zoomSrc && (
        <div
          className="pdp-zoom"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomSrc(null)}
        >
          <button type="button" className="pdp-zoom__close" onClick={() => setZoomSrc(null)}>
            Close
          </button>
          <Image
            src={zoomSrc}
            alt={altBase}
            width={1200}
            height={1400}
            unoptimized={isRemoteImage(zoomSrc)}
            className="pdp-zoom__image"
          />
        </div>
      )}

      <ProductDetailsDrawer
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        product={product}
        selectedColorName={selectedColor.name}
      />

      <Popin open={giftOpen} onClose={() => setGiftOpen(false)} title={popins.gift.title}>
        <p className="popin__text">{popins.gift.text}</p>
      </Popin>

      <Popin open={cocOpen} onClose={() => setCocOpen(false)} title={popins.certificate.title}>
        <p className="popin__text">{popins.certificate.text}</p>
      </Popin>

      <Popin open={storeOpen} onClose={() => setStoreOpen(false)} title={popins.store.title}>
        <p className="popin__text">{popins.store.text}</p>
      </Popin>
    </div>
  );
}
