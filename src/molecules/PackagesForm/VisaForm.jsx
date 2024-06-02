import React, { useState } from "react";

const VisaForm = () => {
  const [selectedVisaApplicationCountry, setSelectedVisaApplicationCountry] =
    useState("");
  const [selectedYourCountry, setSelectedYourCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedEntryDate, setSelectedEntryDate] = useState("");
  const [selectedExitDate, setSelectedExitDate] = useState("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [selectedTravellersCount, setSelectedTravellersCount] = useState("");

  const handleSubmit = () => {
    const newErrors = {};
    if (!selectedVisaApplicationCountry)
      newErrors.selectedVisaApplicationCountry = "Visa Country Required";
    if (!selectedYourCountry)
      newErrors.selectedYourCountry = "To City Required";
    if (!selectedEntryDate)
      newErrors.selectedEntryDate = "Please Select Entry Date";
    if (!selectedExitDate)
      newErrors.selectedExitDate = "Please Select Exit Date";
    if (!selectedPhoneNumber)
      newErrors.selectedPhoneNumber = "Please Enter Phone Number";
    if (!selectedTravellersCount)
      newErrors.selectedTravellersCount = "Please Enter No. of Travellers";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        visaApplicationCountry: selectedVisaApplicationCountry,
        yourCountry: selectedYourCountry,
        entryDate: selectedEntryDate,
        exitDate: selectedExitDate,
        phoneNumber: selectedPhoneNumber,
        travellers: selectedTravellersCount,
      };

      console.log("Form Data : ", formData);
    }
  };

  const handleSwap = () => {
    setSelectedVisaApplicationCountry(selectedYourCountry);
    setSelectedYourCountry(selectedVisaApplicationCountry);
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center py-6 gap-2 max-xl:flex-col px-6">
          <div className="flex bg-[#a91d3a] rounded-lg w-[60%] mx-auto justify-between">
            <div className="px-2 py-3 text-white rounded-lg">
              <label for="html" className="text-sm">
                Visa Country
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter City Name"
                className="bg-[#a91d3a] w-36 max-xl:w-full pt-1 border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedVisaApplicationCountry}
                onChange={(e) =>
                  setSelectedVisaApplicationCountry(e.target.value)
                }
              />

              {errors.selectedVisaApplicationCountry && (
                <p className="text-xs text-white">
                  {errors.selectedVisaApplicationCountry}
                </p>
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
                Your Country
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter City Name"
                className="bg-[#a91d3a] pt-1 w-36  max-xl:w-full border-b-[1px] text-white placeholder-white focus:outline-none focus:border-transparent"
                value={selectedYourCountry}
                onChange={(e) => setSelectedYourCountry(e.target.value)}
              />
              {errors.selectedYourCountry && (
                <p className="text-xs text-white">
                  {errors.selectedYourCountry}
                </p>
              )}
            </div>
          </div>
          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto ">
            <label for="html" className="text-sm">
              Entry Date
            </label>
            <br />
            <input
              type="date"
              placeholder="Select Start Date"
              className="bg-[#a91d3a] pt-1 max-xl:w-full border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedEntryDate}
              onChange={(e) => setSelectedEntryDate(e.target.value)}
            />
            {errors.selectedEntryDate && (
              <p className="text-xs text-white">{errors.selectedEntryDate}</p>
            )}
          </div>
          <div className="bg-[#a91d3a] px-2 py-3 text-white rounded-lg w-[60%] mx-auto">
            <label for="html" className="text-sm">
              Exit Date
            </label>
            <br />
            <input
              type="date"
              placeholder="Select Start Date"
              className="bg-[#a91d3a] pt-1 max-xl:w-full border-b-[1px] focus:outline-none focus:border-transparent"
              value={selectedExitDate}
              onChange={(e) => setSelectedExitDate(e.target.value)}
            />
            {errors.selectedExitDate && (
              <p className="text-xs text-white">{errors.selectedExitDate}</p>
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
              className="bg-[#a91d3a]  max-xl:w-full pt-1  text-white placeholder-white border-b-[1px] focus:outline-none focus:border-transparent"
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
              className="bg-[#a91d3a]  text-white placeholder-white  max-xl:w-full pt-1 border-b-[1px] focus:outline-none focus:border-transparent"
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

export default VisaForm;
