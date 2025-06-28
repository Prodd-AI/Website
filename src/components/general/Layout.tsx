const Layout = ({
  children,
  background,
  relative = false,
}: {
  children: React.ReactNode;
  background: string;
  relative?: boolean;
}) => {
  return (
    <div className={`${background} w-full ${relative ? "relative" : ""}`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
