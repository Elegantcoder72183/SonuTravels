import React from "react";
import Navbar from "../molecules/Navbar";

const AboutUs = () => {
  return (
    <div >
      <Navbar />
      <div  className="mb-24">
        <img src="/images/about-us-bg.jpg" alt="About Us background Image" className="h-screen w-full" />
        <p className="text-center">This is About Us Page</p>
      </div>
    </div>
  );
};

export default AboutUs;
