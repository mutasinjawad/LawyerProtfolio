import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronRight, X, ChevronsDown } from 'lucide-react';
import Button from './Button';

const Meeting = () => {

  const meetings = [
    { "id": 1, "title": "Board Meeting", "date": "Dec 10, 2024", "description": "Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies.Discussing quarterly results and strategies." },
    { "id": 2, "title": "Finance Team Review", "date": "Dec 12, 2024", "description": "Budget planning for the next fiscal year." },
    { "id": 3, "title": "Project Kickoff", "date": "Dec 15, 2024", "description": "Starting the new client project." },
    { "id": 4, "title": "HR Policy Update", "date": "Dec 17, 2024", "description": "Reviewing and updating HR policies." },
    { "id": 5, "title": "Sales Strategy Meeting", "date": "Dec 18, 2024", "description": "Planning sales initiatives for Q1." },
    { "id": 6, "title": "Tech Team Standup", "date": "Dec 19, 2024", "description": "Weekly progress and issue resolution." },
    { "id": 7, "title": "Client Presentation", "date": "Dec 20, 2024", "description": "Presenting the project roadmap to the client." },
    { "id": 8, "title": "Marketing Plan Discussion", "date": "Dec 22, 2024", "description": "Finalizing the marketing strategy for next quarter." },
    { "id": 9, "title": "Compliance Review", "date": "Dec 23, 2024", "description": "Ensuring all projects meet legal compliance." },
    { "id": 10, "title": "Annual General Meeting", "date": "Dec 24, 2024", "description": "Reviewing company performance and future plans." },
    { "id": 11, "title": "Team Bonding Session", "date": "Dec 26, 2024", "description": "Organizing team-building activities." },
    { "id": 12, "title": "IT Infrastructure Upgrade", "date": "Dec 27, 2024", "description": "Planning hardware and software upgrades." },
    { "id": 13, "title": "Legal Advisory Meeting", "date": "Dec 29, 2024", "description": "Discussing legal strategies for upcoming cases." },
    { "id": 14, "title": "Vendor Negotiation", "date": "Dec 30, 2024", "description": "Finalizing contracts with new vendors." },
    { "id": 15, "title": "CSR Initiative Planning", "date": "Jan 2, 2025", "description": "Discussing corporate social responsibility projects." },
    { "id": 16, "title": "Investor Relations Meeting", "date": "Jan 3, 2025", "description": "Updating investors on company progress." },
    { "id": 17, "title": "R&D Progress Update", "date": "Jan 5, 2025", "description": "Reviewing the progress of new developments." },
    { "id": 18, "title": "Employee Feedback Session", "date": "Jan 6, 2025", "description": "Gathering feedback from employees on workplace satisfaction." },
    { "id": 19, "title": "Leadership Training", "date": "Jan 7, 2025", "description": "Providing training for senior management." },
    { "id": 20, "title": "Production Review", "date": "Jan 8, 2025", "description": "Assessing production targets and outputs." },
    { "id": 21, "title": "Customer Feedback Review", "date": "Jan 9, 2025", "description": "Analyzing customer feedback and implementing improvements." },
    { "id": 22, "title": "Partnership Opportunities", "date": "Jan 10, 2025", "description": "Exploring potential business collaborations." },
    { "id": 23, "title": "Strategic Planning Session", "date": "Jan 12, 2025", "description": "Defining long-term goals for the company." },
    { "id": 24, "title": "Internal Audit", "date": "Jan 13, 2025", "description": "Reviewing financial and operational systems." },
    { "id": 25, "title": "Branding Workshop", "date": "Jan 15, 2025", "description": "Enhancing the company's brand identity." },
    { "id": 26, "title": "Risk Assessment Meeting", "date": "Jan 16, 2025", "description": "Identifying and mitigating potential risks." },
    { "id": 27, "title": "Customer Service Training", "date": "Jan 17, 2025", "description": "Improving customer service skills of staff." },
    { "id": 28, "title": "Supply Chain Optimization", "date": "Jan 18, 2025", "description": "Discussing improvements to the supply chain process." },
    { "id": 29, "title": "Product Launch Planning", "date": "Jan 19, 2025", "description": "Preparing for the launch of a new product." },
    { "id": 30, "title": "End-of-Month Review", "date": "Jan 31, 2025", "description": "Evaluating progress and setting targets for the next month." }
  ]

  const ITEMS_PER_PAGE = 12;
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

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
                <h3 className="font-pmedium lg:text-lg text-[20px] text-black">{meeting.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-base text-sm">{meeting.date}</p>
                <p className="font-pregular pt-10 lg:text-base text-sm text-gray-800">{meeting.description}</p>
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
  );
}

export default Meeting