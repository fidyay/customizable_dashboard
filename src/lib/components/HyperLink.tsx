import { TAppColor, THyperLink } from "@/lib/types";
import { HyperLinkWrapper } from "./HyperLinkWrapper";
import { Button } from "./shadcn/button";
import { appColors } from "@/lib/utils";

type THyperLinkButtonProps = {
  link: string;
  color: TAppColor;
};

const HyperLinkButton: React.FC<THyperLinkButtonProps> = ({ color, link }) => {
  return (
    <a href={link} target="_blank">
      <Button className={`bg-${appColors[color]}`}>Go</Button>
    </a>
  );
};

type TProps = {
  hyperLink: THyperLink;
};

export const HyperLink: React.FC<TProps> = ({ hyperLink }) => {
  return (
    <HyperLinkWrapper className="flex-col gap-2">
      <h3>{hyperLink.title}</h3>
      <HyperLinkButton color={hyperLink.color} link={hyperLink.link} />
    </HyperLinkWrapper>
  );
};
