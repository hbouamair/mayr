/** Editorial sections for MAYR Experience (booking page) — Marrakech Alchemy journey */

import { SITE_SECTION_KICKER } from "./site";

export type MayrExperienceSection = {
  id: string;
  /** Short label above title */
  kicker: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  /** Optional copy shown after bullet list (e.g. room types) */
  paragraphsAfterBullets?: readonly string[];
};

export const mayrExperienceIntro = {
  eyebrow: SITE_SECTION_KICKER,
  title: "Marrakech Alchemy Experience",
  /** Two-line hero: gradient first line, ink second */
  titleHighlight: "Marrakech Alchemy",
  titleRest: "Experience",
  description:
    "A curated journey through place, taste, practice, and culture — designed to slow you down, reconnect you with yourself, and immerse you in Morocco with intention.",
} as const;

export const mayrExperienceSections: readonly MayrExperienceSection[] = [
  {
    id: "accommodation",
    kicker: "Stay",
    title: "Accommodation experience",
    paragraphs: [
      "Our retreats take place in carefully selected locations across Morocco, primarily in Marrakech and along the coast near Essaouira. Each venue is chosen with intention, blending natural beauty, comfort, and a sense of escape.",
      "We host our retreats in boutique hotels surrounded by nature, where tranquility and serenity naturally unfold. Whether it’s the stillness of the Atlas Mountains, the openness of the ocean, or lush garden settings, these spaces are designed to help you slow down, reconnect, and fully immerse in the experience.",
      "To complement this, we also curate stays in traditional riads located in the heart of the Medina—offering a more vibrant and cultural immersion. Whether in Marrakech, Essaouira, or other Moroccan destinations, these intimate spaces allow you to experience the soul of the city while enjoying refined comfort.",
      "Rooms are spacious, filled with natural light, and thoughtfully designed with an authentic Moroccan Berber style, with views over the mountains, lake, ocean, or gardens depending on the location. All accommodations are equipped with essential amenities to ensure a comfortable stay, including:",
    ],
    bullets: [
      "Private bathrooms",
      "Quality bedding and linens",
      "Towels and toiletries",
      "Wi‑Fi",
      "Air conditioning or heating (depending on the season)",
      "Storage space for your belongings",
    ],
    paragraphsAfterBullets: [
      "We offer single, double, and triple room options, allowing you to choose what best suits your comfort and budget—whether you prefer privacy or a shared experience.",
    ],
  },
  {
    id: "culinary",
    kicker: "Eat",
    title: "Culinary experience",
    paragraphs: [
      "Food is an essential part of the journey, an invitation to explore Morocco through its rich flavors, traditions, and regional diversity.",
      "Throughout your retreat, you will enjoy a full culinary experience with daily breakfast, lunch, and dinner, thoughtfully prepared by talented local chefs. Each meal is a celebration of Moroccan cuisine, inspired by flavors from north to south, where spices, textures, and aromas come together in both nourishing and comforting ways.",
      "We place great care on the quality of every meal, using fresh, seasonal ingredients to create dishes that are both authentic and refined. From vibrant salads and slow-cooked tagines to freshly baked bread and delicate pastries, every table is designed to be a moment of connection and pleasure.",
      "We accommodate all dietary preferences and needs—whether you eat meat or prefer vegetarian or vegan options—ensuring that every guest feels cared for and satisfied.",
      "And of course, no Moroccan experience would be complete without its most iconic ritual: Moroccan mint tea. Served throughout the day, this fragrant and refreshing tradition becomes a true companion to your stay, a symbol of hospitality, warmth, and sharing.",
    ],
  },
  {
    id: "yoga-sound",
    kicker: "Move",
    title: "Yoga & sound journeys",
    paragraphs: [
      "Yoga and sound healing are at the heart of every MAYR experience, woven into each day as a pathway to reconnect, restore, and realign.",
      "Our yoga sessions are open to all levels, from complete beginners to experienced practitioners. We offer a variety of styles including Hatha, Vinyasa, Yin, and Ashtanga, allowing each guest to explore different rhythms of movement—from dynamic flows to slow, meditative practices.",
      "Complementing the physical practice, our sound journeys invite you into deep states of relaxation and inner exploration. Through multi-instrumental sound baths using Tibetan bowls, gongs, and drums, we create immersive vibrational experiences. We also offer Yin & Sound sessions, as well as more subtle, cosmic sound journeys using crystal bowls and chimes, each designed to calm the mind, release tension, and support emotional and energetic balance.",
    ],
  },
  {
    id: "wellness",
    kicker: "Rest",
    title: "Wellness and relaxation experiences",
    paragraphs: [
      "Beyond the structured practices, our retreats are an invitation to truly slow down and reconnect with a more natural pace of living. Each location is chosen not only for its beauty but for its ability to offer space, calm, and restoration.",
      "Guests are invited to indulge in traditional Moroccan wellness rituals such as the hammam, as well as relaxing massages designed to release tension and rejuvenate the body. Time can be spent swimming in serene pools, resting in lush gardens, or simply enjoying the quiet luxury of doing nothing. Whether you choose to engage in treatments or simply unwind in your surroundings, every moment is an opportunity to nourish yourself and embrace a deeper sense of ease and well-being.",
    ],
  },
  {
    id: "workshops",
    kicker: "Connect",
    title: "Workshops & women circles",
    paragraphs: [
      "At the heart of our retreats lies a strong emphasis on connection, both with oneself and with others. Our workshops and women circles are designed as safe, nurturing spaces where guests can explore, express, and share in meaningful ways.",
      "We offer ceremonial experiences such as cacao and tea rituals, as well as creative workshops like intuitive painting, where meditation, journaling, and reflection are gently woven into the process. These sessions encourage presence, creativity, and emotional release.",
      "In addition, our voice activation workshops focus on unlocking the power of expression—where we explore the voice as a tool for expression, truth, and healing the inner child. Movement and dance workshops invite the body to release stored tension and limitations, creating a space where guests can move freely, without judgment, and rediscover a sense of joy, confidence, and authenticity.",
    ],
  },
  {
    id: "activities",
    kicker: "Explore",
    title: "Activities & excursions",
    paragraphs: [
      "An essential part of the MAYR experience is connecting with the richness and diversity of Moroccan culture. Our retreats are designed not only as moments of inward exploration but also as opportunities to discover, experience, and engage with the local environment.",
      "Through a curated selection of activities and excursions, guests are introduced to traditional crafts, landscapes, and ways of life. From pottery workshops and henna rituals to guided explorations and an authentic Moroccan cooking class, each experience offers a deeper connection to local heritage and traditions.",
      "For those seeking adventure and play, we also include surfing, coastal or desert rides by horse or camel, and quad excursions. This is the vibrant, joyful dimension of the retreat—where exploration, connection, and fun come together to create unforgettable memories.",
    ],
  },
];
