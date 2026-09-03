import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl, HOME_ROUTE } from "@/lib/formatters";
import { contentContainer, horizontalScrollRow } from "@/lib/ui";

import { categories } from "@/data/home/categories";

export default function CategoryPushRow() {
  return (
    <section className={`${contentContainer} defer-paint py-8`}>
      <div
        className={`${horizontalScrollRow} md:grid md:grid-cols-3 md:gap-[2px] md:overflow-visible lg:grid-cols-6`}
      >
        {categories.map((item) => (
          <Link
            key={item.title}
            href={item.href || HOME_ROUTE}
            className="group relative min-w-[42vw] shrink-0 snap-start overflow-hidden md:min-w-0"
          >
            <div className="relative aspect-[3/4] bg-brand-cream">
              <Image
                src={normalizeImageUrl(item.image, 767)}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 42vw, 16vw"
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
