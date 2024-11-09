import React, { useState, useEffect } from "react";
import userProfile from "../assets/userProfile.json"; // Mocked JSON data
import AppWrap from "../wrapper/AppWrap";
import Navbar from "../components/navBar";
import { Link, Route, Routes } from "react-router-dom";
import { BattleDetails, BattleSection, Sidebar, Statistics, TopArtists } from "../components";
import CreateBattle from "../components/CreateBattle";
import LiveBattles from "../components/LiveBattles"

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(userProfile); // Load JSON data
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen  text-gray-200 flex flex-col">
      <Navbar />

      <div className="flex-grow w-full flex p-6 space-x-6">
        <Sidebar />
        <div className="space-y-3 w-full">
          <Routes>
            <Route
              index
              element={
                <>
                  <Statistics stats={userData.statistics} />

                  <BattleSection
                    title="Current Battle"
                    battles={userData.currentBattles}
                  />
                  <BattleSection
                    title="Recent Battle"
                    battles={userData.recentBattles}
                    recent
                  />
                </>
              }
            />
            <Route  path="challenge" element={<CreateBattle />} />
            <Route  path="top-artists" element={<TopArtists />} />
            <Route  path="battles" element={<LiveBattles />} />
            <Route  path="battle-detail" element={<BattleDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Dashboard);
