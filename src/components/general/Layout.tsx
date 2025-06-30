const Layout = ({
  children,
  background,
  relative = false,
  addPadding = true,
}: {
  children: React.ReactNode;
  background: string;
  relative?: boolean;
  addPadding?: boolean;
}) => {
  return (
    <div className={`${background} w-full ${relative ? "relative" : ""}`}>
      <div
        className={`w-full max-w-[1400px] mx-auto ${
          addPadding ? "px-6 md:px-4" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
