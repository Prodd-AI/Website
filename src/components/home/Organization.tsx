import { organizations } from "../../utils/organizations";
import Layout from "../general/Layout";
import TransparentCard from "../general/TransparentCard";
import image from "../../assets/images/team.jpg";

const Organization = () => {
  return (
    <Layout
      background="bg-gradient-to-b from-black/80 to-[#9747FF]/20"
      relative={true}
    >
      <div className=" z-10 flex flex-col sm:items-center justify-center gap-6 min-h-[20rem] sm:py-20 py-0">
        <h1 className="text-[40px] md:text-[60px] font-semibold text-left w-full leading-12 md:leading-20 max-w-[300px] sm:max-w-none">
          <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
            For Every Layer of Your Organization
          </span>
        </h1>

        <p className="text-white font-normal text-base w-full text-left">
          What makes Prodily unlike anything you've used before?
        </p>

        <img
          src={image}
          alt="productivity-tools"
          className="w-fullh-auto min-h-[250px] object-cover rounded-[24px] brightness-90"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {organizations.map((organization) => (
            <TransparentCard key={organization.title}>
              <div className="flex flex-col gap-6">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#20D6FE] font-kumbh-semibold text-2xl">
                  {organization.title}
                </h2>
                <p className="text-white font-normal text-base">
                  {organization.description}
                </p>
              </div>
            </TransparentCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Organization;
