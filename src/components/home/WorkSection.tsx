import { integrationTools } from "../../utils/integration-tools";
import ScrollVelocity from "../animated/ScrollVelocity";
import Vector2 from "../../assets/images/vector-2.svg";

const WorkSection = () => {
  // Create a single element containing all integration tools in one row
  const integrationElements = [
    <div className="flex items-center" key="integration-row">
      {integrationTools.map((tool) => (
        <div
          className="flex items-center justify-center min-w-max gap-4 mx-8"
          key={tool.title}
        >
          <img
            src={tool.image}
            alt={tool.title}
            className="w-10 h-10 object-contain"
          />
          <p className="text-white/50 font-normal text-[32px]">{tool.title}</p>
        </div>
      ))}
    </div>,
  ];

  return (
    <div className="relative flex flex-col sm:items-center justify-center gap-20 h-[40rem] bg-gradient-to-b from-[#9747FF]/20 to-black">
      <img
        src={Vector2}
        alt="Vector 2"
        className="absolute bottom-0 left-0 z-0"
      />
      <div className="px-6 sm:px-4 flex flex-col sm:items-center justify-center gap-10">
        <h1 className="text-[40px] md:text-[60px] font-semibold text-left sm:text-center flex flex-col sm:items-center items-start z-20 justify-center leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Works Where You <span className="sm:hidden">Already</span>
          </span>
          <span className="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent">
            <span className="hidden sm:inline">Already</span> Work
          </span>
        </h1>

        <p className="text-white font-normal text-base sm:text-center text-left max-w-[500px] z-20">
          Effortlessly integrate with the tools you rely on. No disruptions.
          Just intelligent harmony.
        </p>
      </div>

      <div className="bg-[#D9D9D91A] backdrop-blur-md w-full overflow-hidden h-[100px] flex items-center justify-between gap-10 p-10 relative z-20">
        <ScrollVelocity
          elements={integrationElements}
          velocity={50}
          className="custom-scroll-elements"
          numCopies={100}
        />
      </div>
    </div>
  );
};

export default WorkSection;
