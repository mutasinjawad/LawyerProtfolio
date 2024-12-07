import React from 'react'
import { Menu, X, ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Link } from 'react-scroll'
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
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

    const extendedPages = ["/meetings", "/cases"];

    const isExtendedPage = extendedPages.includes(location.pathname);

    if (isExtendedPage) {
        return (
            <button className="sticky z-40 left-0 p-4 flex items-center font-psemibold text-black text-xl">
                <ChevronLeft size={30}/>
                <span
                  onClick={() => navigate(-1)}
                >
                Back
                </span>
            </button>
        );
    }

    return (
        <>
        <nav className={`lg:sticky fixed lg:w-full z-40 top-0 right-0 py-8 lg:bg-whiteBg bg-black lg:bg-opacity-100 bg-opacity-0${mobileDrawer ? "" : ""} lg:border-b border-neutral-200 transition duration-75 ease-in-out`}>
            <div className="relative px-4 lg:mx-36 flex justify-end">
                <div className="flex items-center justify-end">
                    <ul className="hidden lg:flex justify-center space-x-14 font-pmedium text-[20px] text-black cursor-pointer">
                        <li key="about">
                            <Link to="about" smooth={true} offset={-180} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">About</Link>
                        </li>
                        <li key="meeting">
                            <Link to="meeting" smooth={true} offset={-280} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">Meeting</Link>
                        </li>
                        <li key="case">
                            <Link to="case" smooth={true} offset={-200} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">Case</Link>
                        </li>
                        <li key="blog">
                            <Link to="blog" smooth={true} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">Blog</Link>
                        </li>
                        <li key="live">
                            <Link to="live" smooth={true} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">Live</Link>
                        </li>
                        <li key="contact">
                            <Link to="contact" smooth={true} offset={-250} duration={500} className='outline-none hover:border-b-4 hover:border-modernRed transition-all duration-100'
                                spy={true}
                                activeClass="border-b-4 border-black transition-all duration-100">Contact</Link>
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
                    className={`fixed flex items-center justify-end top-0 right-0 w-[32vh] h-screen bg-black z-30`}
                >
                    <ul className="flex flex-col items-end space-y-10 pr-12 font-pregular text-white">
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