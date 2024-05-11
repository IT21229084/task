import React from 'react'
import { useState } from "react"
import useFetch from "../hooks/useFetch.jsx";
function Epic() {
  const apiKey = "TPnuZYbXcD2SaVfmSv9aZ0HMACuNaAA0DTQ2jB5F";
  const startDate = "2024-01-01";
  const endDate = "2024-01-07";
  // Fetching data using custom hook
  const { data, loading, error, reFetch } = useFetch(`https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${apiKey}`);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div class="container mx-auto px-2 pt-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-4xl font-bold mb-4 mt-20">News Feed</h1>
        <>
          {data && data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border p-4 mb-4">
              <div className="flex items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.messageType}</h2>
                  <p className="text-gray-500 text-sm">{item.messageIssueTime}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {expandedIndex === index ? item.messageBody : `${item.messageBody.slice(0, 100)}...`}
                {item.messageBody.length > 100 && (
                  <span className="text-blue-500 cursor-pointer" onClick={() => handleClick(index)}>
                    {expandedIndex === index ? 'Read Less' : 'Read More'}
                  </span>
                )}
              </p>
              <div className="flex justify-end">
                <a href={item.messageURL} className="text-blue-500 font-semibold">More Info</a>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  )
}

export default Epic