import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";

function stripUndefined(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, fieldValue]) => fieldValue !== undefined),
  );
}

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    GitHub({
      profile(profile) {
        return stripUndefined({
          id: profile.id.toString(),
          name: profile.login,
          email: profile.email ?? undefined,
          image: profile.avatar_url ?? undefined,
        });
      },
    }),
  ],
});
