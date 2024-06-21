import React, { useState } from "react";
import IndianDestinations from "../../atoms/IndianDestinations/Index";
import ForeignDestination from "../../atoms/ForeignDestination";
const TopDestinations = () => {

  const [selectedDestination, setDestination] = useState("IndianDestinations");

  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  const formTitles = [
    {
      label: "India",
      name: "package",
      value: "IndianDestinations",
    },
    {
      label: "Foreign",
      name: "package",
      value: "ForeignDestination",
    }];
  return (


    <div>
      <p className=" text-center text-4xl font-semibold pt-8 text-[#a91d3a] ">Top Destinations</p>
      <div className="flex justify-center mt-7 text-2xl gap-5"> 
      {formTitles.map((title, index) => (
        <div
          key={index}
          className={`   rounded-lg px-4 font-normal ${selectedDestination === title.value
              ? "bg-[#a91d3a] text-white shadow-4xl"
              : "text-[#a91d3a] border-[#a91d3a] border-2 "
            }`}
          onClick={() => setDestination(title.value)}
          
        >

          <input
            type="radio"
            id={title.value}
            name={title.name}
            value={title.value}
            checked={selectedDestination === title.value}
            onChange={handleDestination}
            className="hidden"
          />

          <label className=" cursor-pointer" for="html">
            {title.label}
          </label>
        </div>
      ))}
</div>
      <div className="pt-8">
        {selectedDestination === 'ForeignDestination' && <ForeignDestination />}
        {selectedDestination === 'IndianDestinations' && <IndianDestinations />}
      </div>

    </div>
  );
};

export default TopDestinations;
