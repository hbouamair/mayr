import { publicAssetPath } from "./public-path";

/** Files in `public/food/` — dining & meals */
export const MEDIA_FOOD_PATHS = [
  "food/IMG_5261.jpg",
  "food/IMG_5265.jpg",
  "food/IMG_8991.jpg",
  "food/IMG_8993.jpg",
  "food/IMG_8995.jpg",
  "food/WhatsApp Image 2025-09-12 at 23.35.22 (2).jpeg",
  "food/WhatsApp Image 2025-09-12 at 23.35.24 (3).jpeg",
] as const;

/** Files in `public/activity/` — workshops, excursions, yoga moments */
export const MEDIA_ACTIVITY_PATHS = [
  "activity/c90edcc0-eae3-4488-8b44-339e07bb9f7a.JPG",
  "activity/WhatsApp Image 2025-09-10 at 09.51.42.jpeg",
  "activity/WhatsApp Image 2025-09-10 at 09.51.44 (2).jpeg",
  "activity/WhatsApp Image 2025-09-12 at 00.19.04 (2).jpeg",
  "activity/WhatsApp Image 2025-09-12 at 23.35.26 (5).jpeg",
  "activity/WhatsApp Image 2025-09-12 at 23.35.29 (7).jpeg",
  "activity/WhatsApp Image 2025-09-12 at 23.35.30.jpeg",
  "activity/WhatsApp Image 2025-09-12 at 23.35.31 (1).jpeg",
] as const;

/** Files in `public/accomondation/` (folder spelling matches repo) */
export const MEDIA_ACCOMMODATION_PATHS = ["accomondation/IMG_5205.jpg", "accomondation/IMG_5206.jpg"] as const;

const FOOD_ALTS = [
  "Moroccan retreat dining — shared table and local flavors",
  "Fresh ingredients and colorful dishes at the retreat",
  "Nourishing meals — spices, salads, and warm hospitality",
  "Retreat breakfast or lunch — Moroccan culinary care",
  "Dining in Morocco — tradition on every plate",
  "Retreat kitchen moments — food made with intention",
  "Moroccan cuisine during your stay — taste and togetherness",
] as const;

const ACTIVITY_ALTS = [
  "Retreat activity — culture and connection in Morocco",
  "Workshop or gathering during the yoga retreat",
  "Exploring Moroccan craft, nature, or tradition with the group",
  "A mindful moment from the retreat week",
  "Retreat excursion or creative session",
  "Yoga retreat experience — movement and presence",
  "Evening or daytime retreat activity in Morocco",
  "Shared experience — Marrakech Alchemy retreat life",
] as const;

const ACCOMMODATION_ALTS = [
  "Retreat accommodation — calm Moroccan interiors",
  "Guest space at the retreat — comfort and local design",
] as const;

/** Cover + galleries for retreat cards & detail — prioritises `public/activity/` photography */
export function retreatListingPhotos(index: number): {
  coverImage: string;
  /** Activity photography on the retreat detail page */
  extendedGallery: readonly string[];
} {
  const pool = MEDIA_ACTIVITY_PATHS.map((p) => publicAssetPath(p));
  const n = pool.length;
  const at = (offset: number) => pool[(index * 3 + offset) % n]!;
  const extended = Array.from({ length: 6 }, (_, k) => at(k + 4));
  return {
    coverImage: at(0),
    extendedGallery: extended,
  };
}

export function buildFoodGallery(): { src: string; alt: string }[] {
  return MEDIA_FOOD_PATHS.map((path, i) => ({
    src: publicAssetPath(path),
    alt: FOOD_ALTS[i] ?? "Moroccan retreat dining",
  }));
}

export function buildAboutGallery(): { src: string; alt: string }[] {
  return [
    { path: MEDIA_ACCOMMODATION_PATHS[0], alt: ACCOMMODATION_ALTS[0] },
    { path: MEDIA_ACCOMMODATION_PATHS[1], alt: ACCOMMODATION_ALTS[1] },
    { path: MEDIA_ACTIVITY_PATHS[0], alt: ACTIVITY_ALTS[0] },
    { path: MEDIA_ACTIVITY_PATHS[1], alt: ACTIVITY_ALTS[1] },
    { path: MEDIA_ACTIVITY_PATHS[2], alt: ACTIVITY_ALTS[2] },
  ].map(({ path, alt }) => ({ src: publicAssetPath(path), alt }));
}

export function buildAccommodationGallery(): { src: string; alt: string }[] {
  return MEDIA_ACCOMMODATION_PATHS.map((path, i) => ({
    src: publicAssetPath(path),
    alt: ACCOMMODATION_ALTS[i] ?? "Retreat accommodation in Morocco",
  }));
}
