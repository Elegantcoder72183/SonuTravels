import React from "react";
import Navbar from "../molecules/Navbar";

const ContactUs = () => {
  return (
    <div >
      <Navbar />
      <div className="mb-24">
        <img src="/images/contact-us-bg.jpg" alt="Contact Us background Image" className="h-screen w-full" />
        <p className="text-center">This is Contact Us Page</p>
      </div>
    </div>
  );
};

export default ContactUs;
