const Layout = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) => {
  return (
    <div className={`${background} w-full`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
