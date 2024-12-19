import React from 'react'
import Button from '../Button'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const HeroBlog = () => {

    const [blogs, setBlogs] = useState([])

    const fomratDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    const [expand, setExpand] = useState(false)
    const [blog, setBlog] = useState(null)
    const toggleExpand = (id) => {
      setBlog(id);
      setExpand(!expand)
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
            <div className='relative flex flex-col items-center justify-between lg:m-36 mx-12 mb-16 lg:h-[70vh]' id="blog">
                <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Blogs</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center w-full overflow-hidden lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-16">
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
                        <SwiperSlide key={blog.id} className="w-full max-w-sm pb-14 z-0">
                        <div
                            key={blog.id}
                            className="flex flex-col items-start justify-between bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div
                            className="lg:p-5 p-4 lg:h-[30vh] h-[18vh]"
                            style={{
                                overflow: "hidden",
                            }}
                            >
                            <h3 className="font-pmedium lg:text-[20px] text-[18px]">
                                {blog.title}
                            </h3>
                            <p className="font-pregular text-gray-500 lg:text-[18px] text-[15px]">
                                {fomratDate(blog.date)}
                            </p>
                            <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">
                                {blog.description}
                            </p>
                            </div>
                            <button
                            className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 lg:p-5 p-4 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
                            onClick={() => toggleExpand(blog)}
                            >
                            <h1 className="font-pregular">Expand</h1>
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
            {expand && (
                <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={toggleExpand}
                >
                    <div
                        className="bg-white rounded-3xl lg:p-8 p-4 w-[80%] h-[80vh] shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="lg:text-2xl text-[18px] font-pbold">{blog.title}</h2>
                            <button className="text-black hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                                <X />
                            </button>
                        </div>
                        <div>
                            <p className="font-pregular text-gray-600 lg:text-[18px] text-[15px]">{fomratDate(blog.date)}</p>
                            <div className='flex flex-col gap-y-2 pt-10'>
                                <h1 className='font-plight text-2xl text-gray-400'>Description:</h1>
                                <p className="font-pregular">{blog.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeroBlog