import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { TeamShowcase } from "@/components/TeamShowcase";
import { teamMembers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Monica Oana and Souha Majidi — yoga, sound healing, and space-holding for Marrakech Alchemy Yoga Retreats.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Hello"
        title="Our team"
        description="Meet Monica and Souha — yoga, sound, and heartfelt space-holding for your retreat in Morocco."
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
