import { getOfferById } from "@/lib/offers";
import { SITE_BRAND_NAME } from "@/lib/site";

export type BookingMessageInput = {
  name: string;
  email: string;
  phone?: string;
  offerId: string;
  message?: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain lines for WhatsApp — no markdown so every client renders the same. */
export function buildBookingWhatsAppMessage(data: BookingMessageInput): string {
  const offer = getOfferById(data.offerId);
  const room = offer?.title ?? data.offerId;
  const phone = data.phone?.trim() ? data.phone.trim() : "Not provided";
  const note = data.message?.trim() ? data.message.trim() : "—";

  return [
    "RETREAT BOOKING INQUIRY",
    SITE_BRAND_NAME,
    "────────────────────────────",
    "",
    "GUEST NAME",
    data.name,
    "",
    "EMAIL",
    data.email,
    "",
    "PHONE",
    phone,
    "",
    "ROOM",
    room,
    "",
    "MESSAGE / NOTES",
    note,
    "",
    "────────────────────────────",
    "Please confirm availability when you can. Thank you.",
  ].join("\n");
}

/** Plain-text email body (fallback + logging). */
export function buildBookingEmailText(data: BookingMessageInput, submittedAtIso: string): string {
  const offer = getOfferById(data.offerId);
  const room = offer?.title ?? data.offerId;
  const pricing =
    offer != null ? `Indicative rates: ${offer.earlyBird} early bird · ${offer.regular} regular` : "";
  const phone = data.phone?.trim() || "—";
  const note = data.message?.trim() || "—";

  return [
    "NEW RETREAT BOOKING INQUIRY",
    SITE_BRAND_NAME,
    "",
    "GUEST",
    `  Name:  ${data.name}`,
    `  Email: ${data.email}`,
    `  Phone: ${phone}`,
    "",
    "ROOM",
    `  ${room}`,
    pricing ? `  ${pricing}` : "",
    "",
    "MESSAGE / NOTES",
    `  ${note}`,
    "",
    "—",
    `Submitted (UTC): ${submittedAtIso}`,
    "",
    "Reply directly to this email to reach the guest (Reply-To is set to their address).",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

/** HTML email — inline styles for clients; all user text escaped. */
export function buildBookingEmailHtml(data: BookingMessageInput, submittedAtIso: string): string {
  const offer = getOfferById(data.offerId);
  const room = escapeHtml(offer?.title ?? data.offerId);
  const phone = data.phone?.trim() ? escapeHtml(data.phone.trim()) : '<span style="color:#9a8f85;">Not provided</span>';
  const noteRaw = data.message?.trim();
  const note = noteRaw
    ? `<div style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#241c17;line-height:1.65;white-space:pre-wrap;">${escapeHtml(noteRaw)}</div>`
    : '<span style="color:#9a8f85;font-style:italic;">No additional notes</span>';

  const submitted = escapeHtml(
    new Date(submittedAtIso).toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short",
    })
  );

  const pricingHtml =
    offer != null
      ? `<p style="margin:20px 0 0 0;padding-top:18px;border-top:1px solid #e8e0d4;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:#6b5f54;line-height:1.55;">Indicative rates: <strong style="color:#241c17;font-weight:600;">${escapeHtml(offer.earlyBird)}</strong> early bird · <strong style="color:#241c17;font-weight:600;">${escapeHtml(offer.regular)}</strong> regular</p>`
      : "";

  const label = (t: string) =>
    `<td style="width:120px;padding:12px 12px 12px 0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#a64b2a;vertical-align:top;">${t}</td>`;
  const value = (inner: string) =>
    `<td style="padding:12px 0;font-family:Georgia,'Times New Roman',serif;font-size:17px;color:#241c17;line-height:1.4;vertical-align:top;">${inner}</td>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f3ece3;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3ece3;">
<tr><td align="center" style="padding:28px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fdfbf7;border-radius:16px;overflow:hidden;box-shadow:0 20px 50px -20px rgba(36,28,23,0.18);border:1px solid #e8e0d4;">
<tr>
<td style="padding:24px 28px 22px 28px;background:linear-gradient(165deg,#fdfbf7 0%,#f3ece3 100%);border-bottom:3px solid #c59d5f;">
<p style="margin:0;font-family:system-ui,-apple-system,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#a64b2a;">New inquiry</p>
<h1 style="margin:10px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:500;color:#241c17;line-height:1.2;">Retreat booking request</h1>
<p style="margin:8px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:#6b5f54;">${escapeHtml(SITE_BRAND_NAME)}</p>
</td>
</tr>
<tr><td style="padding:24px 28px 8px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr>${label("Guest")}${value(escapeHtml(data.name))}</tr>
<tr>${label("Email")}${value(`<a href="mailto:${escapeHtml(data.email)}" style="color:#a64b2a;text-decoration:none;border-bottom:1px solid rgba(166,75,42,0.35);">${escapeHtml(data.email)}</a>`)}</tr>
<tr>${label("Phone")}${value(phone)}</tr>
<tr>${label("Room")}${value(`<strong style="font-weight:600;">${room}</strong>`)}</tr>
</table>
${pricingHtml}
<p style="margin:22px 0 10px 0;font-family:system-ui,-apple-system,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#a64b2a;">Message / notes</p>
${note}
</td></tr>
<tr><td style="padding:18px 28px 24px 28px;background:#faf7f2;border-top:1px solid #e8e0d4;">
<p style="margin:0;font-family:system-ui,-apple-system,sans-serif;font-size:12px;color:#6b5f54;line-height:1.5;">Received <strong style="color:#241c17;font-weight:600;">${submitted}</strong></p>
<p style="margin:10px 0 0 0;font-family:system-ui,-apple-system,sans-serif;font-size:11px;color:#9a8f85;line-height:1.45;">Reply to this email to contact the guest directly.</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export function buildBookingEmailSubject(data: BookingMessageInput): string {
  const offer = getOfferById(data.offerId);
  const room = offer?.title ?? data.offerId;
  return `New booking · ${room} · ${data.name}`;
}
