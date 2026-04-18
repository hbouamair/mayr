import type { Metadata } from "next";
import { RetreatsCatalog } from "@/components/RetreatsCatalog";
import { RetreatsDiscoveryIntro } from "@/components/RetreatsDiscoveryIntro";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Five 2026 Marrakech Alchemy programs — Empower, Sacred Feminine, summer and autumn retreats, and 50h Vinyasa YTT. Filter by place and dates, then open a program for details.",
};

export default function RetreatProgramPage() {
  return (
    <div className="min-w-0">
      <section
        id="browse-retreats"
        className="scroll-mt-[calc(var(--main-pt)+1rem)] pt-12 sm:pt-16 lg:pt-20"
        aria-label="Browse scheduled retreat weeks"
      >
        <RetreatsDiscoveryIntro />
        <div className="mt-6 sm:mt-8">
          <RetreatsCatalog />
        </div>
      </section>
    </div>
  );
}
