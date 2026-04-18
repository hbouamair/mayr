import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Our Yoga Studio",
  description:
    "Marrakech Alchemy — our yoga studio in Morocco: practice space, atmosphere, and how to visit or join a retreat.",
};

export default function YogaStudioPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Space"
        title="Our Yoga Studio"
        description="A calm place to move, breathe, and gather — woven into the rhythm of Marrakech Alchemy. Details below are a starting point; we’re happy to tailor copy and photography to match your studio story."
      />

      <div className="card-2026 relative mt-12 max-w-3xl p-8 sm:p-10">
        <span className="card-2026__noise" aria-hidden />
        <div className="relative z-[1] space-y-6 font-body text-[17px] leading-[1.85] text-muted">
          <p>
            Whether you&apos;re joining a retreat week or stepping in for a hosted session, our studio is designed for
            focus and ease — natural light, grounded flooring, and room to breathe between the Atlas and the Medina
            energy.
          </p>
          <p>
            Want to visit or ask about schedules? Reach out and we&apos;ll point you to the right week or contact.
          </p>
        </div>
        <div className="relative z-[1] mt-8 flex flex-wrap gap-4">
          <Link
            href="/retreat-program"
            className="btn-cta-primary inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3 font-body text-[10px] font-semibold tracking-[0.22em] text-white uppercase"
          >
            Our Programs
          </Link>
          <Link
            href="/contact"
            className="btn-cta-outline inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3 font-body text-[10px] font-semibold tracking-[0.2em] uppercase"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
