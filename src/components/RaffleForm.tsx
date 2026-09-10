"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { raffle, raffleTicketPackages } from "@/lib/site";

export function RaffleForm() {
  const [tickets, setTickets] = useState<number>(raffleTicketPackages[0].tickets);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const player = String(data.get("player") || "").trim();
    const selectedPackage = raffleTicketPackages.find(
      (pack) => pack.tickets === tickets,
    );

    if (!firstName || !lastName || !phone || !email || !player || !selectedPackage) {
      setStatus("error");
      setErrorMessage("Please choose a package and fill in every field.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/raffle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          player,
          packageLabel: selectedPackage.label,
          packagePrice: selectedPackage.price,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Could not save your entry.");
      }

      setStatus("success");
      form.reset();
      setTickets(raffleTicketPackages[0].tickets);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Could not save your entry.",
      );
    }
  }

  return (
    <form className="card-panel grid gap-4" onSubmit={onSubmit}>
      <div>
        <span className="field-label">
          Ticket package <span className="text-stars-red">*</span>
        </span>
        <div className="grid gap-3 se:grid-cols-3">
          {raffleTicketPackages.map((pack) => {
            const active = tickets === pack.tickets;
            return (
              <button
                key={pack.tickets}
                type="button"
                onClick={() => setTickets(pack.tickets)}
                className={`relative rounded-input border bg-stars-white px-3 py-4 text-left ${
                  active
                    ? "border-stars-navy ring-2 ring-stars-navy"
                    : "border-stars-border"
                }`}
              >
                {pack.badge ? (
                  <span className="badge-pill absolute -top-2.5 right-3">
                    {pack.badge}
                  </span>
                ) : null}
                <p className="font-serif text-2xl font-bold text-stars-navy">
                  ${pack.price}
                </p>
                <p className="mt-1 text-sm font-semibold text-stars-navy-heading">
                  {pack.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 se:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="firstName">
            First name <span className="text-stars-red">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            className="field-input"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="lastName">
            Last name <span className="text-stars-red">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            className="field-input"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="phone">
          Phone number <span className="text-stars-red">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="field-input"
          autoComplete="tel"
          required
        />
      </div>
      <div>
        <label className="field-label" htmlFor="email">
          Email <span className="text-stars-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="field-input"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label className="field-label" htmlFor="player">
          Stars player you are supporting <span className="text-stars-red">*</span>
        </label>
        <input
          id="player"
          name="player"
          className="field-input"
          placeholder="Player's first and last name"
          required
        />
      </div>
      <Button type="submit" variant="accent" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit entry"}
      </Button>
      {status === "success" ? (
        <p className="text-sm text-stars-navy-heading">
          Entry submitted. Pay via Venmo to {raffle.venmoHandle} (include your
          name and player in the note) to complete your entry.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-stars-red">{errorMessage}</p>
      ) : null}
    </form>
  );
}
