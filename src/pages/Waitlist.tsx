import Form from "../components/waitlist/Form";
import waitlist_image from "../assets/images/waitlist-img.png";

const Waitlist = () => {
  return (
    <div className="bg-linear-to-br from-[#E4D6FA] via-transparent to-[#F8F8F9] min-h-screen grid grid-cols-1 lg:grid-cols-2 py-4 md:py-8 lg:py-[38px] px-4 md:px-8 lg:px-30 gap-4 lg:gap-0">
      {/* Image Section - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:flex relative items-center justify-center overflow-hidden">
        <div className="relative max-w-full max-h-full">
          <img
            src={waitlist_image}
            alt="waitlist"
            className="rounded-[27.35px] w-full h-auto max-h-[calc(100vh-76px)] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000] rounded-[27.35px] pointer-events-none"></div>
          <div className="absolute bottom-10 text-[24px] xl:text-[32.26px] px-10 xl:px-20 text-[#FFFFFF] font-medium">
            <h4 className="text-left">
              Stay on top of your <i>work</i> and <i>emotions</i>.
            </h4>
          </div>
        </div>
      </div>

      {/* Form Section - Full width on mobile, half width on large screens */}
      <div className="w-full flex items-start lg:items-center overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto lg:max-w-none">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
