import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ChevronRight, ArrowRight, X } from 'lucide-react';

const HeroMeetings = () => {

  const meetings = [
    { id: 1, title: "Board Meeting", date: "Dec 10, 2024", description: "Discussing quarterly results and strategies." },
    { id: 2, title: "Client Review", date: "Dec 8, 2024", description: "Reviewing client cases for December." },
    { id: 3, title: "Team Meeting", date: "Dec 6, 2024", description: "Weekly team progress discussion." },
    { id: 4, title: "Strategy Meeting", date: "Dec 1, 2024", description: "Finalizing next year's strategies." },
  ];

  const [expand, setExpand] = useState(false);
  const [meetingId, setMeetingId] = useState(null);
  const toggleExpand = (id) => {
    setMeetingId(id);
    setExpand(!expand);
  }

  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("meetings");
  };

  return (
    <>
      <Element className='relative flex flex-col items-center justify-between lg:m-36 mx-12 mb-16 lg:h-[70vh]' name="meeting">
        <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Meetings</h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="flex flex-col items-start justify-between lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
              <div className="lg:p-5 p-4 lg:h-[30vh] h-[18vh]" style={{
                overflow:"hidden"
              }}>
                <h3 className="font-pmedium lg:text-[20px] text-[18px] text-black">{meeting.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-[18px] text-[15px]">{meeting.date}</p>
                <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">{meeting.description}</p>
              </div>
              <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 lg:p-5 p-4 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(meeting)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight/>
              </button>
            </div>
          ))  
          }
        </div>
        <div>
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
              <h2 className="font-pbold lg:text-[25px] text-[18px] text-black">{meetingId.title}</h2>
              <button className="text-black hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                <X size={30}/>
              </button>
            </div>
            <div>
              <p className="font-pregular text-gray-600 lg:text-[18px] text-[15px]">{meetingId.date}</p>
              <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">{meetingId.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroMeetings