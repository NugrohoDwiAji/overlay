import React, { useState } from 'react';

const OverlayMLBB = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [gameTime, setGameTime] = useState('00:00');
  const [seriesInfo, setSeriesInfo] = useState('BO3 - Game 1');
  const [teamAName, setTeamAName] = useState('TEAM A');
  const [teamBName, setTeamBName] = useState('TEAM B');
  const [tournamentName, setTournamentName] = useState('MLBB TOURNAMENT');
  const [isPaused, setIsPaused] = useState(false);

  // Warna tema MPL (biru dan oranye)
  const mplBlue = 'bg-blue-900';
  const mplOrange = 'bg-orange-500';
  const mplDark = 'bg-gray-900';

  return (
    <div className="w-full h-screen bg-transparent font-sans overflow-hidden">
      {/* Header Tournament */}
      <div className={`w-full h-16 ${mplDark} flex items-center justify-between px-8`}>
        <div className="text-white text-2xl font-bold">{tournamentName}</div>
        <div className="text-white text-xl">{seriesInfo}</div>
        <div className="text-white text-2xl font-mono">{gameTime}</div>
      </div>

      {/* Team Info Section */}
      <div className="flex justify-between items-center mt-8 px-12">
        {/* Team A */}
        <div className="flex items-center w-1/3">
          <div className={`w-24 h-24 ${mplBlue} rounded-full flex items-center justify-center text-white text-4xl font-bold`}>
            {teamAScore}
          </div>
          <div className={`ml-6 py-4 px-6 ${mplBlue} rounded-r-full text-white text-2xl font-bold w-full`}>
            {teamAName}
          </div>
        </div>

        {/* VS */}
        <div className="text-white text-3xl font-bold mx-4">VS</div>

        {/* Team B */}
        <div className="flex items-center w-1/3 flex-row-reverse">
          <div className={`w-24 h-24 ${mplOrange} rounded-full flex items-center justify-center text-white text-4xl font-bold`}>
            {teamBScore}
          </div>
          <div className={`mr-6 py-4 px-6 ${mplOrange} rounded-l-full text-white text-2xl font-bold w-full text-right`}>
            {teamBName}
          </div>
        </div>
      </div>

      {/* Draft Picks Section */}
      <div className="flex justify-between mt-16 px-12">
        {/* Team A Bans & Picks */}
        <div className="w-2/5">
          <div className="text-white text-xl font-bold mb-4">BANS</div>
          <div className="flex space-x-4 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={`ban-a-${item}`} className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-red-500"></div>
            ))}
          </div>
          
          <div className="text-white text-xl font-bold mb-4">PICKS</div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={`pick-a-${item}`} className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-green-500"></div>
            ))}
          </div>
        </div>

        {/* Game Info */}
        <div className="w-1/5 flex flex-col items-center">
          <div className="text-white text-2xl font-bold mb-4">MAP 1</div>
          <div className="text-white text-lg mb-2">Land of Dawn</div>
          <div className="w-32 h-32 bg-gray-800 rounded-lg mb-4"></div>
          <button 
            className={`px-6 py-2 rounded-lg ${isPaused ? 'bg-green-500' : 'bg-yellow-500'} text-white font-bold`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? 'RESUME' : 'PAUSE'}
          </button>
        </div>

        {/* Team B Bans & Picks */}
        <div className="w-2/5">
          <div className="text-white text-xl font-bold mb-4 text-right">BANS</div>
          <div className="flex space-x-4 mb-8 justify-end">
            {[1, 2, 3].map((item) => (
              <div key={`ban-b-${item}`} className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-red-500"></div>
            ))}
          </div>
          
          <div className="text-white text-xl font-bold mb-4 text-right">PICKS</div>
          <div className="grid grid-cols-2 gap-4 justify-end">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={`pick-b-${item}`} className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-green-500 ml-auto"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsor Logos */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
        {[1, 2, 3].map((item) => (
          <div key={`sponsor-${item}`} className="w-24 h-16 bg-gray-700 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default OverlayMLBB;