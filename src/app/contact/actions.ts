"use server";

import { sponsorLevels } from "@/lib/site";
import {
  isMailConfigured,
  sendEmail,
  sendInquiryWithoutResend,
  teamInbox,
} from "@/lib/mail";

export type SponsorInquiryState = {
  status: "idle" | "ok" | "error";
  message?: string;
  confirmationSent?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedLevels = new Set<string>(sponsorLevels.map((level) => level.name));

function readField(formData: FormData, name: string, max: number) {
  return String(formData.get(name) || "").trim().slice(0, max);
}

export async function submitSponsorInquiry(
  _prev: SponsorInquiryState,
  formData: FormData,
): Promise<SponsorInquiryState> {
  if (readField(formData, "company_website", 200)) {
    return { status: "ok", confirmationSent: true };
  }

  const first = readField(formData, "fname", 80);
  const last = readField(formData, "lname", 80);
  const business = readField(formData, "biz", 120);
  const email = readField(formData, "email", 200);
  const phone = readField(formData, "phone", 40);
  const level = readField(formData, "level", 80);
  const message = readField(formData, "msg", 2000);

  if (!first || !last || !business || !email || !level) {
    return {
      status: "error",
      message:
        "Please fill in first name, last name, business, email, and a sponsorship level.",
    };
  }

  if (!emailPattern.test(email) || !allowedLevels.has(level)) {
    return {
      status: "error",
      message: "Please use a valid email and choose a listed sponsorship level.",
    };
  }

  const fullName = `${first} ${last}`;
  const note = message || "(No message)";
  const inquiryText = [
    "New Sacramento Stars sponsorship inquiry",
    "",
    `Name: ${fullName}`,
    `Business: ${business}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Sponsorship level: ${level}`,
    "",
    note,
  ].join("\n");

  try {
    if (isMailConfigured()) {
      await sendEmail({
        to: teamInbox(),
        replyTo: email,
        subject: `Sponsorship inquiry — ${level}`,
        text: inquiryText,
        html: `<p><strong>New Sacramento Stars sponsorship inquiry</strong></p>
<p>Name: ${escapeHtml(fullName)}<br />
Business: ${escapeHtml(business)}<br />
Email: ${escapeHtml(email)}<br />
Phone: ${escapeHtml(phone || "—")}<br />
Sponsorship level: ${escapeHtml(level)}</p>
<p>${escapeHtml(note).replaceAll("\n", "<br />")}</p>`,
      });
    } else {
      await sendInquiryWithoutResend({
        name: fullName,
        email,
        business,
        phone,
        level,
        message: note,
      });
    }
  } catch (error) {
    console.error("Failed to send sponsorship inquiry", error);
    const detail = error instanceof Error ? error.message : "";
    if (/activat|confirm|verify/i.test(detail)) {
      return {
        status: "error",
        message:
          "The first inquiry needs a one-time confirmation. Please check Sacramentostars10u@gmail.com for an activation link, then submit again.",
      };
    }
    return {
      status: "error",
      message:
        "We could not send that just now. Please email Sacramentostars10u@gmail.com and we will follow up.",
    };
  }

  let confirmationSent = false;
  const confirmationText = [
    `Hi ${first},`,
    "",
    `Thanks for reaching out to the Sacramento Stars about a ${level} sponsorship for ${business}.`,
    "",
    "We received your inquiry and will contact you within 24–48 hours to confirm the details.",
    "",
    "Go Stars!",
    "Sacramento Stars",
    teamInbox(),
  ].join("\n");

  if (isMailConfigured()) {
    try {
      await sendEmail({
        to: email,
        subject: "We received your Sacramento Stars sponsorship inquiry",
        text: confirmationText,
        html: `<p>Hi ${escapeHtml(first)},</p>
<p>Thanks for reaching out to the Sacramento Stars about a <strong>${escapeHtml(level)}</strong> sponsorship for ${escapeHtml(business)}.</p>
<p>We received your inquiry and will contact you within 24–48 hours to confirm the details.</p>
<p>Go Stars!<br />Sacramento Stars<br />${escapeHtml(teamInbox())}</p>`,
      });
      confirmationSent = true;
    } catch (error) {
      console.error("Failed to send sponsorship confirmation", error);
    }
  }

  return { status: "ok", confirmationSent };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
