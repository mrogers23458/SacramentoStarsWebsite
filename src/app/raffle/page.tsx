import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Raffle",
  description: `A future ${site.name} fundraiser. Details coming soon.`,
};

export default function RafflePage() {
  return (
    <ComingSoon
      kicker={site.name}
      title="Raffle"
      body="This page is a placeholder. A raffle may be part of a later fundraiser. There is nothing to buy here and no tickets are on sale."
    />
  );
}
