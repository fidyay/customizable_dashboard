import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};

export const HyperLinkWrapper: React.FC<TProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
