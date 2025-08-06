import * as z from "zod";
import { appColorsArr } from "../utils";

export const hyperLinkSchema = z.object({
  title: z.string().max(50),
  link: z.url(),
  color: z.enum(appColorsArr),
});

export type THyperLinkSchema = z.infer<typeof hyperLinkSchema>;
