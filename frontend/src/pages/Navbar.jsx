import React from 'react'
import { Menu, X, ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Link } from 'react-scroll'
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {

    const titles = {
        "/about": "About",
        "/services": "Services",
        "/meetings": "Meetings",
        "/meetings/:id": "Meeting",
        "/cases": "Cases",
        "/cases/:id": "Case",
        "/blogs": "Blogs",
        "/blogs/:id": "Blog",
        "/live": "Live",
        "/contact": "Contact",
        "/career": "Career",
      };

    const [mobileDrawer, setMobileDrawer] = useState(false)
    const [navActive, setNavActive] = useState(false)
    const toggleMobileDrawer = () => {
        const mobileDraweState = !mobileDrawer
        setMobileDrawer(mobileDraweState)
        setNavActive(mobileDraweState)
    };

    useEffect(() => {
        if (navActive) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [navActive]);

    const location = useLocation();
    const navigate = useNavigate();

    const extendedPages = ["/services", "/meetings", /^\/meetings\/[a-zA-Z0-9]+$/, "/cases", /^\/cases\/[a-zA-Z0-9]+$/, "/blogs", /^\/blogs\/[a-zA-Z0-9]+$/, "/contact", "/career"];

    // Check if current path is an extended page
    const isExtendedPage = extendedPages.some(page => {
        if (typeof page === "string") return page === location.pathname;
        if (page instanceof RegExp) return page.test(location.pathname); // Check regex match
        return false;
    });

    // Determine the title based on the path (check for dynamic blog path)
    const getTitle = () => {
        if (/^\/meetings\/[a-zA-Z0-9]+$/.test(location.pathname)) {
          return titles["/meetings/:id"]; // Return "Blog" for dynamic blog pages
        }
        if (/^\/blogs\/[a-zA-Z0-9]+$/.test(location.pathname)) {
            return titles["/blogs/:id"]; // Return "Blog" for dynamic blog pages
        }
        if (/^\/cases\/[a-zA-Z0-9]+$/.test(location.pathname)) {
            return titles["/cases/:id"]; // Return "Case" for dynamic case pages
            }
        return titles[location.pathname] || "Page Title";  // Fallback if no match
    };

    if (isExtendedPage) {
        return (
            <div className='fixed top-0 z-40 flex items-center w-full p-2 lg:p-6 md:p-4 xs:p-2 bg-primary'>
                <button className="left-0 flex items-center justify-start p-1 text-base transition-all duration-200 ease-in-out outline-none stickey lg:w-28 font-rsemibold text-secondary lg:text-xl hover:text-secondary lg:gap-6 hover:gap-2 hover:cursor"
                    onClick={() => navigate(-1)}>
                        <ChevronLeft className='w-3 h-3 md:w-5 md:h-5 xs:w-4 xs:h-4 lg:w-6 lg:h-6' strokeWidth={3}/>
                        <span
                        className='hidden lg:block'
                        >
                        Back
                        </span>
                </button>
                <div className='fixed xs:text-[17px] text-[12px] md:text-xl transform -translate-x-1/2 outline-none left-1/2 font-rmedium text-secondary lg:text-2xl'>
                    <h1>{getTitle()}</h1>
                </div>
            </div>
        );
    }

    return (
        <>
        <nav className={`lg:sticky lg:flex justify-center fixed items-center lg:w-full z-40 top-0 right-0 lg:py-0 py-8 lg:h-[60px] xl:h-[70px] bg-primary lg:bg-opacity-100 bg-opacity-0${mobileDrawer ? "" : ""} lg:border-b border-neutral-200 transition duration-75 ease-in-out`}>
            <div className="relative flex justify-end xl:w-[1310px] lg:w-[1060px] md:w-[800px] sm:w-[500px] xs:w-[440px] w-[300px] px-6">
                <div className="flex items-center justify-end">
                    <ul className="hidden lg:flex items-center justify-center lg:space-x-7 xl:space-x-8 font-rmedium lg:text-[15px] xl:text-[18px] text-secondary">
                        <li key="about">
                            <Link to="about" smooth={true} offset={-95} duration={500} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-secondary hover:border-b-4'
                                spy={true}>About</Link>
                        </li>
                        <li key="services">
                            <Link to="services" smooth={true} offset={-160} duration={500} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'
                                spy={true}>Services</Link>
                        </li>
                        <li key="meeting">
                            <Link to="meeting" smooth={true} offset={-160} duration={500} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'
                                spy={true}>Meeting</Link>
                        </li>
                        <li key="case">
                            <Link to="case" smooth={true} offset={-160} duration={500} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'
                                spy={true}>Case</Link>
                        </li>
                        <li key="blog">
                            <Link to="blog" smooth={true} duration={500} offset={-160} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'
                                spy={true}>Blog</Link>
                        </li>
                        <li key="live">
                            <Link to="live" smooth={true} duration={500} offset={-160} className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'
                                spy={true}>Live</Link>
                        </li>
                        <li className="h-6 mx-4 border-l border-gray-300"></li>
                        <li key="contact" onClick={() => navigate("/contact")}>
                            <span className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-b-4 hover:border-secondary'>
                                Contact
                            </span>
                        </li>
                        <li key='career' onClick={() => navigate("/career")}>
                            <span className='transition duration-100 border-transparent outline-none cursor-pointer hover:border-secondary hover:border-b-4'>
                                Career
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="absolute flex items-center justify-end lg:hidden -top-2">
                    <button onClick={toggleMobileDrawer} className='z-50'>
                        {mobileDrawer ? <X color="#C9A227"/>: <Menu color="#C9A227"/>}
                    </button>
                </div>
            </div>
        </nav>
        {mobileDrawer && (
            <div className="fixed top-0 z-30 w-full h-screen bg-white bg-opacity-10 backdrop-blur-sm" 
                onClick={toggleMobileDrawer}
            >
            </div>
        )}
        <AnimatePresence mode="wait">
            {mobileDrawer && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: "0" }}
                    exit={{ opacity:0, x: "100%" }}
                    transition={{ duration: 0.2 }}
                    className={`fixed flex items-start justify-start top-0 right-0 w-[32vh] h-screen bg-primary z-30`}
                >
                    <ul className="flex flex-col items-start pl-12 space-y-8 text-white pt-28 font-rregular">
                        <li key="about">
                            <Link to="about" smooth={true} offset={-60} duration={500} className='outline-none' onClick={toggleMobileDrawer}>About</Link>
                        </li>
                        <li key="services">
                            <Link to="services" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Services</Link>
                        </li>
                        <li key="meeting">
                            <Link to="meeting" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Meeting</Link>
                        </li>
                        <li key="case">
                            <Link to="case" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Case</Link>
                        </li>
                        <li key="blog">
                            <Link to="blog" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Blog</Link>
                        </li>
                        <li key="live">
                            <Link to="live" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Live</Link>
                        </li>
                        <hr className="w-full my-2 border-t border-white" />
                        <li key="contact" onClick={() => navigate("/contact")}>
                            <span className='outline-none'>Contact</span>
                        </li>
                        <li key='career' onClick={() => navigate("/career")}>
                            <span className='outline-none'>Career</span>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}

export default Navbar