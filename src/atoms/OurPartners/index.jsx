import React from "react";
import { motion } from "framer-motion";
// import partnersSchema from "./partnersSchema";

// Define the array of slides with numbers
const partnersSchema = [
    {
      name: "Vistara",
      image: "/images/vistara-logo.svg",
    },
    {
      name: "Vistara",
      image: "/images/indiGo-logo.svg",
    },
    {
      name: "Vistara",
      image: "/images/jetBlue-logo.svg",
    },
    {
      name: "Vistara",
      image: "/images/airAsia-logo.svg",
    },
    {
      name: "Vistara",
      image: "/images/airIndia-logo.svg",
    },

  ];

const index = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...partnersSchema, ...partnersSchema];
  return (
    <div className="bg-white pt-6">
         <div className="flex justify-center py-2"><p className="text-[#a91d3a] px-4 rounded-md italic font-semibold  text-6xl max-lg:text-3xl">Our Partners</p></div>
         <hr />
      <div className="relative w-full overflow-hidden">
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {duplicatedSlides.map((images, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <div className="flex flex-col items-center justify-between h-full text-6xl">
                {/* {slide.number} */}
                <div className="w-96 max-lg:w-44">
                <img src={`${images.image}`} alt={images.name} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default index;
