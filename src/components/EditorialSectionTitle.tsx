export type EditorialHeadingLevel = "h1" | "h2";

type EditorialSectionTitleProps = {
  /** First line — terracotta → gold gradient */
  highlight: string;
  /** Second line — solid ink; omit for single-line titles (full gradient on one line) */
  rest?: string;
  align?: "left" | "center";
  id?: string;
  as?: EditorialHeadingLevel;
  /** `hero` — full-size page titles; `page` — slightly smaller, uses full band width */
  scale?: "hero" | "page";
  className?: string;
};

const SCALE_CLASSES: Record<NonNullable<EditorialSectionTitleProps["scale"]>, string> = {
  hero: "text-[clamp(2.35rem,6.5vw,4.5rem)] leading-[0.98]",
  page: "w-full max-w-none text-[clamp(1.45rem,3.2vw,2.4rem)] leading-[1.12] sm:text-[clamp(1.55rem,3.4vw,2.55rem)]",
};

/**
 * Large two-line editorial headline (same system as Food “Moroccan / table”).
 */
export function EditorialSectionTitle({
  highlight,
  rest,
  align = "left",
  id,
  as: Tag = "h2",
  scale = "hero",
  className = "",
}: EditorialSectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <Tag
      id={id}
      className={`font-heading font-medium tracking-tight ${SCALE_CLASSES[scale]} ${alignClass} ${className}`.trim()}
    >
      <span className="text-gradient-brand">{highlight}</span>
      {rest ? <span className="block text-ink">{rest}</span> : null}
    </Tag>
  );
}

/** Split on first whitespace: first word = highlight, remainder = rest (if any). */
export function splitEditorialTitle(title: string): { highlight: string; rest?: string } {
  const trimmed = title.trim();
  const space = trimmed.indexOf(" ");
  if (space === -1) {
    return { highlight: trimmed };
  }
  return {
    highlight: trimmed.slice(0, space),
    rest: trimmed.slice(space + 1).trim() || undefined,
  };
}
