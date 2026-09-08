import type { Metadata } from "next";
import { DonateChooser } from "@/components/DonateChooser";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donations",
  description: `Support the ${site.name} with a gift toward gear, fields, and tournament play.`,
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        kicker="Support the Stars"
        title="Donations keep the season going"
        lede="Every gift stays with this roster — uniforms, field rentals, tournament entries, and the little things that make a weekend of baseball work."
      />
      <section className="page-wrap py-8 md:py-12">
        <h2 className="font-serif text-3xl font-bold text-stars-navy">
          Choose a starting amount
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stars-muted se:text-base">
          Shown as a guide for families and local supporters. Pick a level, then
          reach a coach or team parent to send the gift.
        </p>
        <div className="mt-6">
          <DonateChooser />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Venmo or cash",
              body: "Most families give through the team’s current Venmo or in person at a game. Ask a coach for the handle before you send anything.",
            },
            {
              title: "Check",
              body: "Checks can be brought to a practice or mailed as directed by the team parent. Include your player’s name in the memo.",
            },
            {
              title: "Local businesses",
              body: "If you would like to sponsor a tournament weekend or a banner, use the contact page and we will follow up.",
            },
          ].map((item) => (
            <article key={item.title} className="card-panel">
              <h3 className="font-serif text-xl font-bold text-stars-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stars-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
