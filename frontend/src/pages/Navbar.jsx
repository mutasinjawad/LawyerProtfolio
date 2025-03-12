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

    const extendedPages = ["/services", "/meetings", /^\/meetings\/[a-zA-Z0-9]+$/, "/cases", /^\/cases\/[a-zA-Z0-9]+$/, "/blogs", /^\/blogs\/[a-zA-Z0-9]+$/, "/career"];

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
            <div className='fixed z-40 top-0 p-6 flex items-center w-full bg-primary'>
                <button className="stickey left-0 flex items-center justify-start lg:w-28 font-psemibold p-1 text-secondary lg:text-xl text-base outline-none hover:text-secondary lg:gap-6 hover:gap-2 hover:cursor transition-all duration-200 ease-in-out"
                    onClick={() => navigate(-1)}>
                        <ChevronLeft className='lg:w-6 lg:h-6 w-5 h-5' strokeWidth={3}/>
                        <span
                        className='hidden lg:block'
                        >
                        Back
                        </span>
                </button>
                <div className='fixed left-1/2 transform -translate-x-1/2 font-pmedium text-secondary lg:text-2xl text-xl outline-none'>
                    <h1>{getTitle()}</h1>
                </div>
            </div>
        );
    }

    return (
        <>
        <nav className={`lg:sticky fixed lg:w-full z-40 top-0 right-0 py-8 lg:bg-primary bg-black lg:bg-opacity-100 bg-opacity-0${mobileDrawer ? "" : ""} lg:border-b border-neutral-200 transition duration-75 ease-in-out`}>
            <div className="relative px-4 lg:mx-36 flex justify-end">
                <div className="flex items-center justify-end">
                    <ul className="hidden lg:flex items-center justify-center space-x-14 font-esmedium text-[18px] text-secondary cursor-pointer">
                        <li key="about">
                            <Link to="about" smooth={true} offset={-95} duration={500} className='outline-none hover:border-secondary hover:border-b-4 transition duration-100'
                                spy={true}>About</Link>
                        </li>
                        <li key="services">
                            <Link to="services" smooth={true} offset={-160} duration={500} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Services</Link>
                        </li>
                        <li key="meeting">
                            <Link to="meeting" smooth={true} offset={-160} duration={500} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Meeting</Link>
                        </li>
                        <li key="case">
                            <Link to="case" smooth={true} offset={-160} duration={500} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Case</Link>
                        </li>
                        <li key="blog">
                            <Link to="blog" smooth={true} duration={500} offset={-160} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Blog</Link>
                        </li>
                        <li key="live">
                            <Link to="live" smooth={true} duration={500} offset={-160} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Live</Link>
                        </li>
                        <li key="contact">
                            <Link to="contact" smooth={true} duration={500} className='outline-none hover:border-b-4 hover:border-secondary transition duration-100'
                                spy={true}>Contact</Link>
                        </li>
                        <li>
                            Clients
                        </li>
                        <li key='career' onClick={() => navigate("/career")}>
                            <span className='outline-none hover:border-secondary hover:border-b-4 transition duration-100'>
                                Career
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center justify-end absolute -top-2">
                    <button onClick={toggleMobileDrawer} className='z-50'>
                        {mobileDrawer ? <X color="#E0115F"/>: <Menu />}
                    </button>
                </div>
            </div>
        </nav>
        {mobileDrawer && (
            <div className="fixed top-0 w-full h-screen bg-white bg-opacity-10 backdrop-blur-sm z-30" 
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
                    className={`fixed flex items-start justify-start top-0 right-0 w-[32vh] h-screen bg-black z-30`}
                >
                    <ul className="flex flex-col items-start space-y-10 pt-28 pl-12 font-esregular text-white">
                        <li key="about">
                            <Link to="about" smooth={true} offset={-60} duration={500} className='outline-none' onClick={toggleMobileDrawer}>About</Link>
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
                        <li key="contact">
                            <Link to="contact" smooth={true} offset={-40} duration={500} className='outline-none' onClick={toggleMobileDrawer}>Contact</Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}

export default Navbar