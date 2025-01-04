import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CaseDetails = () => {
  const { id } = useParams(); // Get blog ID from route
  const [cass, setCass] = useState(null); // State to store blog data

  // Fetch blog data using the ID
  useEffect(() => {
    const fetchCase = async () => {
      const response = await fetch(`http://localhost:5000/cases/${id}`); // Adjust API endpoint
      const data = await response.json();
      setCass(data);
    };

    fetchCase();
  }, [id]);

  if (!cass) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="flex flex-col items-center justify-center mt-24 lg:mx-8 mx-4 mb-4">
      <div className="bg-white rounded-3xl xl:p-5 p-4 w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-pbold xl:text-xl lg:text-lg text-black">{cass.title}</h2>
        </div>
        <p className="font-pregular text-gray-600 xl:text-lg text-sm">
          {new Date(cass.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })}
        </p>
        <div className="mt-6">
            <h1 className='font-pmedium xl:text-base text-sm'>Summary:</h1>
            <p className='font-pregular text-gray-700 xl:text-base text-sm '>
                {cass.summary.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
                ))}
            </p>
        </div>
        <div className="mt-6">
            <h1 className='font-pmedium xl:text-base text-sm'>Outcome:</h1>
            <p className='font-pregular text-gray-700 xl:text-base text-sm '>
                {cass.outcome.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
                ))}
            </p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;