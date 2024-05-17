import React, { useRef } from "react";
import "./Header.css";
import Navbar from "../../molecules/Navbar";
import PackagesForm from "../../molecules/PackagesForm";

const Header = () => {
  const packagesFormRef = useRef(null);

  const handleClickHere = () => {
    packagesFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="header-container">
        <video autoPlay loop muted className="header-video">
          <source src="/images/header-video.mp4" type="video/mp4" />
        </video>
        <div className="video-content">
          <p className="video-heading">Explore the World</p>
          <p className="video-sub-heading">
            Searching for Flights, Hotels, Tours, Car Bookings
            <button onClick={handleClickHere}>Click here</button>
          </p>
        </div>
      </div>
      <PackagesForm ref={packagesFormRef} />
    </>
  );
};

export default Header;
