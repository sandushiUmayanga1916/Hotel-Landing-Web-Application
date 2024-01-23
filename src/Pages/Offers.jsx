import React from "react";

const Offers = () => {
  return (
    <div className=" font-sans min-h-screen justify-center lg:flex-row lg:justify-between items-center lg:px-[150px] px-5 py-[100px] gap-10 bg-white">
      <h1 className=" font-sans font-semibold text-5xl mb-[9px] text-[#121511]">
        Best offer this month
      </h1>
      <div className="flex items-center">
        <h2 className="font-normal text-xl mb-[42px]">
          This can be a detailed description or just a short text
        </h2>
        <button className="w-full bg-[#F4F9F8] rounded-full ml-auto px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#34CAC6] transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0 m-1">
          view all
        </button>
      </div>

      <div className="grid lg:grid-cols-2 lg:py-[100px]">
        <div className=" bg-[#F4F9F8] rounded-3xl lg:flex  lg:max-w-lg p-[30px] text-center max-w-full">
          <img src="/Images/Base.jpg" />
          <div className="p-1 bg-[#F4F9F8]">
            <h2 className=" mb-2 text-[40px] font-semibold text-[#121511]">
              50% Off
            </h2>
            <p className="text-gray-600  text-base font-normal w-[262px] mb-8">
              This can be detailed description or just a short text.
            </p>
            <button className=" w-full bg-[#34CAC6] rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
              book now
            </button>
          </div>
        </div>
        <div className=" bg-[#F4F9F8] rounded-3xl lg:flex lg:max-w-lg p-[30px] text-center">
          <img src="/Images/Base2.png" />
          <div className="p-1 bg-[#F4F9F8]">
            <h2 className="mb-2 text-[40px] font-semibold text-[#121511]">
              30% Off
            </h2>
            <p className="text-gray-600  text-base font-normal w-[262px] mb-8">
              This can be detailed description or just a short text.
            </p>
            <button className=" w-full bg-[#34CAC6] rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
              book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
