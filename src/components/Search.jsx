import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import useGlobalStore from "../store/useGlobalStore";

const Search = () => {
  const { searchPatient } = useGlobalStore();

  return (
    <div class="flex">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
          <span class="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          onChange={(e) => {
            searchPatient(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
