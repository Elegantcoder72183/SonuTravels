import React from "react";
import Navbar from "../molecules/Navbar";

const Visa = () => {
  return (
    <div>
      <Navbar />
      <div  className="mb-24" >
        <img src="/images/visa-bg.jpg" alt="Visa background Image" className="h-screen w-full" />
        <p className="text-center">This is Visa Page</p>
      </div>
    </div>
  );
};

export default Visa;
