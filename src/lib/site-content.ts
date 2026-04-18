/** Editorial copy from Marrakech Alchemy website brief (DOCX / client paste). */

import {
  buildAccommodationGallery,
  buildFoodGallery,
  MEDIA_ACTIVITY_PATHS,
} from "./media-assets";
import { publicAssetPath } from "./public-path";
import { retreatListings } from "./retreats";

export const heroTagline = "Awaken • Connect • Restore";

/** Line under the main hero title (legacy mayr.ma home) */
export const heroSubtagline = "Where Moroccan charm meets yoga serenity";

export const homeIntro =
  "Join us for a soulful & authentic yoga journey!\nBook your spot now and let the Moroccan magic unfold";

/** Home landing — MAYR block (links to /booking) */
export const homeMayrSummary = {
  eyebrow: "MAYR",
  title: "Marrakech Alchemy Experience",
  href: "/booking",
  cta: "Discover MAYR",
} as const;

/** Longer home copy for MAYR — full-width section */
export const homeMayrParagraphs: readonly string[] = [
  "Marrakech Alchemy Experience — MAYR — is how we hold the whole arc of your stay: where you sleep, what you eat, how you move, breathe, and rest, and how you meet Morocco beyond the mat. We work with boutique hotels, riads, and coastal venues chosen for beauty, calm, and a real sense of place — from stone desert light to medina courtyards and ocean air.",
  "Your days blend Moroccan dining with daily yoga and sound, hammam and pool time, workshops and circles, and curated excursions — pottery, cooking, henna, surf, desert rides, and more — so the retreat feels both grounding and alive.",
  "Whether you join us for a short immersion or a full week, every MAYR journey is paced for renewal: space to arrive, practice deeply, explore with intention, and leave with clarity and warmth you can carry home.",
];

/** Home landing — program calendar intro */
export const homeProgramSummary = {
  eyebrow: "2026 season",
  title: "Program calendar",
  titleHighlight: "Program calendar",
  description: "Five dates — tap a card for details, pricing, and booking.",
  href: "/retreat-program#browse-retreats",
  cta: "Browse all programs",
} as const;

const RETREAT_MONTH_LABEL: Record<string, string> = {
  apr: "April",
  may: "May",
  aug: "August",
  sep: "September",
};

export type RetreatCalendar2026Entry = {
  id: string;
  month: string;
  title: string;
  description: string;
  dateRange: string;
};

function retreatDateRangeFromLabel(dateLabel: string): string {
  const head = dateLabel.split(" · ")[0];
  return head?.trim() || dateLabel;
}

/** Scheduled weeks — same programs as `retreatListings`, formatted for the 2026 calendar section */
export const retreatCalendar2026: readonly RetreatCalendar2026Entry[] = retreatListings.map((r) => ({
  id: r.id,
  month: RETREAT_MONTH_LABEL[r.monthKey] ?? r.monthKey,
  title: r.title,
  description: r.summary,
  dateRange: retreatDateRangeFromLabel(r.dateLabel),
}));

export const retreatCalendar2026Intro = {
  eyebrow: "2026 season",
  titleHighlight: "Retreat calendar",
  description:
    "Five scheduled weeks — preview two programs at a time, then open a week for details, pricing, and booking.",
  descriptionProgramPage:
    "Each card uses a poster from the season. Use the filters below to narrow by date, place, language, or focus.",
} as const;

export function retreatCalendarWeekBookingPrefill(entry: RetreatCalendar2026Entry): string {
  return [
    `Hello — I'm interested in booking: ${entry.title}.`,
    `Dates: ${entry.dateRange} (${entry.month} 2026).`,
    "Please share availability and next steps. Thank you!",
  ].join("\n");
}

export type AboutPageGalleryImage = {
  src: string;
  alt: string;
};

/** Editorial gallery on /about — accommodation stills plus retreat activity photography */
export const aboutPageGalleryImages: readonly AboutPageGalleryImage[] = [
  ...buildAccommodationGallery(),
  {
    src: publicAssetPath(MEDIA_ACTIVITY_PATHS[0]!),
    alt: "Retreat activity — culture and connection in Morocco",
  },
  {
    src: publicAssetPath(MEDIA_ACTIVITY_PATHS[1]!),
    alt: "Workshop or gathering during the yoga retreat",
  },
];

export const marrakechExperienceSectionIntro = {
  eyebrow: "Marrakech Alchemy",
  titleHighlight: "Experience",
  titleRest: "Morocco with us",
  description:
    "From Agafay stone light to Essaouira’s Atlantic breeze — curated weeks that blend practice, culture, and space to arrive fully.",
  href: "/retreat-program#browse-retreats",
  cta: "Browse 2026 retreats",
  secondaryHref: "/booking",
  secondaryCta: "Book your room",
} as const;

export const marrakechExperienceCards = [
  {
    id: "calendar",
    href: "/retreat-program#browse-retreats",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[0]!),
    title: "Program calendar",
    description: "Five scheduled weeks — tap through posters, then open a retreat for dates and booking.",
  },
  {
    id: "desert",
    href: "/retreat-program",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[1]!),
    title: "Desert & Agafay",
    description: "Mineral horizons and starlit evenings — short immersions with room to reset.",
  },
  {
    id: "medina",
    href: "/retreat-program",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[2]!),
    title: "Marrakech medina",
    description: "Riads, patios, and the pulse of the red city beside the mat.",
  },
  {
    id: "coast",
    href: "/retreat-program",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[3]!),
    title: "Atlantic weeks",
    description: "Essaouira light — longer stays where ocean air softens the rhythm.",
  },
  {
    id: "booking",
    href: "/booking",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[4]!),
    title: "Rooms & pricing",
    description: "Private, twin, and triple options — deposit to hold your spot.",
  },
  {
    id: "about",
    href: "/about",
    imageSrc: publicAssetPath(MEDIA_ACTIVITY_PATHS[5]!),
    title: "Our story",
    description: "How Marrakech Alchemy holds retreat weeks and wellness in Morocco.",
  },
] as const;

export const aboutParagraphs = [
  "Marrakech Alchemy Yoga Retreats was born in 2024 from a vision to merge the tranquil essence of Bali with the mystic beauty of Morocco, creating a unique yoga experience rooted in both cultural richness and spiritual depth.",
  "Based in Marrakech, where the red city meets the majestic Atlas Mountains, we offer immersive yoga retreats as our core experience, carefully curated journeys designed for renewal, connection, and transformation. Each retreat blends authentic Moroccan culture with the grounding practices of yoga, meditation, and sound healing.",
  "Alongside our retreats, we host regular yoga classes at our studio, currently based at O-Spa by Kenzi Menara Palace Marrakech, providing a serene space for both locals and travelers to practice.",
  "We also curate a variety of wellness experiences across Marrakech, including sound healing sessions, cacao ceremonies, tea rituals, and yoga & brunch gatherings. Each designed to bring people together in meaningful and inspiring ways.",
  "This is not just a retreat center, it's an alchemical journey of renewal, self-discovery, and connection to a deeper sense of being.",
  "Welcome to Marrakech Alchemy Yoga Center, where two worlds meet to inspire the best in you.",
];

export const accommodationParagraphs = [
  "At Marrakech Alchemy Yoga Retreats, we believe that your surroundings play a vital role in enhancing your wellness journey. That's why we invite you to embark on a transformative journey through two of Morocco's most enchanting landscapes, each offering a unique and unforgettable experience. This thoughtfully designed itinerary allows you to immerse yourself in the tranquility of the Atlas Mountains before transitioning to the vibrant energy of Marrakech's historic Medina, creating a perfect balance between peace and liveliness.",
  "Your journey begins in the serene embrace of the Atlas Mountains. We selected for you a beautiful authentic Berber stay where time seems to slow down amidst breathtaking views of expansive valleys, shimmering lakes, and rugged peaks. Here, the air is crisp and fresh, and the only sounds are those of nature—a gentle breeze, birdsong, and the soft hum of village life. It is the perfect setting to reconnect with yourself and embrace the stillness within. In this idyllic retreat, you'll experience the warmth of Berber hospitality, indulge in traditional cuisine, and explore a lifestyle rooted in harmony with nature. The mountains offer a sacred space for reflection, grounding, and preparation for the next chapter of your journey.",
  "From the tranquil highlands, your adventure seamlessly transitions to accommodate you in one of the beautiful riads located in the vibrant heart of Marrakech, where the historic Medina welcomes you with its intoxicating blend of sights, sounds, and scents. Here, life pulses with energy and color, from the bustling souks brimming with handcrafted treasures to the rhythmic call to prayer echoing through ancient alleys. The Medina is a feast for the senses, offering an authentic glimpse into Morocco's rich cultural tapestry. Amidst this lively backdrop, you'll find moments of serenity in a beautifully curated retreat space, a haven where you can recharge and reflect on your experiences.",
  "This dual experience of calm and vibrancy allows you to fully appreciate Morocco's incredible diversity. It's a journey that takes you from the peace of the mountains to the dynamic charm of the city, providing a deeper connection to both the land and yourself. At Marrakech Alchemy Yoga Retreats, we've crafted this program to be as enriching as it is inspiring, ensuring that every moment becomes a cherished memory.",
  "We have carefully chosen two sophisticated accommodations to ensure you experience the very best this retreat has to offer. Each location has been thoughtfully selected to complement the journey, providing you with the perfect blend of tranquility and vibrant cultural immersion, making your time with us truly unforgettable.",
];

export const roomTypesHighlight =
  "We offer private rooms, twin rooms as well as triple rooms.";

export const foodParagraphs = [
  "At Marrakech Alchemy Yoga Retreats, we believe that nourishing the body is as essential as nurturing the soul. As part of your retreat experience, you'll enjoy three delicious Moroccan meals each day, crafted to reflect the richness of the local cuisine while supporting your wellness journey.",
  "Our meals are thoughtfully prepared using fresh, locally sourced ingredients, celebrating the vibrant flavors and aromatic spices that Morocco is famous for. Each dish is a fusion of tradition and creativity, offering you an authentic taste of Moroccan culinary heritage. Whether it's a hearty tagine, a refreshing salad, or a warm bowl of harira, every meal is designed to leave you feeling energized and satisfied.",
  "We understand that everyone has unique dietary preferences and needs, which is why we offer vegan and vegetarian options upon request as part of our standard menu. We're happy to accommodate your request, ensuring that every guest feels supported and cared for during their stay.",
  "Dining at our retreats is more than just a meal—it's an opportunity to connect with the culture, savor the moment, and share in the joy of good food. Whether you're enjoying your meal amidst the tranquility of the Atlas Mountains or in the lively ambiance of the Medina, each bite will be a celebration of Morocco's culinary artistry.",
];

/** Pull quote for the home food section */
export const foodPullQuote =
  "Each bite is a celebration of Morocco's culinary artistry — from Atlas calm to Medina soul.";

/** Local photography: `public/food/` */
export const foodGalleryImages: { src: string; alt: string }[] = buildFoodGallery();

export const retreatProgramTitle = "8 Days, 2 Stunning Locations, 1 Transformative Journey";

export const retreatProgramSubtitle = "A typical day at the retreat";

export const retreatSchedule = [
  { time: "6:00 AM – 7:30 AM", text: "Start your day with an invigorating Vinyasa Flow yoga session, connecting your body and mind while taking in the stunning surroundings." },
  { time: "7:30 AM – 8:00 AM", text: "Embark on a nature walk and journaling session, grounding yourself in the peaceful energy of the day ahead." },
  { time: "8:00 AM – 10:00 AM", text: "Savor a hearty Moroccan breakfast, prepared with fresh, local ingredients to nourish your body." },
  { time: "10:00 AM – 1:00 PM", text: "Participate in enriching activities / local excursions, such as pottery making, flower mandalas, cooking class or Medina guided tour, diving into the vibrant cultural heritage of Morocco." },
  { time: "1:00 PM – 2:00 PM", text: "Enjoy a delicious lunch featuring traditional Moroccan dishes, offering a moment of relaxation and nourishment." },
  { time: "3:00 PM – 4:00 PM", text: "Deepen your practice with an afternoon yoga workshop, such as Acro Yoga for connection and playfulness, or body balance yoga for strength and alignment." },
  { time: "5:00 PM – 7:00 PM", text: "Recharge with a calming evening flow such as a sound healing session, restorative yoga practice, or Yin & sound session, promoting deep relaxation and balance." },
  { time: "7:00 PM – 8:00 PM", text: "End the day with a delightful dinner, celebrating the flavors of Morocco and connecting with fellow participants." },
  { time: "8:00 PM – 9:30 PM", text: "Some evenings feature vibrant Moroccan cultural nights, including traditional music shows, henna art, or firecamp, immersing you in the rich traditions of the region." },
];

export const retreatScheduleClosing =
  "This carefully curated schedule offers a blend of movement, creativity, relaxation, and cultural immersion, making each day a truly transformative experience.";

export const pricingMeta = {
  nights: "8 nights, 7 days",
  spotsPrivate: 3,
  spotsTwin: 6,
  spotsTriple: 6,
  totalSpots: 15,
  tripleNote:
    "Triple rooms may be held until private and twin spaces are filled — ask us for availability.",
  /** Shown on booking room cards */
  depositSecureSpot: "Deposit 500 € to secure your spot",
};

export const pricingRows = [
  { room: "Private room", earlyBird: "1690 $", regular: "1790 $" },
  { room: "Twin room", earlyBird: "1590 $", regular: "1690 $" },
  { room: "Triple room", earlyBird: "1490 $", regular: "1590 $" },
];

export const pricingIncludes = [
  "Food — 3 Moroccan meals per day (vegetarian / vegan on request)",
  "Luxurious accommodation",
  "Daily yoga & meditation classes",
  "Sound healing sessions",
  "Traditional workshops",
  "Yoga workshops",
  "Cooking class",
  "Tea ceremony",
  "Special musical nights",
  "Touristic site visits",
  "Airport pick-up / drop-off",
];

export const services = [
  {
    title: "Immersive yoga classes & workshops",
    body:
      "Experience daily yoga sessions led by skilled instructors, catering to all levels, from beginner to advanced. Our classes focus on mindfulness, flexibility, strength, and inner peace. Additionally, workshops delve deeper into specific practices, such as body balance, active meditation, and mantra chanting.",
  },
  {
    title: "Sound healing sessions",
    body:
      "Immerse yourself in the transformative power of sound with our group sound healing sessions. Using ancient and modern instruments, these sessions harmonize your body's energy, relieve stress, and promote deep relaxation and renewal.",
  },
  {
    title: "Cultural & musical immersion",
    body:
      "Enrich your retreat with activities that connect you to Moroccan culture. From guided experiences in the Atlas Mountains and Medina to enchanting Moroccan musical nights featuring traditional instruments and rhythms, we bring the heart of Morocco to life in a vibrant and soulful way.",
  },
  {
    title: "Wellness & relaxation",
    body:
      "Enhance your retreat with opportunities for self-care and relaxation. Enjoy serene moments in nature, mindfulness exercises, or rejuvenating traditional Moroccan treatments such as hammam baths or massages, designed to leave you feeling refreshed and balanced.",
  },
];

export type Testimonial = {
  name: string;
  /** ISO 3166-1 alpha-2 code (lowercase) for flag image, e.g. cn, us, ca */
  countryCode: string;
  quote: string;
  /** Optional `lang` on the blockquote (e.g. zh-CN for Chinese) */
  quoteLang?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Duan Shuli",
    countryCode: "cn",
    quoteLang: "zh-CN",
    quote: `我最近参加了Souha的声音疗愈课程，真心觉得这是一次深刻的心灵之旅。从课程开始的那一刻起，我就感受到了平静的能量，迅速使我的身心放松。Souha的嗓音温柔又有力量，她的声音让我深深进入了放松和疗愈的状态。

她的声音与她所使用的声音疗愈乐器相结合，创造出一种和谐的氛围，瞬间让内心感到平静。
我强烈推荐给任何寻求深度放松、疗愈与美丽转化体验的人。`,
  },
  {
    name: "Nilgun Demir",
    countryCode: "tr",
    quote: `More than just an incredible teacher, Souha have been a truly supportive friend, one whose presence has meant so much beyond the mat. The way she hold space, not just for movement but for deep connection, is something rare and beautiful. Her long pauses, the quiet moments of reflection, and the way she truly see and feel her students create something far beyond a class, it's a heart connection, a shared understanding of life itself.`,
  },
  {
    name: "Blake Valentino",
    countryCode: "us",
    quote: `Souha was dedicated in her organization of our yoga program in Bali, passionate about yoga, so caring for her students. Also very compassionate and humble. She cares about all of us and was extremely well organized.`,
  },
  {
    name: "Giovanna De Leo",
    countryCode: "us",
    quote: `Souha is a compassionate and talented program manager who I met during my yoga teacher training in bali. During my training, Souha was very approachable and quick to answer all of my questions; she also sat with me through a challenging moment when I needed to talk to someone. Souha is consistently authentic in her commitment towards serving others through her work and as a fellow yogi. Additionally, she leads fantastic sound baths and sings beautifully. Thank you, Souha!`,
  },
  {
    name: "Jingwen LUO",
    countryCode: "cn",
    quote: `I am so grateful for the incredible sound healing sessions with Souha. Her professionalism and deep knowledge make every class a truly transformative experience. She creates a nurturing space where she listens to and cares for each student, sharing her wisdom with so much generosity. As my yoga teacher training school manager, she continues to inspire me with her dedication and kindness.`,
  },
  {
    name: "Gabrielle El Maleh",
    countryCode: "ca",
    quote: `Thank you for sharing the wisdom of manifestation with us. Thank you for being a sounding board to help navigate this soulfully challenging experience. Thank you for allowing so much space for growth. Thank you for offering non judgement and welcoming atmosphere for deep levels of healing tears and joy laughter and deep enriching sound healing. I felt a deep connection to Souha and she is so thorough at making sure everyone is accounted for. She is a wealth of knowledge in all things overcoming obstacles, navigating your own inner work, finding balance in personal expectation among societal pressures`,
  },
];

/** Home “Accommodation” strip — `public/accomondation/` only */
export const accommodationGalleryImages: { src: string; alt: string }[] = buildAccommodationGallery();

export type TeamMember = {
  name: string;
  role: string;
  /** Use blank lines (\n\n) for separate paragraphs */
  bio: string;
  /** Optional portrait from /public (e.g. /team/name.jpg) */
  image?: { src: string; alt: string };
  /** ISO 3166-1 alpha-2 for flagcdn.com, e.g. ca, ma */
  flagCountryCode?: string;
  instagramUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Monica Oana",
    role: "Yoga teacher · Canada",
    flagCountryCode: "ca",
    bio: "With 15 years of personal practice, Monica's yoga journey began as a way to deepen her own connection to the practice. After attending a transformative teacher training retreat in the Alps, in France, she moved to Morocco, where she discovered her passion for teaching. What started as a simple desire to share yoga has blossomed into over 5 years of inspiring students on their own journeys. Monica's classes are a reflection of her love for yoga, and she's dedicated to creating a supportive space where everyone can grow and thrive on and off the mat.",
    instagramUrl: "https://www.instagram.com/hamonica_yoga?igsh=eW03aDF1Z211aTQ=",
  },
  {
    name: "Souha Majidi",
    role: "Yoga teacher · Sound healer · Space holder",
    flagCountryCode: "ma",
    bio: "Souha is a yoga teacher, sound healer and space holder dedicated to guiding others on their journey of self-discovery and transformation. With a background in international relations, she transitioned from a corporate career to fully embrace the world of yoga and holistic healing.\n\nHer journey led her to complete a 200-hour Yoga Teacher Training and an advanced sound healing training in Bali. For nearly two years, she worked as school manager at House of Om Yoga school, where she held space for more than 20 yoga teacher training groups, facilitating transformational journeys for students from all over the world. She also led women's circles and group sound healing sessions, creating safe and sacred spaces for connection, sharing, and empowerment.\n\nAt the heart of her work is a passion for holding space—whether through movement, sound, or soulful gatherings—helping others reconnect with themselves and find healing through authentic experiences.",
    image: {
      src: "/team/souha-majidi.jpg",
      alt: "Souha Majidi — yoga teacher and sound healer, in warm Moroccan light",
    },
    instagramUrl: "https://www.instagram.com/souha.majidi?igsh=ZjYzYTYwdmpxcWRw&utm_source=qr",
  },
];
