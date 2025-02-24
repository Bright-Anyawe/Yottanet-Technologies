"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SideBar from "./sideBar";
import SearchService from "./searchBar";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
      
  // Toggle sidebar visibility
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <header className="bg-blue-800 text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {}
        <div className="text-2xl font-semibold">Yotech</div>

        {}
        <div className="flex-1 mx-4">
          <SearchService />
        </div>

        {}
        <button
          className="p-2 rounded-md hover:bg-blue-700 transition"
          onClick={toggleSideBar}
        >
          {isSideBarOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSideBarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSideBar}
      ></div>

      {}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSideBarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBar />
      </aside>
    </header>
  );
};

export default Header;
