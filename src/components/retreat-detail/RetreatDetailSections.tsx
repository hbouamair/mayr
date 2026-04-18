"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { DetailPart, DetailSection } from "@/lib/retreat-detail-content";

/** Number of FAQ blocks shown before the disclosure (applies to all retreat detail pages). */
const VISIBLE_SECTION_COUNT = 2;

function DetailParts({ parts }: { parts: DetailPart[] }) {
  return (
    <div className="space-y-4">
      {parts.map((part, i) => {
        if (part.type === "p") {
          return (
            <p key={i} className="font-body text-[15px] leading-[1.75] text-muted sm:text-base">
              {part.text}
            </p>
          );
        }
        if (part.type === "h3") {
          return (
            <h4 key={i} className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/90">
              {part.text}
            </h4>
          );
        }
        return (
          <ul
            key={i}
            className="list-inside list-disc space-y-2.5 pl-1 font-body text-[15px] leading-relaxed text-muted marker:text-terracotta/75 sm:text-base"
          >
            {part.items.map((item, j) => (
              <li key={j} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

function ProgramSectionCard({
  section,
  index,
}: {
  section: DetailSection;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.35rem] border border-white/55 bg-gradient-to-br from-surface-elevated/[0.97] via-parchment/96 to-[color-mix(in_srgb,var(--sand)_40%,white)] p-6 shadow-[0_12px_48px_-28px_rgba(36,28,23,0.2)] ring-1 ring-gold-logo/12 sm:p-7">
      <span className="card-2026__noise pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden />
      <div className="relative z-[1] flex gap-4 sm:gap-5">
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-terracotta/12 to-gold-logo/10 font-body text-[11px] font-semibold tabular-nums tracking-wider text-terracotta ring-1 ring-terracotta/15"
          aria-hidden
        >
          {String(index).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-[1.05rem] font-medium leading-snug tracking-tight text-ink sm:text-[1.15rem]">
            {section.title}
          </h3>
          <div className="mt-4">
            <DetailParts parts={section.parts} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function RetreatDetailMoreBlock({ sections }: { sections: DetailSection[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerId = `more-${panelId}`;

  if (sections.length === 0) return null;

  const visible = sections.slice(0, VISIBLE_SECTION_COUNT);
  const collapsed = sections.slice(VISIBLE_SECTION_COUNT);
  const hasMore = collapsed.length > 0;

  return (
    <div className="min-w-0 space-y-6">
      <div className="space-y-5">
        {visible.map((section, i) => (
          <ProgramSectionCard key={`${section.title}-${i}`} section={section} index={i + 1} />
        ))}
      </div>

      {hasMore ? (
        <div className="space-y-5">
          <button
            type="button"
            id={triggerId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="group flex w-full items-center justify-between gap-4 rounded-[1.25rem] border border-terracotta/20 bg-gradient-to-r from-terracotta/[0.07] via-parchment/80 to-gold-logo/[0.08] px-5 py-4 text-left shadow-[0_8px_32px_-20px_rgba(166,75,42,0.35)] ring-1 ring-gold-logo/15 transition-[box-shadow,transform,border-color] duration-300 hover:border-terracotta/35 hover:shadow-[0_14px_40px_-22px_rgba(166,75,42,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta/40 sm:px-7 sm:py-5"
          >
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-ink">
              {open ? "Show less" : "See more"}
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/70 text-terracotta shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:bg-white">
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                strokeWidth={2}
                aria-hidden
              />
            </span>
          </button>

          <div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            hidden={!open}
            className={open ? "space-y-5 border-t border-border-subtle/70 pt-6" : ""}
          >
            {collapsed.map((section, i) => (
              <ProgramSectionCard
                key={`${section.title}-more-${i}`}
                section={section}
                index={visible.length + i + 1}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
