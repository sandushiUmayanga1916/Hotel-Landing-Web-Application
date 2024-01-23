/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'
import img1 from '/Images/pic1.png'
import img2 from '/Images/pic2.png'

const Review = () => {
  return (
    <div className=" font-sans min-h-screen flex flex-col justify-center  lg:px-[150px]  bg-[#F4F9F8] py-28">
    <h1 className=" font-sans font-semibold  text-5xl lg:mt-14 text-[#121511]">
        What people say..
    </h1>
    <h2 className=' font-normal text-xl text-[#6E706E] mt-[9px]'>This can be detailed description or just a short text.</h2>

    <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
      <ReviewCard img={img1} title="Angela Karamoy" companyName="Happy Customer" />
      <ReviewCard img={img2} title="Jessica Zhui" companyName="Happy Customer"/>
    </div>
  </div>
  )
}

export default Review