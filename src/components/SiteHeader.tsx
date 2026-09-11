"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-stars-navy text-stars-white">
      <div className="page-wrap flex items-center gap-3 py-3 se:gap-4 md:py-3.5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 rounded-btn text-stars-white"
        >
          <Logo
            className="h-12 w-12 shrink-0 se:h-14 se:w-14 md:h-16 md:w-16"
            priority
          />
          <span className="min-w-0">
            <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-stars-mist uppercase">
              Natomas · {site.ageGroup}
            </span>
            <span className="block truncate font-serif text-xl leading-tight font-bold se:text-2xl">
              {site.shortName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-btn px-2.5 py-2 text-sm font-bold ${
                  active
                    ? "bg-stars-red text-stars-white"
                    : "text-stars-white hover:bg-stars-navy-mid"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded-btn px-3 py-2 text-sm font-bold ${
              pathname === "/contact"
                ? "bg-stars-red text-stars-white"
                : "bg-stars-red text-stars-white hover:bg-[#8d2b2c]"
            }`}
          >
            Become a Sponsor
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-btn border border-white/25 bg-stars-navy-mid lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 bg-stars-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-stars-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-stars-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/15 bg-stars-navy lg:hidden"
          aria-label="Mobile"
        >
          <div className="page-wrap grid gap-2 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-12 items-center justify-center rounded-btn px-4 text-base font-bold ${
                    active ? "bg-stars-red text-stars-white" : "bg-stars-navy-mid text-stars-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-btn bg-stars-red px-4 text-base font-bold text-stars-white"
            >
              Become a Sponsor
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
