import Layout from "../general/Layout";
import image from "../../assets/images/productivity-tools.jpg";

const SecondSection = () => {
  return (
    <div className="relative z-10 flex flex-col sm:items-center justify-center gap-6 min-h-[30rem] bg-gradient-to-b from-black to-[#9747FF]/20 px-6 sm:px-4 pt-40">
      <h1 className="text-[40px] md:text-[60px] font-semibold text-left sm:text-center flex flex-col items-center justify-center leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Work has changed.
        </span>
        <span className="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent">
          Productivity tools haven't.
        </span>
      </h1>

      <p className="text-white font-normal text-base sm:text-center text-left max-w-[600px]">
        Traditional tools obsess over output. Prod AI understands humans. It
        doesn't just clock tasks it listens. It sees the signs of stress. It
        tunes into team morale. All in real time. All with empathy.
      </p>

      <Layout background="mt-10" relative={true}>
        <img
          src={image}
          alt="productivity-tools"
          className="w-full md:h-[35rem] h-[25rem] object-cover rounded-[24px] brightness-90"
        />
      </Layout>
    </div>
  );
};

export default SecondSection;
