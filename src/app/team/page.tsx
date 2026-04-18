import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { TeamShowcase } from "@/components/TeamShowcase";
import { SITE_SECTION_KICKER } from "@/lib/site";
import { teamMembers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Our Fellows",
  description:
    "Souha, Daniela, Kiana, and Naia — yoga, sound, cacao, Pilates, and yoga teacher trainings for Marrakech Alchemy Yoga Retreats.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow={SITE_SECTION_KICKER}
        title="Our fellows"
        descriptionClassName="max-w-4xl lg:max-w-5xl"
        description={
          <>
            <p>
              Our retreat is guided by a soulful team of women, each bringing a unique cultural tapestry, embodied
              wisdom, and heart-centered presence to the experience.
            </p>
            <p className="mt-4">
              Together, they create a safe, nurturing, and transformative space where tradition meets intuition, and
              inner journeys are supported with care and depth.
            </p>
          </>
        }
      />

      <div className="relative mt-16 lg:mt-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-logo/12 via-transparent to-transparent blur-3xl"
          aria-hidden
        />
        <TeamShowcase members={teamMembers} />
      </div>
    </div>
  );
}
