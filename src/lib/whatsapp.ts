import { SITE_PHONE_E164 } from "./site";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${SITE_PHONE_E164}?text=${encodeURIComponent(message)}`;
}
