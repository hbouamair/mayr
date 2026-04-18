import { ArrowUpRight, Flower2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EditorialSectionTitle } from "@/components/EditorialSectionTitle";
import {
  marrakechExperienceCards,
  marrakechExperienceSectionIntro,
} from "@/lib/site-content";

function bentoCardClass(i: number) {
  const base =
    "group/card relative flex min-h-[240px] flex-col overflow-hidden rounded-[1.35rem] border border-white/30 bg-ink/5 shadow-[0_4px_40px_-12px_rgba(36,28,23,0.35)] ring-1 ring-white/25 transition-[transform,box-shadow,ring-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:min-h-[260px] hover:-translate-y-0.5 hover:border-white/45 hover:shadow-[0_28px_64px_-28px_rgba(36,28,23,0.45)] hover:ring-gold-logo/25";
  switch (i) {
    case 0:
      return `${base} lg:col-span-7 lg:row-span-2 lg:min-h-[min(440px,52vh)]`;
    case 1:
      return `${base} min-h-[200px] lg:col-span-5 lg:col-start-8 lg:row-start-1`;
    case 2:
      return `${base} min-h-[200px] lg:col-span-5 lg:col-start-8 lg:row-start-2`;
    case 3:
      return `${base} lg:col-span-4 lg:col-start-1 lg:row-start-3 min-h-[230px]`;
    case 4:
      return `${base} lg:col-span-4 lg:col-start-5 lg:row-start-3 min-h-[230px]`;
    case 5:
      return `${base} lg:col-span-4 lg:col-start-9 lg:row-start-3 min-h-[230px]`;
    default:
      return base;
  }
}

export function HomeMarrakechExperienceSection() {
  const intro = marrakechExperienceSectionIntro;

  return (
    <section
      className="relative border-t border-border-subtle bg-gradient-to-b from-parchment/55 via-[color-mix(in_srgb,var(--sand)_88%,var(--terracotta)_4%)] to-parchment/50"
      aria-labelledby="marrakech-experience-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,color-mix(in_srgb,var(--gold-logo)_14%,transparent),transparent_55%)] opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-logo/35 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/55 bg-gradient-to-br from-surface-elevated/[0.99] via-parchment/97 to-[color-mix(in_srgb,var(--sand-deep)_75%,white)] p-8 shadow-[0_40px_100px_-52px_rgba(36,28,23,0.35)] ring-1 ring-gold-logo/15 sm:p-10 md:p-12 lg:rounded-[2.25rem] lg:p-14">
          <span
            className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--terracotta)_18%,transparent),transparent_68%)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--gold-logo)_16%,transparent),transparent_65%)] blur-3xl"
            aria-hidden
          />

          <div className="relative z-[1] mx-auto max-w-6xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="min-w-0 max-w-3xl">
                <div className="inline-flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-terracotta/20 sm:h-12 sm:w-12"
                    aria-hidden
                  >
                    <Flower2 className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="rounded-full border border-border-subtle/80 bg-white/55 px-3 py-1 font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-muted backdrop-blur-sm">
                    {intro.eyebrow}
                  </span>
                </div>
                <div className="mt-5 min-w-0">
                  <EditorialSectionTitle
                    id="marrakech-experience-heading"
                    as="h2"
                    scale="page"
                    align="left"
                    highlight={intro.titleHighlight}
                    rest={intro.titleRest}
                    className="max-w-[min(100%,28rem)] sm:max-w-none"
                  />
                </div>
                <p className="mt-6 max-w-xl font-body text-[16px] font-light leading-[1.8] text-muted md:text-[17px]">
                  {intro.description}
                </p>
              </div>
              <p className="hidden shrink-0 font-body text-[10px] font-medium uppercase tracking-[0.35em] text-muted/70 lg:block lg:max-w-[10rem] lg:text-right lg:leading-relaxed">
                2026 editorial
              </p>
            </div>

            <div className="mt-12 grid min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-4 xl:gap-5">
              {marrakechExperienceCards.map((card, i) => (
                <Link key={card.id} href={card.href} className={bentoCardClass(i)}>
                  <Image
                    src={card.imageSrc}
                    alt=""
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.045] motion-reduce:transition-none"
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 58vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    }
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink/25 via-transparent to-transparent opacity-80"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent opacity-95"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.07) 48%, transparent 62%)",
                    }}
                    aria-hidden
                  />

                  <span
                    className="absolute right-4 top-4 z-[2] inline-flex items-center rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-body text-[9px] font-semibold tabular-nums tracking-[0.2em] text-white/90 shadow-sm backdrop-blur-md sm:right-5 sm:top-5"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-[1] mt-auto w-full border-t border-white/10 bg-gradient-to-t from-ink/50 to-transparent p-5 backdrop-blur-[2px] sm:p-6">
                    <h3
                      className={`font-heading font-medium leading-snug tracking-tight text-white ${i === 0 ? "text-[1.35rem] sm:text-[1.5rem]" : "text-[1.05rem] sm:text-[1.12rem]"}`}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-white/82 line-clamp-3 sm:text-[13.5px]">
                      {card.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-body text-[9px] font-semibold uppercase tracking-[0.24em] text-white/92">
                      <span className="h-px w-6 bg-gradient-to-r from-terracotta/80 to-gold-logo/60" aria-hidden />
                      Explore
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle/70 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 md:mt-14 md:pt-12">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href={intro.href}
                  className="btn-cta-primary inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
                >
                  {intro.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-90" aria-hidden />
                </Link>
                <Link
                  href={intro.secondaryHref}
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-xl border border-border-subtle/90 bg-white/75 px-8 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] text-ink uppercase backdrop-blur-md transition hover:border-terracotta/35 hover:bg-white"
                >
                  {intro.secondaryCta}
                </Link>
              </div>
              <p className="font-body text-[10px] font-medium uppercase tracking-[0.28em] text-muted/70">
                Six pillars · one journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
