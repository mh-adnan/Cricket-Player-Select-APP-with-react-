import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFlag, faDollarSign, faBaseballBall, faStar } from '@fortawesome/free-solid-svg-icons';

const Singelplayer = ({ player, handelSelectedPlayer, handleRemovePlayer, isSelected }) => {
    const { cricketer_name, country, image_url, price, id, cricketer_type, rating } = player;


    const [buttonColor, setButtonColor] = useState('bg-white');

    const handleChoosePlayer = () => {
     
        setButtonColor('bg-green-200');
        handelSelectedPlayer(player);
    };

    const handleRemove = () => {
        handleRemovePlayer(id);
        setButtonColor('bg-white'); 
    };

    return (
        <div className="card bg-white rounded-lg shadow-lg p-5 my-4">
            <img src={image_url} alt={cricketer_name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="player-info">
                <p className="font-bold text-xl mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> {cricketer_name}
                </p>
                <p className="text-gray-700 mb-2">
                    <FontAwesomeIcon icon={faFlag} className="mr-2" /> {country}
                </p>
                <p className="text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faBaseballBall} className="mr-2" /> Type: {cricketer_type}
                </p>
                <p className="text-yellow-500 font-semibold mb-2">
                    <FontAwesomeIcon icon={faStar} className="mr-2" /> Rating: {rating}
                </p>
                <p className="text-gray-900 font-bold mb-4">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> Price: ${price}
                </p>
            </div>

            {isSelected ? (
                <button
                    onClick={handleRemove}
                    className={`w-full px-4 py-2 text-gray-950 font-semibold rounded-lg hover:bg-red-600 transition-colors ${buttonColor} border border-red-500`}
                >
                    Remove Player
                </button>
            ) : (
                <button
                    onClick={handleChoosePlayer}
                    className={`w-full px-4 py-2 text-black font-semibold rounded-lg hover:bg-green-300 transition-colors ${buttonColor} border border-green-500`}
                >
                    Choose Player
                </button>
            )}
        </div>
    );
};

export default Singelplayer;
