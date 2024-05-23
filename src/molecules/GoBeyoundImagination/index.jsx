import React from "react";
import { Link } from "react-router-dom";

const GoBeyoundImagination = () => {
  return (
    <div className="my-10 relative mx-4 bg-[#a91d3a] rounded-2xl py-6">
      <p className="text-center text-4xl font-light underline pt-8 text-white max-md:text-2xl">
        Go Beyond Imagination
      </p>
      <p className="text-center text-lg font-light  text-white max-md:text-sm">
        Let us help in discovering your ideal places
      </p>
      <div className="flex justify-center gap-3 max-md:flex-col py-8 max-md:items-center">
        <Link
          to="/flights"
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-sm"
        >
          <div className="">
            <img
              src="/images/flight.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-medium w-full h-24 text-xl bg-black text-[#F6F1E9] py-6 text-center bg-opacity-35 px-2">
              Flight
            </p>
          </div>
        </Link>
        <Link
          to="/passport"
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-sm"
        >
          <div class="">
            <img
              src="/images/passport.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-medium w-full h-24 text-xl bg-black text-[#F6F1E9] py-6 text-center bg-opacity-35 px-2">
              Passport
            </p>
          </div>
        </Link>
        <Link
          to="/visa"
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-sm"
        >
          <div>
            <img
              src="/images/visa.jpg"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-medium w-full h-24 text-xl bg-black text-[#F6F1E9] py-6 text-center bg-opacity-35 px-2">
              Visa
            </p>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-2 right-5 transform bg-white w-[200px] h-[200px] opacity-15 rounded-full"></div>
      <div className="absolute bottom-8 right-16 transform bg-white w-[100px] h-[100px] opacity-15 rounded-full"></div>
      <div className="absolute bottom-12 right-24 transform bg-white w-[40px] h-[40px] opacity-15 rounded-full"></div>

      <div className="absolute top-2 left-5 transform bg-white w-[200px] h-[200px] opacity-15 rounded-full"></div>
      <div className="absolute top-8 left-16 transform bg-white w-[100px] h-[100px] opacity-15 rounded-full"></div>
      <div className="absolute top-12 left-24 transform bg-white w-[40px] h-[40px] opacity-15 rounded-full"></div>
    </div>
  );
};

export default GoBeyoundImagination;

