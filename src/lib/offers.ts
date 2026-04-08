export type RetreatOffer = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  /** Display on pricing cards */
  earlyBird: string;
  regular: string;
  spots: number;
  spotsNote?: string;
  highlights: string[];
};

/** Room types & indicative pricing — matches client rate sheet (early bird / regular on retreat program page). */
export const offers: RetreatOffer[] = [
  {
    id: "private-room",
    title: "Private room",
    description:
      "Your own space for rest and renewal after days in the Atlas and the Medina — ideal when you want quiet and comfort.",
    priceLabel: "From $1,690 early bird · $1,790 regular",
    earlyBird: "1690 $",
    regular: "1790 $",
    spots: 3,
    highlights: ["Private room", "Full retreat program", "All meals included"],
  },
  {
    id: "twin-room",
    title: "Twin room",
    description:
      "Share a twin room with another guest — a warm way to connect while enjoying the full 8-day journey.",
    priceLabel: "From $1,590 early bird · $1,690 regular",
    earlyBird: "1590 $",
    regular: "1690 $",
    spots: 6,
    highlights: ["Twin share", "Same inclusions", "Community feel"],
  },
  {
    id: "triple-room",
    title: "Triple room",
    description:
      "Triple occupancy — great for friends traveling together. Availability may open after private and twin fill.",
    priceLabel: "From $1,490 early bird · $1,590 regular",
    earlyBird: "1490 $",
    regular: "1590 $",
    spots: 6,
    spotsNote: "May open after private & twin fill — ask for availability.",
    highlights: ["Triple share", "Full program access", "Ask for availability"],
  },
];

export function getOfferById(id: string): RetreatOffer | undefined {
  return offers.find((o) => o.id === id);
}

export function isValidOfferId(id: string): boolean {
  return offers.some((o) => o.id === id);
}
