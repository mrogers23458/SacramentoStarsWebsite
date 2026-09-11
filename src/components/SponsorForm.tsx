"use client";

import { useActionState } from "react";
import { submitSponsorInquiry, type SponsorInquiryState } from "@/app/contact/actions";
import { Button } from "@/components/Button";
import { sponsorLevels } from "@/lib/site";

const initialState: SponsorInquiryState = { status: "idle" };

export function SponsorForm({ defaultLevel = "" }: { defaultLevel?: string }) {
  const [state, formAction, pending] = useActionState(
    submitSponsorInquiry,
    initialState,
  );

  if (state.status === "ok") {
    return (
      <div className="card-panel" aria-live="polite">
        <h2 className="font-serif text-2xl font-bold text-stars-navy">
          You&apos;re in the dugout!
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stars-muted">
          {state.confirmationSent
            ? "Thanks for reaching out. We emailed you a confirmation and will follow up within 24–48 hours to confirm your sponsorship details."
            : "Thanks for reaching out. We received your inquiry and will contact you within 24–48 hours to confirm your sponsorship details."}{" "}
          Go Stars!
        </p>
      </div>
    );
  }

  return (
    <form className="card-panel grid gap-4" action={formAction}>
      <h2 className="font-serif text-2xl font-bold text-stars-navy">Become a Star</h2>
      <p className="text-sm leading-relaxed text-stars-muted">
        Send the form and we&apos;ll email the team plus a confirmation to the
        address you enter.
      </p>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 se:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="fname">
            First Name <span className="text-stars-red">*</span>
          </label>
          <input
            id="fname"
            name="fname"
            className="field-input"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="lname">
            Last Name <span className="text-stars-red">*</span>
          </label>
          <input
            id="lname"
            name="lname"
            className="field-input"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="biz">
          Business Name <span className="text-stars-red">*</span>
        </label>
        <input
          id="biz"
          name="biz"
          className="field-input"
          autoComplete="organization"
          required
        />
      </div>
      <div>
        <label className="field-label" htmlFor="email">
          Email Address <span className="text-stars-red">*</span>
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
        <label className="field-label" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="field-input"
          autoComplete="tel"
        />
      </div>
      <div>
        <label className="field-label" htmlFor="level">
          Sponsorship Level <span className="text-stars-red">*</span>
        </label>
        <select
          id="level"
          name="level"
          className="field-select"
          defaultValue={defaultLevel}
          required
        >
          <option value="" disabled>
            Select a level
          </option>
          {sponsorLevels.map((level) => (
            <option key={level.id} value={level.name}>
              {level.name} — {level.amount}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="field-label" htmlFor="msg">
          Message (Optional)
        </label>
        <textarea id="msg" name="msg" className="field-textarea" />
      </div>
      <Button type="submit" variant="accent" disabled={pending}>
        {pending ? "Sending..." : "Send Us a Sponsorship Inquiry"}
      </Button>
      {state.status === "error" ? (
        <p className="text-sm text-stars-red" aria-live="polite">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
