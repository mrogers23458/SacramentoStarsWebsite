import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RaffleForm } from "@/components/RaffleForm";
import { raffle, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Raffle",
  description: `${raffle.title} — a ${site.name} fundraiser.`,
};

export default function RafflePage() {
  return (
    <>
      <PageHero
        kicker={raffle.tagline}
        title={raffle.title}
        lede="Buy a ticket, tell us which Stars player you're supporting, and you're entered to win. Every ticket goes straight back into the season."
      />
      <section className="page-wrap py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="card-panel">
            <h2 className="font-serif text-xl font-bold text-stars-navy">
              Buy a ticket
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stars-muted">
              $10 for 1 ticket, $25 for 3 tickets, or $75 for 10 tickets.{" "}
              {raffle.howToPay}
            </p>
          </article>
          <article className="card-panel">
            <h2 className="font-serif text-xl font-bold text-stars-navy">
              What you could win
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stars-muted">
              {raffle.prizeDescription}
            </p>
          </article>
          <article className="card-panel">
            <h2 className="font-serif text-xl font-bold text-stars-navy">
              Drawing
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stars-muted">
              The winner will be drawn {raffle.drawingDate}. You do not need
              to be present to win.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <RaffleForm />
          <aside className="card-panel h-fit">
            <h2 className="font-serif text-2xl font-bold text-stars-navy">
              Good to know
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-stars-muted">
              <li>
                <strong className="text-stars-navy-heading">
                  Must be 21 or older
                </strong>{" "}
                to win this raffle. ID may be required to claim the prize.
              </li>
              <li>
                This form does not process payment. Send your ticket payment
                via Venmo to{" "}
                <strong className="text-stars-navy-heading">
                  {raffle.venmoHandle}
                </strong>{" "}
                and include your name and player in the note.
              </li>
              <li>
                Naming a player lets that player&apos;s team get credit for
                the ticket. It does not change your odds of winning.
              </li>
              <li>
                Questions about tickets or the drawing? Reach out on the{" "}
                <a
                  href="/contact"
                  className="font-semibold text-stars-navy underline"
                >
                  contact page
                </a>
                .
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
