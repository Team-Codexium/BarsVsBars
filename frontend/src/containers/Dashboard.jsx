import React, { useState, useEffect } from 'react';
import userProfile from '../assets/userProfile.json'; // Mocked JSON data
import AppWrap from '../wrapper/AppWrap';
import { gradientBlueGreen } from '../constants/index';
import Navbar from '../components/navBar';



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
<div className='space-y-3 w-full'>
        <Statistics stats={userData.statistics} />

        <BattleSection title="Current Battle" battles={userData.currentBattles} />
        <BattleSection title="Recent Battle" battles={userData.recentBattles} recent />

</div>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <aside className="w-64  p-4 flex flex-col space-y-4">
    
    <nav className="space-y-2">
      <button className="block text-left p-2 hover:bg-gray-700 rounded">Dashboard</button>
      <button className="block text-left p-2 hover:bg-gray-700 rounded">Battles</button>
    </nav>
    <button className="mt-auto flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
      <span>Logout</span>
    </button>
  </aside>
);



const Statistics = ({ stats }) => (
  <section className="bg-purple-800 p-4 rounded-lg">
    <h2 className="text-xl font-semibold">Statistics</h2>
    <div className="flex justify-between mt-4">
      <p>Wins: {stats.wins}</p>
      <p>Losses: {stats.losses}</p>
      <p>Draws: {stats.draws}</p>
      <p>Total Battles: {stats.totalBattles}</p>
    </div>
  </section>
);

const BattleSection = ({ title, battles, recent = false }) => (
  <section className="bg-purple-800 p-4 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4">
      {battles.map((battle, index) => (
        <div key={index} className="flex items-center justify-between bg-purple-600 p-4 rounded">
          <BattleParticipant participant={battle.challenger} />
          <span className="text-red-500">{recent ? battle.result : 'VS'}</span>
          {battle.status === 'Pending' ? (
            <span className="text-white-500 font-season">Opponent hasn't accepted yet</span>
          ) : (
            <BattleParticipant participant={battle.opponent} />
          )}
        </div>
      ))}
    </div>
  </section>
);

const BattleParticipant = ({ participant }) => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-red-500 rounded-full"></div>
    <div>
      <p className="font-semibold">{participant.name || 'Name'}</p>
      <p className="text-gray-400">Votes: {participant.votes}</p>
    </div>
  </div>
);

export default AppWrap(Dashboard);
