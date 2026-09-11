import { teams, type TeamEvent } from "@/lib/events";

export function EventCard({
  event,
  showTeam = false,
  compact = false,
}: {
  event: TeamEvent;
  showTeam?: boolean;
  compact?: boolean;
}) {
  const team = teams[event.team];
  const completed = Boolean(event.completed);
  const Heading = compact ? "h3" : "h2";
  const label = [
    showTeam ? team.label : null,
    event.title,
    event.date,
    completed ? "completed" : null,
    event.result ?? null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article
      aria-label={label}
      className={`card-panel relative overflow-hidden ${
        completed ? "event-complete" : ""
      } ${compact ? "md:grid md:grid-cols-[8rem_1fr_auto] md:items-center md:gap-4" : ""}`}
    >
      {completed ? (
        <span className="event-paint-slash" aria-hidden="true" />
      ) : null}

      {compact ? (
        <>
          <p className="relative z-10 text-sm font-bold text-stars-red">
            {event.date}
          </p>
          <div className="relative z-10">
            {showTeam ? (
              <p className={`team-chip team-chip-${event.team}`}>{team.label}</p>
            ) : null}
            <Heading
              className={`font-serif text-xl font-bold text-stars-navy ${showTeam ? "mt-1" : ""}`}
            >
              {event.title}
            </Heading>
            <p className="mt-1 text-sm text-stars-muted">
              {event.time} · {event.location}
            </p>
          </div>
          <p className="relative z-10 mt-2 text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase md:mt-0">
            {event.type}
          </p>
        </>
      ) : (
        <>
          <div className="relative z-30 flex flex-wrap items-center gap-2">
            <p className="text-xs font-bold tracking-[0.12em] text-stars-navy-mid uppercase">
              {event.type}
            </p>
            {event.result ? (
              <p className="event-result-badge">{event.result}</p>
            ) : null}
          </div>
          <div className={completed ? "event-card-body" : ""}>
            <Heading className="mt-1 font-serif text-2xl font-bold text-stars-navy">
              {event.title}
            </Heading>
            <p className="mt-2 text-sm font-bold text-stars-red">{event.date}</p>
            <p className="mt-1 text-sm text-stars-muted">
              {event.time} · {event.location}
            </p>
          </div>
        </>
      )}
    </article>
  );
}
