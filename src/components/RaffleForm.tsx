"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

export function RaffleForm() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const player = String(data.get("player") || "").trim();

    if (!firstName || !lastName || !phone || !email || !player) {
      setStatus("error");
      return;
    }

    const body = `Raffle entry\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nSupporting player: ${player}`;

    try {
      await navigator.clipboard.writeText(body);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="card-panel grid gap-4" onSubmit={onSubmit}>
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
      <Button type="submit" variant="accent">
        Copy entry
      </Button>
      {status === "copied" ? (
        <p className="text-sm text-stars-navy-heading">
          Entry copied. Send it to a coach or team parent along with your
          ticket payment to be entered in the drawing.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-stars-red">
          Please fill in every field before copying your entry.
        </p>
      ) : null}
    </form>
  );
}
