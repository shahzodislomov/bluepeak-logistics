import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get all contact submissions (for admin panel later)
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});

// Mutation to create a new contact submission
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      message: args.message,
      status: "new",
    });
    return contactId;
  },
});
