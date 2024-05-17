import React from "react";

const TopDestinations = () => {
  return (
    <div className="text-[#a91d3a]">
      <p className="text-center  text-4xl font-semibold pt-8">
        Top Destinations
      </p>
      <div>
        <div className="flex justify-center gap-20 my-14 mx-28 max-md:flex-col max-md:mx-4">
          <div className="w-1/4 max-md:w-full ">
            <img
              src="/images/ladakh.jpg"
              alt="Ladakh"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl  hover:scale-110 transition duration-500 cursor-pointer"
            />
            <p className="text-center pt-4 text-xl">Ladakh</p>
          </div>
          <div className="w-1/4 max-md:w-full ">
            <img
              src="/images/rajasthan.jpg"
              alt="Rajasthan"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl  hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
            <p className="text-center pt-4 text-xl">Rajasthan</p>
          </div>
          <div className="w-1/4 max-md:w-full">
            <img
              src="/images/goa.jpg"
              alt="Goa"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl  hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
            <p className="text-center pt-4 text-xl">Goa</p>
          </div>
        </div>
        <div className="flex justify-center gap-20 my-20 mx-28 max-md:flex-col max-md:mx-4">
          <div className="w-1/4 max-md:w-full">
            <img
              src="/images/meghalya.jpg"
              alt="Meghalya"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl hover:scale-110 transition duration-500 cursor-pointer"
            />{" "}
            <p className="text-center pt-4 text-xl">Meghalya</p>
          </div>
          <div className="w-1/4 max-md:w-full">
            <img
              src="/images/manali.jpg"
              alt="Manali"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl  hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
            <p className="text-center pt-4 text-xl">Manali</p>
          </div>
          <div className="w-1/4 max-md:w-full">
            <img
              src="/images/kerala.jpg"
              alt="Kerala"
              className="rounded-3xl h-56 max-md:h-[500px] max-md:w-[350px] max-md:mx-auto shadow-xl  hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
            <p className="text-center pt-4 text-xl">Kerala</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
