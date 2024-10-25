import { useState } from 'react';
import './App.css';
import Allplayer from './Components/AllPlayer/Allplayer';
import Footer from './Components/Footter/Footer';
import Navbar from './Components/Navbar/Navbar';
import SelectedButtons from './Components/SelectedButtons/SelectedButtons';

function App() {
  const [selectedPlayer, setSelectedPlayers] = useState([]);

  const handelSelectedPlayer = (players) => {
    const isExist = selectedPlayer.find((p) => p.id === players.id);

    if (isExist) {
      alert("Player is already selected");
    } else {
      const newPlayer = [...selectedPlayer, players];
      setSelectedPlayers(newPlayer);
    }
  };

  return (
    <>
      <Navbar />
      <SelectedButtons selectedCount={selectedPlayer.length} />
      <Allplayer handelSelectedPlayer={handelSelectedPlayer} />
      <Footer />
    </>
  );
}

export default App;
