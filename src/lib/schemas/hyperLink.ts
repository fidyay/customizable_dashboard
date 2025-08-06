import * as z from "zod";

export const hyperLinkSchema = z.object({
  name: z.string(),
  link: z.url(),
});

export type THyperLinkSchema = z.infer<typeof hyperLinkSchema>;
