/** Site-wide URLs & contact — align with client content */

/** Small uppercase label above page/section heroes (same on every page) */
export const SITE_SECTION_KICKER = "MAYR";

/** Monogram / mark in `public/` — header */
export const SITE_LOGO_MARK = "/logo-mayr.png";
/** Footer lockup — wider wordmark (`public/logo-full.png.png`) */
export const SITE_LOGO_FOOTER = "/logo-full.png.png";
export const SITE_BRAND_NAME = "Marrakech Alchemy Yoga Retreats";

export const SITE_EMAIL = "Marrakech.alchemy@gmail.com";
/** Morocco WhatsApp — digits only for wa.me (same as +212 661 695 998) */
export const SITE_PHONE_E164 = "212661695998";
/** Human-readable, for display next to icons */
export const SITE_PHONE_DISPLAY = "+212 661 695 998";
export const WHATSAPP_LINK = `https://wa.me/${SITE_PHONE_E164}`;
export const INSTAGRAM_URL = "https://www.instagram.com/marrakechalchemyyogarereats/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61569591534574";
export const TIKTOK_URL = "https://www.tiktok.com/@m_a_y_r?_t=8sS2GJszs0Y&_r=1";
/** Replace when payment page (Stripe, etc.) is ready */
export const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL ?? "#payment";

/**
 * Opens Google search / reviews for the business. Override with a shorter Maps link from Google Business if you prefer.
 * Embed: live reviews in-page require Google Places API (server key + billing).
 */
export const GOOGLE_REVIEWS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  "https://www.google.com/search?q=Marrakech+Alchemy+Yoga+Retreats+Marrakech#lrd=0xdafef002ecff9f9:0x4898486b21a7deac,1,,,,";
