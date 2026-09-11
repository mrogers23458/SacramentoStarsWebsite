import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-stars-navy text-stars-white">
      <div className="page-wrap grid gap-8 py-10 md:grid-cols-[1.2fr_1fr] md:items-start lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex gap-4">
          <Logo variant="mark" className="h-16 w-16 shrink-0" />
          <div>
            <p className="font-serif text-2xl font-bold">{site.name}</p>
            <p className="mt-1 text-sm text-stars-mist">
              {site.city} · Est. {site.founded}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stars-mist">
              {site.description}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-stars-mist uppercase">
            Explore
          </p>
          <ul className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-stars-white hover:text-stars-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm font-semibold text-stars-white hover:text-stars-gold"
              >
                Become a Sponsor
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-stars-mist uppercase">
            Follow us
          </p>
          <ul className="mt-3 grid gap-2 text-sm font-semibold">
            <li>
              <a
                href={site.instagram}
                className="hover:text-stars-gold"
                target="_blank"
                rel="noreferrer"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                className="hover:text-stars-gold"
                target="_blank"
                rel="noreferrer"
              >
                Sacramento Stars on Facebook
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-stars-gold">
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-12 items-center rounded-btn bg-stars-red px-4 text-sm font-bold"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="page-wrap py-4 text-xs text-stars-mist">
          © 2026 {site.name} · {site.city} · Est. {site.founded} | {site.instagramHandle} |{" "}
          {site.email}
        </p>
      </div>
    </footer>
  );
}
