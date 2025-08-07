import * as z from "zod";
import { appColorsArr } from "../utils";

const errorCallback: z.core.$ZodErrorMap<z.core.$ZodIssue> = (iss) =>
  iss.input === undefined || iss.input === ""
    ? "Field is required"
    : "Invalid input";

export const hyperLinkSchema = z.object({
  title: z
    .string({
      error: errorCallback,
    })
    .nonempty({
      error: errorCallback,
    })
    .max(50, {
      error: (iss) => {
        return `Max length is ${iss.maximum} symbols`;
      },
    }),
  link: z.url({
    error: errorCallback,
  }),
  color: z.enum(appColorsArr),
});

export type THyperLinkSchema = z.infer<typeof hyperLinkSchema>;
