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
    <div className="flex flex-row items-center gap-4">
      <label htmlFor="solInput" className="text-lg font-bold">Sol:</label>
      <input
        id="solInput"
        type="number"
        value={sol}
        onChange={handleSolInputChange}
        className="input"
        list="solSuggestions"
      />
      {/* Display sol suggestions */}
      <datalist id="solSuggestions">
        {solHistory.map((solItem, index) => (
          <option key={index} value={solItem} />
        ))}
      </datalist>
      <label htmlFor="cameraInput" className="text-lg font-bold">Camera Type:</label>
      <select
        id="cameraInput"
        value={camera}
        onChange={e => setCamera(e.target.value)}
        className="select"
      >
        <option value="">Select Camera</option>
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="NAVCAM">Navigation Camera</option>
        <option value="PANCAM">Panoramic Camera</option>
        {/* Add more options for other cameras if needed */}
      </select>
      <button onClick={handleSearch} className="button">Search</button>
    </div>

  );
};

export default SearchBarComponent;