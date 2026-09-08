import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { events, formatEventDate } from "@/lib/events";
import { site } from "@/lib/site";

const stats = [
  { label: "Home city", value: "Sacramento", tone: "bg-stars-navy" },
  { label: "Age groups", value: site.ageGroup, tone: "bg-stars-red" },
  { label: "Founded", value: `EST. ${site.founded}`, tone: "bg-stars-navy" },
  { label: "Season", value: "Fall 2026", tone: "bg-stars-navy" },
] as const;

export default function HomePage() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      <section className="hero-gradient text-stars-white">
        <div className="page-wrap py-8 se:py-10 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:py-14 lg:grid-cols-[auto_1fr_minmax(16rem,22rem)] lg:py-16">
          <Logo
            className="h-24 w-24 se:h-28 se:w-28 md:h-32 md:w-32"
            priority
          />
          <div className="mt-5 md:mt-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-stars-mist-light uppercase">
              {site.name} {site.ageGroup}
            </p>
            <h1 className="mt-2 font-serif text-4xl leading-[1.1] font-bold se:text-5xl md:text-6xl">
              Play with heart.
              <span className="block">Grow together.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stars-mist-light se:text-lg">
              {site.description}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 md:col-span-2 lg:col-span-1 lg:mt-0">
            <Button href="/donate" variant="accent">
              Donate
            </Button>
            <Button href="/events" variant="primary" className="bg-stars-navy-mid">
              Events
            </Button>
          </div>
        </div>
      </section>

      <section className="page-wrap py-8 md:py-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <article key={stat.label} className={`card-stat ${stat.tone}`}>
              <p className="card-stat-label">{stat.label}</p>
              <p className="card-stat-value">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-10 md:pb-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "The team",
              body: "Stars players learn the game, back each other up, and represent Sacramento with class.",
            },
            {
              title: "The families",
              body: "Parents, grandparents, and siblings make the sidelines feel like home. Everyone has a place here.",
            },
            {
              title: "The season",
              body: "Practices, games, and tournaments are built around kids first — competitive, but still fun.",
            },
          ].map((item) => (
            <article key={item.title} className="card-panel">
              <h2 className="font-serif text-2xl font-bold text-stars-navy">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stars-muted md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stars-white">
        <div className="page-wrap py-10 md:py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
                Schedule
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
                Upcoming events
              </h2>
            </div>
            <Button href="/events" variant="secondary" className="md:w-auto">
              Full calendar
            </Button>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {upcoming.map((event) => (
              <article key={event.id} className="rounded-card border border-stars-border p-5">
                <p className="text-sm font-semibold text-stars-red">
                  {formatEventDate(event.date)}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-stars-navy">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-stars-muted">
                  {event.time} · {event.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-10 md:grid md:grid-cols-2 md:items-center md:gap-10 md:py-16">
        <div>
          <h2 className="font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            Help keep kids on the field
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stars-muted">
            Uniforms, tournament fees, and field time add up quickly. A donation —
            large or small — stays with this team and these players.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 se:grid-cols-2 se:max-w-md">
            <Button href="/donate" variant="soft">
              Give today
            </Button>
            <Button href="/about" variant="secondary">
              About the Stars
            </Button>
          </div>
        </div>
        <aside className="mt-8 rounded-card bg-stars-cream p-6 md:mt-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            Later this season
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-stars-navy">
            A raffle is coming soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stars-muted">
            We are planning a future fundraiser. Details will land on the raffle
            page when they are ready — nothing to buy yet.
          </p>
          <Button href="/raffle" variant="primary" className="mt-5">
            Check the placeholder
          </Button>
        </aside>
      </section>
    </>
  );
}
