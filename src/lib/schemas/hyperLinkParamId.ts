import * as z from "zod";

const NANOID_SIZE = 21;

export const hyperLinkParamIdSchema = z
  .string()
  .length(NANOID_SIZE)
  .regex(/[^\w\-]/);

export type THyperLinkParamIdSchema = z.infer<typeof hyperLinkParamIdSchema>;
