import { LucidePlus } from "lucide-react";
import { HyperLinkWrapper } from "./HyperLinkWrapper";

type TProps = {
  // I use function from props instead of creating it inside of component in order to not fill the RAM of a device with similar functions
  onClick: () => void;
};

export const EmptyHyperLink: React.FC<TProps> = ({ onClick }) => {
  return (
    <HyperLinkWrapper onClick={onClick}>
      <LucidePlus />
    </HyperLinkWrapper>
  );
};
