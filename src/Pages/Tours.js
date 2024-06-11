import React from "react";
import Navbar from "../molecules/Navbar";

const Tours = () => {
  return (
    <div>
      <Navbar />
      <div  className="mb-24">
        <img src="/images/tours-bg.jpg" alt="Tours background Image" className="h-screen w-full" />
        <p className="text-center">This is Tours Page</p>
      </div>
    </div>
  );
};

export default Tours;
