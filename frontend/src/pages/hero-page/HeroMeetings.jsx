import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import Button from '../../components/Button'
import { ChevronRight, ArrowRight, X } from 'lucide-react';

const HeroMeetings = () => {

  // State variables
  const [meetings, setMeetings] = useState([]); // Store meetings
  const [meetingId, setMeetingId] = useState(null); // Store meeting id for expanded meeting
  const [expand, setExpand] = useState(false);  // Expand state
  const [itemsToShow, setItemsToShow] = useState(meetings.length); // Default to all items
  const [iconSize, setIconSize] = useState(24); // Icon size
  const navigate = useNavigate(); // Navigation

  // Toggle expand
  const toggleExpand = (id) => {
    setMeetingId(id);
    setExpand(!expand);
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
      setItemsToShow(meetings.length);
    }
  };

  // Format date
  const fomratDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  // Navigate to meetings page
  const handleSeeMore = () => {
    navigate("meetings");
  };

  // Fetch meetings object from backend
  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch('http://localhost:5000/meetings?limit=4'); // Replace with your backend API endpoint

      const data = await response.json();
      setMeetings(data); // Update meetings state with fetched data
    };

    fetchMeetings();
  }, []);

  // Event listener for scroll
  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);
  
  // Event listener for number of cards to show
  useEffect(() => {
    updateItemsToShow(); // Set initially
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow); // Cleanup on unmount
    };
  }, [meetings.length]);

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
      {/* Meeting Component Start */}
      <Element className='relative flex flex-col items-center justify-between xl:m-16 xl:mb-36 lg:mb-24 mb-20 lg:m-8 mx-10 xl:h-[70vh] lg:h-[62vh]' name="meeting">

        {/* Meeting Title */}
        <h1 className="font-psemibold xl:text-[60px] lg:text-[45px] text-[34px] text-black">Meetings</h1>

        {/* Meeting Cards */}
        <div className="flex lg:flex-row flex-col justify-center items-center w-full xl:gap-16 lg:gap-10 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
          {meetings.slice(0, itemsToShow).map((meeting) => (
            <div key={meeting.id} className="flex flex-col items-start justify-between lg:p-4 p-3 lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
              <div className="h-full" style={{
                overflow:"hidden"
              }}>
                <h3 className="font-pmedium xl:text-base text-sm text-black">{meeting.title}</h3>
                <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">{fomratDate(meeting.date)}</p>
                <p className="font-pregular lg:pt-10 pt-4 xl:text-sm text-[11px]">{meeting.description}</p>
              </div>

              {/* Expand Button */}
              <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 mt-2 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(meeting)}
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

      {/* Expanded Meeting Component */}
      {expand && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleExpand}
        >
          <div
            className="bg-white rounded-3xl xl:p-5 p-4 w-[88%] lg:h-[84vh] h-[88vh] shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-pbold xl:text-xl lg:text-lg text-black">{meetingId.title}</h2>
              <button className="text-black hover:text-modernRed transition duration-200 ease-in-out" onClick={toggleExpand}>
                <X size={iconSize}/>
              </button>
            </div>
            <div>
              <p className="font-pregular text-gray-600 xl:text-lg text-sm">{fomratDate(meetingId.date)}</p>
              <p className="font-pregular lg:pt-10 pt-6 xl:text-lg text-sm">{meetingId.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroMeetings