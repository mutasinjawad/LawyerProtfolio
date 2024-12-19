import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Button from '../Button'
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroCase = () => {

  const [expand, setExpand] = useState(false)
  const [cass, setCass] = useState(null)
  const toggleExpand = (id) => {
    setCass(id);
    setExpand(!expand)
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

  const [cases, setCases] = useState([]);

  const navigate = useNavigate();

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

  return (
    <>
      <Element className='relative flex flex-col items-center justify-between lg:m-36 mx-12 mb-16 lg:h-[70vh]' name="case">
        <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Cases</h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
          {cases.map((cass) => (
            <div key={cass.id} className="flex flex-col items-start justify-between lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
              <div className="lg:p-5 p-4 lg:h-[30vh] h-[18vh]" style={{
                overflow:"hidden"
              }}>
                <h3 className="font-pmedium lg:text-[20px] text-[18px] text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-[18px] text-[15px]">{fomratDate(cass.date)}</p>
                <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">{cass.summary}</p>
              </div>
              <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 lg:p-5 p-4 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight/>
              </button>
            </div>
          ))
          }
        </div>
        <div className="">
          <Button text="See More" Icon={ArrowRight} onClick={handleSeeMore} classstyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
        </div>
      </Element>
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
                <h1 className="font-plight lg:text-2xl text-lg text-gray-400">Summary:</h1>
                <p className="font-pregular lg:text-[18px] text-[15px]">{cass.summary}</p>
              </div>
              <div className='flex flex-col gap-y-2 pt-6'>
                <h1 className="font-plight lg:text-2xl text:lg text-gray-400">Outcome:</h1>
                <p className="font-pregular lg:text-[18px] text-[15px]">{cass.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroCase