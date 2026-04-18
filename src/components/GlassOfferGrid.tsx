"use client";

import Image from "next/image";
import { offers } from "@/lib/offers";
import { SITE_SECTION_KICKER } from "@/lib/site";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function GlassOfferGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) setVisible(true);
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-2">
      <div
        className={`mb-20 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-gold-logo/20 bg-white/50 px-6 py-2.5 backdrop-blur-md">
          <Leaf className="h-3.5 w-3.5 text-terracotta" strokeWidth={1.75} />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-muted">
            {SITE_SECTION_KICKER}
          </span>
        </div>
        <h2 className="font-heading text-[clamp(1.85rem,4vw,2.85rem)] font-medium leading-tight tracking-tight text-ink">
          <span className="text-gradient-brand">Retreat offers</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg font-body text-base font-light leading-relaxed tracking-wide text-muted">
          Room styles shaped for rest and practice — pricing shown as placeholder until your live rates are published.
        </p>
      </div>

      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => (
          <li
            key={o.id}
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${180 + i * 120}ms` }}
          >
            <article className="card-2026 group/card overflow-hidden">
              <span className="card-2026__noise" aria-hidden />
              <div className="relative z-[1] h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-terracotta/25 via-gold-logo/15 to-sand-deep/40"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(166,75,42,0.2),transparent_55%)]" />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-ink/80 backdrop-blur-md">
                    <span className="relative inline-flex h-3.5 w-[22px] shrink-0 overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/15">
                      <Image
                        src="https://flagcdn.com/w40/ma.png"
                        alt=""
                        width={22}
                        height={14}
                        className="object-cover"
                        sizes="22px"
                      />
                    </span>
                    <span className="sr-only">Morocco</span>
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/35 px-3 py-1.5 backdrop-blur-md">
                  <span className="font-body text-[10px] font-bold text-ink/75">Retreat</span>
                </div>
              </div>
              <div className="relative z-[1] space-y-4 p-6">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover/card:text-terracotta">
                  {o.title}
                </h3>
                <p className="line-clamp-3 font-body text-sm leading-relaxed text-muted">{o.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="rounded-full border border-border-subtle bg-white/50 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-muted backdrop-blur-sm">
                    {o.highlights[0]}
                  </span>
                  <span className="font-body text-xs font-bold text-terracotta">{o.priceLabel}</span>
                </div>
                <Link
                  href={`/booking?offer=${o.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/30 py-3 font-body text-sm font-semibold text-ink/70 backdrop-blur-sm transition-all duration-300 hover:border-terracotta/25 hover:bg-white/55 hover:text-ink"
                >
                  Select & book
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
