import type { MayrExperienceSection } from "@/lib/mayr-experience-content";

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative mt-10 overflow-hidden rounded-[1.25rem] border border-dashed border-gold-logo/35 bg-gradient-to-br from-sand/40 via-parchment/60 to-sand/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:mt-12 sm:rounded-[1.4rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--gold-logo)_8%,transparent),transparent_65%)]" />
      <div className="relative flex min-h-[180px] flex-col items-center justify-center gap-3 px-6 py-14 sm:min-h-[220px] md:min-h-[260px]">
        <span className="rounded-full border border-gold-logo/25 bg-surface-elevated/80 px-4 py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-muted shadow-sm backdrop-blur-sm">
          Gallery
        </span>
        <p className="max-w-sm text-center font-body text-sm text-muted">{label}</p>
        <p className="font-body text-xs text-gold-muted/90">Picture links coming soon</p>
      </div>
    </div>
  );
}

function MayrSectionCard({
  section,
  index,
}: {
  section: MayrExperienceSection;
  index: number;
}) {
  const n = String(index + 1).padStart(2, "0");
  const isOdd = index % 2 === 0;

  return (
    <article
      id={section.id}
      className="group relative scroll-mt-[calc(var(--main-pt)+1rem)]"
    >
      <div
        className={`relative overflow-hidden rounded-[1.5rem] border border-white/50 bg-gradient-to-br p-8 shadow-[0_24px_64px_-40px_rgba(36,28,23,0.22),inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-10 md:p-12 lg:p-14 ${
          isOdd
            ? "from-parchment/98 via-surface-elevated/95 to-sand/25"
            : "from-sand/35 via-parchment/95 to-surface-elevated/90"
        }`}
      >
        <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div
          className={`pointer-events-none absolute h-40 w-40 rounded-full blur-3xl ${
            isOdd
              ? "-right-16 top-0 bg-gradient-to-bl from-terracotta/12 to-transparent"
              : "-left-12 bottom-0 bg-gradient-to-tr from-gold-logo/14 to-transparent"
          }`}
          aria-hidden
        />

        <div className="relative z-[1] grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="min-w-0">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-terracotta/90">{section.kicker}</p>
                <h2 className="mt-3 font-heading text-[clamp(1.45rem,3.2vw,2.15rem)] font-medium leading-[1.15] tracking-tight text-gradient-brand">
                  {section.title}
                </h2>
              </div>
              <span
                className="font-heading text-[clamp(2.5rem,6vw,3.75rem)] font-light leading-none tabular-nums text-gold-logo/25"
                aria-hidden
              >
                {n}
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="font-body text-[17px] font-light leading-[1.85] text-muted">
                  {p}
                </p>
              ))}
            </div>

            {section.bullets && section.bullets.length > 0 ? (
              <ul className="mt-8 space-y-3 border-l-2 border-terracotta/25 pl-5 font-body text-[16px] leading-relaxed text-ink/90">
                {section.bullets.map((b) => (
                  <li key={b} className="relative pl-1">
                    <span className="absolute -left-5 top-[0.55em] h-1 w-1 rounded-full bg-terracotta/70" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.paragraphsAfterBullets?.map((p) => (
              <p key={p.slice(0, 48)} className="mt-8 font-body text-[17px] font-light leading-[1.85] text-muted">
                {p}
              </p>
            ))}
          </div>

          <div className="min-w-0 lg:sticky lg:top-[calc(var(--main-pt)+1rem)]">
            <PhotoPlaceholder label={`${section.title} — add your photography`} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function MayrExperienceSections({ sections }: { sections: readonly MayrExperienceSection[] }) {
  return (
    <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">
      {sections.map((section, index) => (
        <MayrSectionCard key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
