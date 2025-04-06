import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(10); // Default limit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim() || limit <= 0) return;
    onSearch(searchTerm, limit);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg"
    >
      {/* Text Input for Pokémon Name */}
      <input
        type="text"
        placeholder="Enter Pokémon Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-md text-black"
      />

      {/* Number Input for Pokémon Limit */}
      <input
        type="number"
        min="1"
        max="100"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className="p-2 rounded-md text-black w-20"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
