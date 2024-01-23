import React from "react";
import Hotels from "../Layouts/Hotels";
import img1 from "/Images/img1.jpeg";
import img2 from "/Images/img2.jpeg";
import img3 from "/Images/img3.jpeg";
import img4 from "/Images/img4.jpeg";
import img5 from "/Images/img5.jpeg";
import img6 from "/Images/img6.jpeg";

const HotelExplore = () => {
  return (
    <div className=" font-sans min-h-screen flex flex-col justify-center lg:px-32 px-5 py-[100px] xl:px-[150px] bg-[#F4F9F8]">
      <h1 className=" font-sans font-semibold text-5xl mb-[9px] text-[#121511]">
        Explore popular hotel
      </h1>
      <div className="flex items-center">
        <h2 className="font-normal text-xl mb-[42px]">
          This can be a detailed description or just a short text
        </h2>
        <button className="w-full bg-[#34CAC6] rounded-full ml-auto px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0 m-1">
          view all
        </button>
      </div>

      <div className=" flex flex-wrap pb-8 gap-8 justify-between">
        <Hotels
          img={img1}
          title="Grand Maranga Ubud"
          subTitle="Bali, Indonesia"
          rate="4.8"
          value="$240"
          time="/night"
        />
        <Hotels
          img={img2}
          title="Royal Gremasha"
          subTitle="London, England"
          rate="4.8"
          value="$240"
          time="/night"
        />
        <Hotels
          img={img3}
          title="Royal Gremasha"
          subTitle="Paris, France"
          rate="4.8"
          value="$240"
          time="/night"
        />
        <Hotels
          img={img4}
          title="Hurgasi Hotel"
          subTitle="Rome, Italy"
          rate="4.8"
          value="$240"
          time="/night"
        />
        <Hotels
          img={img5}
          title="The Victoria Group"
          subTitle="Istanbul, Turkey"
          rate="4.8"
          value="$240"
          time="/night"
        />
        <Hotels
          img={img6}
          title="Ritz Yokama Hotel"
          subTitle="Tokyo, Japan"
          rate="4.8"
          value="$240"
          time="/night"
        />
      </div>
    </div>
  );
};

export default HotelExplore;
