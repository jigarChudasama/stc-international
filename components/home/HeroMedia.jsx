import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl, HOME_ROUTE } from "@/lib/formatters";
import { contentContainerPadded } from "@/lib/ui";

export default function HeroMedia({
  desktopImage,
  mobileImage,
  alt = "Editorial media",
  link = false,
}) {
  const mobilePoster = normalizeImageUrl(mobileImage);
  const desktopPoster = normalizeImageUrl(desktopImage);

  const content = (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-cream md:aspect-video">
      <Image
        src={mobilePoster}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-700 hover:scale-[1.01] md:hidden"
      />
      <Image
        src={desktopPoster}
        alt={alt}
        fill
        sizes="100vw"
        className="hidden object-cover transition-transform duration-700 hover:scale-[1.01] md:block"
      />
    </div>
  );

  return (
    <section className={`${contentContainerPadded} defer-paint`}>
      {link ? (
        <Link href={HOME_ROUTE} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </section>
  );
}
