import { THyperLinkSchema } from "../schemas";

export type THyperLink = THyperLinkSchema & { id: string; createdAt: number };
