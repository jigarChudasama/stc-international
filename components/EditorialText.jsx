"use client";

import Link from "next/link";
import { HOME_ROUTE } from "@/lib/formatters";
import { contentContainer, ctaLink } from "@/lib/ui";

export default function EditorialText({ title, intro, ctaText, immersive = false }) {
  return (
    <section
      className={`${contentContainer} py-10 text-center lg:py-14 ${immersive ? "text-white" : ""}`}
    >
      {title && (
        <h2 className="mb-4 font-edito text-[1.375rem] font-normal leading-tight tracking-wide md:text-[1.75rem] lg:text-[2rem]">
          <span>{title}</span>
        </h2>
      )}
      {intro && (
        <p className="mx-auto mb-6 max-w-[640px] text-xs leading-relaxed md:text-sm">
          <span>{intro}</span>
        </p>
      )}
      {ctaText && (
        <p>
          <Link href={HOME_ROUTE} className={`${ctaLink} text-xs`}>
            {ctaText}
          </Link>
        </p>
      )}
    </section>
  );
}
