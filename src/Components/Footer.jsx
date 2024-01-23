import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <div className=" bg-white md:mt-0 mt-[100px] py-16 font-sans">
        <hr className="mt-0 mb-16 border-background-[#DEDEDE] sm:mx-[150px] dark:border-[#DEDEDE] lg:my-8" />
        <div className="container mx-auto max-w-screen-2xl xl:px-[150px] flex flex-col md:flex-row justify-between p-8 md:px-32">
          <div className="md:min-w-1/4">
            <img src="/Images/Main Logo.png" alt="" />
            <p className=" font-normal text-sm text-[#262730]  mt-6 ">
              Sometimes features require a short description. This <br />
              can be detailed description or just a short text.
            </p>
          </div>
          <div>
            <h1 className=" font-semibold text-lg text-[#262730] pb-4 pt-5 md:pt-0">
              Company
            </h1>
            <nav className=" flex flex-col gap-4 text-sm text-[#6E706E] font-normal">
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer text-sm text-[#6E706E] font-normal"
                href="/"
              >
                About Us
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Testimonial
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Terms of services
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Privacy Policy
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Investor
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-semibold text-lg text-[#262730] pb-4 pt-5 md:pt-0">
              Services
            </h1>
            <nav className=" flex flex-col gap-4 text-sm text-[#6E706E] font-normal">
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Booking
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Support Center
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Blog
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Review
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Room
              </a>
            </nav>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-[#262730] pb-4 pt-5 md:pt-0">
              Recourses
            </h1>
            <nav className=" flex flex-col gap-4 text-sm text-[#6E706E] font-normal ">
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Help Center
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Guide
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Partner Network
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                FAQ’s
              </a>
              <a
                className=" hover:text-backgroundColor transition-all cursor-pointer"
                href="/"
              >
                Documentation
              </a>
            </nav>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
