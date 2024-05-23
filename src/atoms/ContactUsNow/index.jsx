import React from "react";
import { Link } from "react-router-dom";

const ContactUsNow = () => {
  return (
    <div className="bg-white my-8">
      <div className="flex justify-between px-24 py-10 max-md:flex-col">
        <div className="flex max-md:flex-col">
          <img
            src="/images/dove.gif"
            alt=""
            className="w-40 h-40 items-center"
          />
          <div className="my-auto">
            <p className="text-sm">Get the latest Offer</p>
            <p className=" text-xl font-medium">Contact Us Now</p>
          </div>
        </div>

        <div className="items-center my-auto">
          <Link to="/contact-us">
            <button className=" bg-blue-800 text-white rounded-md py-2 px-6">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsNow;
