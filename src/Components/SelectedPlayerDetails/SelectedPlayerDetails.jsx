import './SelectedPlayerDetails.css'; 

const SelectedPlayerDetails = ({ players }) => {
  return (
    <div className="selected-players">
  
      <h2>Selected Players: {players.length} / 6</h2>

      {players.length === 0 ? (
        <p>No players selected.</p>
      ) : (
        players.map(player => (
          <div key={player.id} className="player-details">
            <img src={player.image_url} alt={player.cricketer_name} />
            <p>Name: {player.cricketer_name}</p>
            <p>Country: {player.country}</p>
            <p>Price: {player.price}</p>
            <p>Type: {player.cricketer_type}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedPlayerDetails;





