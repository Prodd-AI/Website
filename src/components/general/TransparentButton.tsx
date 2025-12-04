const TransparentButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md border border-white/50 rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <span className="text-white font-kumbh-semibold text-sm">{children}</span>
    </div>
  );
};

export default TransparentButton;
