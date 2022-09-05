import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex  flex-row gap-10">
          <Link to="/">
            <h1 className="font-bold text-violet-900">Estatery</h1>
          </Link>
          <div className="flex gap-9 text-xl">
            <h1 className=" hover:text-violet-500">Rent</h1>
            <h1 className=" hover:text-violet-500">Buy</h1>
            <h1 className=" hover:text-violet-500">Sell</h1>
            <h1 className=" hover:text-violet-500">ManageProperty</h1>
            <h1 className=" hover:text-violet-500">Resources</h1>
          </div>
        </div>
        <div className="flex gap-9">
          <Link
            className=" text-violet-600  border-2 rounded-lg p-2 hover:text-white hover:bg-violet-600 px-5"
            to=""
          >
            Log in
          </Link>
          <Link
            className=" text-violet-600  border-2 rounded-lg p-2 hover:text-white hover:bg-violet-600 px-5"
            to=""
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
