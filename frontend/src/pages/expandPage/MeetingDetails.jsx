import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MeetingDetails = () => {
  const { id } = useParams(); // Get meeting ID from route
  const [meeting, setMeeting] = useState(null); // State to store meeting data

  // Fetch meeting data using the ID
  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch(`http://localhost:5000/meetings/${id}`); // Adjust API endpoint
      const data = await response.json();
      setMeeting(data);
    };

    fetchMeetings();
  }, [id]);

  if (!meeting) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="flex flex-col items-center justify-center mt-24 lg:mx-8 mx-4 mb-4">
      <div className="bg-white rounded-3xl xl:p-5 p-4 w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-pbold xl:text-xl lg:text-lg text-black">{meeting.title}</h2>
        </div>
        <p className="font-pregular text-gray-600 xl:text-lg text-sm">
          {new Date(meeting.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })}
        </p>
        <div className="font-pregular text-gray-700 xl:text-base text-sm mt-4">
          {meeting.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;