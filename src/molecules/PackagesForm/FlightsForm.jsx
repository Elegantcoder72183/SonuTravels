import React, { useState } from "react";

const FlightsForm = () => {
  const [selectedFromCity, setSelectedFormCity] = useState("");
  const [selectedToCity, setSelectedToCity] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [selectedPassangersCount, setSelectedPassagersCount] = useState("");

  const handleSubmit = () => {
    const newErrors = {};
    if (!selectedFromCity) newErrors.selectedFromCity = "From City Required";
    if (!selectedToCity) newErrors.selectedToCity = "To City Required";
    if (!selectedStartDate)
      newErrors.selectedStartDate = "Please Select Start Date";
    if (!selectedEndDate) newErrors.selectedEndDate = "Please Select End Date";
    if (!selectedPhoneNumber)
      newErrors.selectedPhoneNumber = "Please Enter Phone Number";
    if (!selectedPassangersCount)
      newErrors.selectedPassangersCount = "Please Enter No. of Passengers";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        form: selectedFromCity,
        to: selectedToCity,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        phoneNumber: selectedPhoneNumber,
        passegers: selectedPassangersCount,
      };

      console.log("Form Data : ", formData);
    }
  };

  const handleSwap = () => {
    setSelectedFormCity(selectedToCity);
    setSelectedToCity(selectedFromCity);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center py-6 gap-2 max-xl:flex-col px-6">
          <div className="flex bg-[#a91d3a] rounded-lg w-[60%] mx-auto justify-between">
            <div className="px-2 py-3 text-white rounded-lg">
              <label for="html" className="text-sm">
                From
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter City Name"
                className="bg-[#a91d3a] w-36 max-xl:w-full pt-1 border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedFromCity}
                onChange={(e) => setSelectedFormCity(e.target.value)}
              />

              {errors.selectedFromCity && (
                <p className="text-xs text-white">{errors.selectedFromCity}</p>
              )}
            </div>
            <div className="flex items-center">
              <button
                className="text-[#a91d3a] bg-white  border-[1px] border-[#a91d3a] rounded-full p-2"
                onClick={handleSwap}
              >
                ⇄
              </button>
            </div>
            <div className=" px-2 py-3 text-white rounded-lg">
              <label for="html" className="text-sm">
                To
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter City Name"
                className="bg-[#a91d3a] pt-1 w-36  max-xl:w-full border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedToCity}
                onChange={(e) => setSelectedToCity(e.target.value)}
              />
              {errors.selectedToCity && (
                <p className="text-xs text-white">{errors.selectedToCity}</p>
              )}
            </div>
          </div>
          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto ">
            <label for="html" className="text-sm">
              Journey Start Date
            </label>
            <br />
            <input
              type="date"
              placeholder="Select Start Date"
              className="bg-[#a91d3a] pt-1 max-xl:w-full border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedStartDate}
              onChange={(e) => setSelectedStartDate(e.target.value)}
            />
            {errors.selectedStartDate && (
              <p className="text-xs text-white">{errors.selectedStartDate}</p>
            )}
          </div>
          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto">
            <label for="html" className="text-sm">
              Journey End Date
            </label>
            <br />
            <input
              type="date"
              placeholder="Select Start Date"
              className="bg-[#a91d3a] pt-1 max-xl:w-full border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedEndDate}
              onChange={(e) => setSelectedEndDate(e.target.value)}
            />
            {errors.selectedEndDate && (
              <p className="text-xs text-white">{errors.selectedEndDate}</p>
            )}
          </div>

          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto">
            <label for="html" className="text-sm">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="bg-[#a91d3a] w-36  max-xl:w-full pt-1  text-white placeholder-white border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedPhoneNumber}
              onChange={(e) => setSelectedPhoneNumber(e.target.value)}
            />
            {errors.selectedPhoneNumber && (
              <p className="text-xs text-white">{errors.selectedPhoneNumber}</p>
            )}
          </div>

          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto ">
            <label for="html" className="text-sm">
              No. Of Passangers
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter Passangers"
              className="bg-[#a91d3a] w-36 text-white placeholder-white  max-xl:w-full pt-1 border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedPassangersCount}
              onChange={(e) => setSelectedPassagersCount(e.target.value)}
            />
            {errors.selectedPassangersCount && (
              <p className="text-xs text-white">
                {errors.selectedPassangersCount}
              </p>
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

export default FlightsForm;
