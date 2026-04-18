import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RetreatDetailGallery } from "@/components/retreat-detail/RetreatDetailGallery";
import { RetreatDetailMoreBlock } from "@/components/retreat-detail/RetreatDetailSections";
import { RetreatPricing2026 } from "@/components/retreat-detail/RetreatPricing2026";
import { getOfferById } from "@/lib/offers";
import { getRetreatDetailContent } from "@/lib/retreat-detail-content";
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
      images: [{ url: r.coverImage, width: 1200, height: 1600, alt: r.title }],
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

  const detail = getRetreatDetailContent(slug);
  const offer = getOfferById(r.offerId);

  const lead = detail?.lead ?? r.summary;
  const headline = detail?.headline;
  const galleryUrls = detail?.galleryImageUrls ?? [];

  return (
    <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href="/retreat-program#browse-retreats"
        className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta underline decoration-gold-logo/30 underline-offset-[6px] transition-colors hover:text-terracotta-glow"
      >
        ← All programs
      </Link>

      <div className="mx-auto mt-10 max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.35rem] border border-border-subtle/90 bg-sand-deep/20 shadow-[0_24px_56px_-32px_rgba(36,28,23,0.35)] ring-1 ring-white/40">
          <Image
            src={r.coverImage}
            alt={`Affiche — ${r.title}`}
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 28rem, 32rem"
          />
        </div>
      </div>

      <header className="mx-auto mt-10 max-w-4xl text-center lg:max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-border-subtle bg-parchment/90 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            {r.language}
          </span>
          <span
            className={`rounded-full px-3 py-1 font-body text-[9px] font-bold uppercase tracking-wider ${
              r.status === "full"
                ? "border border-border-subtle bg-sand-deep/50 text-muted"
                : r.status === "few_spots"
                  ? "border border-terracotta/30 bg-terracotta/12 text-terracotta"
                  : r.status === "new"
                    ? "border border-gold-logo/35 bg-gold-logo/15 text-ink"
                    : "border border-border-subtle bg-surface-elevated text-ink"
            }`}
          >
            {statusLabel(r.status)}
          </span>
        </div>
        <h1 className="mt-6 font-heading text-[clamp(1.65rem,4.5vw,2.5rem)] font-medium leading-[1.12] tracking-tight text-ink">
          {r.title}
        </h1>
        {headline ? (
          <p className="mt-3 font-body text-sm font-medium text-terracotta/95">{headline}</p>
        ) : null}
        <p className="mt-4 font-body text-base font-medium text-ink">{r.dateLabel}</p>
        <p className="mt-1 font-body text-sm text-muted">{r.location}</p>
        <p className="mt-1 font-body text-[11px] uppercase tracking-[0.2em] text-gold-logo/95">{r.focus}</p>
      </header>

      <div className="mx-auto mt-12 max-w-4xl lg:max-w-5xl">
        <div className="rounded-2xl border border-white/45 bg-white/35 p-6 backdrop-blur-xl sm:p-8">
          <p className="font-body text-base font-light leading-relaxed tracking-wide text-muted">{lead}</p>
          {offer && !detail?.pricing ? (
            <p className="mt-6 border-t border-border-subtle pt-6 font-body text-sm leading-relaxed text-muted">
              <span className="font-medium text-ink">Suggested room tier:</span> {offer.title} ({offer.priceLabel}). Contact
              us to confirm availability or discuss other options.
            </p>
          ) : null}
        </div>

        {detail && detail.moreSections.length > 0 ? (
          <div className="mt-8">
            <RetreatDetailMoreBlock sections={detail.moreSections} />
          </div>
        ) : null}

        {detail?.pricing ? (
          <div className="mt-14">
            <RetreatPricing2026
              pricing={detail.pricing}
              retreatTitle={r.title}
              retreatDates={r.dateLabel}
              retreatLocation={r.location}
              retreatStartIso={r.retreatStartIso}
            />
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="btn-cta-secondary inline-flex min-h-[3rem] items-center justify-center rounded-xl px-8 py-3.5 text-center font-body text-[10px] font-semibold tracking-[0.2em] uppercase"
          >
            Questions
          </Link>
        </div>

        {detail?.paymentNote ? (
          <p className="mt-8 text-center font-body text-xs leading-relaxed text-muted">{detail.paymentNote}</p>
        ) : null}

        <div className="mt-16">
          <h2 className="font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl">Gallery</h2>
          <p className="mt-2 max-w-3xl font-body text-sm text-muted">We&apos;ll publish your picture links in this grid when you share them.</p>
          <div className="mt-6">
            <RetreatDetailGallery title={r.title} imageUrls={galleryUrls} />
          </div>
        </div>
      </div>
    </div>
  );
}
