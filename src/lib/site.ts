/** Site-wide URLs & contact — align with client content */

/** Monogram / mark in `public/` (wordmark file removed — use this everywhere) */
export const SITE_LOGO_MARK = "/logo-mayr.png";
export const SITE_BRAND_NAME = "Marrakech Alchemy Yoga Retreats";

export const SITE_EMAIL = "Marrakech.alchemy@gmail.com";
export const SITE_PHONE_E164 = "21261695998";
export const WHATSAPP_LINK = `https://wa.me/${SITE_PHONE_E164}`;
export const INSTAGRAM_URL = "https://www.instagram.com/marrakechalchemyyogarereats/";
export const TIKTOK_URL = "https://www.tiktok.com/@m_a_y_r?_t=8sS2GJszs0Y&_r=1";
/** Replace when payment page (Stripe, etc.) is ready */
export const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL ?? "#payment";
