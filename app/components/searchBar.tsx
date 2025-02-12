"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchService = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center bg-white rounded-full p-2">
      {}

      {}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="w-full p-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ml-2"
      />
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />

      {}
    </div>
  );
};

export default SearchService;
