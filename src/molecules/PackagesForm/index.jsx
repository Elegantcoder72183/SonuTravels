import React, { useState } from "react";
import FlightsForm from "./FlightsForm";
import TravelForm from "./TravelForm";
import HotelAndStaysForm from "./HotelAndStaysForm";
import VisaForm from "./VisaForm";
import PassportForm from "./PassportForm";

const PackagesForm = React.forwardRef((props, ref) => {
  const [selectedPackage, setSelectedPackage] = useState("flights");

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const formTitles = [
    {
      label: "Flights",
      name: "package",
      value: "flights",
    },
    {
      label: "Travel",
      name: "package",
      value: "travel",
    },
    {
      label: "Hotel & Stays",
      name: "package",
      value: "hotel_and_stays",
    },
    {
      label: "Visa",
      name: "package",
      value: "visa",
    },
    {
      label: "Passport",
      name: "package",
      value: "passport",
    },
  ];
  return (
    <div ref={ref}>
      <div className="mx-auto w-11/12 my-8 h-60 bg-white  rounded-2xl shadow-xl py-10 max-xl:h-[700px] max-lg:h-[880px]">
        <div className="flex justify-center gap-7 max-lg:flex-col max-lg:items-center ">
          {formTitles.map((title, index) => (
            <div
              key={index}
              className={` text-lg   rounded-lg px-4 font-normal ${
                selectedPackage === title.value
                  ? "bg-[#a91d3a] text-white"
                  : "text-[#a91d3a]"
              }`}
              onClick={() => setSelectedPackage(title.value)}
            >
              <input
                type="radio"
                id={title.value}
                name={title.name}
                value={title.value}
                checked={selectedPackage === title.value}
                onChange={handlePackageChange}
                className="hidden"
              />
              <label className=" cursor-pointer" for="html">
                {title.label}
              </label>
            </div>
          ))}
        </div>
        {selectedPackage === "flights" && <FlightsForm />}
        {selectedPackage === "travel" && <TravelForm />}
        {selectedPackage === "hotel_and_stays" && <HotelAndStaysForm />}
        {selectedPackage === "visa" && <VisaForm />}
        {selectedPackage === "passport" && <PassportForm />}
      </div>
    </div>
  );
});

export default PackagesForm;
