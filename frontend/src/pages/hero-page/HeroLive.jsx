import React, { useState, useEffect } from 'react';
import { Element } from "react-scroll";

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
    <>
      <Element className='flex items-center justify-center xl:py-10 lg:h-[300px] md:h-[300px] xs:h-[250px] h-[180px] md:py-8 xs:py-6 py-4 w-full overflow-hidden' name="live">
        <div className='flex flex-col items-center justify-between md:w-[1300px] sm:w-[500px] xs:w-[440px] w-[300px] h-full md:px-6 px-3' name="live">
          
        {/* Meeting Title */}
        <h1 className="font-rsemibold xl:text-[40px] lg:text-[45px] md:text-[34px] xs:text-[28px] text-[22px] text-primary">Live</h1>
          {liveLink ? (
            <div className='xs:mb-[80px] mb-[50px] font-rregular xl:text-lg text-sm text-gray-800'>
              <p>
                Click <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='transition duration-200 outline-none text-secondary hover:border-b-2 hover:border-secondary'
                >
                  here
                </a> to visit the live link.
              </p>
            </div>
          ) : (
            <p className="xs:mb-[80px] mb-[50px] text-gray-400 font-rmedium xl:text-[16px] md:text-[17px] text-[13px]">No live link has been provided at this time.</p>
          )}
        </div>
      </Element>
    </>
  );
};

export default Live;