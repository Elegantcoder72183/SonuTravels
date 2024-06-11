import React from "react";
import Navbar from "../molecules/Navbar";

const Flights = () => {
  return (
    <div>
      <Navbar />
      <div  className="mb-24" >
        <img src="/images/flights-bg.jpg" alt="Flights background Image" className="h-screen w-full" />
        <p className="text-center">This is Flight's Page</p>
      </div>
    </div>
  );
};

export default Flights;
