import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="flex items-center space-x-2 mt-[5vh]">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value); handleSearch(value)}}
        className="p-2 w-full rounded-md bg-purple-700 text-white placeholder-gray-300"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
