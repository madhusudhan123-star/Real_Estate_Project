import React from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import Search from "./Search";

const Banner = () => {
  return (
    <section>
      <div className="my-10 ml-18 flex justify-around">
        <div>
          <h1 className="text-5xl font-semibold">Search properties to rent</h1>
        </div>
        <div className="flex items-center py-3 px-3 border-solid border-2 border-black-500 rounded-lg">
          <input
            type="text"
            placeholder="Search with Search Bar"
            className=""
          />
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
