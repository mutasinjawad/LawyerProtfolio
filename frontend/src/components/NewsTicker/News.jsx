import React from 'react'
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';

const News = () => {

    // State variables
    const [meetings, setMeetings] = useState([]);
    const [cases, setCases] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [dynamicUpdates, setDynamicUpdates] = useState([]);

    // Fetch blogs from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [meetingRes, caseRes, blogRes] = await Promise.all([
                    fetch('http://localhost:5000/meetings?limit=1'),
                    fetch('http://localhost:5000/cases?limit=1'),
                    fetch('http://localhost:5000/blogs?limit=1')
                ]);

                const [meetingData, caseData, blogData] = await Promise.all([
                    meetingRes.json(),
                    caseRes.json(),
                    blogRes.json()
                ]);

                setMeetings(meetingData);
                setCases(caseData);
                setBlogs(blogData);

                const newUpdates = [];

                const isRecent = (dateString) => {
                    const now = new Date();
                    const uploaded = new Date(dateString);
                    const diff = now - uploaded;
                    return diff <= 24 * 60 * 60 * 1000; // 24 hours in ms
                };

                if (meetingData.length && isRecent(meetingData[0].date)) {
                    newUpdates.push("A new meeting has been published.");
                }

                if (caseData.length && isRecent(caseData[0].date)) {
                    newUpdates.push("A new case update has been published.");
                }

                if (blogData.length && isRecent(blogData[0].date)) {
                    newUpdates.push("A new blog post has been uploaded.");
                }

                setDynamicUpdates(newUpdates);
            } catch (error) {
                console.error("Error fetching updates:", error);
            }
        };

        fetchData();
    }, []);

    const updates = [...dynamicUpdates];

    return (
        <div className='flex items-center justify-center h-6 md:h-10 xl:h-12 bg-primary'>
            <div className='flex w-full h-full'>
                <h1 className='flex items-center h-full xs:px-3 px-2 xl:text-xl lg:text-[18px] xs:text-[14px] text-[11px] bg-secondary font-rsemibold'>UPDATE:</h1>
                <Marquee pauseOnHover>
                    {updates.length > 0 ? (
                        <ul className='flex items-center justify-center gap-6 pl-6 text-white xl:text-sm xs:text-[12px] text-[9px] font-rregular cursor-pointer'>
                            {updates.map((update, index) => (
                                <li key={index}>
                                    <strong>• </strong>
                                    <span>{update}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className='pl-6 text-gray-400 xs:text-[12px] text-[9px] font-rbold'>
                            No updates at the moment
                        </div>
                    )}
                </Marquee>
            </div>
        </div>
  )
}

export default News