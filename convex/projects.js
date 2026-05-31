import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
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

function getGitHubUsername(user) {
  if (!user?.name || user.name.includes(" ")) {
    return null;
  }

  return user.name.toLowerCase();
}

async function getSignedInUser(ctx) {
  const userId = await getAuthUserId(ctx);
  if (!userId) {
    return null;
  }

  return await ctx.db.get(userId);
}

async function getAdmin(ctx) {
  const user = await getSignedInUser(ctx);
  if (!user) {
    return { isAdmin: false, user: null };
  }

  const allowedUsernames = (process.env.ADMIN_GITHUB_USERNAMES || "")
    .split(",")
    .map((username) => username.trim().replace(/^@/, "").toLowerCase())
    .filter(Boolean);

  if (allowedUsernames.length === 0) {
    return { isAdmin: true, user };
  }

  const username = getGitHubUsername(user);
  return {
    isAdmin: Boolean(username && allowedUsernames.includes(username)),
    user,
  };
}

async function requireAdmin(ctx) {
  const admin = await getAdmin(ctx);
  if (!admin.user) {
    throw new Error("Sign in with GitHub first.");
  }
  if (!admin.isAdmin) {
    throw new Error("You are not allowed to manage showcase projects.");
  }
  return admin.user;
}

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const admin = await getAdmin(ctx);
    if (!admin.user) {
      return { isAuthenticated: false, isAdmin: false };
    }

    return {
      isAuthenticated: true,
      isAdmin: admin.isAdmin,
      name: admin.user.name,
      username: getGitHubUsername(admin.user),
      email: admin.user.email,
      pictureUrl: admin.user.image,
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
    const user = await requireAdmin(ctx);
    const username = getGitHubUsername(user) || user.email || user._id;
    const now = Date.now();
    return await ctx.db.insert("projects", {
      ...args,
      createdAt: now,
      createdBy: username,
      updatedAt: now,
      updatedBy: username,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    ...projectFields,
  },
  handler: async (ctx, args) => {
    const user = await requireAdmin(ctx);
    const { id, ...patch } = args;
    await ctx.db.patch(id, {
      ...patch,
      updatedAt: Date.now(),
      updatedBy: getGitHubUsername(user) || user.email || user._id,
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
