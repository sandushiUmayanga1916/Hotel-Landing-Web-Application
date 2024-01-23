import React from "react";
import img from "/Images/aboutus.png";
import img1 from "/Images/Icon1.png";
import img2 from "/Images/Icon2.png";
import img3 from "/Images/Icon3.png";

const AboutUs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center  lg:px-[150px]  bg-[#F4F9F8] py-28 font-sans">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="font-sans font-semibold text-5xl">
            We care for each <br /> guest like a family
          </h2>
          <p className="font-normal text-xl text-[#6E706E] mt-[26px]">
            Create useful prototypes with our universal <br /> wireframes and blocks
            without any difficulties, <br /> just copy and paste wherever you want.
          </p>
          <div className="flex flex-col lg:flex-row gap-[18px] py-8">
            <img src={img1} alt="" className="h-14 w-14" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl text-[#1B1D21]">
                Best quality Hotel
              </h3>
              <p className="font-normal text-base">
                Sometimes features require a short description. This <br /> can be a
                detailed description or just a short text.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[18px]">
            <img src={img2} alt="" className="h-14 w-14" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl text-[#1B1D21]">
                Low price & many promo
              </h3>
              <p className="font-normal text-base">
                Sometimes features require a short description. This<br/> can be a
                detailed description or just a short text.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[18px] py-8">
            <img src={img3} alt="" className="h-14 w-14" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl text-[#1B1D21]">
                Money back guarantee
              </h3>
              <p className="font-normal text-base">
                Sometimes features require a short description. This <br /> can be a
                detailed description or just a short text.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-1/2 p-4 space-y-3 bg-[#F4F9F8] rounded-xl mt-4 lg:mt-0">
          <img className="rounded-lg max-w-fit" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
