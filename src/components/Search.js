import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRange from "./PriceRangeDropdown";
import Checkindate from "./Checkindate";

import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg-gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg mb-10">
      <CountryDropdown />
      <Checkindate />
      <PriceRange />
      <PropertyDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-600 hover:bg-violet-600 transition lg:w-[150px] h-10 text-white rounded-lg flex justify-center items-center px-8 py-8 text-xl"
      >
        search
      </button>
    </div>
  );
};

export default Search;
