import Layout from "./Layout";
import { headerItems } from "../../utils/headerItems";
import GradientButton from "./GradientButton";

const Header = () => {
  return (
    <Layout background="bg-black/20 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 h-[80px] w-full flex items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-[31px] h-[31px]" />
          <h1 className="text-white text-lg font-medium">Prod AI</h1>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {headerItems.map((item) => (
            <div
              key={item.label}
              className="text-white/50 text-base tracking-wide cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#20D6FE] hover:to-[#9747FF] transition-all duration-200 font-normal"
            >
              {item.label}
            </div>
          ))}
        </div>

        <GradientButton>
          <span className="text-white font-kumbh-semibold text-sm">
            Book Demo
          </span>
        </GradientButton>
      </div>
    </Layout>
  );
};

export default Header;
