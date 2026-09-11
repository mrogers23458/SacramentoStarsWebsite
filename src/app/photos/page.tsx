import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photos",
  description: "Game-day photos from the Sacramento Stars. More coming as the season unfolds.",
};

export default function PhotosPage() {
  return (
    <>
      <PageHero
        kicker="Game day"
        title="In the Field"
        lede={`More photos coming as the season unfolds. Follow us on Instagram ${site.instagramHandle} for real-time updates.`}
      />
      <section className="page-wrap py-8 md:py-12">
        <div className="grid grid-cols-1 gap-3 se:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 375px) 50vw, 100vw"
              />
              <figcaption className="sr-only">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
