import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOfferById } from "@/lib/offers";
import { getRetreatBySlug, retreatListings } from "@/lib/retreats";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return retreatListings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = getRetreatBySlug(slug);
  if (!r) return { title: "Retreat" };
  return {
    title: r.title,
    description: r.summary,
    openGraph: {
      title: r.title,
      description: r.summary,
      images: [{ url: r.coverImage, width: 1800, height: 1200, alt: r.title }],
    },
  };
}

function statusLabel(s: string) {
  switch (s) {
    case "full":
      return "Fully booked";
    case "few_spots":
      return "Few spots";
    case "new":
      return "New";
    default:
      return "Open";
  }
}

export default async function RetreatDetailPage({ params }: Props) {
  const { slug } = await params;
  const r = getRetreatBySlug(slug);
  if (!r) notFound();

  const offer = getOfferById(r.offerId);
  const bookingHref =
    r.status === "full"
      ? null
      : `/booking?retreat=${encodeURIComponent(r.slug)}&offer=${encodeURIComponent(r.offerId)}`;

  return (
    <div className="mx-auto min-w-0 max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href="/retreat-program#browse-retreats"
        className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta underline decoration-gold-logo/30 underline-offset-[6px] transition-colors hover:text-terracotta-glow"
      >
        ← All retreats
      </Link>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/35 shadow-xl shadow-ink/8 ring-1 ring-white/25">
        <div className="relative aspect-[21/11] min-h-[220px] w-full sm:aspect-[21/9] sm:min-h-[280px]">
          <Image
            src={r.coverImage}
            alt={`${r.title} — ${r.location}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/15" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/25 bg-black/30 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-md">
                {r.language}
              </span>
              <span
                className={`rounded-full px-3 py-1 font-body text-[9px] font-bold uppercase tracking-wider ${
                  r.status === "full"
                    ? "border border-white/15 bg-black/40 text-white/80 backdrop-blur-md"
                    : r.status === "few_spots"
                      ? "border border-white/25 bg-terracotta/90 text-white backdrop-blur-md"
                      : r.status === "new"
                        ? "border border-white/30 bg-gold-logo/95 text-ink backdrop-blur-md"
                        : "border border-white/20 bg-white/20 text-white backdrop-blur-md"
                }`}
              >
                {statusLabel(r.status)}
              </span>
            </div>
            <h1 className="max-w-3xl font-heading text-[clamp(1.65rem,4.5vw,2.85rem)] font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm">
              {r.title}
            </h1>
            <p className="mt-3 font-body text-base font-medium text-white/95 sm:text-lg">{r.dateLabel}</p>
            <p className="mt-1 font-body text-sm text-white/75">{r.location}</p>
            <p className="mt-2 font-body text-xs uppercase tracking-[0.2em] text-gold-logo/95">{r.focus}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start lg:gap-14">
        <div className="min-w-0">
          <h2 className="font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">About this week</h2>
          <div className="mt-6 rounded-2xl border border-white/45 bg-white/35 p-6 backdrop-blur-xl sm:p-8 md:p-9">
            <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted">{r.summary}</p>
            {offer && (
              <p className="mt-6 border-t border-border-subtle pt-6 font-body text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Suggested room tier:</span> {offer.title} ({offer.priceLabel}). You
                can change it on the booking form if you prefer another option.
              </p>
            )}
          </div>

          <h2 className="mt-14 font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">The place</h2>
          <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-muted">{r.placeNote}</p>

          <h3 className="mt-10 font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-terracotta/90">
            Retreat life &amp; activities
          </h3>
          <p className="mt-2 max-w-2xl font-body text-sm text-muted">
            Scenes from workshops, movement, and time together in Morocco — same spirit as the week you&apos;re viewing.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {r.extendedGallery.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-sand-deep/20 shadow-sm"
              >
                <Image
                  src={src}
                  alt={`${r.title} — retreat activity photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="min-w-0 rounded-2xl border border-white/45 bg-white/40 p-6 backdrop-blur-xl sm:p-8 lg:sticky lg:top-[calc(var(--main-pt)+0.75rem)]">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">Next step</p>
          <div className="mt-6 flex flex-col gap-3">
            {bookingHref ? (
              <Link
                href={bookingHref}
                className="btn-cta-primary inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3.5 text-center font-body text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
              >
                Reserve this week
              </Link>
            ) : null}
            <Link
              href="/contact"
              className="btn-cta-secondary inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3.5 text-center font-body text-[10px] font-semibold tracking-[0.2em] uppercase"
            >
              {r.status === "full" ? "Join waitlist / ask a question" : "Questions first"}
            </Link>
          </div>
          <p className="mt-6 font-body text-xs leading-relaxed text-muted">
            Opens the booking form with this week pre-filled in your message, or reach us directly for waitlists and
            custom requests.
          </p>
        </aside>
      </div>
    </div>
  );
}
