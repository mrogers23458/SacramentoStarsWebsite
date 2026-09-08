export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="hero-gradient text-stars-white">
      <div className="page-wrap py-10 se:py-12 md:py-16 lg:py-20">
        {kicker ? (
          <p className="text-xs font-semibold tracking-[0.18em] text-stars-mist-light uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight font-bold se:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stars-mist-light se:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}
