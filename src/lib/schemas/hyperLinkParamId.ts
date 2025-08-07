import * as z from "zod";

const NANOID_SIZE = 21;

export const hyperLinkParamIdSchema = z
  .string()
  .length(NANOID_SIZE)
  .regex(/^[A-Za-z0-9_-]+$/);

export type THyperLinkParamIdSchema = z.infer<typeof hyperLinkParamIdSchema>;
