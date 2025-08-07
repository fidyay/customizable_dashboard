import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const HyperLinkWrapper: React.FC<TProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border-border border p-4 min-h-24",
        className
      )}
    >
      {children}
    </div>
  );
};
