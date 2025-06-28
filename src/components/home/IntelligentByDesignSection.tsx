import { features } from "../../utils/features";
import Layout from "../general/Layout";
import TransparentCard from "../general/TransparentCard";
import Vector1 from "../../assets/images/vector-1.svg";

const IntelligentByDesignSection = () => {
  return (
    <Layout
      background="bg-gradient-to-b from-[#9747FF]/20 to-black"
      relative={true}
    >
      <div className=" z-10 flex flex-col sm:items-center justify-center gap-6 min-h-[40rem] px-6 sm:px-4 py-40">
        <img src={Vector1} alt="Vector 1" className="absolute top-0 right-0" />
        <h1 className="text-[40px] md:text-[60px] font-semibold text-left w-full leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
          <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent z-10 relative">
            Intelligent by design.
          </span>
        </h1>

        <p className="text-white font-normal text-base w-full text-left z-10 relative">
          What makes Prod AI unlike anything you've used before?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {features.map((feature) => (
            <TransparentCard key={feature.title}>
              <div className="flex flex-col gap-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10"
                />
                <h2 className="text-white font-kumbh-semibold text-2xl">
                  {feature.title}
                </h2>
                <p className="text-white font-normal text-base">
                  {feature.description}
                </p>
              </div>
            </TransparentCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IntelligentByDesignSection;
