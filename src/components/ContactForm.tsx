"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "General");
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

    try {
      await navigator.clipboard.writeText(body);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="card-panel grid gap-4" onSubmit={onSubmit}>
      <div>
        <label className="field-label" htmlFor="name">
          Name <span className="text-stars-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          className="field-input"
          autoComplete="name"
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
        <label className="field-label" htmlFor="topic">
          Topic
        </label>
        <select id="topic" name="topic" className="field-select">
          <option>General</option>
          <option>Donations</option>
          <option>Events</option>
          <option>New player / family</option>
        </select>
      </div>
      <div>
        <label className="field-label" htmlFor="message">
          Message <span className="text-stars-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="field-textarea"
          required
        />
      </div>
      <Button type="submit" variant="soft">
        Copy message
      </Button>
      {status === "copied" ? (
        <p className="text-sm text-stars-navy-heading">
          Message copied. Paste it into an email or text to a coach or team parent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-stars-red">
          Please fill in name, email, and message. If copy failed, select the text
          and copy it yourself.
        </p>
      ) : null}
    </form>
  );
}
