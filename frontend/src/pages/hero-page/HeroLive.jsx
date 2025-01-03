import React, { useState, useEffect } from 'react';

const Live = () => {
    const [liveLink, setLiveLink] = useState("");

    useEffect(() => {
        const fetchLive = async () => {
            try {
                const response = await fetch('http://localhost:5000/live?limit=1'); // Replace with your backend API endpoint
                const data = await response.json();

                if (data.length > 0) {
                    setLiveLink(data[0].link);
                }
            } catch (error) {
                console.error('Error fetching live link:', error);
            }
        };

        fetchLive();
    }, []);

  return (
    <div  className='relative flex flex-col items-center justify-between xl:m-16 lg:m-8 mx-10 h-[20vh]'>
       
    {/* Meeting Title */}
    <h1 className="font-psemibold xl:text-[60px] lg:text-[45px] text-[34px] text-black">Live</h1>
      {liveLink ? (
        <div className='mb-[20px] font-pregular xl:text-lg text-sm text-gray-800'>
          <p>
            Click <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-secondary outline-none hover:border-b-2 hover:border-secondary transition duration-200'
            >
              here
            </a> to visit the live link.
          </p>
        </div>
      ) : (
        <p className="mb-[20px] font-pregular xl:text-lg text-sm text-gray-400">No live link has been provided at this time.</p>
      )}
    </div>
  );
};

export default Live;