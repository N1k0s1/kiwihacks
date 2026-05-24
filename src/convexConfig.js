export const convexUrl = import.meta.env.VITE_CONVEX_URL;

export function isConvexConfigured() {
  return Boolean(convexUrl);
}
