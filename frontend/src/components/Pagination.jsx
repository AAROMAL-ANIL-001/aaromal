import React from "react";

const Pagination = ({ activePage }) => {
  return (
    <div className="flex">
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 1
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 2
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 3
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 4
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 5
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 6
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-4 h-1 bg-black m-3 ${
          activePage === 7
            ? "bg-gradient-to-r from-cyan-500 to-blue-900"
            : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default Pagination;
