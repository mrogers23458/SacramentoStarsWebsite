import { Button } from "@/components/Button";

export function ComingSoon({
  title,
  kicker,
  body,
}: {
  title: string;
  kicker: string;
  body: string;
}) {
  return (
    <section className="page-wrap py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-xl rounded-card border border-stars-border bg-stars-white px-5 py-10 text-center se:px-8 md:py-14">
        <p className="text-xs font-semibold tracking-[0.18em] text-stars-navy-mid uppercase">
          {kicker}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-stars-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stars-muted">{body}</p>
        <p className="mt-6 font-serif text-3xl font-bold text-stars-red">Coming soon</p>
        <div className="mx-auto mt-8 grid max-w-sm gap-3">
          <Button href="/donate" variant="accent">
            Support the team
          </Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
