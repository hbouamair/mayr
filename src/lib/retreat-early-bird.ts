/** Days before retreat start required for early-bird rate (booking today vs first retreat day). */
export const EARLY_BIRD_MIN_DAYS_BEFORE_START = 30;

/**
 * Early bird applies when the booking moment is **more than** this many full days before the retreat’s first day.
 * `retreatStartIso` is `YYYY-MM-DD` (local calendar day).
 */
export function isEarlyBirdEligible(retreatStartIso: string, when: Date = new Date()): boolean {
  const parts = retreatStartIso.split("-").map((n) => Number.parseInt(n, 10));
  if (parts.length !== 3 || parts.some((x) => Number.isNaN(x))) return false;
  const [y, mo, d] = parts;
  const start = new Date(y, mo - 1, d, 12, 0, 0, 0);
  const diffDays = (start.getTime() - when.getTime()) / 86_400_000;
  return diffDays > EARLY_BIRD_MIN_DAYS_BEFORE_START;
}
