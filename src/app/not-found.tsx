import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-wrap py-16 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-stars-navy-mid uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-stars-navy">
        Page not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-stars-muted">
        That link does not match a Stars page. Head home or check upcoming events.
      </p>
      <div className="mx-auto mt-8 grid max-w-sm gap-3">
        <Button href="/" variant="primary">
          Home
        </Button>
        <Button href="/events" variant="secondary">
          Events
        </Button>
      </div>
    </section>
  );
}
