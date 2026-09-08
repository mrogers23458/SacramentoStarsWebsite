"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { donationLevels } from "@/lib/site";

export function DonateChooser() {
  const [selected, setSelected] = useState<number>(100);

  return (
    <div>
      <div className="grid gap-3 se:grid-cols-2 lg:grid-cols-4">
        {donationLevels.map((level) => {
          const active = selected === level.amount;
          return (
            <button
              key={level.amount}
              type="button"
              onClick={() => setSelected(level.amount)}
              className={`relative rounded-card border bg-stars-white px-4 py-5 text-left ${
                active
                  ? "border-stars-navy ring-2 ring-stars-navy"
                  : "border-stars-border"
              }`}
            >
              {level.badge ? (
                <span className="badge-pill absolute -top-2.5 right-3">
                  {level.badge}
                </span>
              ) : null}
              <p className="font-serif text-3xl font-bold text-stars-navy">
                ${level.amount}
              </p>
              <p className="mt-2 text-sm font-bold text-stars-navy-heading">
                {level.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-stars-muted">
                {level.detail}
              </p>
            </button>
          );
        })}
      </div>
      <div className="mt-5 rounded-card bg-stars-cream px-4 py-4 md:px-5">
        <p className="text-sm leading-relaxed text-stars-navy-heading">
          Suggested gift: <strong>${selected}</strong>. Give through a coach or
          team parent — Venmo, cash, or check. Amounts are a guide; any gift
          helps a player stay on the field.
        </p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 md:max-w-xl">
        <Button href="/contact" variant="soft">
          Ask how to give
        </Button>
        <Button href="/events" variant="secondary">
          See upcoming events
        </Button>
      </div>
    </div>
  );
}
