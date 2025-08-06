import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const HyperLinkWrapper: React.FC<TProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border-border",
        className
      )}
    >
      {children}
    </div>
  );
};
