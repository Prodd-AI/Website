import GradientButton from "../general/GradientButton";
import TransparentButton from "../general/TransparentButton";
import heroBg from "../../assets/images/hero-bg.png";
import { scrollToSection } from "../../utils/scrollToSection";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[40rem] gap-6 relative px-6 sm:px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      <div className="relative z-10 flex flex-col sm:items-center justify-center gap-6">
        <h1 className="text-[40px] md:text-[80px] font-semibold text-left sm:text-center flex flex-col items-center justify-center leading-12 md:leading-26  max-w-[300px] sm:max-w-none">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            The AI Operating System
          </span>
          <span className="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent">
            for Human Potential
          </span>
        </h1>

        <p className="text-white font-normal text-base sm:text-center text-left max-w-[600px]">
          Empower your workforce with intelligent agents that amplify
          productivity, detect burnout early, and elevate team culture before
          it's too late.
        </p>

        <div className="flex sm:items-center items-start justify-center gap-4 mt-4 flex-col sm:flex-row">
          <GradientButton onClick={() => scrollToSection("features")}>
            <span className="text-white font-kumbh-semibold text-sm">
              See Prodily in action
            </span>
          </GradientButton>
          <TransparentButton>
            <span className="text-white font-kumbh-semibold text-sm">
              Talk to our team
            </span>
          </TransparentButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
