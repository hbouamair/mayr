"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { DetailPart, DetailSection } from "@/lib/retreat-detail-content";

function DetailParts({ parts }: { parts: DetailPart[] }) {
  return (
    <div className="space-y-4">
      {parts.map((part, i) => {
        if (part.type === "p") {
          return (
            <p key={i} className="font-body text-sm leading-relaxed text-muted">
              {part.text}
            </p>
          );
        }
        if (part.type === "h3") {
          return (
            <h4 key={i} className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-ink/90">
              {part.text}
            </h4>
          );
        }
        return (
          <ul key={i} className="list-inside list-disc space-y-2 pl-1 font-body text-sm leading-relaxed text-muted marker:text-terracotta/70">
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

export function RetreatDetailMoreBlock({ sections }: { sections: DetailSection[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (sections.length === 0) return null;

  return (
    <div className="min-w-0">
      <button
        type="button"
        id={`more-trigger-${panelId}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-gold-logo/25 bg-parchment/60 px-5 py-4 text-left shadow-sm ring-1 ring-gold-logo/10 transition-[background-color,box-shadow] hover:bg-parchment/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta/40"
      >
        <span className="font-heading text-lg font-medium text-ink">{open ? "Less" : "More"}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-terracotta transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={`more-trigger-${panelId}`}
          className="space-y-10 border-t border-border-subtle/60 pt-8"
        >
          {sections.map((section) => (
            <section key={section.title} className="min-w-0">
              <h3 className="font-heading text-lg font-medium tracking-tight text-ink">{section.title}</h3>
              <div className="mt-4">
                <DetailParts parts={section.parts} />
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}
