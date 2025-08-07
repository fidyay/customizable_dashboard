import { LucidePlus } from "lucide-react";
import { HyperLinkWrapper } from "./HyperLinkWrapper";
import NextLink from "next/link";

export const EmptyHyperLink = () => {
  return (
    <HyperLinkWrapper className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
      <NextLink
        className="h-full w-full flex items-center justify-center"
        href={"/hyperlink"}
      >
        <LucidePlus />
      </NextLink>
    </HyperLinkWrapper>
  );
};
