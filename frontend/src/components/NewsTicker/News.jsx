import React from 'react'
import Marquee from "react-fast-marquee";

const News = () => {
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
        <div className='flex stock-ticker h-12 bg-primary'>
            <h1 className='flex items-center px-3 h-full bg-secondary font-rsemibold text-xl'>UPDATE:</h1>
            <Marquee>
                <ul className='flex items-center justify-center pl-6 gap-6 font-rregular text-sm text-white'>
                    {[...updates].map((update, index) => (
                        <li key={index}>
                            <strong>• </strong>
                            <span>{update}</span>
                        </li>
                    ))}
                </ul>
            </Marquee>
        </div>
  )
}

export default News