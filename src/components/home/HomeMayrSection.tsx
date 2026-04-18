import { ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import { homeMayrParagraphs, homeMayrSummary } from "@/lib/site-content";

export function HomeMayrSection() {
  return (
    <section
      className="border-t border-border-subtle bg-gradient-to-b from-parchment/50 via-sand/15 to-parchment/45"
      aria-labelledby="home-mayr-heading"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/55 bg-gradient-to-br from-surface-elevated/98 via-parchment/95 to-sand/30 p-8 shadow-[0_28px_72px_-44px_rgba(36,28,23,0.22)] ring-1 ring-gold-logo/12 sm:p-10 md:p-12 lg:p-14">
          <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
          <div
            className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-gradient-to-bl from-terracotta/14 to-transparent blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tr from-gold-logo/12 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative z-[1] mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta ring-1 ring-terracotta/15">
                <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-terracotta/90">{homeMayrSummary.eyebrow}</p>
                <h2
                  id="home-mayr-heading"
                  className="mt-2 font-heading text-[clamp(1.65rem,3.5vw,2.35rem)] font-medium leading-tight tracking-tight text-gradient-brand"
                >
                  {homeMayrSummary.title}
                </h2>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {homeMayrParagraphs.map((p) => (
                <p key={p.slice(0, 56)} className="font-body text-[17px] font-light leading-[1.85] text-muted md:text-[18px]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-border-subtle/80 pt-10">
              <Link
                href={homeMayrSummary.href}
                className="btn-cta-primary group inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
              >
                {homeMayrSummary.cta}
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
