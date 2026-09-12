import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import {
  calendarDrive,
  fridayNightLights,
  fundraisingJumpLinks,
  fundraisingPark,
  homeRunDerby,
  novemberTournament,
  raffle,
} from "@/lib/fundraising";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fundraising",
  description:
    "Fall 2026 Stars fundraisers: a 21+ booze wagon raffle, an October t-shirt calendar, a home-run derby, and hosted tournaments at North Natomas Regional Park.",
};

const teamMail = `mailto:${site.email}?subject=${encodeURIComponent("Stars fundraising")}`;

export default function FundraisingPage() {
  return (
    <>
      <PageHero
        kicker="Fall 2026 · Natomas"
        title="Fundraising"
        lede="Hosted nights at North Natomas Regional Park, a calendar t-shirt drive, and a 21-and-over raffle. Every dollar stays with the boys — tournaments, gear, and the season ahead."
      />

      <section className="page-wrap py-8 md:py-10">
        <nav
          aria-label="Fundraisers"
          className="grid grid-cols-1 gap-2 se:grid-cols-2 md:flex md:flex-wrap"
        >
          {fundraisingJumpLinks.map((link) => (
            <a key={link.href} href={link.href} className="team-tab">
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      <section
        id={raffle.id}
        className="scroll-mt-24 bg-stars-white py-10 md:py-14"
      >
        <div className="page-wrap">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            {raffle.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            {raffle.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
            {raffle.summary}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {raffle.packages.map((item) => (
              <article key={item.price} className="card-panel">
                <p className="font-serif text-3xl font-bold text-stars-navy">
                  {item.price}
                </p>
                <p className="mt-1 text-sm font-semibold text-stars-muted">
                  {item.tickets}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                Drawing
              </p>
              <p className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {raffle.drawing}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stars-muted">
                The winner does not need to be present.
              </p>
            </article>
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                How to enter
              </p>
              <ol className="mt-2 grid gap-2 text-sm leading-relaxed text-stars-muted">
                {raffle.steps.map((step, index) => (
                  <li key={step}>
                    <span className="font-bold text-stars-navy">
                      {index + 1}.
                    </span>{" "}
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="card-panel mt-3 bg-stars-cream">
            <p className="text-sm font-semibold text-stars-navy-deep">
              {raffle.ageRule}
            </p>
          </div>

          <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
            <Button
              href={raffle.formUrl}
              variant="accent"
              target="_blank"
              rel="noreferrer"
            >
              Open the raffle form
            </Button>
            <Button
              href={raffle.venmoUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Venmo {raffle.venmo}
            </Button>
          </div>
        </div>
      </section>

      <section
        id={calendarDrive.id}
        className="page-wrap scroll-mt-24 py-10 md:py-14"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          {calendarDrive.kicker}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          {calendarDrive.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
          {calendarDrive.summary}
        </p>
        <div className="mt-6 grid gap-3 se:grid-cols-2">
          {calendarDrive.examples.map((example) => (
            <article key={example.day} className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                {example.day}
              </p>
              <p className="mt-1 font-serif text-3xl font-bold text-stars-navy">
                {example.amount}
              </p>
            </article>
          ))}
        </div>
        <article className="card-panel mt-3">
          <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
            Sell out the month
          </p>
          <p className="mt-1 font-serif text-3xl font-bold text-stars-navy">
            {calendarDrive.sellout}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stars-muted">
            That is the most one player can raise if every October date is
            sponsored.
          </p>
        </article>
        <ol className="mt-6 grid gap-3 text-sm leading-relaxed text-stars-muted">
          {calendarDrive.how.map((step, index) => (
            <li key={step} className="card-panel">
              <span className="font-bold text-stars-navy">{index + 1}.</span>{" "}
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
          <Button href={teamMail} variant="accent">
            Email the team
          </Button>
          <Button href={site.instagram} variant="secondary" target="_blank" rel="noreferrer">
            DM {site.instagramHandle}
          </Button>
        </div>
      </section>

      <section
        id={fridayNightLights.id}
        className="scroll-mt-24 bg-stars-white py-10 md:py-14"
      >
        <div className="page-wrap">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            {fridayNightLights.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            {fridayNightLights.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
            A short Friday night 10U event under the lights. Four teams, two
            guaranteed games, and hardware for the top two.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                When
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {fridayNightLights.date}
              </h3>
              <p className="mt-2 text-sm text-stars-muted">
                {fridayNightLights.time}
              </p>
            </article>
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                Entry
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {fridayNightLights.fee}
              </h3>
              <p className="mt-2 text-sm text-stars-muted">
                {fridayNightLights.games} · {fridayNightLights.field}
              </p>
            </article>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <article className="card-panel">
              <p className="text-sm leading-relaxed text-stars-navy font-semibold">
                {fridayNightLights.awards}
              </p>
            </article>
            <article className="card-panel">
              <p className="text-sm leading-relaxed text-stars-navy font-semibold">
                {fridayNightLights.extras}
              </p>
            </article>
          </div>
          <ParkCard />
          <Button href={fridayNightLights.mailto} variant="accent" className="mt-6 se:max-w-xs">
            Email to enter a team
          </Button>
        </div>
      </section>

      <section
        id={homeRunDerby.id}
        className="page-wrap scroll-mt-24 py-10 md:py-14"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          {homeRunDerby.kicker}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          {homeRunDerby.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
          Hitters from 8U through 12U take {homeRunDerby.format.toLowerCase()}{" "}
          for {homeRunDerby.fee.toLowerCase()}.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <article className="card-panel">
            <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
              When
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
              {homeRunDerby.date}
            </h3>
            <p className="mt-2 text-sm text-stars-muted">{homeRunDerby.time}</p>
          </article>
          <article className="card-panel">
            <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
              Ages
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
              {homeRunDerby.ages}
            </h3>
            <p className="mt-2 text-sm text-stars-muted">
              {homeRunDerby.format}
            </p>
          </article>
          <article className="card-panel">
            <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
              Entry
            </p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
              {homeRunDerby.fee}
            </h3>
          </article>
        </div>
        <div className="mt-3 grid gap-3">
          {homeRunDerby.prizes.map((prize) => (
            <article key={prize.place} className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-red uppercase">
                {prize.place} place
              </p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-stars-navy">
                {prize.prize}
              </p>
            </article>
          ))}
        </div>
        <ParkCard className="mt-3" />
        <Button href={homeRunDerby.mailto} variant="accent" className="mt-6 se:max-w-xs">
          Email to sign up a hitter
        </Button>
      </section>

      <section
        id={novemberTournament.id}
        className="scroll-mt-24 bg-stars-white py-10 md:py-14"
      >
        <div className="page-wrap">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            {novemberTournament.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            {novemberTournament.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
            A weekend hosted by the Stars for {novemberTournament.ages}.{" "}
            {novemberTournament.note}
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                When
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {novemberTournament.date}
              </h3>
            </article>
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                Entry
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {novemberTournament.fee}
              </h3>
              <p className="mt-2 text-sm text-stars-muted">
                {novemberTournament.games}
              </p>
            </article>
            <article className="card-panel">
              <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
                Awards
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
                {novemberTournament.awards}
              </h3>
            </article>
          </div>
          <ParkCard className="mt-3" />
          <Button
            href={novemberTournament.mailto}
            variant="accent"
            className="mt-6 se:max-w-xs"
          >
            Email to enter a team
          </Button>
        </div>
      </section>

      <section className="bg-stars-navy py-10 text-stars-white md:py-16">
        <div className="page-wrap grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-stars-gold uppercase">
              Support the season
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Questions, or another way to help?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-mist-light se:text-base">
              Reach the coaches at {site.email} or {site.instagramHandle}.
              Business sponsors can still join at the usual levels.
            </p>
            <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
              <Button href={teamMail} variant="accent">
                Email the team
              </Button>
              <Button href="/donate" variant="secondary">
                View sponsor levels
              </Button>
            </div>
          </div>
          <Image
            src="/photos/tryouts/gameday-06.jpg"
            alt="Players gather under a tent with a younger sibling in a wagon after a game."
            width={3024}
            height={4032}
            className="w-full rounded-card object-cover"
          />
        </div>
      </section>
    </>
  );
}

function ParkCard({ className = "mt-3" }: { className?: string }) {
  return (
    <article className={`card-panel ${className}`.trim()}>
      <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
        Natomas
      </p>
      <h3 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
        {fundraisingPark.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stars-muted">
        {fundraisingPark.address}
      </p>
      <a
        href={fundraisingPark.mapsUrl}
        className="mt-3 inline-flex min-h-12 items-center font-bold text-stars-navy underline decoration-stars-red decoration-2 underline-offset-2"
        target="_blank"
        rel="noreferrer"
      >
        Open in Maps
      </a>
    </article>
  );
}
