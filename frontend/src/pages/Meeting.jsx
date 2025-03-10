import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, X, ChevronsDown } from 'lucide-react';
import Button from '../components/Button';

const Meeting = () => {
  
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();
  
  // Number of items to show
  const ITEMS_PER_PAGE = 12; 
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE); 
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  // Toggle expand
  const toggleExpand = (meeting) => {
    const id = meeting._id;
    navigate(`/meetings/${id}`);
  }

  const fomratDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  // Fetch meetings from backend
  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch('http://localhost:5000/meetings'); // Replace with your backend API endpoint

      const data = await response.json();
      setMeetings(data); // Update meetings state with fetched data
    };

    fetchMeetings();
  }, []);

  return (
    <>
      <div className="lg:mx-36 mx-14 mb-16 lg:mt-28 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.slice(0, visibleCount).map((meeting) => (
            <div
              key={meeting.id}
              className="flex flex-col items-start justify-between w-full lg:rounded-3xl rounded-2xl lg:p-4 p-3 hover:shadow bg-white lg:h-[30vh] h-[25vh]"
            >
              <div className='lg:h-[24vh] h-[18vh] w-full overflow-auto'>
                <h3 className="font-pmedium xl:text-base text-sm text-black">{meeting.title}</h3>
                <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">{fomratDate(meeting.date)}</p>
                <p className="font-pregular lg:pt-10 pt-4 xl:text-sm text-[11px]">
                  {meeting.description.split('\n').map((line, index) => (
                      <span key={index}>
                          {line}
                          <br />
                      </span>
                  ))}
                </p>
              </div>
              <button className="flex items-center justify-start lg:text-base text-sm text-neutral-400 hover:text-neutral-600 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(meeting)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight className='lg:w-6 lg:h-6 w-5 h-5'/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < meetings.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} classStyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
          </div>
        )}
        {visibleCount >= meetings.length && (
          <h1 className="flex items-center justify-center m-6 font-pregular text-neutral-300 lg:text-xl text-lg">
            No more to show
          </h1>
        )}
      </div>
    </>
  );
}

export default Meeting