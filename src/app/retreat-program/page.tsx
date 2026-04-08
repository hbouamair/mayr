import type { Metadata } from "next";
import { RetreatsCatalog } from "@/components/RetreatsCatalog";
import { RetreatsDiscoveryIntro } from "@/components/RetreatsDiscoveryIntro";

export const metadata: Metadata = {
  title: "Retreat Program",
  description:
    "Browse Marrakech retreat weeks — filter by language, place, month, focus, and availability.",
};

export default function RetreatProgramPage() {
  return (
    <div className="min-w-0">
      <section
        id="browse-retreats"
        className="scroll-mt-36 pt-12 sm:pt-16 lg:pt-20"
        aria-label="Browse scheduled retreat weeks"
      >
        <RetreatsDiscoveryIntro />
        <RetreatsCatalog />
      </section>
    </div>
  );
}
