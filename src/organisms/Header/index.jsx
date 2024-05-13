import React, { useState } from "react";
import "./Header.css";
import Navbar from "../../molecules/Navbar";
import PackagesForm from "../../molecules/PackagesForm";

const Header = () => {
  const [openPackagesForm, setOpenPackagesForm] = useState(false);

  const handlePackagesForm = () => {
    if (!openPackagesForm) {
      setOpenPackagesForm(true);
    } else {
      setOpenPackagesForm(false);
    }
  };
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
            <button onClick={handlePackagesForm}>Click here</button>
          </p>
        </div>
        {openPackagesForm && (
          <div className="form-container">
            {" "}
            <PackagesForm />{" "}
          </div>
        )}

        {/* <button className='enquiry Button'>Need Enquiry</button> */}
      </div>
    </>
  );
};

export default Header;
