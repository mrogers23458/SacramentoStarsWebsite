import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Raffle",
  description:
    "The Stars booze wagon raffle is on the fundraising page. You must be 21 or older to enter.",
};

export default function RafflePage() {
  redirect("/fundraising");
}
