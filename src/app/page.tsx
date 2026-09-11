import Image from "next/image";
import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { upcomingEvents } from "@/lib/events";
import { photos } from "@/lib/photos";
import { site, sponsorLevels } from "@/lib/site";

export default function HomePage() {
  const previewEvents = upcomingEvents(undefined, 3);
  const previewPhotos = photos.slice(0, 6);

  return (
    <>
      <section className="relative min-h-[28rem] overflow-hidden text-stars-white se:min-h-[32rem] md:min-h-[36rem] lg:min-h-[40rem]">
        <Image
          src="/photos/hero-team.jpg"
          alt="Sacramento Stars team photo"
          fill
          priority
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stars-navy/70" />
        <div className="page-wrap relative flex min-h-[28rem] flex-col justify-end py-10 se:min-h-[32rem] md:min-h-[36rem] md:justify-center md:py-16 lg:min-h-[40rem]">
          <p className="text-xs font-semibold tracking-[0.18em] text-stars-gold uppercase">
            Natomas, Sacramento, CA · Est. {site.founded}
          </p>
          <h1 className="mt-3 max-w-full font-serif text-4xl leading-[0.95] font-bold uppercase se:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Sacramento
            <span className="mt-1 block text-stars-gold">Stars</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stars-mist-light se:text-lg">
            {site.description}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 se:grid-cols-2 se:max-w-md">
            <Button href="/contact" variant="accent">
              Become a Sponsor
            </Button>
            <Button href="/donate" variant="secondary">
              View Levels
            </Button>
          </div>
        </div>
      </section>

      <section className="page-wrap py-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start md:gap-12 md:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            {site.story.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-5xl">
            {site.story.title}
          </h2>
          <span className="mt-3 block h-1 w-12 bg-stars-red" />
          <div className="mt-6 grid gap-4 text-base leading-relaxed text-stars-muted">
            {site.story.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-card md:mt-0">
          <Image
            src="/photos/06-stars-lineup.jpg"
            alt="Stars lineup"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-stars-white">
        <div className="page-wrap py-10 md:py-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
            Game day
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
            In the Field
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
            More photos coming as the season unfolds. Follow us on Instagram{" "}
            <a href={site.instagram} className="font-bold text-stars-navy" target="_blank" rel="noreferrer">
              {site.instagramHandle}
            </a>{" "}
            for real-time updates.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {previewPhotos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="aspect-[3/4] h-full w-full rounded-input object-cover"
              />
            ))}
          </div>
          <Button href="/photos" variant="secondary" className="mt-6">
            More photos
          </Button>
        </div>
      </section>

      <section className="page-wrap py-10 md:py-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-stars-navy-mid uppercase">
          2026 season
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-stars-navy md:text-4xl">
          Where We&apos;ll Be
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
          10U Red and 9U Blue are on the field this fall. Follow live scores on
          GameChanger, and catch us at league games and tournaments.
        </p>
        <div className="mt-6 grid gap-3">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} showTeam compact />
          ))}
        </div>
        <Button href="/events" variant="secondary" className="mt-6">
          Full schedule
        </Button>
      </section>

      <section className="bg-stars-navy py-10 text-stars-white md:py-16">
        <div className="page-wrap">
          <p className="text-xs font-semibold tracking-[0.16em] text-stars-gold uppercase">
            Join the team
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">Sponsorship Levels</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sponsorLevels.slice(0, 3).map((level) => (
              <article key={level.id} className="rounded-card border border-white/15 bg-stars-navy-mid p-5">
                <p className="text-2xl" aria-hidden="true">
                  {level.emoji}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold">{level.name}</h3>
                <p className="mt-1 text-stars-gold">{level.amount}</p>
                <ul className="mt-4 grid gap-2 text-sm text-stars-mist-light">
                  {level.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 se:max-w-md se:grid-cols-2">
            <Button href="/donate" variant="accent">
              View Levels
            </Button>
            <Button href="/contact" variant="secondary">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
