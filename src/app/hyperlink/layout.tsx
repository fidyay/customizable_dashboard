type TProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Layout({ children }: TProps) {
  return <div className="w-full max-w-md mx-auto">{children}</div>;
}
