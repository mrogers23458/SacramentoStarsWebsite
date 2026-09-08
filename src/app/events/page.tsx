import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { events, formatEventDate } from "@/lib/events";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Upcoming events",
  description: `Games, clinics, and family days for the ${site.name}.`,
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        kicker="Calendar"
        title="Upcoming events"
        lede="Practices, games, tournaments, and family days. Times and fields may shift — check back before you leave home."
      />
      <section className="page-wrap py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="card-panel flex flex-col">
              <p className="text-sm font-bold text-stars-red">
                {formatEventDate(event.date)}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-stars-navy">
                {event.title}
              </h2>
              <p className="mt-2 text-sm font-semibold text-stars-navy-heading">
                {event.time} · {event.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stars-muted">
                {event.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
