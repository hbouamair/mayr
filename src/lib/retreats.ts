import { retreatListingPhotos } from "./media-assets";

/** Placeholder retreat dates — replace with real schedules when confirmed. */
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
};

export const retreatListings: RetreatListing[] = [
  {
    id: "r1",
    slug: "atlas-stillness",
    title: "Atlas Stillness",
    dateLabel: "7–14 Mar 2026",
    monthKey: "mar",
    location: "Ourika Valley · Morocco",
    language: "English",
    focus: "Hatha · Nidra",
    status: "few_spots",
    offerId: "private-room",
    summary:
      "A grounded week of Hatha and Yoga Nidra at the foot of the Atlas — mornings for practice, afternoons for the river gardens or quiet courtyard time.",
    placeKey: "Ourika Valley",
    ...retreatListingPhotos(0),
    placeNote:
      "Based in the Ourika Valley south of Marrakech — Berber villages, olive groves, and High Atlas views — with a cool shala and patios when the day heats up.",
  },
  {
    id: "r2",
    slug: "red-city-flow",
    title: "Red City Flow",
    dateLabel: "21–27 Mar 2026",
    monthKey: "mar",
    location: "Medina · Marrakech",
    language: "English",
    focus: "Vinyasa · Meditation",
    status: "open",
    offerId: "twin-room",
    summary:
      "Dynamic vinyasa paired with still meditation — built for guests who want movement, breath, and space to integrate.",
    placeKey: "Medina",
    ...retreatListingPhotos(1),
    placeNote:
      "Inside the UNESCO medina walls: narrow lanes, souks, and riad courtyards. The shala catches shifting light from the patio — flow inside, mint tea steps away.",
  },
  {
    id: "r3",
    slug: "sanctuary-week",
    title: "Sanctuary Week",
    dateLabel: "4–10 Apr 2026",
    monthKey: "apr",
    location: "Kasbah · Marrakech",
    language: "French",
    focus: "Restorative · Yin",
    status: "new",
    offerId: "triple-room",
    summary:
      "Led in French: slow restorative and yin sessions, nourishing meals, and unhurried days designed for deep nervous-system ease.",
    placeKey: "Kasbah",
    ...retreatListingPhotos(2),
    placeNote:
      "The Kasbah quarter — calmer than the main souk routes, still deeply Moroccan. Soft light in the salons and a hush that suits restorative work and long evenings.",
  },
  {
    id: "r4",
    slug: "desert-dawn-yoga",
    title: "Desert Dawn Yoga",
    dateLabel: "18–24 Apr 2026",
    monthKey: "apr",
    location: "Agafay Desert · Morocco",
    language: "English",
    focus: "Vinyasa · Pranayama",
    status: "full",
    offerId: "private-room",
    summary:
      "Early practice, pranayama, and flowing sequences at the edge of the Agafay stone desert — fully booked; join the waitlist or ask about similar dates.",
    placeKey: "Agafay Desert",
    ...retreatListingPhotos(3),
    placeNote:
      "Agafay lies barely an hour from Marrakech — lunar ridges and open horizon at dawn. Evenings often mean stars, silence, and optional runs into town for hammam or dinner.",
  },
  {
    id: "r5",
    slug: "inner-alchemy",
    title: "Inner Alchemy",
    dateLabel: "2–8 May 2026",
    monthKey: "may",
    location: "Mellah · Marrakech",
    language: "English",
    focus: "Hatha · Journaling",
    status: "open",
    offerId: "twin-room",
    summary:
      "Steady hatha with guided reflection and journaling — ideal if you want structure without rushing the inner work.",
    placeKey: "Mellah",
    ...retreatListingPhotos(4),
    placeNote:
      "The historic Mellah borders the kasbah and royal gardens. Rooftops and small courtyards are made for journaling — intimate scale, real medina life just beyond the door.",
  },
  {
    id: "r6",
    slug: "gathered-circle",
    title: "Gathered Circle",
    dateLabel: "16–22 May 2026",
    monthKey: "may",
    location: "Palmeraie · Marrakech",
    language: "English",
    focus: "Movement · Nidra",
    status: "few_spots",
    offerId: "triple-room",
    summary:
      "Playful movement explorations and long nidra rests — a communal, heart-forward week with limited spots remaining.",
    placeKey: "Palmeraie",
    ...retreatListingPhotos(5),
    placeNote:
      "North of the medina, the Palmeraie’s date palms and garden villas feel worlds away. Long tables under the trees, practice in a bright shala, then pool or walks between the dunes of shade.",
  },
  {
    id: "r7",
    slug: "summer-opening",
    title: "Summer Opening",
    dateLabel: "6–12 Jun 2026",
    monthKey: "jun",
    location: "Hivernage · Marrakech",
    language: "English",
    focus: "Vinyasa · Sound",
    status: "new",
    offerId: "private-room",
    summary:
      "Our summer kickoff: uplifting vinyasa and sound-led relaxation — new on the calendar, same full retreat inclusions.",
    placeKey: "Hivernage",
    ...retreatListingPhotos(6),
    placeNote:
      "Hivernage — gardens, cafés, and quiet streets west of the medina. Pool, zellige, and terraces catch summer light; after sound you’re minutes from the ramparts or a late drink in Gueliz.",
  },
  {
    id: "r8",
    slug: "golden-hour-retreat",
    title: "Golden Hour Retreat",
    dateLabel: "20–26 Sep 2026",
    monthKey: "sep",
    location: "Gueliz · Marrakech",
    language: "French",
    focus: "Restorative · Breath",
    status: "open",
    offerId: "twin-room",
    summary:
      "Late-summer softness in French: restorative shapes, breathwork, and long evenings as the light turns gold over the city.",
    placeKey: "Gueliz",
    ...retreatListingPhotos(7),
    placeNote:
      "Gueliz is Marrakech’s art-deco quarter — wide avenues, galleries, and sunset over the rooftops toward the High Atlas. Tea on the terrace, then the medina’s lanterns a short taxi away.",
  },
];

export function getRetreatBySlug(slug: string): RetreatListing | undefined {
  return retreatListings.find((r) => r.slug === slug);
}

export const retreatLanguages = ["all", "English", "French"] as const;
export const retreatMonths = [
  { key: "all", label: "All dates" },
  { key: "mar", label: "March" },
  { key: "apr", label: "April" },
  { key: "may", label: "May" },
  { key: "jun", label: "June" },
  { key: "sep", label: "September" },
] as const;

export const retreatFocuses = [
  "all",
  "Hatha · Nidra",
  "Vinyasa · Meditation",
  "Restorative · Yin",
  "Vinyasa · Pranayama",
  "Hatha · Journaling",
  "Movement · Nidra",
  "Vinyasa · Sound",
  "Restorative · Breath",
] as const;

/** Place filter — matches `placeKey` on each listing */
export const retreatPlaceOptions = [
  { key: "all", label: "All places" },
  ...(
    [
      "Agafay Desert",
      "Gueliz",
      "Hivernage",
      "Kasbah",
      "Medina",
      "Mellah",
      "Ourika Valley",
      "Palmeraie",
    ] as const
  ).map((k) => ({ key: k, label: k })),
] as const;

export const retreatStatusFilters = [
  { key: "all", label: "All statuses" },
  { key: "open", label: "Open" },
  { key: "few_spots", label: "Few spots" },
  { key: "new", label: "New" },
  { key: "full", label: "Fully booked" },
] as const;
