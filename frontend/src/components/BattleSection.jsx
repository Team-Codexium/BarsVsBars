import BattleParticipant from "./BattleParticipant";

const BattleSection = ({ title, battles, recent = false }) => {
    return (
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
  )
}

export default BattleSection;