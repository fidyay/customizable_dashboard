"use client";
import { useRouter } from "next/navigation";
import { EditCreateHyperLinkForm } from "../components/EditCreateHyperLinkForm";
import { useStore } from "../hooks";
import { useEffect } from "react";
import { MAX_TOTAL_HYPERLINKS } from "../utils";

export const CreateHyperLinkView = () => {
  const router = useRouter();

  const hyperLinks = useStore((state) => state.hyperLinks);

  useEffect(() => {
    // redirect from here in case user already has the max amount of hyperlinks
    if (Object.keys(hyperLinks).length >= MAX_TOTAL_HYPERLINKS) {
      // here we are replacing cuz this is invalid url and we don't need to store it in history
      router.replace("/");
    }
  }, [hyperLinks, router]);

  return <EditCreateHyperLinkForm />;
};
