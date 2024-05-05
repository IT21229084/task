import React, { useEffect, useState } from 'react';
import { fetchRoverPhotos } from '../hooks/fetchRoverPhotos .jsx';
import SearchBarComponent from '../components/SearchBar.jsx';


const MarsRoverPhotosComponent = ({ roverName, apiKey }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('sol');
  const [selectedCamera, setSelectedCamera] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetchRoverPhotos(roverName, { [searchType]: searchValue, camera: selectedCamera, apiKey });
        // Limit photos to 10
        const limitedPhotos = response.photos.slice(0, 10);
        setPhotos(limitedPhotos);
        setLoading(false);
        console.log(response)
      } catch (error) {
        console.error('Error fetching photos:', error);
        if (error.response && error.response.status === 429) {
          // Retry after exponential backoff
          setTimeout(fetchPhotos, Math.pow(2, error.config.retryCount) * 1000);
        } else {
          setError('Error fetching photos. Please try again later.');
          setLoading(false);
        }
      }

    };

    fetchPhotos();
  }, [roverName, apiKey, searchType, searchValue, selectedCamera]);

  const handleSearch = (sol, camera) => {
    setSearchType('sol');
    setSearchValue(sol);
    setSelectedCamera(camera);
  };

  if (loading) {
    return <div className="container mx-auto text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto text-center mt-8">Error: {error}</div>;
  }


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">{`Photos from ${roverName} Rover`}</h2>
      <SearchBarComponent onSearch={handleSearch} />
      <ul className="photo-list mt-4">
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
    </div>

    // <div className="container mx-auto mt-8">
    //   <h2 className="text-3xl font-bold mb-4">{`Photos from ${roverName} Rover`}</h2>
    //   <SearchBarComponent onSearch={handleSearch} />
    //   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    //     {photos.map(photo => (
    //       <li key={photo.id} className="border rounded-lg overflow-hidden">
    //         <img src={photo.img_src} alt={`Rover ${photo.id}`} className="w-full transform transition duration-500 hover:rotate-180" />
    //         <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white bg-opacity-90 backdrop-blur-md transform rotate-y-180 transition duration-500">
    //           <p className="text-lg font-semibold mb-2">Sol: {photo.sol}</p>
    //           <p className="text-sm">Earth Date: {photo.earth_date}</p>
    //           <p className="text-sm">Camera: {photo.camera.full_name}</p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // <div className="container mx-auto mt-8">
    //   <h2 className="text-3xl font-bold mb-4">{`Photos from ${roverName} Rover`}</h2>
    //   <SearchBarComponent onSearch={handleSearch} />
    //   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    //     {photos.map(photo => (
    //       <li key={photo.id} className="border rounded-lg overflow-hidden relative">
    //         <img src={photo.img_src} alt={`Rover ${photo.id}`} className="w-full transform transition duration-500 hover:rotate-180" />
    //         <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white bg-opacity-90 backdrop-blur-md transform rotate-y-180 transition duration-500">
    //           <p className="text-lg font-semibold mb-2">Sol: {photo.sol}</p>
    //           <p className="text-sm">Earth Date: {photo.earth_date}</p>
    //           <p className="text-sm">Camera: {photo.camera.full_name}</p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>


  );
};

export default MarsRoverPhotosComponent;