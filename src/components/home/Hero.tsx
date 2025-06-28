import GradientButton from "../general/GradientButton";
import TransparentButton from "../general/TransparentButton";
import heroBg from "../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[40rem] gap-6 relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-[80px] font-semibold text-center flex flex-col items-center justify-center leading-26">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            The AI Operating System
          </span>
          <span className="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent">
            for Human Potential
          </span>
        </h1>

        <p className="text-white font-normal text-base text-center max-w-[600px]">
          Empower your workforce with intelligent agents that amplify
          productivity, detect burnout early, and elevate team culture before
          it's too late.
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <GradientButton>
            <span className="text-white font-kumbh-semibold text-sm">
              See ProdAI in action
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
