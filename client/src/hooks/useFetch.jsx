import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching data from a given URL
const useFetch = (url) => {

    // State variables
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true); 
            try {
               
                const res = await axios.get(url);
                setData(res.data); 

            } catch (error) {
                setError(error); 
            }
            setLoading(false); 
        }
        fetchData(); 
    }, [url]); // Trigger effect when URL changes

    // Function to refetch data
    const reFetch = async () => {
        setLoading(true); 
        try {
            // Fetch data from the URL again
            const res = await axios.get(url);
            setData(res.data); 

        } catch (error) {
            setError(error);
        }
        setLoading(false); 
    }

    // Return data, loading state, error state, and refetch function
    return { data, loading, error, reFetch };
};


export default useFetch;
