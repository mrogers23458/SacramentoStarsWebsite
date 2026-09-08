import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach the ${site.name} about donations, events, or joining the team.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Say hello"
        title="Contact the Stars"
        lede="Questions about donations, the calendar, or joining the roster? Write a note, copy it, and send it to a coach or team parent."
      />
      <section className="page-wrap grid gap-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-12">
        <ContactForm />
        <aside className="card-panel h-fit">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">
            Other ways to reach us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stars-muted">
            The fastest path is usually the team chat or a parent on the sideline.
            Use this form when you want a written note to paste into email or text.
          </p>
          <dl className="mt-5 grid gap-3 text-sm">
            <div>
              <dt className="font-bold text-stars-navy-heading">Team</dt>
              <dd className="text-stars-muted">
                {site.name} {site.ageGroup}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stars-navy-heading">Area</dt>
              <dd className="text-stars-muted">{site.city}</dd>
            </div>
            <div>
              <dt className="font-bold text-stars-navy-heading">Since</dt>
              <dd className="text-stars-muted">{site.founded}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
