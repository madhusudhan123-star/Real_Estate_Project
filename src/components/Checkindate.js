import React, { useState, useContext } from "react";
// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import headless ui components
import { Menu } from "@headlessui/react";
// import context
import { HouseContext } from "./HouseContext";

const Checkindate = () => {
  const { date } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[15px] font-medium leading-tight">
            When (any)
          </div>
          <div className="text-[13px]">Select Move-inDate</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        <input type="date" />
      </Menu.Items>
    </Menu>
  );
};

export default Checkindate;
