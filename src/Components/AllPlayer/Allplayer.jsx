
import { useEffect, useState } from 'react';
import './Allplayer.css';
import Singelplayer from '../SingelPlayer/Singelplayer';

const Allplayer = ({ handelSelectedPlayer, handleRemovePlayer, showAllPlayers, selectedPlayer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {showAllPlayers 
                ? players.map((p) => (
                    <Singelplayer key={p.id} player={p} handelSelectedPlayer={handelSelectedPlayer} />
                ))
                : selectedPlayer.map((p) => (
                    <Singelplayer 
                        key={p.id} 
                        player={p} 
                        handelSelectedPlayer={handelSelectedPlayer} 
                        handleRemovePlayer={handleRemovePlayer} 
                        isSelected 
                    />
                ))
            }
        </div>
    );
};

export default Allplayer;
