import { footerItems } from "../../utils/footerItems";
import RotatingText from "../animated/RotatingText";
import TextPressure from "../animated/TextPressure";
import GradientButton from "./GradientButton";
import Layout from "./Layout";
import TransparentButton from "./TransparentButton";

const Footer = () => {
  return (
    <>
      <Layout background="" relative={true}>
        <div className=" z-10 flex flex-col sm:items-center justify-center gap-6 px-6 sm:px-4 py-20 bg-gradient-to-b from-[#9747FF] to-black bg-clip-padding rounded-[50px]">
          <h1 className="text-[40px] md:text-[60px] font-bold text-left sm:text-center w-full leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent z-10 relative flex sm:items-center items-start gap-4 justify-center sm:flex-row flex-col">
              See Prodily{" "}
              <RotatingText
                texts={[
                  "in action",
                  "in HR",
                  "as your buddy",
                  "in your workplace",
                  "in company culture",
                  "for better staffing",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-black/10 backdrop-blur-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-2xl inline-block text-[40px] md:text-[60px]"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
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

      <Layout background="" relative={true}>
        <div className="flex items-center md:gap-10 gap-4 md:justify-center justify-start py-10 flex-wrap max-w-[300px] sm:max-w-none">
          {footerItems.map((item) => (
            <div
              key={item.label}
              onClick={item.onClick}
              className="text-white/50 text-[20px] md:text-[30px] tracking-wide cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#20D6FE] hover:to-[#9747FF] transition-all duration-200 font-normal"
            >
              {item.label}
            </div>
          ))}
        </div>
      </Layout>

      <div className="relative">
        <TextPressure
          text="PRODILY"
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

      <Layout background="" relative={true}>
        <div className="flex items-center justify-center pb-10">
          <p className="text-[#FFFFFF]/20 text-[12px] md:text-[16px] text-center">
            © 2025 Prodily. Building a smarter, healthier workplace.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Footer;
