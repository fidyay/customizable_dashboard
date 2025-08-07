"use client";
import { useRouter } from "next/navigation";
import { THyperLink } from "../types";
import { useStore } from "../hooks";
import { useEffect } from "react";
import { EditCreateHyperLinkForm } from "../components/EditCreateHyperLinkForm";

type TProps = {
  hyperLinkId: THyperLink["id"];
};

export const EditHyperLinkView: React.FC<TProps> = ({ hyperLinkId }) => {
  const router = useRouter();

  const hyperLinks = useStore((state) => state.hyperLinks);

  const currentHyperLink = hyperLinks[hyperLinkId];

  useEffect(() => {
    if (Object.keys(hyperLinks).length > 0 && !currentHyperLink) {
      // here we are replacing cuz this is invalid url and we don't need to store it in history
      router.replace("/");
    }
  }, [hyperLinks, router, hyperLinkId]);

  // this action is instant for an end user and that's why I did not add any loader component here
  return currentHyperLink ? (
    <EditCreateHyperLinkForm hyperLink={currentHyperLink} />
  ) : null;
};
