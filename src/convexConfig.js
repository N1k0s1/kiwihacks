export const convexUrl = import.meta.env.VITE_CONVEX_URL?.replace(/\/+$/, "");

export function isConvexConfigured() {
  return Boolean(convexUrl);
}
