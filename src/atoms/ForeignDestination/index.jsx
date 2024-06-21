import React from 'react'
import topDestinationAbroadSchema from '../../molecules/TopDestinations/topDestinationAbroadSchema'
function ForeignDestination() {
return(
    <div className="flex flex-wrap justify-center gap-20 my-14 mx-28 max-md:flex-col max-md:mx-4">
    {topDestinationAbroadSchema.map((destination, index) => (
        <div key={index} className="w-1/4 max-md:w-full mb-10">
            <img
                src={destination.image}
                alt={destination.name}
                className="rounded-3xl shadow-xl h-56 w-full max-md:h-[500px] max-md:w-[350px] max-md:mx-auto hover:scale-110 transition duration-500 cursor-pointer object-cover"
            />
            <p className="text-center pt-4 text-xl text-[#a91d3a]">{destination.name}</p>
        </div>
    ))}
</div>
)
}

export default ForeignDestination