import React from 'react'
import { useState, useEffect } from 'react'
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button'
import { ArrowRight, ChevronRight, X } from 'lucide-react';

const HeroCase = () => {

  // State variables
  const [cases, setCases] = useState([]); // Store cases
  const [itemsToShow, setItemsToShow] = useState(cases.length); // Default to all items
  const [iconSize, setIconSize] = useState(24); // Icon size
  const navigate = useNavigate(); // Navigation

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

  // Update card numbers
  const updateItemsToShow = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      // XL screens
      setItemsToShow(4);
    } else if (width >= 1024) {
      // LG screens
      setItemsToShow(3);
    } else {
      // Small screens
      setItemsToShow(cases.length);
    }
  };

  // Format date
  const fomratDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  // Navigate to cases page
  const handleSeeMore = () => {
    navigate("cases");
  };

  // Fetch cases from backend
  useEffect(() => {
    const fetchCase = async () => {
      const response = await fetch('http://localhost:5000/cases?limit=4'); // Replace with your backend API endpoint

      const data = await response.json();
      setCases(data); // Update cases state with fetched data
    };

    fetchCase();
  }, []);

  // Event listener for number of cards to show
  useEffect(() => {
    updateItemsToShow(); // Set initially
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow); // Cleanup on unmount
    };
  }, [cases.length]);

  // Event listener for icon size
  useEffect(() => {
    updateIconSize(); // Set initially
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize); // Cleanup
    };
  }, []);

  return (
    <>
      {/* Cases Component Start */}
      <Element className='relative flex flex-col items-center justify-between xl:m-16 xl:mb-36 lg:mb-24 mb-20 lg:m-8 mx-10 xl:h-[70vh] lg:h-[62vh]' name="case">

        {/* Case Title */}
        <h1 className="font-psemibold xl:text-[60px] lg:text-[45px] text-[34px] text-black">Cases</h1>

        {/* Case Cards */}
        <div className="flex lg:flex-row flex-col justify-center items-center w-full xl:gap-16 lg:gap-10 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
          {cases.slice(0, itemsToShow).map((cass) => (
            <div key={cass.id} className="flex flex-col items-start justify-between lg:p-4 p-3 lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
              <div className="h-full" style={{
                overflow:"hidden"
              }}>
                <h3 className="font-pmedium xl:text-base text-sm text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">{fomratDate(cass.date)}</p>
                <div className='lg:pt-10 pt-4 '>
                  <h1 className='font-pmedium xl:text-base text-sm text-gray-500'>Summary:</h1>
                  <p className="font-pregular xl:text-sm text-[11px]">
                    {cass.summary.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div className='lg:pt-10 pt-4 '>
                  <h1 className='font-pmedium xl:text-base text-sm text-gray-500'>Outcome:</h1>
                  <p className="font-pregular xl:text-sm text-[11px]">{cass.outcome}</p>
                </div>
              </div>
              
              {/* Expand Button */}
              <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 mt-2 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
              >
                <h1 className="font-pregular xl:text-base text-sm">Expand</h1>
                <ChevronRight size={iconSize}/>
              </button>
            </div>
          ))
          }
        </div>

        {/* See More Button */}
        <div>
          <Button text="See More" Icon={ArrowRight} onClick={handleSeeMore} iconSize={iconSize}/>
        </div>
      </Element>
    </>
  )
}

export default HeroCase