import React, { useState } from "react";

const TravelForm = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [selectedTravellersCount, setSelectedTravellersCount] = useState("");

  const handleSubmit = () => {
    const newErrors = {};

    if (!selectedDestination) newErrors.selectedDestination = "To City Required";
    if (!selectedStartDate)
      newErrors.selectedStartDate = "Please Select Start Date";
    if (!selectedEndDate) newErrors.selectedEndDate = "Please Select End Date";
    if (!selectedPhoneNumber)
      newErrors.selectedPhoneNumber = "Please Enter Phone Number";
    if (!selectedTravellersCount)
      newErrors.selectedTravellersCount = "Please Enter No. of Travllers";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        destination: selectedDestination,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        phoneNumber: selectedPhoneNumber,
        travellers: selectedTravellersCount,
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
                Destination
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Destination"
                className="bg-[#a91d3a] pt-1  max-xl:w-full border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              />
              {errors.selectedDestination && (
                <p className="text-xs text-white">{errors.selectedDestination}</p>
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
              className="bg-[#a91d3a]   max-xl:w-full pt-1  text-white placeholder-white border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedPhoneNumber}
              onChange={(e) => setSelectedPhoneNumber(e.target.value)}
            />
            {errors.selectedPhoneNumber && (
              <p className="text-xs text-white">{errors.selectedPhoneNumber}</p>
            )}
          </div>

          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto ">
            <label for="html" className="text-sm">
              No. Of Travellers
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter Passangers"
              className="bg-[#a91d3a] text-white placeholder-white  max-xl:w-full pt-1 border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedTravellersCount}
              onChange={(e) => setSelectedTravellersCount(e.target.value)}
            />
            {errors.selectedTravellersCount && (
              <p className="text-xs text-white">
                {errors.selectedTravellersCount}
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

export default TravelForm;
