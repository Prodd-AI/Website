const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-[#20D6FE] to-[#9747FF] text-white px-4 py-2 rounded-full cursor-pointer h-[40px] flex items-center justify-center hover:scale-105 transition-all duration-300">
      {children}
    </div>
  );
};

export default GradientButton;
