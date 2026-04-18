import { ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { EditorialSectionTitle } from "@/components/EditorialSectionTitle";
import { HomeRetreatCalendarCarousel } from "@/components/home/HomeRetreatCalendarCarousel";
import { homeProgramSummary } from "@/lib/site-content";
import { retreatListings } from "@/lib/retreats";

export function HomeProgramsCalendarSection() {
  return (
    <section
      className="border-t border-border-subtle bg-gradient-to-b from-parchment/50 via-sand/15 to-parchment/45"
      aria-labelledby="home-programs-heading"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/55 bg-gradient-to-br from-surface-elevated/98 via-parchment/95 to-sand/30 p-8 shadow-[0_28px_72px_-44px_rgba(36,28,23,0.22)] ring-1 ring-gold-logo/12 sm:p-10 md:p-12 lg:p-14">
          <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
          <div
            className="home-calendar-float-orb-a pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-gradient-to-bl from-gold-logo/14 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="home-calendar-float-orb-b pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tr from-terracotta/12 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative z-[1] mx-auto max-w-6xl">
            <div className="relative z-20">
              <div className="flex flex-wrap items-start gap-5 sm:items-center sm:gap-6">
                <span className="home-calendar-icon-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta ring-1 ring-terracotta/15 sm:h-14 sm:w-14">
                  <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-terracotta/90">
                    {homeProgramSummary.eyebrow}
                  </p>
                  <EditorialSectionTitle
                    id="home-programs-heading"
                    as="h2"
                    scale="page"
                    align="left"
                    highlight={homeProgramSummary.titleHighlight}
                    className="mt-2 max-w-[22rem] sm:max-w-none"
                  />
                </div>
              </div>

              <p className="mt-8 max-w-2xl font-body text-[17px] font-light leading-[1.85] text-muted md:text-[18px]">
                {homeProgramSummary.description}
              </p>
            </div>

            <div className="relative z-10 mt-12 min-w-0 sm:mt-14">
              <div className="-mx-4 rounded-none border-y border-gold-logo/10 bg-gradient-to-b from-parchment/40 via-white/30 to-transparent py-1 sm:mx-0 sm:rounded-2xl sm:border sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] md:px-2 md:py-3 md:ring-1 md:ring-gold-logo/10">
                <HomeRetreatCalendarCarousel listings={retreatListings} />
              </div>
            </div>

            <div className="mt-10 border-t border-border-subtle/80 pt-8 md:mt-12 md:pt-10">
              <Link
                href={homeProgramSummary.href}
                className="btn-cta-primary group inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
              >
                {homeProgramSummary.cta}
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
