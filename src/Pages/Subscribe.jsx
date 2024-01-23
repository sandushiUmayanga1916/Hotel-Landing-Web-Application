/* eslint-disable react/no-unknown-property */
import React from 'react'

const Subscribe = () => {
  return (
    <div className=" font-sans mt-8 grid grid-cols-2 gap-8 lg:mt-[64px] lg:grid-cols-5 lg:gap-y-16 lg:px-[150px]">
        <div className="col-span-2 w-[499px]">
          <div>
            <h2 className=" font-sans lg:text-5xl font-semibold text-[#121511]">Subscribe us for <br /> more info & discount </h2>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end lg:ml-[131px]">
          <form className="w-full">
            <div
              className=" bg-[#F7F8F9] rounded-full p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 "
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Enter your email address"
                className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm bg-[#F7F8F9] ml-6"
              />

              <button
                className="mt-1 w-full bg-[#34CAC6] rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        </div>
  )
}

export default Subscribe