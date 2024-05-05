import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

// Function to fetch rover photos by either sol or Earth date based on provided parameters
const fetchRoverPhotos = async (roverName, queryParams) => {
  const { sol, earthDate, camera, page, apiKey } = queryParams;
  try {
    if (sol !== undefined || earthDate !== undefined) {
      const response = await axios.get(`${BASE_URL}/${roverName}/photos`, {
        params: {
          sol: sol,
          earth_date: earthDate,
          camera: camera,
          page: page,
          api_key: apiKey
        }
      });
      return response.data;
    } else {
      console.error('Invalid search parameters.');
      throw new Error('Invalid search parameters.');
    }
  } catch (error) {
    console.error('Error fetching rover photos:', error);
    throw error;
  }
};

export { fetchRoverPhotos };