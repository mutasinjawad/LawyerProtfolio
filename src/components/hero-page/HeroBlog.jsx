import React from 'react'
import Button from '../Button'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const HeroBlog = () => {

    const blogs = [
        {
            "id": 1,
            "title": "The Role of Arbitration in Bangladesh's Legal System",
            "description": "Explore how arbitration is utilized to resolve disputes efficiently in Bangladesh and its impact on businesses and individuals.",
            "category": "Arbitration Law",
            "tags": ["Arbitration", "Bangladesh Law", "Dispute Resolution"],
            "author": "Legal Insights",
            "date_published": "Dec 05, 2024"
        },
        {
            "id": 2,
            "title": "Digital Transformation in the Legal Sector of Bangladesh",
            "description": "A look into how technology is reshaping the legal landscape in Bangladesh, with examples of digital tools used by law firms.",
            "category": "Legal Tech",
            "tags": ["Legal Technology", "Digital Transformation", "Bangladesh"],
            "author": "Tech Legal Blog",
            "date_published": "Dec 06, 2024"
        },
        {
            "id": 3,
            "title": "Understanding Family Law in Bangladesh",
            "description": "An in-depth guide to family law in Bangladesh, covering marriage, divorce, and child custody regulations.",
            "category": "Family Law",
            "tags": ["Family Law", "Bangladesh", "Legal Guide"],
            "author": "Family Law Experts",
            "date_published": "Dec 07, 2024"
        },
        {
            "id": 4,
            "title": "How to Register a Business in Bangladesh",
            "description": "Step-by-step instructions on registering a business in Bangladesh, including the required documents and legal process.",
            "category": "Business Law",
            "tags": ["Business Registration", "Bangladesh", "Startup Guide"],
            "author": "Startup Legal",
            "date_published": "Dec 08, 2024"
        },
        {
            "id": 5,
            "title": "Legal Rights of Tenants and Landlords in Bangladesh",
            "description": "A discussion of the legal rights and responsibilities of tenants and landlords under Bangladeshi law.",
            "category": "Real Estate Law",
            "tags": ["Tenant Rights", "Landlord Rights", "Bangladesh"],
            "author": "Property Law Blog",
            "date_published": "Dec 09, 2024"
        },
        {
            "id": 6,
            "title": "Cybersecurity and Data Privacy Laws in Bangladesh",
            "description": "Learn about the laws governing cybersecurity and data privacy in Bangladesh, with tips for businesses to ensure compliance.",
            "category": "Cyber Law",
            "tags": ["Data Privacy", "Cybersecurity", "Bangladesh Law"],
            "author": "Cyber Legal News",
            "date_published": "Dec 10, 2024"
        },
        {
            "id": 7,
            "title": "Employment Contracts: Best Practices in Bangladesh",
            "description": "A guide to drafting and managing employment contracts under Bangladeshi labor laws.",
            "category": "Labor Law",
            "tags": ["Employment Contracts", "Labor Law", "Bangladesh"],
            "author": "HR Legal Blog",
            "date_published": "Dec 11, 2024"
        },
        {
            "id": 8,
            "title": "Consumer Protection Laws in Bangladesh",
            "description": "An overview of consumer rights in Bangladesh and the laws that protect them, including examples of common disputes.",
            "category": "Consumer Law",
            "tags": ["Consumer Rights", "Legal Protection", "Bangladesh"],
            "author": "Consumer Rights Advocate",
            "date_published": "Dec 12, 2024"
        },
        {
            "id": 9,
            "title": "Taxation Laws for Small Businesses in Bangladesh",
            "description": "Insights into the taxation system in Bangladesh and how small businesses can navigate their tax obligations.",
            "category": "Tax Law",
            "tags": ["Taxation", "Small Business", "Bangladesh"],
            "author": "Tax Legal Experts",
            "date_published": "Dec 13, 2024"
        }
    ]    

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

    return (
        <>
            <div className='relative flex flex-col items-center justify-between lg:m-36 mx-12 mb-16 lg:h-[70vh]' id="blog">
                <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Blogs</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center lg:w-full w-[10vh] lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-16">
                <Swiper
                    breakpoints={{
                        320: {
                        slidesPerView: 1, // 1 slide on small screens
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
                    }}
                    centeredSlides={false} // Center active slide if needed
                    pagination={{
                        clickable: true, // Enable pagination dots
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id} className="pb-14 z-0">
                        <div
                            key={blog.id}
                            className="lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:bg-primary-100 hover:shadow cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div
                            className="lg:p-10 p-6 lg:h-[30vh] h-[18vh]"
                            style={{
                                overflow: "hidden",
                            }}
                            >
                            <h3 className="font-pmedium lg:text-[20px] text-[18px]">
                                {blog.title}
                            </h3>
                            <p className="font-pregular text-gray-500 lg:text-[18px] text-[15px]">
                                {fomratDate(blog.date_published)}
                            </p>
                            <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">
                                {blog.description}
                            </p>
                            </div>
                            <button
                            className="flex items-center justify-start text-neutral-400 hover:text-neutral-500 lg:mt-[20px] lg:ml-[40px] ml-6 py-2 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
                            onClick={() => toggleExpand(blog)}
                            >
                            <h1 className="font-pregular">Expand</h1>
                            <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
                <div className="">
                    <Button text="See More" icon={faArrowRight} route="#" classStyle="ml-6"/>
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
                            <button className="text-primary hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                                <FontAwesomeIcon icon={faXmark} size="2xl"/>
                            </button>
                        </div>
                        <div>
                            <p className="font-pregular text-gray-600 lg:text-[18px] text-[15px]">{fomratDate(blogs.date_published)}</p>
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