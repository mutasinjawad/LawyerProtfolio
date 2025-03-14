import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { Element } from "react-scroll";
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
            <Element className='flex items-center justify-center xl:py-10 xl:h-[700px] lg:h-[700px] md:h-[1020px] xs:h-[800px] h-[600px] md:py-8 xs:py-6 py-4 w-full overflow-hidden' name="blog">
                {/* Blogs Component Start */}
                <div className='flex flex-col items-center justify-between md:w-[1300px] sm:w-[500px] xs:w-[440px] w-[300px] h-full md:px-6 px-3' id="blog">
                    
                    {/* Blog Title */}
                    <h1 className="font-rsemibold xl:text-[40px] lg:text-[45px] md:text-[34px] xs:text-[28px] text-[22px] text-primary">Blogs</h1>

                    {/* Blog Swiper */}
                    <div className="w-full">
                        <Swiper
                            breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 25 },
                            1536: { slidesPerView: 5, spaceBetween: 30 },
                            }}
                            centeredSlides={false}
                            pagination={{
                            clickable: true, // Enable clicking on pagination
                            }}
                            modules={[Pagination]}
                            className="w-full custom-swiper"
                        >
                            {blogs.map((blog) => (
                            <SwiperSlide key={blog.id} className="w-full">
                                <div
                                key={blog.id}
                                className="text-left flex flex-col items-start justify-between xl:p-4 md:p-2 xs:p-2 p-1 lg:h-[350px] md:h-[180px] xs:h-[150px] h-[110px] lg:w-[30vh] w-full bg-white rounded-[5px] hover:shadow cursor-pointer transition-all duration-300 ease-in-out"
                                >
                                <div className="h-full overflow-hidden">
                                    <h3 className="text-black font-rmedium xl:text-[16px] md:text-[17px] text-[13px]">
                                    {blog.title}
                                    </h3>
                                    <p className="font-rregular text-gray-500 xl:text-[14px] md:text-[14px] text-[10px]">
                                    {fomratDate(blog.date)}
                                    </p>
                                    <p className="md:pt-3 lg:pt-8 font-rregular xs:pt-0 pt-1 xl:text-[15px] lg:text-[12px] md:text-[14px] sm:text-[12px] xs:text-[11px] text-[10px]">
                                    {blog.description.split('\n').map((line, index) => (
                                        <span key={index}>
                                        {line}
                                        <br />
                                        </span>
                                    ))}
                                    </p>
                                </div>
                                <button
                                    className="flex items-center justify-start gap-2 mt-2 transition-all duration-200 ease-in-out text-neutral-400 hover:text-neutral-600 hover:gap-6 hover:cursor"
                                    onClick={() => toggleExpand(blog)}
                                >
                                    <h1 className="text-sm font-pregular xl:text-base">Expand</h1>
                                    <ChevronRight />
                                </button>
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Pagination Fix: Make sure it has enough height & spacing */}
                        <div className="mt-4 swiper-pagination"></div>
                        </div>
                    <div className="">
                        <Button text="See More" Icon={ArrowRight} onClick={handleSeeMore} classstyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
                    </div>
                </div>
            </Element>
        </>
    )
}

export default HeroBlog