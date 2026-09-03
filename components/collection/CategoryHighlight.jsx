import Image from "next/image";

export default function CategoryHighlight({ items }) {
  return (
    <section
      className="mx-auto w-full max-w-[2100px] px-6 pt-4 lg:px-[90px] lg:pt-[35px]"
      aria-label="Shop by category"
    >
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.id || item.label}>
            <a
              href={item.href}
              className="collection-highlight-slider relative block overflow-hidden"
              aria-label={`Go to ${item.label}`}
            >
              <Image
                src={item.image.replace("&amp;", "&")}
                alt=""
                width={800}
                height={400}
                sizes="(max-width: 768px) 50vw, 16vw"
                className="block aspect-[16/8] w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute bottom-2 right-2 text-right text-white">
                <span className="text-xs font-medium uppercase leading-4">
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
