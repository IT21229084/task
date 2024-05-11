import React, { useEffect, useState } from 'react';
import { fetchRoverPhotos } from '../hooks/fetchRoverPhotos .jsx';
import SearchBarComponent from '../components/SearchBar.jsx';

// Component to display Mars Rover photos
const MarsRoverPhotosComponent = ({ roverName, apiKey }) => {
  
  const [photos, setPhotos] = useState([]); // Array of photos
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error message
  const [searchValue, setSearchValue] = useState(''); // Search value
  const [searchType, setSearchType] = useState('sol'); // Search type
  const [selectedCamera, setSelectedCamera] = useState(''); // Selected camera

  // Effect to fetch photos based on search parameters
  useEffect(() => {
    // Function to fetch photos
    const fetchPhotos = async () => {
      try {
        // Fetch photos using fetchRoverPhotos function
        const response = await fetchRoverPhotos(roverName, { [searchType]: searchValue, camera: selectedCamera, apiKey });

        // Limit photos to 10
        const limitedPhotos = response.photos.slice(0, 10);

        // Set fetched photos
        setPhotos(limitedPhotos);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        // Handle rate limiting (status code 429)
        if (error.response && error.response.status === 429) {
          // Retry after exponential backoff
          setTimeout(fetchPhotos, Math.pow(2, error.config.retryCount) * 1000);
          
        } else {
          // Set error message
          setError('Error fetching photos. Please try again later.');
          setLoading(false);
        }
      }
    };

    fetchPhotos();
  }, [roverName, apiKey, searchType, searchValue, selectedCamera]); // Dependencies for the effect

  // Function to handle search
  const handleSearch = (sol, camera) => {
    setSearchType('sol'); 
    setSearchValue(sol);
    setSelectedCamera(camera); 
  };

  // Render different content based on loading and error state
  if (loading) {
    return <div className="container mx-auto text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center mt-8">Error: {error}</div>;
  }

  // Render photos if available, otherwise display a message
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-3xl font-bold mt-20 pt-12">{`Images from ${roverName} Rover`}</h2>
      <SearchBarComponent onSearch={handleSearch} />
      {photos && photos.length > 0 ? (
        <ul className="photo-list mt-24">
          {photos.map(photo => (
            <li key={photo.id} className="photo-item mb-4 border rounded-lg overflow-hidden">
              <img src={photo.img_src} alt={`Rover ${photo.id}`} className="w-full" />
              <div className="photo-details p-4">
                <p className="text-lg font-semibold mb-2">Sol: {photo.sol}</p>
                <p className="text-sm">Earth Date: {photo.earth_date}</p>
                <p className="text-sm">Camera: {photo.camera.full_name}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-center mt-8 mb-20">No photos found.</p>
      )}
    </div>
  );
};

export default MarsRoverPhotosComponent;
