import { Resend } from "resend";
import { site } from "@/lib/site";

const fromAddress =
  process.env.EMAIL_FROM ?? `Sacramento Stars <beth.t@example.com>`;

export type OutgoingEmail = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export function isMailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail(message: OutgoingEmail) {
  const resend = getResend();
  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: message.to,
    subject: message.subject,
    text: message.text,
    html: message.html,
    replyTo: message.replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export function teamInbox() {
  return process.env.SPONSOR_INQUIRY_TO ?? site.email;
}

function publicSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export async function sendInquiryWithoutResend(payload: {
  name: string;
  email: string;
  business: string;
  phone: string;
  level: string;
  message: string;
}) {
  const origin = publicSiteUrl();
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(teamInbox())}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: origin,
        Referer: `${origin}/contact`,
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        business: payload.business,
        phone: payload.phone || "—",
        level: payload.level,
        message: payload.message,
        _replyto: payload.email,
        _subject: `Sponsorship inquiry — ${payload.level}`,
        _template: "box",
      }),
    },
  );

  const data = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  const succeeded = data?.success === true || data?.success === "true";
  if (!response.ok || !succeeded) {
    const detail = data?.message || "The inquiry could not be delivered.";
    throw new Error(detail);
  }
}
