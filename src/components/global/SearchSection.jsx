import React from "react";
import { Link } from "react-router-dom";

const SearchSection = () => {
  return (
    <div className="sm:p-4 xl:p-16 lg:p-8 relative">
      <div className="bg-[url('/images/searchbg.png')] rounded-md w-full h-full bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col  w-full  rounded-md bg-custom-blue bg-opacity-70  sm:p-4 lg:p-8 shadow-lg">
          <h1 className="md:text-lg sm:text-sm text-white font-bold ml-4 mb-6">
            Search using Product or molecule name
          </h1>
          <div className="relative w-full">
            <div className="flex sm:flex-row md:flex-row w-full items-center sm:gap-4 md:gap-2 lg:gap-4">
              <div className="md:w-[80%] sm:w-[80%]">
                <input
                  type="text"
                  className="w-full sm:h-[3.5rem] md:h-[4rem] p-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#0047ad]"
                  placeholder="Write a Medicine or Molecule name"
                />
              </div>
              <Link className="h-[3.5rem] sm:flex md:hidden sm:w-[20%] bg-custom-orange text-[white] text-sm font-semibold rounded-md hover:bg-indigo-700 transition duration-300 flex justify-center items-center">
                Find
              </Link>
              <Link className="h-[4rem] sm:hidden md:flex md:w-[20%] bg-custom-orange text-[white] text-lg font-semibold rounded-md hover:bg-indigo-700 transition duration-300 flex justify-center items-center">
                Find Medicine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
