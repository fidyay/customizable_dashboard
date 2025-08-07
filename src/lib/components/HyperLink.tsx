import { TAppColor, THyperLink } from "@/lib/types";
import { HyperLinkWrapper } from "./HyperLinkWrapper";
import { Button } from "./shadcn/button";
import { appBgColors, appHoverBgColors, cn } from "@/lib/utils";
import NextLink from "next/link";

type TEditHyperLinkButtonProps = {
  id: THyperLink["id"];
};

const EditHyperLinkButton: React.FC<TEditHyperLinkButtonProps> = ({ id }) => {
  return (
    <NextLink href={`/hyperlink/${id}`}>
      <Button variant={"outline"}>Edit</Button>
    </NextLink>
  );
};

type THyperLinkButtonProps = {
  link: string;
  color: TAppColor;
};

const HyperLinkButton: React.FC<THyperLinkButtonProps> = ({ color, link }) => {
  return (
    <a href={link} target="_blank">
      <Button className={cn(appBgColors[color], appHoverBgColors[color])}>
        Go
      </Button>
    </a>
  );
};

type TProps = {
  hyperLink: THyperLink;
};

export const HyperLink: React.FC<TProps> = ({ hyperLink }) => {
  return (
    <HyperLinkWrapper className="flex-col gap-2">
      <h3 className="max-w-full w-full truncate font-bold">
        {hyperLink.title}
      </h3>
      <div className="flex w-full items-center justify-start gap-2">
        <EditHyperLinkButton id={hyperLink.id} />
        <HyperLinkButton color={hyperLink.color} link={hyperLink.link} />
      </div>
    </HyperLinkWrapper>
  );
};
