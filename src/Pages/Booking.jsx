/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import img from "/Images/Rectangle.png";
import { CiSearch } from "react-icons/ci";

const Booking = () => {
  const [location, setLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // If the user selects an option, update the location state
    if (value !== "custom") {
      setLocation(value);
    }
  };

  const handleCustomLocationChange = (e) => {
    setLocation(e.target.value);
    setSelectedOption("custom");
  };

  const locations = [
    { value: "paris", label: "Paris" },
    { value: "new-york", label: "New York" },
  ];
  const [numRooms, setNumRooms] = useState(1);

  const handleSearch = () => {};
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Set the default value to today's date
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    setSelectedDate(formattedToday);
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#F4F9F8]">
        <div className="w-full lg:w-2/4 relative">
          <img 
            className="lg:h-[792px] w-full object-cover mb-3 lg:mb-0"
            src={img}
            alt="img"
          />

          <div className="resolution flex lg:absolute transform w-full lg:px-[150px] top-[572px] font-sans">
            <div className="flex flex-col lg:flex-row items-center space-x-2 w-fit  shadow-lg rounded-xl lg:rounded-full lg:w-fit lg:h-fit divide-x divide-[#DFDFDF] bg-white">
              <div className="flex flex-col lg:items-start">
                <label
                  htmlFor="location"
                  className="text-gray-600  ml-16 flex"
                >
                  <img src="/Images/location.png" alt="" className="mr-2" />
                  Location
                </label>

                <select
                  id="location"
                  value={selectedOption}
                  onChange={handleLocationChange}
                  className="p-2 rounded ml-16 bg-white"
                >
                  <option value="" disabled>
                    Select location...
                  </option>
                  {locations.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  <option value="custom">Custom Location</option>
                </select>

                {selectedOption === "custom" && (
                  <input
                    type="text"
                    placeholder="Bali, Indonisia"
                    className="p-2 rounded ml-16 bg-white"
                    value={location}
                    onChange={handleCustomLocationChange}
                  />
                )}
              </div>
              <div className="flex flex-col pl-3 ">
                <label htmlFor="location" className="text-gray-600 flex">
                  <img src="/Images/checkin.png" alt="" className="mr-2" />
                  Check-in
                </label>
                <input
                  type="date"
                  placeholder="Ex: 2024-01-12"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="p-2 rounded"
                />
              </div>

              <div className="flex flex-col items-start pl-3 ">
                <label
                  htmlFor="checkOutDate"
                  className="text-gray-600 flex"
                >
                  <img src="/Images/checkout.png" alt="" className="mr-2" />
                  Check-out
                </label>
                <input
                  type="date"
                  placeholder="Ex: 2024-01-12"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="p-2 rounded"
                />
              </div>

              <div className="flex flex-col items-start pl-3">
                <label htmlFor="numRooms" className="text-gray-600  flex">
                  <img src="/Images/room.png" alt="" className="mr-2" />
                  Room
                </label>
                <select
                  id="numRooms"
                  value={numRooms}
                  onChange={(e) => setNumRooms(parseInt(e.target.value))}
                  className="bg-white p-2 rounded"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Room(s)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="bg-[#34CAC6] text-white lg:p-10 p-3 rounded-2xl lg:rounded-full flex  hover:bg-blue-700 ml-auto lg:flex"
              >
                <CiSearch className=" h-6 w-6 mr-2" />
                Search
              </button>
            </div>
          </div>
      
          
        </div>

        <div className="w-full lg:w-2/4 space-y-3 p-7 lg:ml-[100px] lg:mt-[100px]">
          <h2 className="font-semibold lg:text-[64px] text-5xl top-[100px] mb-6 ">
            Experience something <br /> new every <br /> moment
          </h2>
          <p className="text-[#6E706E] lg:text-xl font-normal">
            Escape to a place where you can relax and <br /> unwind, rejuvenate,
            and reconnect
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
