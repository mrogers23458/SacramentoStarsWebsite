import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { sponsorLevels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsorship Levels",
  description:
    "Grand Slam, Home Run, Triple, Double, and Single / In-Kind sponsorships for the Sacramento Stars.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        kicker="Join the team"
        title="Sponsorship Levels"
        lede="Join our growing family of Natomas businesses and community supporters. Every level makes a real difference for local kids chasing their dreams."
      />
      <section className="page-wrap py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sponsorLevels.map((level) => (
            <article key={level.id} className="card-panel flex flex-col">
              <p className="text-2xl" aria-hidden="true">
                {level.emoji}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-stars-navy">
                {level.name}
              </h2>
              <p className="mt-1 font-semibold text-stars-red">{level.amount}</p>
              <ul className="mt-4 grid flex-1 gap-2 text-sm text-stars-muted">
                {level.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <Link
                href={`/contact?level=${encodeURIComponent(level.name)}`}
                className="btn btn-accent mt-5"
              >
                {level.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
