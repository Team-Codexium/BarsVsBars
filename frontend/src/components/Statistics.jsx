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

export default Statistics