import React from "react";
import Navbar from "../molecules/Navbar";

const Passport = () => {
  return (
    <div>
      <Navbar />
      <div  className="mb-24">
        <img src="/images/passport-bg.jpg" alt="Passport background Image" className="h-screen w-full" />
        <p className="text-center">This is Passport's Page</p>
      </div>
    </div>
  );
};

export default Passport;
