import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { ChevronRight, X, ChevronsDown } from 'lucide-react';
import Button from '../components/Button';

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate();

    const fomratDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    const ITEMS_PER_PAGE = 12;
    
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [iconSize, setIconSize] = useState(24); // Icon size
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
    };

    const [expand, setExpand] = useState(false);
    const [blogId, setBlogId] = useState(null);
    
    // Toggle expand
    const toggleExpand = (blog) => {
      const id = blog._id;
      navigate(`/blogs/${id}`);
  }

  // Update icon size
  const updateIconSize = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
        // XL screens
        setIconSize(16);
    } else if (width >= 775) {
        // LG screens
        setIconSize(14);
    } else if (width >= 640) {
        // Small screens
        setIconSize(10);
    } else {
        // Extra small screens
        setIconSize(9);
    }
  };

    // Fetch blogs from backend
    useEffect(() => {
      const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5000/blogs'); // Replace with your backend API endpoint

        const data = await response.json();
        setBlogs(data); // Update blogs state with fetched data
      };

      fetchBlogs();
    }, []);

    // Event listener for icon size
    useEffect(() => {
        updateIconSize(); // Set initially
        window.addEventListener('resize', updateIconSize);
        
        return () => {
          window.removeEventListener('resize', updateIconSize); // Cleanup
        };
    }, []);

    useEffect(() => {
        if (expand) {
        document.body.classList.add("overflow-hidden");
        } else {
        document.body.classList.remove("overflow-hidden");
        }
    }, [expand]);

    return (
    <>
      <div className="px-4 pt-12 pb-6 md:pb-16 md:pt-24 lg:px-36 md:px-14 xs:px-10 lg:pt-28 bg-whiteBg">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col items-start justify-between w-full rounded-[5px] xl:p-4 md:p-2 xs:p-2 p-1 hover:shadow bg-white lg:h-[30vh] h-[25vh] cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div className='lg:h-[24vh] h-[18vh] w-full overflow-auto'>
                <h3 className="text-black font-rmedium xl:text-[16px] lg:text-[15px] md:text-[16px] text-[12px]">{blog.title}</h3>
                <p className="font-rregular text-gray-500 xl:text-[14px] md:text-[14px] text-[10px]">{fomratDate(blog.date)}</p>
                <p className="font-rregular lg:pt-10 xs:pt-4 pt-1 xl:text-[15px] lg:text-[12px] md:text-[14px] sm:text-[12px] xs:text-[11px] text-[10px]">
                    {blog.description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
              </div>
              <button className="flex items-center justify-start gap-2 text-sm transition-all duration-200 ease-in-out lg:text-base text-neutral-400 hover:text-neutral-600 hover:gap-6 hover:cursor"
              onClick={() => toggleExpand(blog)}
              >
                <h1 className="xs:text-[12px] text-[9px] font-rregular xl:text-base">Expand</h1>
                <ChevronRight size={iconSize}/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} iconSize={iconSize}/>
          </div>
        )}
        {visibleCount >= blogs.length && (
          <h1 className="flex items-center justify-center m-6 font-rregular text-neutral-300 xl:text-[16px] lg:text-[15px] md:text-[16px] text-[12px]">
            No more to show
          </h1>
        )}
      </div>
    </>
  );
}

export default Blog;