import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px]w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2x2 transition">
      <img src={image} alt="" />
      <div className="text-lg font-semibold text-violet-500 ">
        ${price}
        <span className="text-black text-sm font-semibold">/month</span>
      </div>
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="text-black text-xl font-bold">{country}</div>
      </div>
      <div className="text-lg text-black-500 font-semibold max-w-[260px]">
        {address}
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="text-lg font-semibold max-w-[260px]">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}beds</div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bedrooms}bathrooms</div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}m</div>
        </div>
      </div>
    </div>
  );
};

export default House;
