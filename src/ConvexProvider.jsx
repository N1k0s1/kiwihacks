import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { convexUrl } from "./convexConfig";

const convex = new ConvexReactClient(
  convexUrl || "https://missing-convex-url.convex.cloud",
);

export default function AppConvexProvider({ children }) {
  return (
    <ConvexAuthProvider
      client={convex}
      replaceURL={(relativeUrl) => window.history.replaceState({}, "", relativeUrl)}
    >
      {children}
    </ConvexAuthProvider>
  );
}
