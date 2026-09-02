import Image from 'next/image';
import Link from 'next/link';

export default function CategoryHighlight({ items }) {
  return (
    <section
      className="mx-auto w-full max-w-[2100px] px-6 pt-4 lg:px-[90px] lg:pt-[35px]"
      aria-label="Category filters"
    >
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <Link
              href={item.href}
              className="collection-highlight-slider relative block overflow-hidden"
              aria-label={`${item.label}, ${item.count}`}
            >
              <Image
                src={item.image.replace('&amp;', '&')}
                alt=""
                width={800}
                height={400}
                className="block aspect-[16/8] w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute bottom-2 right-2 text-right text-white">
                <span className="font-mono text-xs font-medium uppercase leading-4">
                  {item.label}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
