"use client";

import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl, HOME_ROUTE } from "@/lib/formatters";
import { contentContainer, horizontalScrollRow } from "@/lib/ui";

const CATEGORIES = [
  {
    title: "Fragrance",
    image: "https://assets.hermes.com/is/image/hermesproduct/083591CK7K_front_wm_1",
  },
  {
    title: "Women's shoes",
    image: "https://assets.hermes.com/is/image/hermesproduct/084283CKAC_front_wm_1",
  },
  {
    title: "Belts",
    image: "https://assets.hermes.com/is/image/hermesproduct/085819CK18_front_wm_1",
  },
  {
    title: "Silk",
    image: "https://assets.hermes.com/is/image/hermesproduct/084274CCBX_front_wm_1",
  },
  {
    title: "Fashion Jewelry",
    image: "https://assets.hermes.com/is/image/hermesproduct/103990M%2001_front_wm_1",
  },
  {
    title: "Art of living",
    image: "https://assets.hermes.com/is/image/hermesproduct/103983M%2001_front_wm_1",
  },
  {
    title: "Hats",
    image: "https://assets.hermes.com/is/image/hermesproduct/311888M%2003_front_wm_1",
  },
  {
    title: "Men's shoes",
    image: "https://assets.hermes.com/is/image/hermesproduct/104863M%2001_above_wm_1",
  },
];

export default function CategoryPushRow() {
  return (
    <section className={`${contentContainer} py-8`}>
      <div
        className={`${horizontalScrollRow} md:grid md:grid-cols-4 md:gap-[2px] md:overflow-visible lg:grid-cols-8`}
      >
        {CATEGORIES.map((item) => (
          <Link
            key={item.title}
            href={HOME_ROUTE}
            className="group relative min-w-[42vw] shrink-0 snap-start overflow-hidden md:min-w-0"
          >
            <div className="relative aspect-[3/4] bg-hermes-cream">
              <Image
                src={normalizeImageUrl(item.image, 767)}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 42vw, 12vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white md:text-xs">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
