import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  // configuration for date range selection
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setInput("");
  };

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
          value={searchInput}
          onChange={(e) => setInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-5">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            ></input>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-400">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
