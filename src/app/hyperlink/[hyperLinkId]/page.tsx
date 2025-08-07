"use server";

import { hyperLinkParamIdSchema } from "@/lib/schemas";
import { EditHyperLinkView } from "@/lib/views/EditHyperLinkView";
import { redirect, RedirectType } from "next/navigation";
import z from "zod";

/*
  here I use server component in order to make my next.js server not load any resources to the client
  in case hyperLinkId param is invalid
*/
export default async function Page({
  params,
}: {
  params: Promise<{ hyperLinkId: string }>;
}) {
  const { hyperLinkId } = await params;

  try {
    await hyperLinkParamIdSchema.parseAsync(hyperLinkId);
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.log("Zod validation error: ", e.issues);
    } else {
      console.log(e);
    }
    redirect("/", RedirectType.replace);
  }

  return <EditHyperLinkView hyperLinkId={hyperLinkId} />;
}
