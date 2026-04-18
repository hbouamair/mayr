import { publicAssetPath } from "./public-path";

export type HeroBackgroundSlide = {
  src: string;
  alt: string;
  /** Extra classes for focal zoom (e.g. `rr.jpeg` — emphasize hands). */
  imageClassName?: string;
};

/** Full-bleed home hero slides — `public/homePage/` */
export const HERO_BACKGROUND_SLIDES: readonly HeroBackgroundSlide[] = [
  {
    src: publicAssetPath("homePage/IMG_1526.JPG"),
    alt: "Marrakech Alchemy — retreat and Moroccan light",
  },
  {
    src: publicAssetPath("homePage/DSC07115.jpeg"),
    alt: "Warm tones and atmosphere at the retreat",
  },
  {
    src: publicAssetPath("homePage/AfterlightImage 2-2.JPG"),
    alt: "Retreat experience — Marrakech Alchemy",
  },
  {
    src: publicAssetPath("homePage/DSC07124 2.JPG"),
    alt: "Landscape and calm around the retreat",
  },
  {
    src: publicAssetPath("homePage/DSC07114 (1).jpeg"),
    alt: "Moments from Marrakech Alchemy retreats",
  },
  {
    src: publicAssetPath("homePage/IMG_4162.jpg"),
    alt: "Retreat and Moroccan atmosphere",
  },
  {
    src: publicAssetPath("homePage/IMG_4217.jpg"),
    alt: "Yoga and wellness in Morocco",
  },
  {
    src: publicAssetPath("homePage/IMG_9910.jpg"),
    alt: "Marrakech Alchemy retreat imagery",
  },
  {
    src: publicAssetPath("homePage/az.jpeg"),
    alt: "Marrakech Alchemy — retreat photography",
  },
  {
    src: publicAssetPath("homePage/eee.jpeg"),
    alt: "Retreat experience in Morocco",
  },
  {
    src: publicAssetPath("homePage/rr.jpeg"),
    alt: "Hands and practice — Marrakech Alchemy",
    imageClassName:
      "origin-center scale-[1.38] sm:scale-[1.28] object-cover object-[48%_52%] sm:object-[46%_50%]",
  },
  {
    src: publicAssetPath("homePage/zae.jpeg"),
    alt: "Marrakech Alchemy — hero image",
  },
];
