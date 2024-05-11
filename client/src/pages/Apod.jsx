import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch.jsx";

function Apod() {
    // NASA API key
    const key = "TPnuZYbXcD2SaVfmSv9aZ0HMACuNaAA0DTQ2jB5F";
    // Fetching data using custom hook
    const { data, loading, error, reFetch } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
    // State for additional images
    const [images, setImages] = useState([]);

    // Fetch additional images on component mount
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?count=9&api_key=${key}`)
            .then(res => res.json())
            .then(data1 => {
                setImages(data1);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    // Rendering component with fetched data
    return (
        <div className="h-200px w-screen mt-40">
            <div className="flex mt-20 ml-62 bg-gray-50 -pt-10 rounded-lg">
                <div className="w-2/5 p-3 ml-12">
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h1 className="text-4xl font-bold mb-14">Astronomy Picture of the Day</h1>
                    </div>
                    <h2 className="text-2xl font-bold -mt-10 mb-3">{data && data.title}</h2>
                    <p className="font-semibold mb-5">{data && data.explanation}</p>
                </div>
                <div className="w-2/6 ml-20 mt-5 pl-5">
                    <img src={data && data.url} alt="Temperatures on Exoplanet WASP-43b" className="w-full rounded-lg" />
                </div>
            </div>

            <div className="flex flex-wrap bg-gray-50 mt-32 mb-12">
                <div className="w-full">
                    <h1 className="text-4xl font-white text-center font-bold mb-2 mt-5">More Images OF The Days</h1>
                </div>
                {images.map((item, index) => (
                    <div key={index} className="w-1/4 p-1 mt-4 mb-4 items-center ml-14" style={{ width: 'calc(100% / 4)', paddingLeft: '1%' }}>
                        <div className="relative" style={{ width: '70%', paddingTop: '100%', marginInline: "130px", marginBlock: "40px", paddingInline: '20px' }}>
                            <img src={item.url} alt={item.title} className="absolute inset-0 w-full h-full object-cover bg-gray-900 rounded-lg" />
                            <div className="absolute bottom-4 left-0 p-2 text-white bg-black bg-opacity-50">{item.title}</div>
                            <button className="absolute top-0 right-0 m-2 bg-red-500 w-8 h-8 text-white flex items-center justify-center rounded-full">
                                <span style={{ fontSize: '1rem' }} className="text-sm md:text-lg lg:text-xl">&#8594;</span>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Apod;
