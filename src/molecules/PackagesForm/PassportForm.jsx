import React, { useState } from "react";

const PassportForm = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [errors, setErrors] = useState({});

  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");

  const handleSubmit = () => {
    const newErrors = {};

    if (!selectedName) newErrors.selectedName = "Please Enter Your Name";
    if (!selectedPhoneNumber)
      newErrors.selectedPhoneNumber = "Please Enter Phone Number";
    if (!selectedCityName)
      newErrors.selectedCityName = "Please Enter Your City Name";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        name: selectedName,
        cityName: selectedCityName,
        phoneNumber: selectedPhoneNumber,
      };

      console.log("Form Data : ", formData);
    }
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center py-6 gap-2 max-xl:flex-col px-6">
          <div className=" bg-[#a91d3a] rounded-lg w-[60%] mx-auto justify-between">
            <div className=" px-2 py-3 text-white rounded-lg">
              <label for="html" className="text-sm">
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-[#a91d3a] pt-1  max-xl:w-full border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              />
              {errors.selectedName && (
                <p className="text-xs text-white">{errors.selectedName}</p>
              )}
            </div>
          </div>

          <div className=" bg-[#a91d3a] rounded-lg w-[60%] mx-auto justify-between">
            <div className=" px-2 py-3 text-white rounded-lg">
              <label for="html" className="text-sm">
                Your City Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-[#a91d3a] pt-1  max-xl:w-full border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedCityName}
                onChange={(e) => setSelectedCityName(e.target.value)}
              />
              {errors.selectedCityName && (
                <p className="text-xs text-white">{errors.selectedCityName}</p>
              )}
            </div>
          </div>

          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto">
            <label for="html" className="text-sm">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="bg-[#a91d3a]   max-xl:w-full pt-1  text-white placeholder-white border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedPhoneNumber}
              onChange={(e) => setSelectedPhoneNumber(e.target.value)}
            />
            {errors.selectedPhoneNumber && (
              <p className="text-xs text-white">{errors.selectedPhoneNumber}</p>
            )}
          </div>
        </div>

        <div className="text-center">
          <button
            className="text-[#a91d3a] hover:bg-[#a91d3a] hover:text-white font-light text-xl border-[1px] border-[#a91d3a] px-8 rounded-md "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PassportForm;
