import React from 'react';

const SelectedButtons = ({ selectedCount }) => {
  return (
    <div className="flex justify-end p-4">
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-md">
        Selected {selectedCount} Players
      </button>
    </div>
  );
};

export default SelectedButtons;
