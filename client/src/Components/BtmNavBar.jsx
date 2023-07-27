import React from "react";
import { Link } from "react-router-dom";

const BtmNavBar = () => {
  return (
    <div>
      <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 reverse-gradient left-1/2">
        <div className="w-full">
          <div
            className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
            role="group"
          >
            <Link
              to="/companyform"
              type="button"
              className="px-5 py-1.5 font-bold text-indigo hover:text-gray hover:bg-indigo rounded-lg"
            >
              New Places
            </Link>
            <Link
              to="/poppin"
              type="button"
              className="px-5 py-1.5 font-bold text-indigo hover:text-gray hover:bg-indigo rounded-lg"
            >
              Who's Poppin
            </Link>
            <Link
              to="/myList"
              type="button"
              className="px-5 py-1.5 font-bold text-indigo hover:text-gray hover:bg-indigo rounded-lg"
            >
              My Bars
            </Link>
          </div>
        </div>
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
          <Link
            to="/home"
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-lg opacity-0 tooltip dark:bg-gray-700"
          >
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            to="/favorites"
            data-tooltip-target="tooltip-bookmark"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 20"
            >
              {" "}
              <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />{" "}
            </svg>
            <span className="sr-only">Bookmark</span>
          </Link>
          <div
            id="tooltip-bookmark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            to="/companyform"
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New post</span>
          </Link>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            to="search"
            data-tooltip-target="tooltip-search"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </Link>
          <div
            id="tooltip-search"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtmNavBar;
