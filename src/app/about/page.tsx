import type { Metadata } from "next";
import { AboutGallery } from "@/components/AboutGallery";
import { SectionIntro } from "@/components/SectionIntro";
import { aboutGalleryImages, aboutParagraphs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Marrakech Alchemy Yoga Retreats — Bali-inspired serenity meets Moroccan mystique in the Atlas Mountains and Marrakech Medina.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        eyebrow="Hello"
        title="About us"
        description="Marrakech Alchemy Yoga Retreats — two worlds in conversation — Moroccan warmth and Balinese calm — in the Red City and the Atlas."
      />

      <div className="mt-16 lg:mt-20">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16 lg:items-start">
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
          <aside className="min-w-0 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gold-logo/20 bg-gradient-to-b from-parchment/90 to-sand/80 p-6 backdrop-blur-md">
              <p className="font-heading text-lg font-medium tracking-tight text-ink">At a glance</p>
              <ul className="mt-4 space-y-3 font-body text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-terracotta">·</span>
                  Born in 2023 — Bali meets Morocco
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta">·</span>
                  Atlas Mountains → Marrakech Medina
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta">·</span>
                  Yoga, culture, nourishment, rest
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="mt-20 lg:mt-28">
        <SectionIntro
          eyebrow="Visual story"
          title="Gallery"
          description="Landscapes and spaces that hold our retreats — replace with your photography anytime."
        />
        <div className="mt-10 lg:mt-12">
          <AboutGallery items={aboutGalleryImages} />
        </div>
      </section>
    </div>
  );
}
