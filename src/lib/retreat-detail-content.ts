/**
 * Long-form copy & pricing for /rooms/[slug] — Typeform links, deposit rules, and expandable sections.
 * To add gallery images for a program: set `galleryImageUrls: ["https://..."]` on that retreat’s entry.
 */

export type DetailPart =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type DetailSection = {
  title: string;
  parts: DetailPart[];
};

export type PricingTier = {
  roomLabel: string;
  earlyBirdEur: number;
  normalEur: number;
};

export type RetreatPricing = {
  /** e.g. "until April 2026" */
  earlyBirdDeadline: string;
  /** Full sentence shown under pricing cards (includes deposit rules) */
  depositNote: string;
  tiers: PricingTier[];
};

export type RetreatDetailExtended = {
  slug: string;
  /** Short line under the title block */
  headline?: string;
  /** Always visible intro */
  lead: string;
  /** FAQ blocks: first two show on the page; rest are behind “See more” on every retreat detail. */
  moreSections: DetailSection[];
  pricing?: RetreatPricing;
  registrationUrl: string | null;
  paymentNote: string;
  /** Optional extra gallery URLs — when empty, a placeholder is shown */
  galleryImageUrls?: readonly string[];
};

const DEPOSIT_STANDARD =
  "To secure your spot, pay a deposit of 500 € and settle the balance within 35 days of your deposit payment.";

const PAYMENT_BANK = "Payment is 100% secure via bank transfer.";

export const retreatDetailBySlug: Record<string, RetreatDetailExtended> = {
  "empower-experience-2026": {
    slug: "empower-experience-2026",
    headline: "Empower Experience 2026 · Christel Ingless",
    lead: "With Christel Ingless, Business & Life Coach — a focused five-day immersion in the Agafay desert to reset clarity, leadership, and life rhythm. Full program details and pricing are shared on enquiry.",
    moreSections: [],
    registrationUrl: null,
    paymentNote: PAYMENT_BANK,
  },

  "sacred-feminine-retreat-2026": {
    slug: "sacred-feminine-retreat-2026",
    headline: "The Sacred Feminine Retreat · Marrakech",
    lead: "A women’s retreat designed to reconnect you with your feminine energy.",
    moreSections: [
      {
        title: "Who can join this retreat?",
        parts: [
          {
            type: "p",
            text: "Any woman who feels called to reconnect with herself, relax, and share a meaningful experience in a supportive circle of women.",
          },
        ],
      },
      {
        title: "What is it for?",
        parts: [
          {
            type: "p",
            text: "This retreat is designed to help you rest, recharge, and rediscover your inner strength through yoga, meditation, sound healing, and soulful experiences in the magical setting of Marrakech.",
          },
        ],
      },
      {
        title: "What’s included?",
        parts: [
          {
            type: "h3",
            text: "Food",
          },
          {
            type: "p",
            text: "Enjoy nourishing meals inspired by traditional Moroccan Berber cuisine, prepared with fresh local ingredients. Expect wholesome, flavorful dishes that celebrate the richness of Moroccan culinary traditions while supporting a healthy retreat experience.",
          },
          {
            type: "h3",
            text: "Accommodation",
          },
          {
            type: "p",
            text: "Stay in a charming boutique hotel in the Atlas Mountains near Marrakech, with single or double rooms overlooking nature and mountain landscapes.",
          },
          {
            type: "h3",
            text: "Venue & shala",
          },
          {
            type: "p",
            text: "Practice in a beautiful yoga shala set in the heart of nature, overlooking vast green landscapes and the Atlas Mountains. The venue features authentic Berber design, a large garden, and three spacious swimming pools — perfect for relaxing and enjoying peaceful breaks between sessions.",
          },
          {
            type: "h3",
            text: "Program, activities & workshops",
          },
          {
            type: "ul",
            items: [
              "Daily sunrise yoga classes",
              "Sound healing sessions",
              "Pottery workshop",
              "Cacao ceremony",
              "Moroccan cooking class",
              "Painting meditation",
              "And more surprises",
            ],
          },
        ],
      },
    ],
    pricing: {
      earlyBirdDeadline: "until April 2026",
      depositNote: DEPOSIT_STANDARD,
      tiers: [
        { roomLabel: "Single room", earlyBirdEur: 1300, normalEur: 1450 },
        { roomLabel: "Double room", earlyBirdEur: 1000, normalEur: 1250 },
      ],
    },
    registrationUrl: "https://form.typeform.com/to/gnVm8juL",
    paymentNote: PAYMENT_BANK,
  },

  "morocco-summer-yoga-essaouira-2026": {
    slug: "morocco-summer-yoga-essaouira-2026",
    headline: "Morocco Summer Yoga Retreat · Essaouira",
    lead: "Six nights and seven days on the Atlantic coast — summer light, ocean air, and daily practice in Essaouira’s relaxed rhythm. Detailed schedule and activity list will be shared with registered guests.",
    moreSections: [
      {
        title: "Experience",
        parts: [
          {
            type: "p",
            text: "A full-board week combining yoga, the sea breeze, and the soul of Essaouira — ramparts, music, and space to unwind between practices.",
          },
        ],
      },
    ],
    pricing: {
      earlyBirdDeadline: "until June 2026",
      depositNote: DEPOSIT_STANDARD,
      tiers: [
        { roomLabel: "Single room", earlyBirdEur: 1600, normalEur: 1700 },
        { roomLabel: "Double room", earlyBirdEur: 1450, normalEur: 1550 },
      ],
    },
    registrationUrl: null,
    paymentNote: PAYMENT_BANK,
  },

  "morocco-autumn-yoga-marrakech-2026": {
    slug: "morocco-autumn-yoga-marrakech-2026",
    headline: "Morocco Autumn Yoga Retreat · Marrakech",
    lead: "Six nights and seven days in Marrakech as the season softens — yoga, culture, and time to integrate. Full program details are shared when you register.",
    moreSections: [
      {
        title: "Experience",
        parts: [
          {
            type: "p",
            text: "Autumn in Marrakech offers warm days, cooler evenings, and gardens at their best — a full retreat week with daily practice and Moroccan immersion.",
          },
        ],
      },
    ],
    pricing: {
      earlyBirdDeadline: "until June 2026",
      depositNote: DEPOSIT_STANDARD,
      tiers: [
        { roomLabel: "Single room", earlyBirdEur: 1950, normalEur: 2150 },
        { roomLabel: "Double room", earlyBirdEur: 1750, normalEur: 1850 },
        { roomLabel: "Triple room", earlyBirdEur: 1550, normalEur: 1650 },
      ],
    },
    registrationUrl: "https://form.typeform.com/to/gfVZoMeU",
    paymentNote: PAYMENT_BANK,
  },

  "vinyasa-yoga-teacher-training-essaouira-2026": {
    slug: "vinyasa-yoga-teacher-training-essaouira-2026",
    headline: "50 Hours Vinyasa Yoga Teacher Training · with Naia (US)",
    lead: "Immerse yourself in the peaceful coastal energy of Essaouira for an intensive week of 50 hours of Vinyasa TTC led by Naia from the US. Connect with a like-minded community of teachers and practitioners and enjoy the serenity of the location.",
    moreSections: [
      {
        title: "Who can join?",
        parts: [
          {
            type: "p",
            text: "This training is designed for practitioners who feel called to deepen their relationship with yoga and begin sharing it with others.",
          },
          {
            type: "p",
            text: "It is ideal for:",
          },
          {
            type: "ul",
            items: [
              "Certified yoga teachers ready to refine their teaching skills and learn new methods for teaching Vinyasa.",
              "Dedicated practitioners who do not yet hold a 200-hour certificate but already have a regular practice, feel the call to guide others, and wish to explore new approaches to teaching Vinyasa.",
            ],
          },
          {
            type: "p",
            text: "For registered yoga teachers, this training is eligible for 50 Continuing Education Hours with Yoga Alliance, as the lead teacher is an E-RYT 500 certified instructor.",
          },
        ],
      },
      {
        title: "What is it for?",
        parts: [
          {
            type: "p",
            text: "This training is designed to help you build confidence, clarity, and practical skills both on and off the mat.",
          },
          {
            type: "p",
            text: "You will learn how to:",
          },
          {
            type: "ul",
            items: [
              "Structure and sequence a Vinyasa class",
              "Guide students with clear and effective cueing",
              "Understand key alignment principles",
              "Develop your voice as a teacher",
              "Deepen your personal practice through daily immersion",
            ],
          },
          {
            type: "p",
            text: "Beyond teaching, this experience is also about slowing down, reconnecting, and expanding your awareness through movement, breath, and sound. Whether your goal is to teach or simply evolve your practice, this training gives you the tools and experience to move forward with confidence.",
          },
        ],
      },
      {
        title: "What’s included?",
        parts: [
          {
            type: "h3",
            text: "Training hours & materials",
          },
          {
            type: "ul",
            items: [
              "50 hours of in-person training",
              "Daily guided yoga practices",
              "Teaching practice and feedback",
              "A comprehensive training manual",
              "Yoga mat, notebook, and pen provided on site",
            ],
          },
          {
            type: "h3",
            text: "Accommodation",
          },
          {
            type: "p",
            text: "The training takes place in a peaceful beachfront location in Tafedna Bay, near Essaouira — a hidden gem known for its raw nature, calm energy, and ocean views. Our shala overlooks nature, offering a serene and inspiring space to practice, learn, and unwind.",
          },
          {
            type: "p",
            text: "Participants can choose between single, double, or triple rooms. All rooms are comfortable and fully equipped, with private bathrooms, fresh towels, Wi‑Fi, air conditioning, and beachside views.",
          },
          {
            type: "h3",
            text: "Food",
          },
          {
            type: "p",
            text: "You will enjoy three nourishing meals per day designed to support your energy and well-being during the training — breakfast, lunch, and dinner. Meals are primarily vegetarian, with vegan options available on request, combining fresh local ingredients with a balanced approach.",
          },
        ],
      },
      {
        title: "Program & activities",
        parts: [
          {
            type: "h3",
            text: "Sample day",
          },
          {
            type: "ul",
            items: [
              "6:30 – 8:30 AM — Pranayama & Vinyasa flow",
              "8:30 – 10:00 AM — Breakfast",
              "11:00 AM – 1:00 PM — Anatomy / philosophy / sequencing",
              "1:00 – 3:00 PM — Lunch & rest",
              "3:00 – 5:00 PM — Teaching practice & alignment",
              "5:30 – 6:30 PM — Evening flow or sound healing",
              "6:45 – 8:00 PM — Dinner",
            ],
          },
          {
            type: "h3",
            text: "Activities included",
          },
          {
            type: "ul",
            items: [
              "Moroccan cooking class",
              "Surf lesson",
              "Excursion to Essaouira (upon group request on the day off)",
            ],
          },
          {
            type: "h3",
            text: "Optional (extra cost)",
          },
          {
            type: "ul",
            items: ["Traditional hammam", "Massage", "Horse riding by the ocean"],
          },
        ],
      },
    ],
    pricing: {
      earlyBirdDeadline: "until June 2026",
      depositNote: DEPOSIT_STANDARD,
      tiers: [
        { roomLabel: "Single room", earlyBirdEur: 1950, normalEur: 2100 },
        { roomLabel: "Double room", earlyBirdEur: 1750, normalEur: 1900 },
        { roomLabel: "Triple room", earlyBirdEur: 1550, normalEur: 1700 },
      ],
    },
    registrationUrl: "https://form.typeform.com/to/oMTUYSKe",
    paymentNote: PAYMENT_BANK,
  },
};

export function getRetreatDetailContent(slug: string): RetreatDetailExtended | undefined {
  return retreatDetailBySlug[slug];
}
