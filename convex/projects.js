import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const projectFields = {
  title: v.string(),
  team: v.string(),
  description: v.string(),
  imageUrl: v.string(),
  event: v.string(),
  place: v.string(),
  points: v.number(),
  repoUrl: v.string(),
  demoUrl: v.string(),
  featured: v.boolean(),
  sortOrder: v.number(),
};

function getGitHubUsername(identity) {
  const profileUsername = identity.preferredUsername || identity.nickname;
  if (profileUsername) {
    return profileUsername.toLowerCase();
  }

  if (identity.name && !identity.name.includes(" ")) {
    return identity.name.toLowerCase();
  }

  return null;
}

async function getAdmin(ctx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return { isAdmin: false, identity: null };
  }

  const allowedUsernames = (process.env.ADMIN_GITHUB_USERNAMES || "")
    .split(",")
    .map((username) => username.trim().replace(/^@/, "").toLowerCase())
    .filter(Boolean);

  if (allowedUsernames.length === 0) {
    return { isAdmin: true, identity };
  }

  const username = getGitHubUsername(identity);
  return {
    isAdmin: Boolean(username && allowedUsernames.includes(username)),
    identity,
  };
}

async function requireAdmin(ctx) {
  const admin = await getAdmin(ctx);
  if (!admin.identity) {
    throw new Error("Sign in with GitHub first.");
  }
  if (!admin.isAdmin) {
    throw new Error("You are not allowed to manage showcase projects.");
  }
  return admin.identity;
}

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const admin = await getAdmin(ctx);
    if (!admin.identity) {
      return { isAuthenticated: false, isAdmin: false };
    }

    return {
      isAuthenticated: true,
      isAdmin: admin.isAdmin,
      name: admin.identity.name,
      username: getGitHubUsername(admin.identity),
      email: admin.identity.email,
      pictureUrl: admin.identity.pictureUrl,
      unrestrictedDevMode: !(process.env.ADMIN_GITHUB_USERNAMES || "").trim(),
    };
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_sort_order")
      .collect();
    return projects.sort((a, b) => a.sortOrder - b.sortOrder);
  },
});

export const create = mutation({
  args: projectFields,
  handler: async (ctx, args) => {
    const identity = await requireAdmin(ctx);
    const now = Date.now();
    return await ctx.db.insert("projects", {
      ...args,
      createdAt: now,
      createdBy: getGitHubUsername(identity) || identity.subject,
      updatedAt: now,
      updatedBy: getGitHubUsername(identity) || identity.subject,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    ...projectFields,
  },
  handler: async (ctx, args) => {
    const identity = await requireAdmin(ctx);
    const { id, ...patch } = args;
    await ctx.db.patch(id, {
      ...patch,
      updatedAt: Date.now(),
      updatedBy: getGitHubUsername(identity) || identity.subject,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.delete(args.id);
  },
});
