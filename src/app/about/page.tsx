import type { Metadata } from "next";
import { AboutPageGallery } from "@/components/about/AboutPageGallery";
import { SectionIntro } from "@/components/SectionIntro";
import { SITE_SECTION_KICKER } from "@/lib/site";
import { aboutPageGalleryImages, aboutParagraphs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Marrakech Alchemy Yoga Center — immersive yoga retreats in Morocco and curated wellness experiences in Marrakech.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro surface="contact" titleAs="h1" eyebrow={SITE_SECTION_KICKER} title="About us" />

      <div className="mt-12 lg:mt-14">
        <AboutPageGallery images={aboutPageGalleryImages} />
      </div>

      <div className="mt-14 lg:mt-16">
        <div className="card-2026 min-w-0 p-8 sm:p-10">
          <span className="card-2026__noise" aria-hidden />
          <div className="relative z-[1] space-y-8">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 60)} className="font-body text-[17px] leading-[1.85] text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
