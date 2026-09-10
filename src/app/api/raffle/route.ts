import { NextResponse } from "next/server";

type RaffleEntry = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  player: string;
  packageLabel: string;
  packagePrice: number;
};

function isValidEntry(value: unknown): value is RaffleEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as Record<string, unknown>;
  return (
    typeof entry.firstName === "string" &&
    entry.firstName.trim() !== "" &&
    typeof entry.lastName === "string" &&
    entry.lastName.trim() !== "" &&
    typeof entry.phone === "string" &&
    entry.phone.trim() !== "" &&
    typeof entry.email === "string" &&
    entry.email.trim() !== "" &&
    typeof entry.player === "string" &&
    entry.player.trim() !== "" &&
    typeof entry.packageLabel === "string" &&
    typeof entry.packagePrice === "number"
  );
}

export async function POST(request: Request) {
  const webhookUrl = process.env.RAFFLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("RAFFLE_SHEET_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Raffle entries are not being accepted right now." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidEntry(payload)) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 },
    );
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: payload.firstName.trim(),
        lastName: payload.lastName.trim(),
        phone: payload.phone.trim(),
        email: payload.email.trim(),
        player: payload.player.trim(),
        packageLabel: payload.packageLabel,
        packagePrice: payload.packagePrice,
      }),
    });

    if (!sheetResponse.ok) {
      throw new Error(`Sheet webhook responded with ${sheetResponse.status}`);
    }
  } catch (error) {
    console.error("Failed to record raffle entry", error);
    return NextResponse.json(
      { error: "Could not save your entry. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
