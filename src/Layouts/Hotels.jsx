/* eslint-disable react/prop-types */
import React from 'react'

const Hotels = (props) => {
  return (
    <div className="w-full lg:w-1/4 w- bg-white rounded-xl ">
      <div>
        <img className=" rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className=" p-4 mt-5 ">
        <div className="flex-wrap justiflexfy-between ">
          <h3 className=" font-semibold text-xl text-[#121511]">{props.title}</h3>
          <div className='flex flex-row justify-between'>
            <h3 className=" font-normal text-base text-[#6E706E]">{props.subTitle}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className=''>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z" fill="#FDBC7D"/>
            </svg>
            <p className='font-semibold text-base text[#121511]'>{props.rate}</p>

          </div>
          <div className='flex justify-start'>
          <h3 className="font-semibold text-2xl text-[#121511]">{props.value}</h3>
          <p className=' font-normal text-sm text-[#6E706E] mt-2'>{ props.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels