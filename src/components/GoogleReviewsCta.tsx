import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

export function GoogleReviewsCta() {
  return (
    <section
      className="relative overflow-hidden rounded-[1.5rem] border border-gold-logo/20 bg-gradient-to-br from-parchment/95 via-surface-elevated/90 to-sand/35 p-8 shadow-[0_20px_56px_-36px_rgba(36,28,23,0.18)] sm:p-10"
      aria-labelledby="google-reviews-heading"
    >
      <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-gradient-to-bl from-gold-logo/15 to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative z-[1] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0 max-w-2xl">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-terracotta/90">Google</p>
          <h2 id="google-reviews-heading" className="mt-2 font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">
            Guest reviews
          </h2>
          <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted sm:text-[15px]">
            See ratings and read guest feedback on Google. Showing live reviews inside the site needs the Google Places
            API; this button opens your listing so people can read or leave a review.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-primary inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-center font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
          >
            Open Google reviews
            <ExternalLink className="h-3.5 w-3.5 opacity-90" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
