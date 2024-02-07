import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div class="border-gray-200 bg-gray-900 w-full">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Patients Managser
        </span>
        <div class="ml-5">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
