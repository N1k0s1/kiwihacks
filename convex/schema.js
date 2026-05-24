import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  projects: defineTable({
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
    createdAt: v.number(),
    createdBy: v.string(),
    updatedAt: v.number(),
    updatedBy: v.string(),
  })
    .index("by_featured", ["featured"])
    .index("by_sort_order", ["sortOrder"]),
});
