/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Booking from './Pages/Booking'
import Offers from './Pages/Offers';
import HotelExplore from './Pages/HotelExplore';
import AboutUs from './Pages/AboutUs';
import Review from './Pages/Review';
import Footer from './Components/Footer';
import Subscribe from './Pages/Subscribe';


const App = () => {
  return (
    <div>

      <Navbar/>

       <main>
        
        <div id='/booking'>
          <Booking/>
        </div>

        <div id='/offers'>
          <Offers/>
        </div>

        <div id='/hotel-explore'>
          <HotelExplore/>
        </div>

        <div id='/about-us'>
          <AboutUs/>
        </div>

        <div id='/review'>
          <Review/>
        </div>

        <div id='/subscribe'>
          <Subscribe/>
        </div>
        
       </main>

       <Footer/>
    </div>
  )
}

export default App