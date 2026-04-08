/**
 * Encode each path segment for URLs (handles spaces and special chars in /public filenames).
 */
export function publicAssetPath(relativeToPublic: string): string {
  const trimmed = relativeToPublic.replace(/^\/+/, "");
  if (!trimmed) return "/";
  return `/${trimmed
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}
