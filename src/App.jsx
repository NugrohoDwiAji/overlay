import { useState } from "react";

export default function Overlay() {
  const [teamA, setTeamA] = useState({ name: "Team Alpha", score: 0 });
  const [teamB, setTeamB] = useState({ name: "Team Bravo", score: 0 });

  return (
    <div className="w-screen h-screen bg-transparent relative overflow-hidden text-white font-sans z-50">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-purple-950/60 border-4 border-red-700">
        {/* Team A */}
        <div
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
            {teamA.score}
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-wider drop-shadow-md">
            {teamA.name}
          </h2>
        </div>

        {/* Match Info */}
        <div className="text-center">
          <p className="text-lg font-semibold drop-shadow-md">
            MLBB Tournament
          </p>
          <p className="text-sm text-yellow-300 drop-shadow-md">
            Best of 5 - Game 1
          </p>
        </div>

        {/* Team B */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider drop-shadow-md text-right">
            {teamB.name}
          </h2>
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
            {teamB.score}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-2 rounded-xl text-center shadow">
        <p className="text-md tracking-wide">Powered by K.Mari</p>
      </div>
    </div>
  );
}
