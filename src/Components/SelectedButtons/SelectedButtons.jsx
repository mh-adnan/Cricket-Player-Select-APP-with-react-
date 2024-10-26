import React from 'react';

const SelectedButtons = ({ selectedCount, togglePlayerView, showAllPlayers }) => {
  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-6 mx-4">
    

        <p className=' font-bold text-3xl'>Available Players</p>





        <div className="flex space-x-4">
    <button
        onClick={togglePlayerView}
        className={`px-4 py-2 font-bold rounded ${showAllPlayers ? 'bg-[rgb(231,254,41)] text-slate-600 shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)]' : 'bg-gray-300 text-black shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)]'}`}
    >
        Available Players
    </button>
    <button
        onClick={togglePlayerView}
        className={`px-4 py-2 rounded font-bold ${!showAllPlayers ? 'bg-[rgb(231,254,41)] text-slate-600 shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)]' : 'bg-gray-300 text-black shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)]'}`}
    >
        Selected Players ({selectedCount})
    </button>
</div>





      </div>

      
      {!showAllPlayers && ( 
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
            Selected players are: {selectedCount} / 6
          </h3>
       



          <button
    onClick={togglePlayerView}
    className={`mt-4 font-bold ${showAllPlayers ? 'bg-[rgb(231,254,41)] font-bold text-white shadow-[inset_4px_4px_20px_0_rgba(19,19,19,0.3)]' : 'bg-green-500 text-white'} rounded-lg px-4 py-2 hover:${showAllPlayers ? 'bg-[rgb(190,233,34)]' : 'bg-blue-600'} transition duration-200`}
>
    Go to Available Players
</button>




        </div>
      )}

      {showAllPlayers && (
        <>
          <nav className="navbar"> </nav>
          <footer className="footer">  </footer>
        </>
      )}
    </>
  );
};

export default SelectedButtons;


