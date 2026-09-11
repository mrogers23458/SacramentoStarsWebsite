import type { Metadata } from "next";
import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { PageHero } from "@/components/PageHero";
import {
  completedEvents,
  isTeamId,
  teams,
  upcomingEvents,
  type TeamId,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Follow 9U Blue and 10U Red on GameChanger, and see where the Sacramento Stars will be this season.",
};

export default async function EventsPage(props: PageProps<"/events">) {
  const params = await props.searchParams;
  const teamParam = typeof params.team === "string" ? params.team : undefined;
  const team: TeamId = isTeamId(teamParam) ? teamParam : "red";
  const current = teams[team];
  const upcoming = upcomingEvents(team);
  const completed = completedEvents(team);

  return (
    <>
      <PageHero
        kicker="2026 season"
        title="Where We'll Be"
        lede="The Stars now field two teams — 10U Red and 9U Blue. Follow live scores on GameChanger, and catch us at league games and tournaments across the region."
      />
      <section className="page-wrap py-8 md:py-12">
        <nav aria-label="Team schedule" className="team-tabs">
          <Link
            href="/events"
            aria-current={team === "red" ? "page" : undefined}
            className="team-tab team-tab-red"
          >
            10U Red
          </Link>
          <Link
            href="/events?team=blue"
            aria-current={team === "blue" ? "page" : undefined}
            className="team-tab team-tab-blue"
          >
            9U Blue
          </Link>
        </nav>

        <div className="card-panel mt-4">
          <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
            Follow {current.label}
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-stars-navy">
            Live scores on GameChanger
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stars-muted">
            Follow the {current.label} team on GameChanger for live scoring,
            recaps, and game alerts.
          </p>
          <a
            href={current.gameChangerUrl}
            className={`btn mt-4 ${team === "blue" ? "btn-primary" : "btn-accent"}`}
            target="_blank"
            rel="noreferrer"
          >
            Follow {current.label} on GameChanger
          </a>
          <p className="mt-4 text-sm leading-relaxed text-stars-muted">
            {current.playPassNote}
          </p>
          <a
            href={current.playPassUrl}
            className="mt-2 inline-flex min-h-12 items-center font-bold text-stars-navy underline decoration-stars-red decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            View the full Delta Valley schedule
          </a>
        </div>

        <div className="mt-8">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">
            Upcoming
          </h2>
          {upcoming.length > 0 ? (
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-stars-muted">
              No upcoming games are posted yet. Check the Delta Valley schedule
              on PlayPass for the latest.
            </p>
          )}
        </div>

        {completed.length > 0 ? (
          <div className="mt-8">
            <h2 className="font-serif text-2xl font-bold text-stars-navy">
              Already played
            </h2>
            <p className="mt-2 text-sm text-stars-muted">
              These events are in the books.
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {completed.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
