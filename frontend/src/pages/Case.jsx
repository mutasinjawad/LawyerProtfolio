import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronsDown, X } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Case = () => {

  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 12;
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [iconSize, setIconSize] = useState(24); // Icon size
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  // Toggle expand
  const toggleExpand = (cass) => {
    const id = cass._id;
    navigate(`/cases/${id}`);
  }


  // Update icon size
  const updateIconSize = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      // XL screens
      setIconSize(24);
    } else if (width >= 1024) {
      // LG screens
      setIconSize(21);
    } else {
      // Small screens
      setIconSize(18);
    }
  };

  const fomratDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  // Event listener for icon size
  useEffect(() => {
    updateIconSize(); // Set initially
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize); // Cleanup
    };
  }, []);

  // Fetch cases from backend
  useEffect(() => {
    const fetchCase = async () => {
      const response = await fetch('http://localhost:5000/cases'); // Replace with your backend API endpoint

      const data = await response.json();
      setCases(data); // Update cases state with fetched data
    };

    fetchCase();
  }, []);

  return (
    <>
      <div className="lg:mx-36 mx-14 lg:mb-16 mb-8 lg:mt-28 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.slice(0, visibleCount).map((cass) => (
            <div
              key={cass.id}
              className="flex flex-col items-start justify-between lg:rounded-3xl rounded-2xl lg:p-4 p-3 hover:shadow bg-white lg:h-[30vh] h-[25vh]"
            >
              <div className='lg:h-[24vh] h-[18vh] overflow-auto w-full'>
                <h3 className="font-pmedium xl:text-base text-sm text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">{fomratDate(cass.date)}</p>
                <div className='lg:pt-10 pt-4 '>
                  <h1 className='font-pmedium xl:text-base text-sm text-gray-500'>Summary:</h1>
                  <p className="font-pregular xl:text-sm text-[11px]">{cass.summary}</p>
                </div>
                <div className='lg:pt-10 pt-4 '>
                  <h1 className='font-pmedium xl:text-base text-sm text-gray-500'>Outcome:</h1>
                  <p className="font-pregular xl:text-sm text-[11px]">{cass.outcome}</p>
                </div>
              </div>
              <button className="flex items-center justify-start lg:text-base text-sm text-neutral-400 hover:text-neutral-600 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight className='lg:w-6 lg:h-6 w-5 h-5'/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < cases.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} classStyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
          </div>
        )}
        {visibleCount >= cases.length && (
          <h1 className="flex items-center justify-center m-6 font-pregular text-neutral-300 lg:text-xl text-lg">
            No more to show
          </h1>
        )}
      </div>
    </>
  );
}

export default Case