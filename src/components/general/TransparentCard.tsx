const TransparentCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#D9D9D91A] backdrop-blur-md border border-white/50 rounded-[20px] p-10 cursor-pointer hover:scale-105 transition-all duration-300">
      <span className="text-white font-kumbh-semibold text-sm">{children}</span>
    </div>
  );
};

export default TransparentCard;
