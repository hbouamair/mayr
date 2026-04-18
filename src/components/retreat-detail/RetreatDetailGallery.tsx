"use client";

import { SITE_SECTION_KICKER } from "@/lib/site";

type Props = {
  title: string;
  imageUrls: readonly string[];
};

export function RetreatDetailGallery({ title, imageUrls }: Props) {
  if (imageUrls.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gold-logo/35 bg-sand/40 p-10 text-center">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-muted">{SITE_SECTION_KICKER}</p>
        <p className="mt-3 font-body text-sm text-muted">Picture links coming soon — we&apos;ll add them here.</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4" role="list">
      {imageUrls.map((src, i) => (
        <li key={`${src}-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-sand-deep/20 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary external URLs */}
          <img src={src} alt={`${title} — photo ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
        </li>
      ))}
    </ul>
  );
}
