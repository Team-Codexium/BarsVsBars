import React from "react";

const BattleBar = ({
  artist1Name,
  artist2Name,
  artist1Votes,
  artist2Votes,
  artist1Photo,
  artist2Photo
}) => {
  return (
    <div className="bg-purple-500 h-[15vh] flex items-center justify-center px-4 mt-5 rounded-[1vw]">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:px-10 space-y-4 sm:space-y-0 sm:space-x-5 md:space-x-10 lg:space-x-20">
        
        {/* Artist 1 */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="w-16 h-16 bg-slate-600 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src={artist1Photo}
              alt={`${artist1Name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-white text-center sm:text-left">
            <p className="font-semibold text-lg sm:text-xl">{artist1Name}</p>
            <span className="text-sm sm:text-base">Current Votes: {artist1Votes}</span>
          </div>
        </div>
        
        {/* VS Text */}
        <h1 className="text-white font-bold text-2xl sm:text-3xl">VS</h1>

        {/* Artist 2 */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="w-16 h-16 bg-slate-600 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src={artist2Photo}
              alt={`${artist2Name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-white text-center sm:text-left">
            <p className="font-semibold text-lg sm:text-xl">{artist2Name}</p>
            <span className="text-sm sm:text-base">Current Votes: {artist2Votes}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BattleBar;
