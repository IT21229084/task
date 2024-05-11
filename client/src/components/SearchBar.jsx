import React, { useState, useEffect } from 'react';
const SearchBarComponent = ({ onSearch }) => {
  const [sol, setSol] = useState('');
  const [camera, setCamera] = useState('');
  const [solHistory, setSolHistory] = useState([]);

  useEffect(() => {
    // Load search history from local storage when component mounts
    const savedSolHistory = localStorage.getItem('solHistory');
    if (savedSolHistory) {
      setSolHistory(JSON.parse(savedSolHistory));
    }
  }, []);

  const handleSearch = () => {
    if (sol && camera) {
      onSearch(sol, camera);
      // Save sol history
      const newSolHistory = [...solHistory, sol];
      setSolHistory(newSolHistory);
      localStorage.setItem('solHistory', JSON.stringify(newSolHistory));
    } else {
      alert('Please enter sol and camera type');
    }
  };

  const handleSolInputChange = (e) => {
    setSol(e.target.value);
  };

  return (
    <div className="flex flex-row items-center gap-4 mt-12 justify-center">
      <div className="relative">
        <label htmlFor="solInput" className="text-lg font-bold">
          Select Sol
        </label>
        <input
          id="solInput"
          type="number"
          value={sol}
          onChange={handleSolInputChange}
          className="block appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          list="solSuggestions"
        />
      </div>
     
      <div className="relative">
        <label htmlFor="cameraInput" className="text-lg font-bold">
          Select Camera
        </label>
        <select
          id="cameraInput"
          value={camera}
          onChange={e => setCamera(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Camera</option>
          <option value="FHAZ">Front Hazard Avoidance Camera</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera</option>
          <option value="MAST">Mast Camera</option>
          <option value="CHEMCAM">Chemistry and Camera Complex</option>
          <option value="NAVCAM">Navigation Camera</option>
          <option value="PANCAM">Panoramic Camera</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <button className="inline-block mt-5 rounded-md border border-transparent bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" onClick={handleSearch}>Search</button>
    </div>



  );
};

export default SearchBarComponent;