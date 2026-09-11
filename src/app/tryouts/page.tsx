import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import {
  tryoutCost,
  tryoutLocation,
  tryoutPhotos,
  tryoutSessions,
  tryoutTeams,
  tryoutValues,
} from "@/lib/tryouts";

export const metadata: Metadata = {
  title: "Private Tryouts",
  description:
    "Private evaluations for Fall 2026 and Spring 2027. Love the game first — 9U, 10U, and a new 11U team. $150/month. October 28 and November 4 at Wild Rose Park.",
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Stars tryouts")}`;

export default function TryoutsPage() {
  const heroPhoto = tryoutPhotos[0];
  const gallery = tryoutPhotos.slice(1);

  return (
    <>
      <PageHero
        kicker="Fall 2026 & Spring 2027 · Private evaluations"
        title="Private Tryouts"
        lede="If travel baseball has started to feel more like chasing rings, high fees, and fighting for playing time than actually loving the game, we may be a good fit for your family."
      />

      <section className="page-wrap py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          When and where
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          Two dates at Wild Rose Park
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stars-muted">
          Private evaluations only. Email or DM us so we can confirm your
          player&apos;s session.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {tryoutSessions.map((session) => (
            <article key={session.id} className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                {session.weekday}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {session.date}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stars-muted">
                Time confirmed when you reach out.
              </p>
            </article>
          ))}
        </div>
        <article className="card-panel mt-3">
          <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
            {tryoutLocation.neighborhood}
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
            {tryoutLocation.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stars-muted">
            {tryoutLocation.address}
          </p>
          <a
            href={tryoutLocation.mapsUrl}
            className="mt-3 inline-flex min-h-12 items-center font-bold text-stars-navy underline decoration-stars-red decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
        </article>
      </section>

      <section className="bg-stars-white">
        <div className="page-wrap grid gap-8 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:py-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
              Fall 2026 & Spring 2027
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
              9U, 10U, and a new 11U
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stars-muted">
              Private evaluations are open for select fall 2026 and spring 2027
              roster opportunities. 9U Blue and 10U Red already play. 11U does
              not exist yet — we are building that roster now. We are adding
              more than one player, and not only to 10U. Rosters stay
              intentionally small so kids get reps and meaningful playing time.
            </p>
            <div className="mt-6 grid gap-3">
              {tryoutTeams.map((team) => (
                <article key={team.id} className="card-panel">
                  <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                    {team.ages}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                    {team.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stars-muted">
                    {team.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            width={heroPhoto.width}
            height={heroPhoto.height}
            className="w-full rounded-card object-cover"
            priority
          />
        </div>
      </section>

      <section className="page-wrap py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          How we play
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          Love the game first
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stars-muted">
          That love builds drive, drive builds commitment, and committed
          players focused on development build great teams and great culture.
          Development over ring-chasing. Opportunity over roster size. A team
          that feels like family.
        </p>
        <div className="mt-6 grid gap-3 se:grid-cols-2 lg:grid-cols-4">
          {tryoutValues.map((value) => (
            <article key={value.title} className="card-panel">
              <h3 className="font-serif text-2xl font-bold text-stars-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stars-muted">
                {value.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stars-white">
        <div className="page-wrap py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            What it costs
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            {tryoutCost.amount}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stars-muted">
            {tryoutCost.claim}.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {tryoutCost.includes.map((item) => (
              <article key={item} className="card-panel">
                <p className="text-sm leading-relaxed text-stars-navy font-semibold">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          How to join
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          Contact us for a session
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stars-muted">
          If you&apos;re looking for development over ring-chasing, opportunity
          over roster size, and a team culture that feels like family, reach
          out. Send the player&apos;s name, age group, and a little about their
          baseball background. We&apos;ll confirm a time at Wild Rose Park.
        </p>
        <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
          <Button href={mailto} variant="accent">
            Email the team
          </Button>
          <Button href={site.instagram} variant="secondary" target="_blank" rel="noreferrer">
            DM {site.instagramHandle}
          </Button>
        </div>
      </section>

      <section className="bg-stars-white">
        <div className="page-wrap py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            From the field
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            What a Stars day looks like
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
            Game days and team days in Natomas, from {site.instagramHandle}.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 se:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 375px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stars-navy py-10 text-stars-white md:py-16">
        <div className="page-wrap">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-gold uppercase">
            Love the game first
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl font-bold md:text-4xl">
            Let&apos;s see if the Stars are the right fit
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-mist-light se:text-base">
            October 28 or November 4 at Wild Rose Park. Reach the coaches at{" "}
            {site.email} or {site.instagramHandle}.
          </p>
          <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
            <Button href={mailto} variant="accent">
              Email the team
            </Button>
            <Button href={tryoutLocation.mapsUrl} variant="secondary" target="_blank" rel="noreferrer">
              Get directions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
