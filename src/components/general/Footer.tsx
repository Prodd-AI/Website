import { footerItems } from "../../utils/footerItems";
import TextPressure from "../animated/TextPressure";
import GradientButton from "./GradientButton";
import Layout from "./Layout";
import TransparentButton from "./TransparentButton";

const Footer = () => {
  return (
    <>
      <Layout background="bg-black" relative={true}>
        <div className=" z-10 flex flex-col sm:items-center justify-center gap-6 px-6 sm:px-4 py-20 bg-gradient-to-b from-[#9747FF] to-black bg-clip-padding rounded-[50px]">
          <h1 className="text-[40px] md:text-[60px] font-semibold text-left sm:text-center w-full leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent z-10 relative">
              See Prod AI in Action
            </span>
          </h1>

          <p className="text-white font-normal text-base w-full text-left z-10 relative sm:text-center max-w-[450px]">
            Let us show you how the future of workplace intelligence feels. Not
            just function but flow.
          </p>

          <div className="flex sm:items-center items-start justify-center gap-4 mt-4 flex-col sm:flex-row">
            <GradientButton>
              <span className="text-white font-kumbh-semibold text-sm">
                Book Demo
              </span>
            </GradientButton>
            <TransparentButton>
              <span className="text-white font-kumbh-semibold text-sm">
                Talk to our team
              </span>
            </TransparentButton>
          </div>
        </div>
      </Layout>

      <div className="relative">
        <TextPressure
          text="PROD AI"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

      <Layout background="bg-black" relative={true}>
        <div className="flex items-center md:gap-10 gap-4 md:justify-center justify-start py-10 flex-wrap max-w-[200px] sm:max-w-none">
          {footerItems.map((item) => (
            <div
              key={item.label}
              className="text-white/50 text-[20px] md:text-[30px] tracking-wide cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#20D6FE] hover:to-[#9747FF] transition-all duration-200 font-normal"
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pb-10">
          <p className="text-[#FFFFFF]/20 text-[20px] md:text-[30px] text-center">
            © 2025 Prod AI. Building a smarter, healthier workplace.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Footer;
