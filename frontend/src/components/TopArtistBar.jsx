import React from 'react';

const TopArtistBar = ({ artistName, artistWins, artistLosses, artistPhoto }) => {
  return (
    <div className="bg-purple-700 h-[10vh] flex items-center justify-between px-6 py-2 mt-5 rounded-lg shadow-[10vh]">
      {/* Artist Info */}
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={artistPhoto}
            alt={`${artistName} profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white">
          <p className="font-semibold text-lg">{artistName}</p>
          <div className="flex space-x-4 text-sm">
            <span>Total wins: {artistWins}</span>
            <span>Total losses: {artistLosses}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-purple-300 hover:bg-purple-400 text-purple-800 font-semibold py-1 px-4 rounded-md transition duration-200 ease-in-out">
          Challenge
        </button>
        <button className="bg-purple-300 hover:bg-purple-400 text-purple-800 font-semibold py-1 px-4 rounded-md transition duration-200 ease-in-out">
          Profile
        </button>
      </div>
    </div>
  );
};

export default TopArtistBar;
