import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SponsorForm } from "@/components/SponsorForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Become a Sponsor",
  description:
    "Join our growing family of Natomas businesses and community supporters. Every level makes a real difference.",
};

export default async function ContactPage(props: PageProps<"/contact">) {
  const params = await props.searchParams;
  const defaultLevel = typeof params.level === "string" ? params.level : "";

  return (
    <>
      <PageHero
        kicker="Ready to back the Stars?"
        title="Become a Sponsor"
        lede="Join our growing family of Natomas businesses and community supporters. Every level makes a real difference for local kids chasing their dreams."
      />
      <section className="page-wrap grid gap-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-12">
        <SponsorForm defaultLevel={defaultLevel} />
        <aside className="card-panel h-fit">
          <h2 className="font-serif text-2xl font-bold text-stars-navy">Email us</h2>
          <p className="mt-3 text-sm leading-relaxed text-stars-muted">
            Prefer to skip the form? Email the team directly and we&apos;ll follow up
            within 24–48 hours.
          </p>
          <dl className="mt-5 grid gap-3 text-sm">
            <div>
              <dt className="font-bold text-stars-navy-heading">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-stars-navy">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stars-navy-heading">Instagram</dt>
              <dd>
                <a href={site.instagram} className="text-stars-navy" target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stars-navy-heading">Facebook</dt>
              <dd>
                <a href={site.facebook} className="text-stars-navy" target="_blank" rel="noreferrer">
                  Sacramento Stars
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stars-navy-heading">Home</dt>
              <dd className="text-stars-muted">{site.city}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
