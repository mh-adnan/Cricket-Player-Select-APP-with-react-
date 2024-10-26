

// import { useState } from 'react';
// import './App.css';
// import Allplayer from './Components/AllPlayer/Allplayer';
// import Footer from './Components/Footter/Footer';
// import Navbar from './Components/Navbar/Navbar';
// import SelectedButtons from './Components/SelectedButtons/SelectedButtons';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [selectedPlayer, setSelectedPlayers] = useState([]);
//   const [showAllPlayers, setShowAllPlayers] = useState(true);
//   const [increaseMoney, setMoneyIncrease] = useState(0);

//   const handelSelectedPlayer = (player) => {
//     if (selectedPlayer.find((p) => p.id === player.id)) {
//       toast.error("Player is already selected");
//     } else if (selectedPlayer.length >= 6) {
//       toast.error("Can't add more players");
//     } else {
//       setSelectedPlayers((prev) => [...prev, player]);
//       handeMoneyIncrease(player.price);
//       toast.success(`${player.cricketer_name} added to your team!`);
//     }
//   };

//   const handleRemovePlayer = (playerId) => {
//     const playerToRemove = selectedPlayer.find((p) => p.id === playerId);
//     if (playerToRemove) {
//       setSelectedPlayers((prev) => prev.filter((p) => p.id !== playerId));
//       setMoneyIncrease((prevMoney) => prevMoney + playerToRemove.price);
//       toast.info(`${playerToRemove.cricketer_name} removed from your team`);
//     }
//   };

//   const handeMoneyIncrease = (price) => {
//     if (price > increaseMoney) {
//       toast.warn("Not enough money in your vault. Add funds!");
//       return;
//     }
//     setMoneyIncrease((prevMoney) => prevMoney - price);
//   };

//   const forAdd = () => {
//     setMoneyIncrease((prev) => prev + 100);
//     toast.success("Added 100 to your vault");
//   };

//   const togglePlayerView = () => setShowAllPlayers((prev) => !prev);

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//       <Navbar handeMoneyIncrease={handeMoneyIncrease} increaseMoney={increaseMoney} forAdd={forAdd} />
//       <SelectedButtons
//         selectedCount={selectedPlayer.length}
//         togglePlayerView={togglePlayerView}
//         showAllPlayers={showAllPlayers}
//       />
//       <Allplayer 
//         handelSelectedPlayer={handelSelectedPlayer} 
//         handleRemovePlayer={handleRemovePlayer}
//         showAllPlayers={showAllPlayers} 
//         selectedPlayer={selectedPlayer} 
//       />
//       <Footer />
//     </>
//   );
// }

// export default App;









import { useState } from 'react';
import './App.css';
import Allplayer from './Components/AllPlayer/Allplayer';
import Footer from './Components/Footter/Footer';
import Navbar from './Components/Navbar/Navbar';
import SelectedButtons from './Components/SelectedButtons/SelectedButtons';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedPlayer, setSelectedPlayers] = useState([]);
  const [showAllPlayers, setShowAllPlayers] = useState(true);
  const [increaseMoney, setMoneyIncrease] = useState(0);

  const handelSelectedPlayer = (player) => {
    if (increaseMoney === 0) {
      toast.warn("You don't have enough funds to add players.");
      return;
    }

    if (player.price > increaseMoney) {
      toast.warn("Player's price exceeds your available funds.");
      return;
    }

    if (selectedPlayer.find((p) => p.id === player.id)) {
      toast.error("Player is already selected");
    } else if (selectedPlayer.length >= 6) {
      toast.error("Can't add more players");
    } else {
      setSelectedPlayers((prev) => [...prev, player]);
      handeMoneyIncrease(player.price);
      toast.success(`${player.cricketer_name} added to your team!`);
    }
  };

  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayer.find((p) => p.id === playerId);
    if (playerToRemove) {
      setSelectedPlayers((prev) => prev.filter((p) => p.id !== playerId));
      setMoneyIncrease((prevMoney) => prevMoney + playerToRemove.price);
      toast.info(`${playerToRemove.cricketer_name} removed from your team`);
    }
  };

  const handeMoneyIncrease = (price) => {
    if (price > increaseMoney) {
      toast.warn("Not enough money in your vault. Add funds!");
      return;
    }
    setMoneyIncrease((prevMoney) => prevMoney - price);
  };

  const forAdd = () => {
    setMoneyIncrease((prev) => prev + 1000);
    toast.success("Added 100 to your vault");
  };

  const togglePlayerView = () => setShowAllPlayers((prev) => !prev);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Navbar handeMoneyIncrease={handeMoneyIncrease} increaseMoney={increaseMoney} forAdd={forAdd} />
      <SelectedButtons
        selectedCount={selectedPlayer.length}
        togglePlayerView={togglePlayerView}
        showAllPlayers={showAllPlayers}
      />
      <Allplayer 
        handelSelectedPlayer={handelSelectedPlayer} 
        handleRemovePlayer={handleRemovePlayer}
        showAllPlayers={showAllPlayers} 
        selectedPlayer={selectedPlayer} 
      />
      <Footer />
    </>
  );
}

export default App;













