import React, { useState, useEffect } from "react";
import Singelplayer from "../SingelPlayer/Singelplayer";

const Allplayer = ({ handelSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((p) => (
          <Singelplayer key={p.id} player={p} handelSelectedPlayer={handelSelectedPlayer} />
        ))}
      </div>
    </div>
  );
};

export default Allplayer;
