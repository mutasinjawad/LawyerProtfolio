import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronsDown, X } from 'lucide-react';
import Button from '../components/Button';

const Case = () => {

  const [cases, setCases] = useState([]);

  const ITEMS_PER_PAGE = 12;
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const [expand, setExpand] = useState(false);
  const [cass, setCass] = useState(null);
  const toggleExpand = (id) => {
    setCass(id);
    setExpand(!expand);
  }

  const fomratDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);

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
                <h3 className="font-pmedium lg:text-xl text-[18px] text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-base text-sm">{fomratDate(cass.date)}</p>
                <div className='flex flex-col gap-y-2 pt-10'>
                  <h1 className="font-plight lg:text-lg text-base text-gray-400">Summary:</h1>
                  <p className="font-pregular lg:text-base text-sm text-gray-800">{cass.summary}</p>
                </div>
                <div className='flex flex-col gap-y-2 pt-10'>
                  <h1 className="font-plight lg:text-lg text-base text-gray-400">Outcome:</h1>
                  <p className="font-pregular lg:text-base text-sm text-gray-800">{cass.outcome}</p>
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
      {expand && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleExpand}
        >
          <div
            className="bg-white rounded-3xl lg:p-5 p-4 w-[88%] lg:h-[80vh] h-[88vh] shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-pbold lg:text-[25px] text-[18px] text-black">{cass.title}</h2>
              <button className="text-black hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                <X size={30}/>
              </button>
            </div>
            <div>
              <p className='font-pregular text-gray-600 lg:text-[18px] text-[15px]'>{fomratDate(cass.date)}</p>
              <div className='flex flex-col gap-y-2 pt-10'>
                <h1 className="font-plight lg:text-lg text-base text-gray-400">Summary:</h1>
                <p className="font-pregular lg:text-lg text-base">{cass.summary}</p>
              </div>
              <div className='flex flex-col gap-y-2 pt-6'>
                <h1 className="font-plight lg:text-lg text-base text-gray-400">Outcome:</h1>
                <p className="font-pregular lg:text-lg text-base">{cass.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Case