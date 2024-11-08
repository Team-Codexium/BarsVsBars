const BattleParticipant = ({ participant }) => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-red-500 rounded-full"></div>
    <div>
      <p className="font-semibold">{participant.name || "Name"}</p>
      <p className="text-gray-400">Votes: {participant.votes}</p>
    </div>
  </div>
);

export default BattleParticipant;
