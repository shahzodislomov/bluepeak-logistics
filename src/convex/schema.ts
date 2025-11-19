// PLACEHOLDER: Schema file kept for future API integration
// This file is not currently in use but can be utilized when you add your custom API

import { defineSchema } from "convex/server";

const schema = defineSchema(
  {
    // TODO: Add your custom tables here when your API is ready
    // Example:
    // contacts: defineTable({
    //   name: v.string(),
    //   email: v.string(),
    //   message: v.string(),
    //   status: v.string(),
    // }),
  },
  {
    schemaValidation: false,
  },
);

export default schema;