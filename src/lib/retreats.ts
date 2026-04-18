import { MEDIA_ACTIVITY_PATHS } from "./media-assets";
import { publicAssetPath } from "./public-path";

/** Poster art in `public/Picture1.png` … `Picture5.png` — one per scheduled program. */
const PROGRAM_POSTERS = [
  publicAssetPath("Picture1.png"),
  publicAssetPath("Picture2.png"),
  publicAssetPath("Picture3.png"),
  publicAssetPath("Picture4.png"),
  publicAssetPath("Picture5.png"),
] as const;

const activityGallery = MEDIA_ACTIVITY_PATHS.map((p) => publicAssetPath(p));

function programPhotos(index: number): { coverImage: string; extendedGallery: readonly string[] } {
  const n = activityGallery.length;
  return {
    coverImage: PROGRAM_POSTERS[index] ?? PROGRAM_POSTERS[0]!,
    extendedGallery: Array.from({ length: 6 }, (_, k) => activityGallery[(index * 2 + k) % n]!),
  };
}

/** 2026 retreat programs — cards on /retreat-program */
export type RetreatStatus = "open" | "few_spots" | "full" | "new";

export type RetreatListing = {
  id: string;
  /** URL segment: /rooms/[slug] */
  slug: string;
  title: string;
  dateLabel: string;
  monthKey: string;
  location: string;
  language: string;
  focus: string;
  status: RetreatStatus;
  /** Default room tier when opening booking from this retreat’s page */
  offerId: string;
  summary: string;
  /** Card background + detail hero — from `public/activity/`. */
  coverImage: string;
  /** Activity photography on the detail page */
  extendedGallery: readonly string[];
  /** First segment of `location` — used for Place filter */
  placeKey: string;
  /** Short copy about the venue and setting */
  placeNote: string;
  /** First day of the retreat (YYYY-MM-DD) — early-bird vs regular is derived from booking date vs this */
  retreatStartIso: string;
};

export const retreatListings: RetreatListing[] = [
  {
    id: "empower-2026",
    slug: "empower-experience-2026",
    title: "Empower Experience 2026",
    dateLabel: "31 Mar – 4 Apr 2026 · 4 nights, 5 days",
    monthKey: "apr",
    location: "Désert d'Agafay, Maroc",
    language: "French · English",
    focus: "Empower · Coaching",
    status: "new",
    offerId: "private-room",
    summary:
      "With Christel Ingless, Business & Life Coach — a focused five-day immersion in the Agafay desert to reset clarity, leadership, and life rhythm.",
    placeKey: "Agafay Desert",
    retreatStartIso: "2026-03-31",
    ...programPhotos(0),
    placeNote:
      "Le désert d'Agafay — paysage minéral et horizons larges à une heure de Marrakech. Soirées sous les étoiles et retraites pensées pour l’ancrage et l’élan.",
  },
  {
    id: "sacred-feminine-2026",
    slug: "sacred-feminine-retreat-2026",
    title: "The Sacred Feminine Retreat",
    dateLabel: "26–30 May 2026 · 4 nights, 5 days",
    monthKey: "may",
    location: "Marrakech · Morocco",
    language: "English",
    focus: "Sacred Feminine",
    status: "open",
    offerId: "twin-room",
    summary:
      "Four nights and five days in Marrakech — embodied practice, circle, and ritual space for the sacred feminine.",
    placeKey: "Marrakech",
    retreatStartIso: "2026-05-26",
    ...programPhotos(1),
    placeNote:
      "Hosted in Marrakech — riads, patios, and the pulse of the medina when you want color and contrast beside the mat.",
  },
  {
    id: "summer-yoga-2026",
    slug: "morocco-summer-yoga-essaouira-2026",
    title: "Morocco Summer Yoga Retreat",
    dateLabel: "24–30 Aug 2026 · 6 nights, 7 days",
    monthKey: "aug",
    location: "Essaouira · Morocco",
    language: "English",
    focus: "Summer · Vinyasa",
    status: "open",
    offerId: "private-room",
    summary:
      "A full week on the Atlantic coast — summer light, ocean air, and daily practice framed by Essaouira’s relaxed rhythm.",
    placeKey: "Essaouira",
    retreatStartIso: "2026-08-24",
    ...programPhotos(2),
    placeNote:
      "Essaouira — breezes, ramparts, and long skies. The pace softens; practice and free time balance naturally by the sea.",
  },
  {
    id: "autumn-yoga-2026",
    slug: "morocco-autumn-yoga-marrakech-2026",
    title: "Morocco Autumn Yoga Retreat",
    dateLabel: "7–13 Sep 2026 · 6 nights, 7 days",
    monthKey: "sep",
    location: "Marrakech · Morocco",
    language: "English",
    focus: "Autumn · Yoga",
    status: "open",
    offerId: "twin-room",
    summary:
      "Six nights as the heat eases — autumn yoga in Marrakech with space to integrate, explore, and restore.",
    placeKey: "Marrakech",
    retreatStartIso: "2026-09-07",
    ...programPhotos(3),
    placeNote:
      "Autumn in Marrakech — warm days, cooler evenings, and the gardens at their most inviting after summer.",
  },
  {
    id: "vinyasa-ytt-2026",
    slug: "vinyasa-yoga-teacher-training-essaouira-2026",
    title: "50 Hours Vinyasa Yoga Teacher Training",
    dateLabel: "21–29 Sep 2026 · 8 nights, 9 days",
    monthKey: "sep",
    location: "Essaouira · Morocco",
    language: "English",
    focus: "YTT · Vinyasa 50h",
    status: "open",
    offerId: "private-room",
    summary:
      "An intensive 50-hour Vinyasa teacher training on the coast — skill-building, sequencing, and teaching labs over eight nights.",
    placeKey: "Essaouira",
    retreatStartIso: "2026-09-21",
    ...programPhotos(4),
    placeNote:
      "Essaouira offers a focused container: ocean light for study days, walkable medina breaks, and room to rehearse teaching in a small group.",
  },
];

export function getRetreatBySlug(slug: string): RetreatListing | undefined {
  return retreatListings.find((r) => r.slug === slug);
}

export const retreatLanguages = ["all", "English", "French"] as const;
export const retreatMonths = [
  { key: "all", label: "All dates" },
  { key: "apr", label: "April" },
  { key: "may", label: "May" },
  { key: "aug", label: "August" },
  { key: "sep", label: "September" },
] as const;

/** Calendar / cards — full month name from a listing `monthKey`. */
export function retreatMonthDisplayName(monthKey: string): string {
  const row = retreatMonths.find((m) => m.key === monthKey);
  return row?.label ?? monthKey;
}

/** Date line only — strips the duration suffix after " · " in `dateLabel`. */
export function retreatListingDateHeadline(dateLabel: string): string {
  const head = dateLabel.split(" · ")[0];
  return head?.trim() || dateLabel;
}

/** Place filter — matches `placeKey` on each listing */
export const retreatPlaceOptions = [
  { key: "all", label: "All places" },
  ...(["Agafay Desert", "Essaouira", "Marrakech"] as const).map((k) => ({ key: k, label: k })),
] as const;

export const retreatStatusFilters = [
  { key: "all", label: "All statuses" },
  { key: "open", label: "Open" },
  { key: "few_spots", label: "Few spots" },
  { key: "new", label: "New" },
  { key: "full", label: "Fully booked" },
] as const;
