"use client";

import { EditCreateHyperLinkForm } from "../components/EditCreateHyperLinkForm";
import { useStore } from "../hooks";

export const CreateHyperLinkView = () => {
  const addHyperLink = useStore((state) => state.addHyperLink);

  return <EditCreateHyperLinkForm onSubmit={addHyperLink} />;
};
