"use client";

import { useMemo } from "react";
import { useStore } from "../hooks";
import { HyperLink } from "../components/HyperLink";
import { EmptyHyperLink } from "../components/EmptyHyperLink";

const GRID_SIZE = 9;

export const HyperLinksView = () => {
  const hyperLinks = useStore((state) => state.hyperLinks);

  const hyperLinksArr = useMemo(() => {
    // sorting hyper links in ascending order
    return Object.values(hyperLinks).sort((a, b) => a.createdAt - b.createdAt);
  }, [hyperLinks]);

  const hyperLinksComponentsArr = useMemo(() => {
    const totalLinks = hyperLinksArr.length;

    const totalEmtpyLinks = GRID_SIZE - totalLinks;

    return [
      ...hyperLinksArr.map((hyperLink) => (
        <HyperLink key={hyperLink.id} hyperLink={hyperLink} />
      )),
      ...Array(totalEmtpyLinks)
        .fill(0)
        .map((_, index) => <EmptyHyperLink key={index} />),
    ];
  }, [hyperLinksArr]);

  return <div>{hyperLinksComponentsArr}</div>;
};
