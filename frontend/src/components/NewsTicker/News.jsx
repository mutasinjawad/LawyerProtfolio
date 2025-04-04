import React from 'react'
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';

const News = () => {

    // State variables
    const [meetings, setMeetings] = useState([]);
    const [cases, setCases] = useState([]);
    const [blogs, setBlogs] = useState([])

    // Fetch blogs from backend
    useEffect(() => {
        const fetchMeetings = async () => {
            const response = await fetch('http://localhost:5000/meetings?limit=1');
            const data = await response.json();
            setMeetings(data);
        }
    
        const fetchCases = async () => {
            const response = await fetch('http://localhost:5000/cases?limit=1');
            const data = await response.json();
            setCases(data);
        }
        
        const fetchBlogs = async () => {
            const response = await fetch('http://localhost:5000/blogs?limit=1');
            const data = await response.json();
            setBlogs(data);
        };

        fetchMeetings();
        fetchCases();
        fetchBlogs();
    }, []);

    const updateNews = () => {
        
    }

    const updates = [
        "📢 New internship program announced! Apply now for hands-on legal experience.",
        "⚖️ Upcoming seminar on corporate law—register today!",
        "📍 Our office is relocating soon—stay tuned for details.",
        "📝 New blog post: Understanding Administrative Law.",
        "💻 Online legal consultations now available—book an appointment today.",
        "📜 Recent court case updates: Landmark ruling in corporate litigation.",
        "📆 Important deadlines for legal filings—don’t miss out!"
      ];
      

    return (
        <div className='flex items-center justify-center h-6 md:h-10 xl:h-12 bg-primary'>
            <div className='flex w-full h-full'>
                <h1 className='flex items-center h-full xs:px-3 px-2 xl:text-xl lg:text-[18px] xs:text-[14px] text-[11px] bg-secondary font-rsemibold'>UPDATE:</h1>
                <Marquee>
                    <ul className='flex items-center justify-center gap-6 pl-6 text-white xl:text-sm xs:text-[12px] text-[9px] font-rregular'>
                        {[...updates].map((update, index) => (
                            <li key={index}>
                                <strong>• </strong>
                                <span>{update}</span>
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </div>
  )
}

export default News