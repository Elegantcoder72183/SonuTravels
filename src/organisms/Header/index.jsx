import React, { useState } from "react";
import "./Header.css";
import Navbar from "../../molecules/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <video autoPlay loop muted className="header-video">
          <source src="/images/header-video.mp4" type="video/mp4" />
          <p className="video-heading">Explore the World</p>
          <p className="video-sub-heading">
            Searching for Flights, Hotels, Tours, Car Bookings
          </p>
        </video>
        <div className="video-content">
          <p className="video-heading">Explore the World</p>
          <p className="video-sub-heading">
            Searching for Flights, Hotels, Tours, Car Bookings
            <button>Click here</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
