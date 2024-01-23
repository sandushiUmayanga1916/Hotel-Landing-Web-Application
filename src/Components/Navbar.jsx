import React, { useState } from 'react'
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

  const handlChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className=" container mx-auto max-w-screen-2xl py-[29px] xl:px-[150px] cursor-pointer bg-white">
        <nav className="flex justify-between items-center font-sans">
            <a href="/" className='flex items-center'>
                <img src="/Images/Main Logo.png" alt="" className='h-[22px] w-[131px]' />
            </a>
            <div className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>

            <Link
              to="booking"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Booking
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            
            <Link
              to="booking"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Facilities
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="room"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Room
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            
            <div className="hidden space-y-20 text-base font-medium text-pretty lg:block ml-[274.5px]">
                <Link to="/login" className="px-5 py-2 border-none rounded">Login</Link>
                <Link to="/sign-up" className="px-5 py-2 text-white border rounded-full bg-buttonColor">Sign Up</Link>
            </div>
            </div>
        </nav>
        <div className=" md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handlChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handlChange} />
            )}
          </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-buttonColor text-white left-0 top-18 font-semibold text-lg text-center pt-5 pb-5 gap-5 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="booking"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Booking 
          </Link>
          <Link
            to="facilities"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Facilities
          </Link>
          <Link
            to="room"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Room
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Link to="/login" className="px-5 py-2 cursor-pointer">Login</Link>
          <Link to="/sign-up" className="px-5 py-2 text-whitebg-buttonColor cursor-pointer">Sign Up</Link>
        </div>
        
    </header>
  )
}

export default Navbar