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
          setIconSize(24);
      } else if (width >= 1024) {
          // LG screens
          setIconSize(21);
      } else {
          // Small screens
          setIconSize(18);
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
      <div className="lg:mx-36 mx-14 mb-16 lg:mt-28 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col items-start justify-between w-full lg:rounded-3xl rounded-2xl lg:p-4 p-3 hover:shadow bg-white lg:h-[30vh] h-[25vh]"
            >
              <div className='lg:h-[24vh] h-[18vh] w-full overflow-hidden'>
                <h3 className="font-pmedium xl:text-base text-sm text-black">{blog.title}</h3>
                <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">{fomratDate(blog.date)}</p>
                <p className="font-pregular pt-10 xl:text-sm text-[11px]">
                    {blog.description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
              </div>
              <button className="flex items-center justify-start lg:text-base text-sm text-neutral-400 hover:text-neutral-600 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(blog)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight className='lg:w-6 lg:h-6 w-5 h-5'/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} classStyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
          </div>
        )}
        {visibleCount >= blogs.length && (
          <h1 className="flex items-center justify-center m-6 font-pregular text-neutral-300 lg:text-xl text-lg">
            No more to show
          </h1>
        )}
      </div>
    </>
  );
}

export default Blog;