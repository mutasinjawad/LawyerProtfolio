import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const HeroBlog = () => {

    // State variables
    const [blogs, setBlogs] = useState([])  // Store blogs
    const navigate = useNavigate(); // Navigation
    
    // Toggle expand
    const toggleExpand = (blog) => {
        const id = blog._id;
        navigate(`/blogs/${id}`);
    }

    // Format date
    const fomratDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
    
    // Navigate to blogs page
    const handleSeeMore = () => {   
      navigate("blogs");
    };  
    
    // Fetch blogs from backend
    useEffect(() => {
      const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5000/blogs?limit=10'); // Replace with your backend API endpoint

        const data = await response.json();
        setBlogs(data); // Update blogs state with fetched data
      };

      fetchBlogs();
    }, []);

    return (
        <>
            {/* Blogs Component Start */}
            <div className='relative flex flex-col items-center justify-between xl:m-16 xl:mb-36 lg:mb-24 mb-20 lg:m-8 mx-10 xl:h-[70vh] lg:h-[62vh]' id="blog">
                
                {/* Blog Title */}
                <h1 className="font-psemibold xl:text-[60px] lg:text-[45px] text-[34px] text-black">Blogs</h1>

                {/* Blog Swiper */}
                <div className="flex lg:flex-row flex-col justify-center items-center w-full xl:gap-16 lg:gap-10 gap-6 lg:mb-0 mb-8 mt-8">
                    <Swiper
                    breakpoints={{
                        320: {
                        slidesPerView: 2, // 1 slide on small screens
                        spaceBetween: 10,
                        },
                        640: {
                        slidesPerView: 2, // 2 slides on medium screens
                        spaceBetween: 15,
                        },
                        1024: {
                        slidesPerView: 3, // 3 slides on larger screens
                        spaceBetween: 20,
                        },
                        1280: {
                        slidesPerView: 4, // 4 slides on extra-large screens
                        spaceBetween: 25,
                        },
                        1536: {
                        slidesPerView: 5, // 5 slides on 4k screens
                        spaceBetween: 30,
                        },
                    }}
                    centeredSlides={false} // Center active slide if needed
                    pagination={{
                        clickable: true, // Enable pagination dots
                    }}
                    modules={[Pagination]}
                    className="custom-swiper w-full"
                    >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id} className="w-full max-w-xs pb-14 z-0">
                            <div
                            key={blog.id}
                            className="flex flex-col bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                {/* Blog Content */}
                                <div
                                    className="lg:p-5 p-4 lg:h-[30vh] h-[18vh]"
                                    style={{
                                    overflow: "hidden",
                                    }}
                                >
                                    <h3 className="font-pmedium xl:text-base text-sm text-black">
                                    {blog.title}
                                    </h3>
                                    <p className="font-pregular text-gray-500 xl:text-sm text-[11px]">
                                    {fomratDate(blog.date)}
                                    </p>
                                    <p className="font-pregular pt-10 xl:text-sm text-[11px]">
                                        {blog.description.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                {/* Expand Button */}
                                <button
                                className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 lg:p-5 p-4 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
                                onClick={() => toggleExpand(blog)}
                                >
                                    <h1 className="font-pregular xl:text-base text-sm">Expand</h1>
                                    <ChevronRight />
                                </button>
                            </div>
                        </SwiperSlide>
                      
                    ))}
                    </Swiper>
                </div>
                <div className="">
                    <Button text="See More" Icon={ArrowRight} onClick={handleSeeMore} classstyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
                </div>
            </div>
        </>
    )
}

export default HeroBlog