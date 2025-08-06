import * as z from "zod";
import { appColorsArr } from "../utils";

export const hyperLinkSchema = z.object({
  name: z.string(),
  link: z.url(),
  color: z.enum(appColorsArr),
});

export type THyperLinkSchema = z.infer<typeof hyperLinkSchema>;
