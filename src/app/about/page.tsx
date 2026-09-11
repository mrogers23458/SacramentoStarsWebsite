import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description: site.story.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={site.story.kicker}
        title={site.story.title}
        lede="Natomas' own travel baseball team — built by the community, playing for the community."
      />
      <section className="page-wrap grid gap-8 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:py-14">
        <div className="grid gap-4 text-base leading-relaxed text-stars-muted">
          {site.story.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
        </div>
        <Image
          src="/photos/07-three-stars-players.jpg"
          alt="Three Stars players"
          width={900}
          height={1200}
          className="w-full rounded-card object-cover"
        />
      </section>
    </>
  );
}
