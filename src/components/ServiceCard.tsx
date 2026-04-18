import { SITE_SECTION_KICKER } from "@/lib/site";

const ACCENTS = ["card-2026--accent-terracotta", "card-2026--accent-gold", "card-2026--accent-dusk", "card-2026--accent-gold"] as const;

export type ServiceItem = { title: string; body: string };

export function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const accent = ACCENTS[index % ACCENTS.length]!;
  return (
    <li className={`card-2026 ${accent} p-8 pt-10 sm:p-9`}>
      <span className="card-2026__noise" aria-hidden />
      <span className="service-card-2026__index" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative z-[1] max-w-[calc(100%-3rem)]">
        <span className="font-body text-[10px] font-semibold tracking-[0.26em] text-terracotta/85 uppercase">{SITE_SECTION_KICKER}</span>
        <h3 className="mt-3 font-heading text-[1.2rem] font-medium leading-snug tracking-tight text-ink sm:text-xl">{item.title}</h3>
        <p className="mt-4 font-body text-[15px] leading-[1.7] text-muted">{item.body}</p>
      </div>
    </li>
  );
}
