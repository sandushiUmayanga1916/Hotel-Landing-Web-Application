/* eslint-disable react/prop-types */
import React from 'react'
import { BsStarFill } from "react-icons/bs";

const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col w-full lg:w-3/4 bg-white p-3 gap-[30px] py-11 rounded-xl">
      
        
        <div className=" mx-10">

          <div className=" flex">
            <BsStarFill className=" text-yellow-400" />
            <BsStarFill className=" text-yellow-400" />
            <BsStarFill className=" text-yellow-400" />
            <BsStarFill className=" text-yellow-400" />
            <BsStarFill className=" text-yellow-400" />
          </div>

        <span className=" ml-16">
         
        </span>
      </div>
      
      <p className=' px-10 text-lg font-normal text-[#121511] top-[38px]'>
      Designspace is a really great site with really great people and the 
      quality of content is excellent. Some of the best designers in the world use this, 
      and it is inspirational.
      </p>

      <div className=" ml-10 flex flex-row">
          <img className=" rounded-full" src={props.img} alt="img" />
       
        
      <div className='flex flex-col lg:justify-start ml-4'>
        <h2 className=" font-semibold text-lg text-[#121511]">{props.title}</h2>
        <h2 className=" font-normal text-base text-[#6E706E]">{props.companyName}</h2>
      </div>
      </div>
    </div>
  )
}

export default ReviewCard