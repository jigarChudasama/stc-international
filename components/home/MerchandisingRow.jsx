import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl } from "@/lib/formatters";
import { contentContainer, horizontalScrollRow } from "@/lib/ui";

export default function MerchandisingRow({ items = [], products = [] }) {
  const tiles = items.length ? items : products;

  return (
    <section className={`${contentContainer} defer-paint py-6 lg:py-8`}>
      <div
        className={`${horizontalScrollRow} pb-2 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:pb-0`}
      >
        {tiles.map((item) => (
          <article
            key={item.href || item.sku || item.title}
            className="group min-w-[44vw] shrink-0 snap-start md:min-w-0"
          >
            <Link href={item.href || "/collection"} className="block">
              <div className="relative mb-3 aspect-square overflow-hidden bg-brand-cream">
                <Image
                  src={normalizeImageUrl(item.image, 767)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 44vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mb-1 text-xs leading-snug">{item.title}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
