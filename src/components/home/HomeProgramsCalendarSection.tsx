import { ArrowUpRight, CalendarDays, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { homeProgramSummary } from "@/lib/site-content";
import { retreatListings } from "@/lib/retreats";

export function HomeProgramsCalendarSection() {
  return (
    <section className="border-t border-border-subtle bg-parchment/40 bg-noise-soft" aria-labelledby="home-programs-heading">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-logo/12 text-terracotta ring-1 ring-gold-logo/20">
              <CalendarDays className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </span>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-terracotta/90">{homeProgramSummary.eyebrow}</p>
          </div>
          <h2
            id="home-programs-heading"
            className="mt-5 font-heading text-[clamp(1.5rem,3.2vw,2.1rem)] font-medium leading-tight tracking-tight text-ink"
          >
            <span className="text-gradient-brand">{homeProgramSummary.title}</span>
          </h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted sm:text-[15px]">{homeProgramSummary.description}</p>
        </header>

        <ul
          className="mt-12 grid list-none grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5"
          role="list"
        >
          {retreatListings.map((r) => (
            <li key={r.id} className="min-w-0">
              <Link
                href={`/rooms/${r.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.15rem] border border-border-subtle/90 bg-gradient-to-b from-surface-elevated to-parchment/80 shadow-sm ring-1 ring-gold-logo/8 transition-[transform,box-shadow,border-color,ring-color] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold-logo/35 hover:shadow-[0_22px_48px_-28px_rgba(36,28,23,0.2)] hover:ring-gold-logo/18 motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-deep/25">
                  <Image
                    src={r.coverImage}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-90 transition-opacity duration-[400ms] ease-out group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 right-3 font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-white/95 line-clamp-2 drop-shadow-sm transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-0.5">
                    {r.focus}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-heading text-[0.95rem] font-medium leading-snug tracking-tight text-ink line-clamp-2 transition-colors duration-300 group-hover:text-terracotta/95 sm:text-[1.02rem]">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-body text-[11px] tabular-nums leading-snug text-muted line-clamp-2">{r.dateLabel}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    Details
                    <ChevronRight
                      className="h-3 w-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href={homeProgramSummary.href}
            className="btn-cta-primary group inline-flex min-h-[2.85rem] items-center justify-center gap-2 rounded-xl px-8 py-3 font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
          >
            {homeProgramSummary.cta}
            <ArrowUpRight
              className="h-3.5 w-3.5 opacity-90 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
