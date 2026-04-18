import { EditorialSectionTitle } from "@/components/EditorialSectionTitle";
import { SITE_SECTION_KICKER } from "@/lib/site";
import { FoodGalleryCarousel } from "@/components/FoodGalleryCarousel";
import {
  foodGalleryImages,
  foodParagraphs,
  foodPullQuote,
} from "@/lib/site-content";

export function FoodSection() {
  const [leadParagraph, ...restParagraphs] = foodParagraphs;

  return (
    <section
      className="food-section-2026 relative overflow-hidden border-t border-border-subtle"
      aria-labelledby="food-section-heading"
    >
      <div className="food-section-2026__mesh pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-terracotta/[0.14] via-gold-logo/[0.08] to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-gold-logo/15 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5">
              <span className="lux-rule shrink-0" aria-hidden />
              <p className="font-body text-[10px] font-semibold tracking-[0.32em] text-terracotta/90 uppercase sm:text-[11px]">
                {SITE_SECTION_KICKER}
              </p>
            </div>
            <div className="mt-8">
              <EditorialSectionTitle id="food-section-heading" highlight="Moroccan" rest="table" />
            </div>
            <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed tracking-wide text-muted sm:text-base">
              Three meals a day — rooted in tradition, made for wellbeing. Local ingredients, soulful spice, shared
              tables.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <span className="food-chip">3 × daily meals</span>
            <span className="food-chip">Local &amp; seasonal</span>
            <span className="food-chip food-chip--accent">Vegan on request</span>
            <span className="food-chip food-chip--accent">Vegetarian on request</span>
          </div>
        </header>

        <div className="mt-16 grid min-w-0 gap-10 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">
            <div className="food-bento-lead relative overflow-hidden rounded-[1.65rem] border border-white/60 bg-gradient-to-br from-white/75 via-parchment/90 to-sand/50 p-6 shadow-[0_28px_64px_-32px_rgba(36,28,23,0.45)] backdrop-blur-md sm:p-8 md:p-9">
              <div
                className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-terracotta/12 to-transparent blur-2xl"
                aria-hidden
              />
              <p className="relative font-heading text-[1.35rem] font-medium leading-snug tracking-tight text-ink sm:text-2xl">
                {leadParagraph}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {restParagraphs.map((p, i) => (
                <div
                  key={p.slice(0, 40)}
                  className={`food-bento-note rounded-2xl border border-white/45 bg-white/35 p-5 backdrop-blur-sm sm:p-6 ${
                    i === 1 ? "lg:border-l-[3px] lg:border-l-terracotta/45" : ""
                  }`}
                >
                  <p className="font-body text-sm leading-[1.75] text-muted">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-8 lg:col-span-7">
            <FoodGalleryCarousel items={foodGalleryImages} variant="editorial" />
            <figure className="food-pull-quote relative overflow-hidden rounded-2xl border border-gold-logo/25 bg-gradient-to-r from-ink/[0.03] via-parchment/80 to-terracotta/[0.06] p-7 backdrop-blur-sm sm:p-8">
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 translate-x-1/4 translate-y-1/4 rounded-full bg-gold-logo/10 blur-2xl"
                aria-hidden
              />
              <span className="font-heading text-5xl leading-none text-gold-logo/25" aria-hidden>
                “
              </span>
              <blockquote className="relative -mt-4 font-heading text-lg font-medium italic leading-relaxed text-ink/92 sm:text-xl">
                {foodPullQuote}
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
