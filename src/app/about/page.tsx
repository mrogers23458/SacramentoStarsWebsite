import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the ${site.name} ${site.ageGroup} baseball program.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={site.name}
        title="A Sacramento team for growing players"
        lede="Stars baseball is for kids who want to compete, learn, and belong. We are a 9–11U program built around coaching, family, and a full season of games."
      />
      <section className="page-wrap grid gap-6 py-10 md:grid-cols-2 md:py-14 lg:gap-10">
        <article className="card-panel">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">Who we are</h2>
          <p className="mt-3 text-base leading-relaxed text-stars-muted">
            The Sacramento Stars formed in {site.founded} so local players could
            stay together as they move through 9U, 10U, and 11U. We practice in
            the Sacramento area and travel for tournaments when the calendar and
            families allow it.
          </p>
        </article>
        <article className="card-panel">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">How we play</h2>
          <p className="mt-3 text-base leading-relaxed text-stars-muted">
            We teach sound fundamentals first: catch the ball, throw strikes, run
            the bases with purpose. Winning matters. Treating umpires, opponents,
            and teammates with respect matters more.
          </p>
        </article>
        <article className="card-panel md:col-span-2">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">
            What families can expect
          </h2>
          <ul className="mt-4 grid gap-3 text-base text-stars-muted md:grid-cols-3">
            <li className="rounded-input bg-stars-cream p-4">
              Clear practice and game times posted on the events page.
            </li>
            <li className="rounded-input bg-stars-cream p-4">
              Coaching that talks to kids in a way they can use the next pitch.
            </li>
            <li className="rounded-input bg-stars-cream p-4">
              Fundraising that stays simple — donations now, more later if needed.
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
