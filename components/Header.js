import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3  justify-between bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative h-10 flex items-center  cursor-pointer my-auto">
        <Image
          src="/images/airbnb-logo.png"
          alt="Airbnb Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex  justify-between items-center rounded-full border p-2 hover:shadow-lg transition-shadow duration-300 md:max-w-[600px] ">
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none flex-grow bg-transparent text-sm text-gray-600 px-2"
        />

        <div className="hidden md:flex">
          <SearchIcon className="h-8  text-white bg-red-500 rounded-full p-2 cursor-pointer " />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center space-x-2 justify-end text-gray-700 ">
        <p className="hidden lg:inline cursor-pointer   text-sm font-medium hover:bg-gray-100 rounded-full p-4 md:-mx-4">
          Become a host
        </p>
        <div className="cursor-pointer hover:bg-gray-100 p-3 rounded-full">
          <GlobeAltIcon className="h-6  " />
        </div>
        <div className="flex items-center border rounded-full px-4 py-2 hover:shadow-md">
          <MenuIcon className="h-6  cursor-pointer" />
          <UserCircleIcon className="h-6  cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
