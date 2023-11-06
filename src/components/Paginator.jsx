import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="bg-white p-4 flex flex-col items-center lg:flex-row lg:justify-between border-t border-gray-200">
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li
            key={page}
            className={`${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } hover:bg-blue-700 hover:text-white px-3 py-2 rounded cursor-pointer`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
