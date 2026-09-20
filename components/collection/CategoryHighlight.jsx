import Image from "next/image";

export default function CategoryHighlight({ items }) {
  return (
    <section
      className="mx-auto w-full max-w-[2100px] px-6 pt-4 lg:px-[90px] lg:pt-[35px]"
      aria-label="Shop by category"
    >
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.id || item.label}>
            <a
              href={item.href}
              className="collection-highlight-slider relative block overflow-hidden"
              aria-label={`Go to ${item.label}`}
            >
              <div className="relative aspect-[3/4] w-full bg-brand-divider">
                <Image
                  src={item.image.replace("&amp;", "&")}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-right">
                <span className="text-[0.625rem] font-medium uppercase leading-4 text-white md:text-xs">
                  {item.label}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
